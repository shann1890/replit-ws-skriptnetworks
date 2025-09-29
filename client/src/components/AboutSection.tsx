import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Users, Clock, Target } from 'lucide-react';
import founderImage from '@assets/generated_images/Founder_professional_headshot_5062a4f5.png';

export default function AboutSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { icon: Users, value: '200+', label: 'Satisfied Clients' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Clock, value: '24/7', label: 'Support Available' },
    { icon: Target, value: '99%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-chart-2/10 text-chart-2 border-chart-2/20">
            About Skript Networks
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technology Excellence Since 2014
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a leading technology solutions provider in Malaysia, specializing in 
            comprehensive IT infrastructure and smart technology implementations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-16">
          {/* Company Story */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-6">Our Mission & Vision</h3>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-sm md:text-base leading-relaxed">
                At Skript Networks, we believe technology should empower businesses and enhance 
                daily life. Our mission is to deliver cutting-edge IT solutions that are both 
                innovative and reliable, ensuring our clients stay ahead in an ever-evolving 
                digital landscape.
              </p>
              <p className="leading-relaxed">
                We take a vendor-neutral approach, focusing on what's best for our clients 
                rather than pushing specific products. Our expertise spans enterprise networking, 
                cybersecurity, smart home automation, and comprehensive technical support.
              </p>
              <p className="leading-relaxed">
                Based in Malaysia, we serve clients across residential, SME, and enterprise 
                sectors with transparency, reliability, and technical excellence as our 
                core values.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-8">
              {/* Mobile: Show only 2 values */}
              <div className="grid grid-cols-1 gap-4 md:hidden">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-primary mb-2">Transparency</h4>
                  <p className="text-sm text-muted-foreground">Clear communication and honest recommendations</p>
                </div>
                <div className="p-4 bg-chart-2/5 rounded-lg border border-chart-2/10">
                  <h4 className="font-semibold text-chart-2 mb-2">Excellence</h4>
                  <p className="text-sm text-muted-foreground">High-quality implementations and service</p>
                </div>
              </div>
              {/* Desktop: Show all 4 values */}
              <div className="hidden md:grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-primary mb-2">Transparency</h4>
                  <p className="text-sm text-muted-foreground">Clear communication and honest recommendations</p>
                </div>
                <div className="p-4 bg-chart-2/5 rounded-lg border border-chart-2/10">
                  <h4 className="font-semibold text-chart-2 mb-2">Reliability</h4>
                  <p className="text-sm text-muted-foreground">Dependable solutions and ongoing support</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-semibold text-primary mb-2">Excellence</h4>
                  <p className="text-sm text-muted-foreground">High-quality implementations and service</p>
                </div>
                <div className="p-4 bg-chart-2/5 rounded-lg border border-chart-2/10">
                  <h4 className="font-semibold text-primary mb-2">Innovation</h4>
                  <p className="text-sm text-muted-foreground">Latest technologies and forward-thinking</p>
                </div>
              </div>
            </div>
          </div>

          {/* Founder Profile */}
          <div>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={founderImage}
                    alt="Founder of Skript Networks"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-2">Leadership Team</h4>
                  <p className="text-muted-foreground mb-4">
                    Led by experienced technology professionals with deep expertise in 
                    enterprise IT infrastructure and emerging technologies.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div>• 15+ years in IT infrastructure design</div>
                    <div>• Certified in leading technology platforms</div>
                    <div>• Extensive experience with Malaysian businesses</div>
                    <div>• Focus on security-first implementations</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-chart-2 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-chart-2/10 to-primary/10 rounded-2xl p-8 border border-chart-2/20">
            <h3 className="text-2xl font-bold mb-4">Partner With Technology Experts</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust Skript Networks for their 
              technology infrastructure and support needs.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-chart-2 to-primary"
              onClick={scrollToContact}
              data-testid="button-partner-with-us"
            >
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}