
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wdv-navy text-white">
      <div className="container-wdv section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-8 h-8 bg-white p-5 rounded-lg flex items-center justify-center">
                <span className="text-[#012345] font-bold text-sm">WDV</span>
              </div> */}
              <span className=""><img src="./images/wdv_white.svg" className="h-5 " alt="" /></span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering India's retail ecosystem through Money, Margin and Discovery. 
              Building the future of B2B commerce and fintech solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="h-4 w-4" />
                <span>support@wogom.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+91-97960 02002</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Our Ecosystem</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/wogom" className="hover:text-wdv-blue transition-colors">WOGOM Marketplace</Link></li>
              <li><Link to="/wofi" className="hover:text-wdv-blue transition-colors">Wofi Lending</Link></li>
              <li><Link to="/brandverse" className="hover:text-wdv-blue transition-colors">Brandverse</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/leadership" className="hover:text-wdv-blue transition-colors">Leadership</Link></li>
              <li><Link to="/investors" className="hover:text-wdv-blue transition-colors">Investors</Link></li>
              <li><Link to="/contact" className="hover:text-wdv-blue transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 World Digital Ventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
