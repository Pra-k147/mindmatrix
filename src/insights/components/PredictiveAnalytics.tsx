import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Zap, Eye, Brain } from "lucide-react";

const recommendations = [
  "Implement rainwater harvesting in Northern Plains to maintain current levels",
  "Urgent: Restrict groundwater extraction in Deccan Plateau critical zones"
];

export default function PredictiveAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Zap className="h-5 w-5 text-primary" />
          <span>Predictive Analytics</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Prediction Card */}
        <div className="text-center p-6 bg-accent/30 rounded-lg">
          <div className="text-3xl font-bold text-primary mb-2">6 months</div>
          <p className="text-sm text-muted-foreground mb-3">
            Predicted time to critical levels in high-risk zones
          </p>
          <Button variant="outline" size="sm">
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>

        {/* AI Recommendations */}
        <div className="space-y-3">
          <h3 className="font-medium text-foreground flex items-center space-x-2">
            <Brain className="h-4 w-4 text-primary" />
            <span>AI RECOMMENDATIONS</span>
          </h3>
          
          <div className="space-y-2">
            {recommendations.map((recommendation, index) => (
              <Alert key={index}>
                <AlertDescription className="text-sm">
                  • {recommendation}
                </AlertDescription>
              </Alert>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}