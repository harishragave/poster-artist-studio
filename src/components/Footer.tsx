import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-warm-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Harish</h3>
            <p className="text-white/80 max-w-xl mx-auto">
              Creative poster designer passionate about turning ideas into compelling visual stories
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
            <a 
              href="mailto:harish62264@gmail.com"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              harish62264@gmail.com
            </a>
            <a 
              href="tel:+919080764427"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 9080764427
            </a>
          </div>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-white/60">
              © 2024 Harish. All rights reserved. | Designed with passion and creativity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;