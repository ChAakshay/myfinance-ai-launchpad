
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, ChartBar, Target, Shield } from "lucide-react";

const features = [
  {
    title: "AI Finance Chatbot",
    description: "Ask questions about your finances in plain English and get instant, personalized answers.",
    icon: Bot,
    color: "from-financeBlue to-financeBlue-dark"
  },
  {
    title: "Expense + Income Dashboards",
    description: "Visualize your money flow with beautiful, interactive charts that make financial planning intuitive.",
    icon: ChartBar,
    color: "from-financeTeal to-financeTeal-dark"
  },
  {
    title: "Savings Goal Tracking",
    description: "Set and track financial goals with AI-powered recommendations to help you reach them faster.",
    icon: Target,
    color: "from-purple-500 to-blue-500"
  },
  {
    title: "Privacy-First Data Protection",
    description: "Your financial data is encrypted and secure. We never sell your information to third parties.",
    icon: Shield,
    color: "from-emerald-500 to-green-500"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28" id="features">
      <div className="max-content-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Smarter Money Starts Here</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            MyFinance AI combines powerful analytics with conversational AI to transform how you manage your finances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none card-shadow hover-scale">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
