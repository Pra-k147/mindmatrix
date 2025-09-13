import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I access real-time groundwater data?",
    answer: "Real-time groundwater data can be accessed through the Dashboard section. Navigate to the monitoring stations map to view live data from telemetry-enabled stations across India.",
  },
  {
    question: "What is the coverage of the DWLR network?",
    answer: "The Digital Water Level Recorder (DWLR) network covers over 4,369 monitoring stations across India, providing comprehensive real-time groundwater level data with telemetry capabilities.",
  },
  {
    question: "How can I download historical data?",
    answer: "Historical groundwater data can be downloaded from the Groundwater Maps section. Use the export options to download data in PDF, Excel, CSV, or image formats based on your requirements.",
  },
  {
    question: "What data standards are followed?",
    answer: "The system follows standardized data formats compatible with Central Water Commission (CWC), State Water Boards, and NRSC requirements for seamless data integration and reporting.",
  },
  {
    question: "How do I report technical issues?",
    answer: "Technical issues can be reported through this support page using the contact form below, or by calling our technical support hotline at +91-11-2436-0000 during business hours.",
  },
  {
    question: "Can I integrate this data with my applications?",
    answer: "Yes, the system provides standardized APIs and data formats for integration. Contact our Data Access Support team for technical documentation and integration guidelines.",
  },
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <HelpCircle className="h-5 w-5 text-primary" />
          <span>Frequently Asked Questions</span>
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Find answers to common questions about the groundwater monitoring system
        </p>
      </CardHeader>
      <CardContent className="space-y-2">
        {faqs.map((faq, index) => (
          <Collapsible
            key={index}
            open={openItems.includes(index)}
            onOpenChange={() => toggleItem(index)}
          >
            <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-border p-4 text-left hover:bg-accent/50 transition-colors">
              <span className="font-medium text-sm">{faq.question}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${openItems.includes(index) ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 pb-4 pt-2 text-sm text-muted-foreground">
                {faq.answer}
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </CardContent>
    </Card>
  );
}