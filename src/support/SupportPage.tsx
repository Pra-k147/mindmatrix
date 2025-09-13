import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import QuickLinks from "./components/QuickLinks";

export default function SupportPage() {
  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-primary-foreground font-bold">?</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Support & Contact
            </h1>
            <p className="text-muted-foreground">
              Get help with the groundwater monitoring system and contact our support team
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-8">
          <FAQSection />
          <ContactForm />
        </div>
        <div className="space-y-6">
          <ContactInfo />
          <QuickLinks />
        </div>
      </div>
    </div>
  );
}