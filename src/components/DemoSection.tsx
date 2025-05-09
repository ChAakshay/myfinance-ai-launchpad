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
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                >
                  <source src="/Finny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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

