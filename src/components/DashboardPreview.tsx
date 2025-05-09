
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
              <p className="text-sm">Can I afford a vacation this year?</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl mt-3 ml-8">
              <p className="text-sm">Let’s check: if your planned vacation costs under 10% of your annual income and doesn’t hurt your emergency or investment funds, you’re good to go. </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardPreview;
