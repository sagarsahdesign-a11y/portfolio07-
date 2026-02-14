import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TestimonialsSection from "./components/TestimonialsSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="relative min-h-screen overflow-hidden bg-[#0B1120]">

        {/* GLOBAL BACKGROUND - Portal Liquid Effect */}
        <div
          className="fixed inset-0 z-0 pointer-events-none mix-blend-screen"
          style={{
            backgroundImage: "url('/portal.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            opacity: 0.3, // Adjusted for visibility without overpowering
            filter: "blur(40px) contrast(1.2)", // Glass/liquid effect
          }}
        />

        {/* MAIN CONTENT */}
        <div className="relative z-10">
          <Toaster />
          <Sonner />
          <BrowserRouter>
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
