import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { FileText, Download } from "lucide-react";

const standards = [
  {
    title: "Central Water Commission Standards",
    description: "Standardized data formats for CWC reporting",
    format: "JSON/XML",
    compliance: 100,
  },
  {
    title: "State Water Boards Integration",
    description: "Unified data format for state-level integration",
    format: "CSV/Excel",
    compliance: 98,
  },
  {
    title: "NRSC Satellite Data Integration",
    description: "Remote sensing data standardization",
    format: "GeoTIFF/NetCDF",
    compliance: 95,
  },
];

export default function StandardsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-foreground">
        Standardized Data for Central & State Use
      </h2>
      
      <div className="grid gap-4 md:grid-cols-3">
        {standards.map((standard) => (
          <Card key={standard.title}>
            <CardHeader className="pb-3">
              <div className="flex items-start space-x-3">
                <FileText className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <CardTitle className="text-base font-semibold">
                    {standard.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {standard.description}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Format:</span>
                <span className="font-medium">{standard.format}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Compliance:</span>
                  <span className="font-medium">{standard.compliance}%</span>
                </div>
                <Progress value={standard.compliance} className="h-2" />
              </div>
              
              <Button variant="outline" size="sm" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Standard
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}