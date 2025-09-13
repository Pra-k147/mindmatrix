import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, FileDown, FileSpreadsheet, Image, Download } from "lucide-react";

export default function FiltersPanel() {
  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-primary" />
          <span>Filters & Selection</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* State Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Choose State</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select state..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="andhra-pradesh">Andhra Pradesh</SelectItem>
              <SelectItem value="gujarat">Gujarat</SelectItem>
              <SelectItem value="karnataka">Karnataka</SelectItem>
              <SelectItem value="maharashtra">Maharashtra</SelectItem>
              <SelectItem value="rajasthan">Rajasthan</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* District Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Choose District</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select district..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="district-1">District 1</SelectItem>
              <SelectItem value="district-2">District 2</SelectItem>
              <SelectItem value="district-3">District 3</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Block Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">Block</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Block A" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="block-a">Block A</SelectItem>
              <SelectItem value="block-b">Block B</SelectItem>
              <SelectItem value="block-c">Block C</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Export Options */}
        <div className="pt-4 border-t border-border">
          <h3 className="text-sm font-medium text-foreground mb-3">Export Options</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full justify-start" size="sm">
              <FileDown className="h-4 w-4 mr-2" />
              Export as PDF
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <FileSpreadsheet className="h-4 w-4 mr-2" />
              Export as Excel
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Image className="h-4 w-4 mr-2" />
              Export as Image
            </Button>
            <Button variant="outline" className="w-full justify-start" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download CSV
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}