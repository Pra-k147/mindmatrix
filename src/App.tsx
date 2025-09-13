import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./dashboard/DashboardPage";
import GroundwaterMapsPage from "./groundwater-maps/GroundwaterMapsPage";
import HMPICalculatorPage from "./hmpi-calculator/HMPICalculatorPage";
import InGresPortalPage from "./ingres-portal/InGresPortalPage";
import InsightsPage from "./insights/InsightsPage";
import SupportPage from "./support/SupportPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/groundwater-maps" element={<GroundwaterMapsPage />} />
            <Route path="/hmpi-calculator" element={<HMPICalculatorPage />} />
            <Route path="/ingres-portal" element={<InGresPortalPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
