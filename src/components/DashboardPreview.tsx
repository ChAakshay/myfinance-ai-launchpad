
import { Card, CardContent } from "@/components/ui/card";

const DashboardPreview = () => {
  return (
    <Card className="overflow-hidden card-shadow hover-scale transition-all duration-500">
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
            alt="MyFinance AI Dashboard" 
            className="w-full rounded-t-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-financeBlue to-financeTeal flex items-center justify-center">
                <span className="text-white font-bold">AI</span>
              </div>
              <div className="ml-3">
                <p className="font-bold">Finance Assistant</p>
                <p className="text-sm text-white/80">Always here to help</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <p className="text-sm">How much did I spend on dining last month compared to my budget?</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mt-3 ml-8">
              <p className="text-sm">You spent $342 on dining last month, which is 14% under your monthly budget of $400. Great job staying under budget!</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPreview;
