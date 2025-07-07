
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, DollarSign, TrendingUp, Search, Users, ShoppingCart, CreditCard, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-wdv section-padding relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Retail Ecosystem through Money, Margin and Discovery
              </h1>
              <h2 className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
                India's most collaborative digital-first ecosystem connecting retailers, brands, and financial services
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-wdv-gold text-wdv-navy hover:bg-yellow-400 font-semibold">
                  Join the Ecosystem
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wdv-navy">
                  Investor Deck
                </Button>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="animate-scale-in">
              <div className="relative">
                <div className="w-full h-96 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-wdv-gold rounded-full flex items-center justify-center">
                        <DollarSign className="h-8 w-8 text-wdv-navy" />
                      </div>
                      <span className="text-sm font-medium">Money</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-wdv-gold rounded-full flex items-center justify-center">
                        <TrendingUp className="h-8 w-8 text-wdv-navy" />
                      </div>
                      <span className="text-sm font-medium">Margin</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-wdv-gold rounded-full flex items-center justify-center">
                        <Search className="h-8 w-8 text-wdv-navy" />
                      </div>
                      <span className="text-sm font-medium">Discovery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Money Margin Discovery Explainer */}
      <section className="section-padding bg-gray-50">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              The Three Pillars of Our Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've built an integrated platform that addresses the core needs of India's retail ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center animate-slide-up border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-wdv-navy" />
                </div>
                <CardTitle className="text-2xl text-wdv-navy">Money</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Access to credit and financial services through WoFi - turning credit access from a barrier into an enabler for growth
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center animate-slide-up border-0 shadow-lg" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-wdv-navy">Margin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Better margins through direct B2B marketplace connections via WOGOM, eliminating middlemen and increasing profitability
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center animate-slide-up border-0 shadow-lg" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-wdv-navy">Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Brand discovery and market expansion through Brandverse, connecting global brands with India's retail network
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ecosystem Diagram */}
      <section className="section-padding">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Our Integrated Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three interconnected platforms working together to transform India's retail landscape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WOGOM */}
            <Link to="/wogom">
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group border-2 hover:border-wdv-blue">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-wdv-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <ShoppingCart className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-wdv-navy">WOGOM</CardTitle>
                  <CardDescription className="text-base">B2B Marketplace</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Sellers:</span>
                      <span className="font-semibold text-wdv-navy">450+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Retailers:</span>
                      <span className="font-semibold text-wdv-navy">6,000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span>SKUs:</span>
                      <span className="font-semibold text-wdv-navy">30,000+</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-wdv-blue group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* WoFi */}
            <Link to="/wofi">
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group border-2 hover:border-wdv-gold">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-wdv-gold rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <CreditCard className="h-10 w-10 text-wdv-navy" />
                  </div>
                  <CardTitle className="text-2xl text-wdv-navy">WoFi</CardTitle>
                  <CardDescription className="text-base">Financial Services</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Disbursed:</span>
                      <span className="font-semibold text-wdv-navy">₹271 Cr</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Retailers:</span>
                      <span className="font-semibold text-wdv-navy">1,259</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NPA:</span>
                      <span className="font-semibold text-green-600">0.48%</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-wdv-gold group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Brandverse */}
            <Link to="/brandverse">
              <Card className="h-full hover:shadow-xl transition-shadow cursor-pointer group border-2 hover:border-wdv-navy">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-wdv-navy rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Star className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-wdv-navy">Brandverse</CardTitle>
                  <CardDescription className="text-base">Brand Acceleration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>• Localized Market Entry</div>
                    <div>• Licensing & Operations</div>
                    <div>• Omnichannel Execution</div>
                  </div>
                  <div className="mt-4 flex items-center text-wdv-navy group-hover:translate-x-2 transition-transform">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Milestones Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Key Milestones
            </h2>
            <p className="text-xl text-gray-600">
              Our journey building India's retail ecosystem
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-wdv-blue"></div>
            
            <div className="space-y-12">
              {/* 2020 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-wdv-navy mb-2">Company Founded</h3>
                    <p className="text-gray-600">World Digital Ventures established with vision to transform B2B commerce</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-wdv-blue rounded-full">
                  <span className="text-white font-bold">2020</span>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2021 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-wdv-gold rounded-full">
                  <span className="text-wdv-navy font-bold">2021</span>
                </div>
                <div className="flex-1 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-wdv-navy mb-2">WOGOM Launch</h3>
                    <p className="text-gray-600">B2B marketplace platform launched, onboarding first wave of sellers and retailers</p>
                  </div>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-wdv-navy mb-2">WoFi Launch</h3>
                    <p className="text-gray-600">Financial services arm launched, providing credit solutions to MSMEs</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-wdv-navy rounded-full">
                  <span className="text-white font-bold">2022</span>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2023 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-wdv-blue rounded-full">
                  <span className="text-white font-bold">2023</span>
                </div>
                <div className="flex-1 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-semibold text-wdv-navy mb-2">Brandverse Launch</h3>
                    <p className="text-gray-600">Brand acceleration platform launched, completing the ecosystem triangle</p>
                  </div>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-2 border-wdv-gold">
                    <h3 className="text-lg font-semibold text-wdv-navy mb-2">Scale & Growth</h3>
                    <p className="text-gray-600">6,000+ retailers, ₹271 Cr disbursed, expanding across India</p>
                  </div>
                </div>
                <div className="relative flex items-center justify-center w-12 h-12 bg-wdv-gold rounded-full">
                  <span className="text-wdv-navy font-bold">2024</span>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Investment CTA */}
      <section className="section-padding bg-wdv-navy text-white">
        <div className="container-wdv">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Let's build India's most collaborative retail ecosystem together
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We seek strategic investors who understand the massive opportunity in India's retail transformation. 
              Join us in empowering millions of retailers with the tools they need to thrive in the digital economy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-wdv-gold text-wdv-navy hover:bg-yellow-400 font-semibold">
                <Link to="/investors" className="flex items-center">
                  View Investment Opportunity
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wdv-navy">
                Download Pitch Deck
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
