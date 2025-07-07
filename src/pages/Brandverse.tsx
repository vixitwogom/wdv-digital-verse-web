
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Globe, Settings, Truck, CheckCircle, TrendingUp, Users, Zap, Target, Award } from "lucide-react";

const Brandverse = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding">
        <div className="container-wdv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-wdv-gold text-wdv-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="h-4 w-4 mr-2" />
                Brand Acceleration
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Brandverse
              </h1>
              <h2 className="text-xl lg:text-2xl mb-8 text-blue-100">
                Your gateway to India's retail ecosystem - accelerating brand growth through strategic market entry and execution
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-wdv-gold text-wdv-navy hover:bg-yellow-400 font-semibold">
                  Partner with Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wdv-navy">
                  Explore Services
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Market Entry</span>
                    <div className="text-2xl font-bold text-wdv-gold">✓</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Licensing & Ops</span>
                    <div className="text-2xl font-bold text-wdv-gold">✓</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-100">Omnichannel</span>
                    <div className="text-2xl font-bold text-wdv-gold">✓</div>
                  </div>
                  <div className="text-center mt-4 pt-4 border-t border-white/20">
                    <div className="text-sm text-blue-200">Complete Brand Acceleration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="section-padding">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Key Offerings
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to accelerate your brand's success in the Indian market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Localized Market Entry */}
            <Card className="h-full hover:shadow-xl transition-shadow border-2 hover:border-wdv-blue animate-slide-up">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-wdv-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-wdv-navy">1. Localized Market Entry</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  Strategic entry into Indian markets with deep local insights, regulatory compliance, and cultural adaptation
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Market research & competitive analysis
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Local partnership identification
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Regulatory compliance support
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Cultural adaptation strategies
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Licensing & Operations */}
            <Card className="h-full hover:shadow-xl transition-shadow border-2 hover:border-wdv-gold animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-wdv-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-10 w-10 text-wdv-navy" />
                </div>
                <CardTitle className="text-2xl text-wdv-navy">2. Licensing & Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  End-to-end operational setup including licensing, supply chain management, and operational excellence
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Business licensing & permits
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Supply chain optimization
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Operational process setup
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Quality assurance systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Omnichannel Execution */}
            <Card className="h-full hover:shadow-xl transition-shadow border-2 hover:border-wdv-navy animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-wdv-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl text-wdv-navy">3. Omnichannel Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  Seamless integration across online and offline channels with comprehensive distribution network access
                </CardDescription>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Multi-channel distribution
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Digital marketplace integration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Retail network access
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                    Performance analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Stand Out */}
      <section className="section-padding bg-gray-50">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Why We Stand Out
            </h2>
            <p className="text-xl text-gray-600">
              Five key pillars that make Brandverse the preferred partner for brand acceleration in India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Users className="h-8 w-8" />,
                title: "Deep Market Understanding",
                description: "Years of experience in Indian retail ecosystem with insights into local consumer behavior and market dynamics"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Proven Track Record",
                description: "Successful brand launches and scaling with measurable ROI and sustainable growth metrics"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Integrated Ecosystem",
                description: "Seamless connection with WOGOM marketplace and WoFi financial services for complete support"
              },
              {
                icon: <Target className="h-8 w-8" />,
                title: "End-to-End Solutions",
                description: "Comprehensive approach from market research to post-launch optimization and scaling strategies"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Quality Focus",
                description: "Commitment to operational excellence and brand integrity throughout the acceleration process"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-wdv-gold rounded-xl flex items-center justify-center mx-auto mb-4 text-wdv-navy">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl text-wdv-navy">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="section-padding">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Our Brand Acceleration Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to ensure your brand's successful entry and growth in India
            </p>
          </div>

          <div className="relative">
            {/* Process steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Assessment", description: "Brand evaluation and market opportunity analysis" },
                { step: "02", title: "Strategy", description: "Customized market entry and growth strategy development" },
                { step: "03", title: "Setup", description: "Operational infrastructure and partnership establishment" },
                { step: "04", title: "Launch", description: "Multi-channel market launch and initial positioning" },
                { step: "05", title: "Scale", description: "Growth optimization and expansion across channels" }
              ].map((item, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-wdv-navy text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-wdv-navy mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="section-padding bg-wdv-navy text-white">
        <div className="container-wdv">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Success Metrics
            </h2>
            <p className="text-xl text-blue-100">
              Measurable results that demonstrate our brand acceleration impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-wdv-gold mb-2">25+</div>
              <div className="text-lg text-blue-100 mb-2">Brands Accelerated</div>
              <div className="text-sm text-gray-300">Successful launches</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-wdv-gold mb-2">150%</div>
              <div className="text-lg text-blue-100 mb-2">Avg Growth Rate</div>
              <div className="text-sm text-gray-300">Year-over-year</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-wdv-gold mb-2">6 months</div>
              <div className="text-lg text-blue-100 mb-2">Avg Time to Market</div>
              <div className="text-sm text-gray-300">From strategy to launch</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-wdv-gold mb-2">95%</div>
              <div className="text-lg text-blue-100 mb-2">Client Satisfaction</div>
              <div className="text-sm text-gray-300">Brand partner rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wdv">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Ready to Accelerate Your Brand?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join successful brands that have transformed their market presence through Brandverse's strategic acceleration programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-wdv-gold text-wdv-navy hover:bg-yellow-400 font-semibold">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-wdv-navy text-wdv-navy hover:bg-wdv-navy hover:text-white">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brandverse;
