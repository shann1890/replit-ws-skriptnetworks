import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle,
  Building,
  Home,
  Briefcase
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    console.log('🚀 Form submission started:', formData);
    
    try {
      console.log('📡 Making API request to /api/contact');
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      console.log('📨 Response status:', response.status);
      const data = await response.json();
      console.log('📨 Response data:', data);
      
      if (response.ok) {
        console.log('✅ Setting isSubmitted to true');
        setIsSubmitted(true);
        // Reset form after success message
        setTimeout(() => {
          console.log('🔄 Resetting form after 3 seconds');
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            serviceType: '',
            message: ''
          });
        }, 3000);
      } else {
        console.log('❌ Setting error message:', data.error);
        setSubmitError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('❌ Network error:', error);
      setSubmitError('Network error. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    console.log(`${field} updated:`, value);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi! I would like to inquire about your IT services.');
    window.open(`https://wa.me/^0103709392?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Contact our team today for a free consultation. We'll discuss your requirements 
            and provide a customized solution proposal.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 order-1 md:order-none">
            {/* Mobile-first Quick Contact */}
            <div className="md:hidden mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 min-h-14"
                  onClick={openWhatsApp}
                  data-testid="button-whatsapp-mobile"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full font-semibold py-4 min-h-14"
                  onClick={() => window.location.href = 'tel:+60103709392'}
                  data-testid="button-call-mobile"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
              <div className="text-center mt-4 text-sm text-muted-foreground">
                For immediate assistance, call or message us directly
              </div>
            </div>
            
            {/* Desktop Contact Methods */}
            <div className="hidden md:block space-y-6 mb-8">
              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground">+60 10-370 9392</p>
                      <p className="text-xs text-muted-foreground">Mon-Fri 9AM-6PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-chart-2 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">info@autoskript.com</p>
                      <p className="text-xs text-muted-foreground">24-48hr response time</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Office</h4>
                      <p className="text-muted-foreground text-sm">Kuala Lumpur, Malaysia</p>
                      <p className="text-xs text-muted-foreground">Serving nationwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp CTA */}
            <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Quick Response via WhatsApp</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get instant answers to your questions
                </p>
                <Button 
                  onClick={openWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700"
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>Business Hours</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                  <div className="pt-2 border-t text-xs text-muted-foreground">
                    * Emergency support available 24/7 for existing clients
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-2 md:order-none">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Send us a message</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8" role="alert" aria-live="polite" data-testid="success-message">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">
                      Thank you for your inquiry. We'll contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    {submitError && (
                      <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg" role="alert" aria-live="polite" data-testid="error-message">
                        <p className="text-destructive font-medium">{submitError}</p>
                      </div>
                    )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          data-testid="input-name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@company.com"
                          required
                          data-testid="input-email"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+60 12-345 6789"
                          data-testid="input-phone"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="Your company name"
                          data-testid="input-company"
                        />
                      </div>
                    </div>

                    {/* Service Type */}
                    <div>
                      <Label htmlFor="service-type">Service Type *</Label>
                      <Select 
                        value={formData.serviceType}
                        onValueChange={(value) => handleInputChange('serviceType', value)}
                      >
                        <SelectTrigger data-testid="select-service-type">
                          <SelectValue placeholder="Select the service you're interested in" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="network-architecture">
                            <div className="flex items-center space-x-2">
                              <Building className="w-4 h-4" />
                              <span>Network Architecture</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="cybersecurity">
                            <div className="flex items-center space-x-2">
                              <Building className="w-4 h-4" />
                              <span>Cybersecurity Solutions</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="smart-home">
                            <div className="flex items-center space-x-2">
                              <Home className="w-4 h-4" />
                              <span>Smart Home Automation</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="enterprise">
                            <div className="flex items-center space-x-2">
                              <Briefcase className="w-4 h-4" />
                              <span>Enterprise Solutions</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="support">
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4" />
                              <span>Technical Support</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="consultation">
                            <div className="flex items-center space-x-2">
                              <MessageCircle className="w-4 h-4" />
                              <span>General Consultation</span>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Project Details *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please describe your project requirements, timeline, and any specific questions you have..."
                        rows={5}
                        required
                        data-testid="textarea-message"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-chart-2"
                      disabled={isSubmitting}
                      data-testid="button-submit-form"
                    >
                      {isSubmitting ? (
                        <>Sending Message...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}