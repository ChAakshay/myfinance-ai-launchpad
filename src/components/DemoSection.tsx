
import { Card, CardContent } from "@/components/ui/card";

const DemoSection = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50" id="demo">
      <div className="max-content-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">See It in Action</h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Experience how MyFinance AI helps you understand and optimize your finances through natural conversations.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Card className="w-full max-w-4xl border-none card-shadow overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-slate-800 p-2 flex items-center">
                <div className="flex space-x-2 ml-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mx-auto pr-16 text-white/80 text-sm">MyFinance AI Demo</div>
              </div>
              
              <div className="relative aspect-[16/9] bg-slate-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80" 
                    alt="MyFinance AI Dashboard Demo" 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center text-white">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-r from-financeBlue to-financeTeal-dark flex items-center justify-center">
                        <span className="text-white font-bold">AI</span>
                      </div>
                      <div className="ml-3">
                        <p className="font-bold">Finance Assistant</p>
                        <p className="text-sm opacity-80">MyFinance AI is analyzing your query...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover-scale">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-financeBlue-dark border-b-[10px] border-b-transparent ml-2"></div>
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-8 text-center text-slate-600 text-sm">
          <p>*The dashboard shown is a preview of upcoming features. The actual interface may vary in the final product.</p>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
