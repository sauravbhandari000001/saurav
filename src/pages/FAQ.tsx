import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How do I get a cheat?",
      answer: "After purchasing a product, you will receive detailed instructions via email on how to download and install your cheat. All purchases include step-by-step installation guides and 24/7 support."
    },
    {
      question: "How do I know it's not a scam?",
      answer: "We have been operating in the gaming software industry for over 10 years with thousands of satisfied customers. You can check our reviews on independent platforms and see testimonials from verified buyers. We also offer secure payment methods and provide immediate support after purchase."
    },
    {
      question: "Why doesn't the mail with the product arrive?",
      answer: "Please check your spam/junk folder first. If you still haven't received your email within 15 minutes of purchase, contact our support team immediately. Make sure to provide your order number and the email address used for purchase."
    },
    {
      question: "What if after the purchase the cheat does not work?",
      answer: "Our products come with comprehensive support. If you experience any issues, our technical support team will assist you with installation and configuration via remote access if necessary. We ensure all products work as advertised before release."
    },
    {
      question: "Are your cheats undetected?",
      answer: "We work continuously to maintain the undetected status of our products. However, no cheat can guarantee 100% undetection as anti-cheat systems are constantly evolving. We recommend using our products responsibly and following all provided guidelines."
    },
    {
      question: "Do you offer refunds?",
      answer: "Due to the nature of digital products, we have a strict no-refund policy once the product has been delivered. However, if there are technical issues preventing the product from working, our support team will work with you to resolve them."
    },
    {
      question: "How long does delivery take?",
      answer: "Digital products are delivered instantly via email after successful payment. Physical delivery is not required as all our products are downloadable software."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including VISA, MasterCard, PayPal, Google Pay, Apple Pay, and Bitcoin for your convenience and security."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our products and services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Contact section */}
          <div className="mt-12 text-center">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                If you can't find the answer you're looking for, don't hesitate to contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://discord.gg/zaliantud" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Join Discord
                </a>
                <a 
                  href="https://myvouch.es/zaliantservices" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  View Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}