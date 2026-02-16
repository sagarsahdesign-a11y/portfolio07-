import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TestimonialsSection from "./components/TestimonialsSection";

import portalImg from "@/assets/portal.png";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="relative min-h-screen bg-[#080B14]">
        <div className="relative z-10">
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/portfolio07-/">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/testimonials" element={<TestimonialsSection />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
