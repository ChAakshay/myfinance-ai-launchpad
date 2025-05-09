
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Save email to Supabase
      const { error } = await supabase
        .from('mail')
        .insert({ 
          id: Date.now(), 
          email: email.trim(),
          created_at: new Date().toISOString() 
        });
      
      if (error) throw error;
      
      toast.success("You've been added to our waitlist!");
      setEmail("");
    } catch (error) {
      console.error("Error saving email:", error);
      toast.error("There was a problem adding you to the waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
