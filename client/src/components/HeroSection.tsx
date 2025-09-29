import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Zap, Users } from 'lucide-react';
import heroImage from '@assets/generated_images/IT_infrastructure_hero_background_1fe41a92.png';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 md:py-0"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern IT Infrastructure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-12 md:py-0">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badge */}
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
            <Shield className="w-4 h-4 mr-2" />
            Trusted IT Solutions Provider in Malaysia
          </Badge>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent leading-tight">
            Secure IT Infrastructure
            <span className="text-primary"> & Technology </span>
            Solutions
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT consultancy specializing in network architecture, cybersecurity, 
            smart home automation, and enterprise technology solutions.
          </p>

          {/* Key Value Points */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border">
              <Shield className="w-4 md:w-5 h-4 md:h-5 text-primary" />
              <span className="text-xs md:text-sm font-semibold">Security-First</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border">
              <Zap className="w-4 md:w-5 h-4 md:h-5 text-chart-2" />
              <span className="text-xs md:text-sm font-semibold">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-card/50 backdrop-blur-sm rounded-full px-3 md:px-4 py-1.5 md:py-2 border">
              <Users className="w-4 md:w-5 h-4 md:h-5 text-primary" />
              <span className="text-xs md:text-sm font-semibold">Vendor Neutral</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90 text-base font-semibold px-6 md:px-8 py-4 md:py-6 min-h-12 md:min-h-14"
              onClick={() => scrollToSection('contact')}
              data-testid="button-get-consultation"
            >
              Get Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-base font-semibold px-6 md:px-8 py-4 md:py-6 min-h-12 md:min-h-14 bg-background/50 backdrop-blur-sm hover:bg-background/80"
              onClick={() => scrollToSection('services')}
              data-testid="button-view-services"
            >
              View Services
            </Button>
          </div>

          {/* Social Proof - Simplified on mobile */}
          <div className="mt-8 md:mt-16 text-center">
            <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-4">Trusted by 200+ businesses across Malaysia</p>
            <div className="hidden md:flex justify-center items-center space-x-8 opacity-60">
              {/* todo: remove mock functionality - replace with real client logos */}
              <div className="text-xs font-mono">ENTERPRISE CLIENTS</div>
              <div className="text-xs font-mono">SME PARTNERS</div>
              <div className="text-xs font-mono">RESIDENTIAL PROJECTS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}