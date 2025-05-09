
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import DashboardPreview from "./DashboardPreview";
import { supabase } from "@/integrations/supabase/client";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Save email to Supabase
      const { error } = await supabase
        .from('mail')
        .insert({ id: Date.now(), created_at: new Date().toISOString() })
        .select();
      
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
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-content-width">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl mb-10 md:mb-0 md:mr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in gradient-text">
              Your Money. Your Rules. <br className="hidden md:block" />
              Smarter — with AI.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Track spending, savings, investments, and loans — all in one personalized dashboard, 
              powered by a friendly AI assistant.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Input
                type="email"
                placeholder="Your email address"
                className="sm:w-80 h-12 text-base"
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
          </div>
          
          <div className="w-full md:w-5/12 flex-shrink-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
