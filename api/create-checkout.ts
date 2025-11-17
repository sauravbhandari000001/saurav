// frontend/api/create-checkout.ts
import axios from 'axios';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, coupon_code, currency, product_id, variant_id, quantity, returnUrl } = req.body;

    if (!product_id || !variant_id) {
      return res.status(400).json({ message: "product_id and variant_id are required" });
    }

    const STORE_HOST = process.env.SELLHUB_STORE_HOST || 'https://store.sellhub.cx';
    const SELLHUB_API_KEY = process.env.SELLHUB_API_KEY!;
    const DEFAULT_RETURN_URL = process.env.DEFAULT_RETURN_URL || 'https://yourfrontend.vercel.app/checkout-success';

    const payload = {
      email: email || "",
      currency: currency || "eur",
      returnUrl: returnUrl || DEFAULT_RETURN_URL,
      cartBundles: [],
      methodName: "",
      bundleIds: [],
      customFieldValues: [],
      cart: {
        items: [
          {
            id: product_id,
            coupon: coupon_code || "",
            name: "",
            variant: {
              id: variant_id,
              name: "",
              price: "0.00"
            },
            quantity: quantity || 1,
            addons: []
          }
        ],
        bundles: []
      }
    };

    const { data } = await axios.post(`${STORE_HOST}/api/checkout`, payload, {
      headers: { Authorization: SELLHUB_API_KEY, 'Content-Type': 'application/json' }
    });

    if (data.checkout_url || data.url) {
      return res.json({ checkout_url: data.checkout_url || data.url });
    }

    const session = data.session || data.data?.session || null;
    const redirectCandidates = [];

    if (session?.id) {
      redirectCandidates.push(`${STORE_HOST}/checkout/${session.id}`);
      redirectCandidates.push(`${STORE_HOST}/checkout?sessionId=${session.id}`);
      redirectCandidates.push(`${STORE_HOST}/?sessionId=${session.id}`);
    }

    return res.json({ ok: true, session, redirectCandidates, raw: data });

  } catch (err: any) {
    console.error("Sellhub error:", err.response?.data || err.message || err);
    return res.status(500).json({
      message: "Failed to create checkout session",
      details: err.response?.data || err.message
    });
  }
}

