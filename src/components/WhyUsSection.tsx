
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, BarChart3, User } from "lucide-react";

const benefits = [
  {
    title: "Talk to your money like ChatGPT",
    description: "Ask questions about your finances in plain English and get instant, actionable insights.",
    icon: MessageSquare
  },
  {
    title: "Understand your spending in plain English",
    description: "No more cryptic financial jargon. Our AI translates complex data into easy-to-understand language.",
    icon: BarChart3
  },
  {
    title: "Built for real people — not accountants",
    description: "Simplified interface designed for everyday users, not financial experts or accountants.",
    icon: User
  }
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white" id="why-us">
      <div className="max-content-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Why MyFinance AI?</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            We're building the financial assistant we've always wanted — one that makes managing money simpler, smarter, and even enjoyable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none card-shadow hover-scale">
              <CardContent className="pt-8">
                <div className="flex flex-col md:flex-row md:items-start text-center md:text-left">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-financeBlue to-financeTeal-dark flex items-center justify-center mx-auto md:mx-0 mb-4 md:mb-0 md:mr-4 flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-slate-700">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
