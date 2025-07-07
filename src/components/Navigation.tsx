
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "WOGOM", path: "/wogom" },
    { name: "WoFi", path: "/wofi" },
    { name: "Brandverse", path: "/brandverse" },
    { name: "Leadership", path: "/leadership" },
    { name: "Investors", path: "/investors" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container-wdv">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-wdv-navy rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">WDV</span>
            </div>
            <span className="text-xl font-bold text-wdv-navy">World Digital Ventures</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-wdv-blue ${
                  location.pathname === item.path 
                    ? "text-wdv-blue border-b-2 border-wdv-blue pb-1" 
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button className="bg-wdv-blue hover:bg-wdv-navy">
              Join Ecosystem
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-wdv-blue ${
                    location.pathname === item.path 
                      ? "text-wdv-blue bg-blue-50" 
                      : "text-gray-700"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Button className="w-full bg-wdv-blue hover:bg-wdv-navy">
                  Join Ecosystem
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
