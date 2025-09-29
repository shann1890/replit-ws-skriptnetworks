import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const brandCategories = [
  {
    category: 'Networking & Security',
    brands: ['Cisco', 'Fortinet', 'Mikrotik', 'Allied Telesis', 'Ubiquiti'],
    description: 'Industry-leading network infrastructure and security solutions'
  },
  {
    category: 'Virtualization & Cloud',
    brands: ['VMware', 'Microsoft', 'AWS', 'Zscaler', 'Azure'],
    description: 'Cloud platforms and virtualization technologies'
  },
  {
    category: 'Hardware & Infrastructure',
    brands: ['Dell', 'HP', 'Supermicro', 'Lenovo', 'Intel'],
    description: 'Enterprise-grade servers and computing hardware'
  },
  {
    category: 'Monitoring & Protection',
    brands: ['SentinelOne', 'Qualys', 'BigIP (F5)', 'Splunk', 'CrowdStrike'],
    description: 'Advanced monitoring, analytics, and threat protection'
  },
  {
    category: 'Smart Solutions',
    brands: ['Ubiquiti', 'IoT Platforms', 'Smart Home Tech', 'Automation Systems'],
    description: 'Smart home and IoT integration technologies'
  }
];

export default function BrandsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Technology Partners
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Brands We Work With
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We maintain partnerships with industry-leading technology vendors to provide 
            you with the best solutions and competitive pricing.
          </p>
        </div>

        {/* Vendor-Neutral Message */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-chart-2/10 text-chart-2 px-4 py-2 rounded-full border border-chart-2/20">
            <span className="w-2 h-2 bg-chart-2 rounded-full"></span>
            <span className="text-sm font-medium">Vendor-Neutral Approach - We Recommend What's Best for You</span>
          </div>
        </div>

        {/* Brand Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandCategories.map((category, index) => (
            <Card key={index} className="hover-elevate h-full">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3">{category.category}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Brand Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.brands.map((brand, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                    >
                      {brand}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 border">
            <h3 className="text-xl font-bold mb-4">Why We're Vendor-Neutral</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h4 className="font-semibold mb-2">Unbiased Recommendations</h4>
                <p className="text-muted-foreground">
                  We choose solutions based on your specific needs, not vendor partnerships
                </p>
              </div>
              <div>
                <div className="w-8 h-8 bg-chart-2 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h4 className="font-semibold mb-2">Best Value Solutions</h4>
                <p className="text-muted-foreground">
                  Access to competitive pricing across multiple vendor relationships
                </p>
              </div>
              <div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h4 className="font-semibold mb-2">Future Flexibility</h4>
                <p className="text-muted-foreground">
                  Technology choices that adapt and scale with your evolving needs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 text-muted-foreground text-sm">
            <span>Certified professionals</span>
            <span>•</span>
            <span>Authorized resellers</span>
            <span>•</span>
            <span>Direct vendor support</span>
          </div>
        </div>
      </div>
    </section>
  );
}