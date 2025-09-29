import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Linkedin, 
  Twitter,
  ArrowUp
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex items-center space-x-2">
                  {/* Simple SK Logo */}
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">SK</span>
                  </div>
                  
                  {/* Network Connection Dots */}
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-chart-2 rounded-full animate-pulse"></div>
                    <div className="w-4 h-0.5 bg-chart-2"></div>
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <div className="w-4 h-0.5 bg-primary"></div>
                    <div className="w-2 h-2 bg-chart-2 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
                <span className="font-bold text-xl">Skript Networks</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Professional IT consultancy providing comprehensive technology solutions 
                for businesses and residential clients across Malaysia.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+60 12-345 6789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>info@skriptnetworks.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Kuala Lumpur, Malaysia</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Our Services</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="footer-nav-network"
                  >
                    Network Architecture
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="footer-nav-security"
                  >
                    Cybersecurity Solutions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="footer-nav-servers"
                  >
                    Server & Infrastructure
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="footer-nav-smart-home"
                  >
                    Smart Home Automation
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="footer-nav-security-cctv"
                  >
                    CCTV & Physical Security
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="footer-nav-support"
                  >
                    Technical Support
                  </button>
                </li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Solutions</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="footer-nav-enterprise"
                  >
                    Enterprise Solutions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="footer-nav-sme"
                  >
                    SME Solutions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('solutions')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="footer-nav-residential"
                  >
                    Residential Solutions
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="footer-nav-about"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="hover:text-primary transition-colors text-left"
                    data-testid="footer-nav-contact"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h4 className="font-semibold text-lg mb-6">Stay Connected</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Follow us for the latest technology updates and industry insights.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3 mb-6">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="hover:bg-primary hover:text-primary-foreground"
                  data-testid="social-facebook"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button 
                  size="icon" 
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground"
                  data-testid="social-twitter"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>

              {/* CTA */}
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-primary to-chart-2"
                data-testid="footer-cta-contact"
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Skript Networks. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
              <Button 
                size="sm" 
                variant="ghost" 
                onClick={scrollToTop}
                className="hover:bg-primary/10"
                data-testid="button-scroll-top"
              >
                <ArrowUp className="w-4 h-4 mr-1" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}