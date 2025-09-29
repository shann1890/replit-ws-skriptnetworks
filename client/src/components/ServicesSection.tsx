import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Network, 
  Shield, 
  Server, 
  Smartphone, 
  Camera, 
  Home,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Network,
    title: 'Network Architecture',
    description: 'Design and implement robust network infrastructure with enterprise-grade security and performance optimization.',
    features: ['Network Design', 'Load Balancing', 'Performance Optimization', 'Scalability Planning'],
    brands: ['Cisco', 'Fortinet', 'Mikrotik', 'Allied Telesis']
  },
  {
    icon: Shield,
    title: 'Cybersecurity Integration',
    description: 'Comprehensive security solutions including firewall setup, threat detection, and vulnerability assessments.',
    features: ['Firewall Configuration', 'Threat Detection', 'Security Audits', 'Compliance Support'],
    brands: ['SentinelOne', 'Qualys', 'Fortinet', 'Zscaler']
  },
  {
    icon: Server,
    title: 'Server & Infrastructure',
    description: 'Enterprise server deployment, virtualization, and cloud infrastructure management solutions.',
    features: ['Server Installation', 'Virtualization', 'Cloud Migration', 'Backup Solutions'],
    brands: ['Dell', 'HP', 'Supermicro', 'VMware']
  },
  {
    icon: Home,
    title: 'Smart Home Automation',
    description: 'Intelligent home systems integration including IoT devices, smart lighting, and automated controls.',
    features: ['IoT Integration', 'Smart Lighting', 'Voice Control', 'Mobile Apps'],
    brands: ['Ubiquiti', 'Smart Home Tech', 'IoT Platforms']
  },
  {
    icon: Camera,
    title: 'CCTV & Physical Security',
    description: 'Professional security camera installation, access control systems, and monitoring solutions.',
    features: ['IP Cameras', 'Access Control', '24/7 Monitoring', 'Mobile Access'],
    brands: ['Security Partners', 'Access Systems', 'Monitoring Tech']
  },
  {
    icon: Smartphone,
    title: 'Technical Support',
    description: 'Ongoing technical support, maintenance, and consultation services for all your IT infrastructure.',
    features: ['24/7 Support', 'Remote Assistance', 'Preventive Maintenance', 'Consulting'],
    brands: ['Multi-vendor Support', 'All Technologies']
  }
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Our Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive IT Solutions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            From network design to smart home automation, we provide end-to-end technology 
            solutions tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate group cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                {/* Features List - Hidden on mobile */}
                <div className="hidden md:block space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile-only simplified features */}
                <div className="md:hidden mb-4">
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {service.features.length > 2 && (
                      <Badge variant="outline" className="text-xs text-muted-foreground">
                        +{service.features.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Technology Brands - Hidden on mobile */}
                <div className="hidden md:block pt-4 border-t">
                  <p className="text-xs text-muted-foreground mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.brands.map((brand, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-chart-2/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let our experts design a customized solution that meets your specific requirements 
              and budget. Get started with a free consultation today.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-chart-2"
              onClick={scrollToContact}
              data-testid="button-schedule-consultation"
            >
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}