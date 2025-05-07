
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("You've been added to our waitlist!");
      setEmail("");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-financeBlue/10 to-financeTeal/10" id="waitlist">
      <div className="max-content-width">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-6">
            <div className="px-4 py-1 bg-financeBlue/20 rounded-full text-financeBlue-dark font-medium text-sm">
              Launching Soon
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Ready to Smarten Up Your Finances?
          </h2>
          
          <p className="text-lg text-slate-700 mb-8">
            Join our waitlist today and be the first to experience the future of personal finance management.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
            <Input
              type="email"
              placeholder="Your email address"
              className="sm:max-w-xs h-12 text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="h-12 px-6 text-base font-semibold hover-scale bg-gradient-to-r from-financeBlue to-financeTeal-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding you..." : "🚀 Join the Waitlist"}
            </Button>
          </form>
          
          <p className="text-slate-600 text-sm">
            Join 500+ others already on the list
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
