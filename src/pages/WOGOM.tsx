
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, Users, Package, TrendingUp, CheckCircle, Star, Zap } from "lucide-react";

const WOGOM = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding">
        <div className="container-wdv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-wdv-gold text-wdv-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <ShoppingCart className="h-4 w-4 mr-2" />
                B2B Marketplace
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                WOGOM
              </h1>
              <h2 className="text-xl lg:text-2xl mb-8 text-blue-100">
                Digital-first B2B marketplace built to solve the fragmented supply chain challenges in India's retail ecosystem
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-wdv-gold text-wdv-navy hover:bg-yellow-400 font-semibold">
                  Join as Retailer
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wdv-navy">
                  Become a Seller
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-wdv-gold mb-2">450+</div>
                    <div className="text-sm text-blue-100">Sellers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-wdv-gold mb-2">6K+</div>
                    <div className="text-sm text-blue-100">Retailers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-wdv-gold mb-2">30K+</div>
                    <div className="text-sm text-blue-100">SKUs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solution Narrative */}
      <section className="section-padding">
        <div className="container-wdv">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
                Transforming India's Fragmented Retail Supply Chain
              </h2>
              <p className="text-xl text-gray-600">
                From problem to solution - how WOGOM is revolutionizing B2B commerce
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              {/* Problem */}
              <div className="animate-slide-up">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-red-700 mb-4">The Problem</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Fragmented supply chain with multiple intermediaries
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Poor margins due to middlemen markup
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Limited product discovery and selection
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Inefficient order management and tracking
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Cash flow challenges for retailers
                    </li>
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-green-700 mb-4">Our Solution</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5" />
                      Direct B2B marketplace connecting manufacturers to retailers
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5" />
                      Eliminate middlemen to improve margins by 15-20%
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5" />
                      Comprehensive catalog with 30,000+ SKUs
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5" />
                      Digital ordering with real-time tracking
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 h-5 w-5 mt-0.5" />
                      Integrated credit solutions via WoFi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
              Seven key differentiators that make WOGOM the preferred B2B marketplace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Technology-First Approach",
                description: "Advanced platform built for scale with AI-powered recommendations and analytics"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Deep Market Understanding",
                description: "Years of experience in Indian retail ecosystem with localized solutions"
              },
              {
                icon: <Package className="h-8 w-8" />,
                title: "Comprehensive Catalog",
                description: "30,000+ SKUs across electronics, home appliances, and consumer goods"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Proven Traction",
                description: "6,000+ active retailers and 450+ sellers with consistent growth"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Quality Assurance",
                description: "Rigorous seller verification and product quality checks"
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "End-to-End Solution",
                description: "From discovery to delivery with integrated financial services"
              },
              {
                icon: <ShoppingCart className="h-8 w-8" />,
                title: "Seamless Experience",
                description: "User-friendly interface designed for both tech-savvy and traditional retailers"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-wdv-blue rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl text-wdv-navy">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traction Stats */}
      <section className="section-padding">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Market Traction & Growth
            </h2>
            <p className="text-xl text-gray-600">
              Consistent growth across all key metrics demonstrates market validation
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <Card className="text-center bg-wdv-navy text-white">
              <CardContent className="p-8">
                <div className="text-4xl font-bold mb-2">450+</div>
                <div className="text-lg">Active Sellers</div>
                <div className="text-sm text-blue-200 mt-2">Verified manufacturers</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-wdv-blue text-white">
              <CardContent className="p-8">
                <div className="text-4xl font-bold mb-2">6,000+</div>
                <div className="text-lg">Retailers</div>
                <div className="text-sm text-blue-200 mt-2">Active monthly users</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-wdv-gold text-wdv-navy">
              <CardContent className="p-8">
                <div className="text-4xl font-bold mb-2">30,000+</div>
                <div className="text-lg">SKUs</div>
                <div className="text-sm mt-2">Product catalog</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-green-600 text-white">
              <CardContent className="p-8">
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg">Retention</div>
                <div className="text-sm text-green-200 mt-2">Annual retailer retention</div>
              </CardContent>
            </Card>
          </div>

          {/* GMV Growth Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-wdv-navy mb-8 text-center">GMV Growth Trajectory</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700">FY22</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-8">
                    <div className="bg-wdv-blue rounded-full h-8 flex items-center justify-end pr-4" style={{ width: '25%' }}>
                      <span className="text-white font-medium">₹50 Cr</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700">FY23</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-8">
                    <div className="bg-wdv-gold rounded-full h-8 flex items-center justify-end pr-4" style={{ width: '50%' }}>
                      <span className="text-wdv-navy font-medium">₹125 Cr</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700">FY24</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-8">
                    <div className="bg-wdv-navy rounded-full h-8 flex items-center justify-end pr-4" style={{ width: '75%' }}>
                      <span className="text-white font-medium">₹280 Cr</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700">FY25E</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-8">
                    <div className="bg-green-600 rounded-full h-8 flex items-center justify-end pr-4" style={{ width: '100%' }}>
                      <span className="text-white font-medium">₹500 Cr</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-wdv-navy text-white">
        <div className="container-wdv">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of retailers and sellers who are already benefiting from WOGOM's digital-first marketplace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-wdv-gold text-wdv-navy hover:bg-yellow-400 font-semibold">
                Start Selling on WOGOM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wdv-navy">
                Join as Retailer
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WOGOM;
