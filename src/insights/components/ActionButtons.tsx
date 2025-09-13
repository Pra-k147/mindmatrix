import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Bell, Download } from "lucide-react";

export default function ActionButtons() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Take Action Based on Insights</CardTitle>
        <p className="text-sm text-muted-foreground">
          Transform data into actionable strategies for sustainable groundwater management
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="flex-1 min-w-48">
            <FileText className="h-5 w-5 mr-2" />
            Generate Report
          </Button>
          <Button variant="outline" size="lg" className="flex-1 min-w-48">
            <Bell className="h-5 w-5 mr-2" />
            Set Alerts
          </Button>
          <Button variant="outline" size="lg" className="flex-1 min-w-48">
            <Download className="h-5 w-5 mr-2" />
            Export Data
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}