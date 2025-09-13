import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ExternalLink
} from "lucide-react";

const contactDetails = [
  {
    title: "Technical Support",
    phone: "+91-11-2436-0000",
    email: "tech.support@cgwb.gov.in",
    hours: "9:00 AM - 6:00 PM (Mon-Fri)",
    icon: Phone,
  },
  {
    title: "Data Access Support",
    phone: "+91-11-2436-0001",
    email: "data.access@cgwb.gov.in",
    hours: "9:00 AM - 5:00 PM (Mon-Fri)",
    icon: Mail,
  },
  {
    title: "Training & Capacity Building",
    phone: "+91-11-2436-0002",
    email: "training@cgwb.gov.in",
    hours: "10:00 AM - 4:00 PM (Mon-Fri)",
    icon: Clock,
  },
];

export default function ContactInfo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <p className="text-sm text-muted-foreground">
          Reach out to our specialized support teams
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {contactDetails.map((contact) => {
          const Icon = contact.icon;
          
          return (
            <div key={contact.title} className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon className="h-4 w-4 text-primary" />
                <h3 className="font-medium text-sm">{contact.title}</h3>
              </div>
              <div className="ml-6 space-y-1 text-sm text-muted-foreground">
                <p className="flex items-center space-x-2">
                  <Phone className="h-3 w-3" />
                  <span>{contact.phone}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Mail className="h-3 w-3" />
                  <span>{contact.email}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Clock className="h-3 w-3" />
                  <span>{contact.hours}</span>
                </p>
              </div>
            </div>
          );
        })}
        
        <div className="pt-4 border-t border-border">
          <h3 className="font-medium text-sm mb-2">Office Address</h3>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Central Ground Water Board</p>
              <p>Bhujal Bhawan, Near Saket Metro Station</p>
              <p>New Delhi - 110049</p>
              <p>India</p>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              <MapPin className="h-4 w-4 mr-2" />
              View on Map
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}