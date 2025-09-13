import CalculatorForm from "./components/CalculatorForm";
import CalculatorInfo from "./components/CalculatorInfo";

export default function HMPICalculatorPage() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="flex justify-center mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
            <span className="text-primary-foreground font-bold">📊</span>
          </div>
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Calculate environmental pollution levels using standardized heavy metal
          concentrations. Upload data files or enter values manually for precise HMPI analysis.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <CalculatorForm />
        <CalculatorInfo />
      </div>
    </div>
  );
}