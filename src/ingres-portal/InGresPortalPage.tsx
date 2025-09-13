import PortalHeader from "./components/PortalHeader";
import DashboardGrid from "./components/DashboardGrid";
import StandardsSection from "./components/StandardsSection";
import IntegrationStats from "./components/IntegrationStats";

export default function InGresPortalPage() {
  return (
    <div className="space-y-8">
      <PortalHeader />
      <DashboardGrid />
      <StandardsSection />
      <IntegrationStats />
    </div>
  );
}