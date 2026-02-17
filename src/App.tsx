import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import Philosophy from "./pages/Philosophy";
import Life from "./pages/Life";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="relative min-h-screen">
        <div className="relative z-10">
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/portfolio07-/">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/life" element={<Life />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
