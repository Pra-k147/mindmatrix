import InsightsHeader from "./components/InsightsHeader";
import KeyMetrics from "./components/KeyMetrics";
import RegionalAnalysis from "./components/RegionalAnalysis";
import PredictiveAnalytics from "./components/PredictiveAnalytics";
import ActionButtons from "./components/ActionButtons";

export default function InsightsPage() {
  return (
    <div className="space-y-8">
      <InsightsHeader />
      <KeyMetrics />
      
      <div className="grid gap-8 lg:grid-cols-2">
        <RegionalAnalysis />
        <PredictiveAnalytics />
      </div>
      
      <ActionButtons />
    </div>
  );
}