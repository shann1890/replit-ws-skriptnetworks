import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Home as HomeIcon, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import smartHomeImage from '@assets/generated_images/Smart_home_automation_setup_e2c2009a.png';
import enterpriseImage from '@assets/generated_images/Network_security_operations_center_cd8d2c25.png';

const solutions = [
  {
    icon: Building,
    title: 'Enterprise Solutions',
    description: 'Comprehensive IT infrastructure for large organizations with complex requirements.',
    image: enterpriseImage,
    features: [
      'Scalable network architecture',
      'Advanced cybersecurity',
      'High-availability systems',
      'Compliance management',
      'Disaster recovery',
      '24/7 enterprise support'
    ],
    industries: ['Financial Services', 'Healthcare', 'Manufacturing', 'Government']
  },
  {
    icon: Briefcase,
    title: 'SME Solutions',
    description: 'Cost-effective technology solutions designed for small and medium enterprises.',
    image: null,
    features: [
      'Budget-friendly infrastructure',
      'Essential security measures',
      'Cloud-based solutions',
      'Remote work enablement',
      'Growth-oriented design',
      'Flexible support plans'
    ],
    industries: ['Retail', 'Professional Services', 'Startups', 'Local Businesses']
  },
  {
    icon: HomeIcon,
    title: 'Residential Solutions',
    description: 'Smart home technology and residential IT support for modern living.',
    image: smartHomeImage,
    features: [
      'Smart home automation',
      'Home security systems',
      'High-speed networking',
      'Entertainment systems',
      'IoT device integration',
      'Family-friendly controls'
    ],
    industries: ['Luxury Homes', 'Condominiums', 'Landed Properties', 'New Developments']
  }
];

export default function SolutionsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-chart-2/10 text-chart-2 border-chart-2/20">
            Tailored Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Solutions for Every Scale
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Whether you're a growing startup, established enterprise, or modern household, 
            we have the right technology solution to meet your unique requirements.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 md:gap-12 mb-12 md:mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <Card className="h-full hover-elevate">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center">
                        <solution.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-lg font-semibold">{solution.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {solution.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {/* Mobile: Show first 3 features only */}
                      <div className="md:hidden space-y-3">
                        {solution.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                        {solution.features.length > 3 && (
                          <div className="text-xs text-muted-foreground ml-7">
                            +{solution.features.length - 3} additional features
                          </div>
                        )}
                      </div>
                      
                      {/* Desktop: Show all features */}
                      <div className="hidden md:block space-y-3">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Industries */}
                    <div className="pt-4 border-t">
                      <p className="text-sm font-medium text-muted-foreground mb-3">
                        Ideal for:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.industries.map((industry, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-6">
                      <Button 
                        variant="outline"
                        onClick={scrollToContact}
                        className="w-full"
                        data-testid={`button-learn-${solution.title.toLowerCase().replace(' ', '-')}`}
                      >
                        Learn More About {solution.title}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                {solution.image ? (
                  <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
                    <img 
                      src={solution.image}
                      alt={`${solution.title} illustration`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
                  </div>
                ) : (
                  <div className="h-64 md:h-96 bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-xl flex items-center justify-center border border-primary/20">
                    <div className="text-center">
                      <solution.icon className="w-24 h-24 text-primary mx-auto mb-4 opacity-50" />
                      <p className="text-muted-foreground">
                        Custom solutions designed for your business needs
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-chart-2/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Need a Custom Solution?</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every organization is unique. Our experts will work with you to design and 
              implement a solution that perfectly fits your requirements and budget.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-chart-2"
              onClick={scrollToContact}
              data-testid="button-custom-solution"
            >
              Discuss Your Requirements
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}