import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "@/pages/Index";
import WardrobePage from "@/pages/WardrobePage";
import ContactsPage from "@/pages/ContactsPage";
import AboutPage from "@/pages/AboutPage";
import IstanbulPage from "@/pages/IstanbulPage";
import StylistPage from "@/pages/StylistPage";
import WardrobeCapsulePage from "@/pages/WardrobeCapsulePage";
import WardrobePickPage from "@/pages/WardrobePickPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const SpaApp = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wardrobe" element={<WardrobePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/istanbul" element={<IstanbulPage />} />
          <Route path="/stylist" element={<StylistPage />} />
          <Route path="/wardrobe-capsule" element={<WardrobeCapsulePage />} />
          <Route path="/wardrobe-pick" element={<WardrobePickPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default SpaApp;
