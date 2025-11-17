import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ValorantPage from "./pages/ValorantPage";
import SpooferPage from "./pages/SpooferPage";
import AllProductsPage from "./pages/AllProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import FAQ from "./pages/FAQ";
import TermsOfUse from "./pages/TermsOfUse";
import Statuses from "./pages/Statuses";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/valorant" element={<ValorantPage />} />
          <Route path="/spoofer" element={<SpooferPage />} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/statuses" element={<Statuses />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
