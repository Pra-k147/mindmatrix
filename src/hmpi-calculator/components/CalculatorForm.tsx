import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Edit, Upload, Calculator, RefreshCw, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CalculatorForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    lead: "",
    cadmium: "",
    mercury: "",
    arsenic: "",
    sampleLocation: "",
    assessmentType: "groundwater-analysis"
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCalculate = () => {
    // Mock calculation
    const hmpi = Math.random() * 100;
    toast({
      title: "HMPI Calculated",
      description: `Heavy Metal Pollution Index: ${hmpi.toFixed(2)}`,
    });
  };

  const handleClearAll = () => {
    setFormData({
      lead: "",
      cadmium: "",
      mercury: "",
      arsenic: "",
      sampleLocation: "",
      assessmentType: "groundwater-analysis"
    });
    toast({
      title: "Form Cleared",
      description: "All input values have been reset.",
    });
  };

  const handleLoadSample = () => {
    setFormData({
      lead: "0.005",
      cadmium: "0.002",
      mercury: "0.001",
      arsenic: "0.008",
      sampleLocation: "Sample Location XYZ",
      assessmentType: "groundwater-analysis"
    });
    toast({
      title: "Sample Data Loaded",
      description: "Example values have been loaded into the form.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Input & Configuration</CardTitle>
        <p className="text-sm text-muted-foreground">
          Input concentration values for each heavy metal (mg/L)
        </p>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="manual" className="space-y-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="manual" className="flex items-center space-x-2">
              <Edit className="h-4 w-4" />
              <span>Manual Entry</span>
            </TabsTrigger>
            <TabsTrigger value="upload" className="flex items-center space-x-2">
              <Upload className="h-4 w-4" />
              <span>File Upload</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="manual" className="space-y-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="lead">Lead (Pb) mg/L</Label>
                <Input
                  id="lead"
                  placeholder="0.000"
                  value={formData.lead}
                  onChange={(e) => handleInputChange("lead", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cadmium">Cadmium (Cd) mg/L</Label>
                <Input
                  id="cadmium"
                  placeholder="0.000"
                  value={formData.cadmium}
                  onChange={(e) => handleInputChange("cadmium", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mercury">Mercury (Hg) mg/L</Label>
                <Input
                  id="mercury"
                  placeholder="0.000"
                  value={formData.mercury}
                  onChange={(e) => handleInputChange("mercury", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="arsenic">Arsenic (As) mg/L</Label>
                <Input
                  id="arsenic"
                  placeholder="0.000"
                  value={formData.arsenic}
                  onChange={(e) => handleInputChange("arsenic", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Sample Location</Label>
                <Input
                  id="location"
                  placeholder="Enter coordinates or location"
                  value={formData.sampleLocation}
                  onChange={(e) => handleInputChange("sampleLocation", e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="assessment">Assessment Type</Label>
                <Select
                  value={formData.assessmentType}
                  onValueChange={(value) => handleInputChange("assessmentType", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="groundwater-analysis">Groundwater Analysis</SelectItem>
                    <SelectItem value="surface-water">Surface Water</SelectItem>
                    <SelectItem value="soil-analysis">Soil Analysis</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="upload" className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground mb-2">
                Drop your data files here or click to browse
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Supports CSV, Excel, and JSON formats
              </p>
              <Button variant="outline">
                <Upload className="h-4 w-4 mr-2" />
                Choose File
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-2 pt-6 border-t border-border">
          <Button onClick={handleCalculate} className="w-full" size="lg">
            <Calculator className="h-4 w-4 mr-2" />
            Calculate HMPI
          </Button>
          
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" onClick={handleClearAll} className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Clear All
            </Button>
            <Button variant="outline" onClick={handleLoadSample} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Load Sample Data
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}