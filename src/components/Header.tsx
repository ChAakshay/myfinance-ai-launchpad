
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Features", href: "#features" },
  { name: "Why Us", href: "#why-us" },
  { name: "Demo", href: "#demo" },
  { name: "FAQ", href: "#faq" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToElement = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-content-width">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="font-bold text-xl text-financeBlue-dark mr-2">
              MyFinance
            </div>
            <div className="bg-financeBlue-dark text-white text-xs px-2 py-1 rounded-md font-semibold">
              AI
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToElement(link.href)}
                  className="text-slate-700 hover:text-financeBlue-dark transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <Button
              onClick={() => scrollToElement("#waitlist")}
              className="bg-financeBlue-dark hover:bg-financeBlue hover-scale"
            >
              Join Waitlist
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-slate-700" />
              ) : (
                <Menu className="h-6 w-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-white z-20 p-6">
          <nav className="flex flex-col space-y-6 pt-6">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToElement(link.href)}
                className="text-slate-700 hover:text-financeBlue-dark transition-colors text-lg"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToElement("#waitlist")}
              className="bg-financeBlue-dark hover:bg-financeBlue w-full mt-4"
            >
              Join Waitlist
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
