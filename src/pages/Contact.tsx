
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Briefcase } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding-sm">
        <div className="container-wdv">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-blue-100 mb-8 animate-slide-up">
              Ready to transform your business? Let's start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-wdv">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-wdv-navy">Join as Retailer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Access better margins, credit solutions, and discover new products through our ecosystem.
                </p>
                <Button className="w-full bg-wdv-blue hover:bg-wdv-navy">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-wdv-navy" />
                </div>
                <CardTitle className="text-xl text-wdv-navy">Brand Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Accelerate your brand's growth in India's retail market with our comprehensive solutions.
                </p>
                <Button className="w-full bg-wdv-gold text-wdv-navy hover:bg-yellow-400">
                  Partner with us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-wdv-navy">Investment Inquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Explore investment opportunities in India's most collaborative retail ecosystem.
                </p>
                <Button className="w-full bg-wdv-navy hover:bg-gray-800">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-wdv-navy mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input 
                      id="firstName" 
                      type="text" 
                      placeholder="Enter your first name"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input 
                      id="lastName" 
                      type="text" 
                      placeholder="Enter your last name"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 98765 43210"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input 
                    id="company" 
                    type="text" 
                    placeholder="Enter company name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    Area of Interest *
                  </label>
                  <select 
                    id="interest" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wdv-blue focus:border-transparent"
                  >
                    <option value="">Select your interest</option>
                    <option value="retailer">Join as Retailer</option>
                    <option value="seller">Become a Seller</option>
                    <option value="brand">Brand Partnership</option>
                    <option value="investor">Investment Opportunity</option>
                    <option value="credit">Credit Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your requirements, questions, or how we can help you..."
                    className="w-full h-32"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-wdv-gold text-wdv-navy hover:bg-yellow-400 font-semibold">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-wdv-navy mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-wdv-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-wdv-navy mb-2">Office Address</h3>
                        <p className="text-gray-600">
                          World Digital Ventures<br />
                          Technology Hub, Ahmedabad<br />
                          Gujarat 380015, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-wdv-gold rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-wdv-navy" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-wdv-navy mb-2">Phone Numbers</h3>
                        <p className="text-gray-600">
                          General Inquiries: +91 98765 43210<br />
                          Business Development: +91 98765 43211<br />
                          Support: +91 98765 43212
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-wdv-navy rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-wdv-navy mb-2">Email Addresses</h3>
                        <p className="text-gray-600">
                          General: info@worlddigitalventures.com<br />
                          Business: business@worlddigitalventures.com<br />
                          Investors: investors@worlddigitalventures.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-wdv-navy mb-2">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 9:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="section-padding-sm bg-wdv-navy text-white">
        <div className="container-wdv">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Quick Response Guaranteed</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We typically respond to all inquiries within 24 hours during business days. 
              For urgent matters, please call us directly at +91 98765 43210.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
