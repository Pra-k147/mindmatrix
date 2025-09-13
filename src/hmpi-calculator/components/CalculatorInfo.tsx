import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export default function CalculatorInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Info className="h-5 w-5 text-primary" />
          <span>About HMPI Calculation</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            The Heavy Metal Pollution Index (HMPI) is calculated using the formula: HMPI = (1/n) × ΣCi/Si, where Ci is the
            concentration of metal i, Si is the standard reference value, and n is the number of metals analyzed.
          </AlertDescription>
        </Alert>

        <div className="space-y-3">
          <h3 className="font-medium text-foreground">Standard Reference Values:</h3>
          <div className="grid gap-2 text-sm">
            <div className="flex justify-between p-2 bg-accent/30 rounded">
              <span className="font-medium">Lead (Pb):</span>
              <span className="text-muted-foreground">0.01 mg/L</span>
            </div>
            <div className="flex justify-between p-2 bg-accent/30 rounded">
              <span className="font-medium">Cadmium (Cd):</span>
              <span className="text-muted-foreground">0.003 mg/L</span>
            </div>
            <div className="flex justify-between p-2 bg-accent/30 rounded">
              <span className="font-medium">Mercury (Hg):</span>
              <span className="text-muted-foreground">0.006 mg/L</span>
            </div>
            <div className="flex justify-between p-2 bg-accent/30 rounded">
              <span className="font-medium">Arsenic (As):</span>
              <span className="text-muted-foreground">0.01 mg/L</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="font-medium text-foreground">HMPI Categories:</h3>
          <div className="grid gap-2 text-sm">
            <div className="flex items-center justify-between p-2 bg-success/10 rounded border-l-4 border-success">
              <span>Low Pollution</span>
              <span className="font-medium">HMPI &lt; 15</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-warning/10 rounded border-l-4 border-warning">
              <span>Medium Pollution</span>
              <span className="font-medium">15 ≤ HMPI &lt; 30</span>
            </div>
            <div className="flex items-center justify-between p-2 bg-destructive/10 rounded border-l-4 border-destructive">
              <span>High Pollution</span>
              <span className="font-medium">HMPI ≥ 30</span>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-border text-sm text-muted-foreground">
          <p>
            <strong>Note:</strong> This calculator uses WHO and Indian standard guidelines for
            groundwater quality assessment. Results should be interpreted by qualified
            environmental professionals.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}