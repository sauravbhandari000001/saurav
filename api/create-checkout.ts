// api/create-checkout.ts
import axios from "axios";
import type { Request, Response } from "express"; // If using Express-like types in Vercel

export default async function handler(req: Request, res: Response) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { email, product_id, variant_id, quantity } = req.body;

    if (!product_id || !variant_id) {
      return res.status(400).json({ message: "product_id and variant_id are required" });
    }

    const STORE_HOST = "https://store.sellhub.cx";
    const SELLHUB_API_KEY = process.env.SELLHUB_API_KEY!;
    const RETURN_URL = `https://zaliantservices.sellhub.cx`;

    // Build payload
    const payload = {
      email: email || "",
      currency: "usd",
      returnUrl: RETURN_URL,
      cartBundles: [],
      methodName: "",
      bundleIds: [],
      customFieldValues: [],
      cart: {
        items: [
          {
            id: product_id,
            coupon: "",
            name: "",
            variant: {
              id: variant_id,
              name: "",
              price: "0.00", // Replace with actual product price if needed
            },
            quantity: quantity || 1,
            addons: [],
          },
        ],
        bundles: [],
      },
    };

    // Call SellHub API
    const { data } = await axios.post(`${STORE_HOST}/api/checkout`, payload, {
      headers: {
        Authorization: SELLHUB_API_KEY,
        "Content-Type": "application/json",
      },
    });

    console.log("SellHub response:", data); // Debug logs in Vercel

    // Determine checkout URL
    let checkout_url = data.checkout_url || data.url;
    if (!checkout_url && data.session?.id) {
      checkout_url = `${STORE_HOST}/checkout/${data.session.id}?returnUrl=${encodeURIComponent(RETURN_URL)}`;
    }

    if (!checkout_url) {
      return res.status(500).json({ message: "Couldn't obtain redirect URL. Check server logs." });
    }

    return res.json({ checkout_url });

  } catch (err: any) {
    console.error("SellHub error:", err.response?.data || err.message || err);
    return res.status(500).json({
      message: "Failed to create checkout session",
      details: err.response?.data || err.message,
    });
  }
}
