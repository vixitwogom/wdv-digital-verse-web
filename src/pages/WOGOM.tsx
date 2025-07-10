
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ShoppingCart, Users, Package, TrendingUp, CheckCircle, Star, Zap } from "lucide-react";
import { Player } from "@lottiefiles/react-lottie-player";
import LocationBarChart from "@/components/ui/LocationBarChart";
import GMVBarChart from "@/components/ui/GMVBarChart";

const WOGOM = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-[#012345] text-white py-6 md:py-10 2xl:py-20">
        <div className="container-wdv px-4 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-20 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <div className="text-white inline-flex items-center bg-wdv-gold text-wdv-navy px-4 py-2 rounded-full text-sm 2xl:text-base font-semibold mb-6">
                <ShoppingCart className="h-4 w-4 mr-2 2xl:h-5 2xl:w-5" />
                B2B Marketplace
              </div>

              <h1 className="text-3xl lg:text-5xl 2xl:text-5xl font-bold mb-6 leading-tight">
                <span className="whitespace-nowrap">World Goods Marketplace</span>
                <span className="block text-lg leading-[2]">(est. 2021)</span>
              </h1>


              <h2 className="text-lg lg:text-xl 2xl:text-2xl mb-8 text-white 2xl:leading-snug">
                WOGOM is a digital-first B2B marketplace built to solve the Indian retail ecosystem's discovery roadblock.
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 2xl:gap-6">
                <Button size="lg" className="bg-white text-[#012345] hover:bg-white hover:text-[#012345] font-semibold text-base 2xl:text-lg px-6 py-3 2xl:px-8 2xl:py-4"
                onClick={() => window.open("https://retailer.wogom.com/", "_blank")}>
                  Join as Retailer
                  <ArrowRight className="ml-2 h-5 w-5 2xl:h-6 2xl:w-6" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-[#012345] hover:bg-white hover:text-[#012345]  border-none text-base 2xl:text-lg px-6 py-3 2xl:px-8 2xl:py-4"
                onClick={() => window.open("https://seller.wogom.com/", "_blank")}>
                  Become a Seller
                </Button>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col">
              {/* Lottie animation */}
              <div className="w-[60%] 2xl:w-[80%] flex justify-center items-center mx-auto">
                <Player
                  autoplay
                  loop
                  speed={1}
                  src="./animations/hyperlocaldata.json"
                  background="transparent"
                />
              </div>

              {/* Stats Section */}
              <div className="animate-scale-in">
                <div className="bg-white backdrop-blur-sm rounded-2xl p-8 2xl:p-10">
                  <div className="grid grid-cols-3 gap-6 2xl:gap-10 text-center">
                    {[
                      { value: "450+", label: "Sellers" },
                      { value: "6K+", label: "Retailers" },
                      { value: "30K+", label: "SKUs" },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="text-3xl 2xl:text-5xl font-bold mb-2 text-[#012345]">{item.value}</div>
                        <div className="text-sm 2xl:text-lg text-[#012345]">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Problem Solution Narrative */}
      <section className="section-padding bg-white">
        <div className="container-wdv">
          <div className=" mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
                Transforming India's Fragmented Retail Supply Chain
              </h2>
              {/* <p className="text-xl text-gray-600">
                From problem to solution - how WOGOM is revolutionizing B2B commerce
              </p> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[8rem] 2xl:gap-[160px] mb-16">
              {/* Problem */}
              <div className="animate-slide-up h-full">
                <div className="bg-gray-100 border-l-4 border-[#012345] p-6 rounded-lg h-full flex flex-col justify-start">
                  <h3 className="text-2xl font-bold text-[#012345] mb-4">The Problem</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#012345] mr-2">•</span>
                      Fragmented supply chain with multiple intermediaries
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#012345] mr-2">•</span>
                      Poor margins due to middlemen markup
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#012345] mr-2">•</span>
                      Limited product discovery and selection
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#012345] mr-2">•</span>
                      Inefficient order management and tracking
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#012345] mr-2">•</span>
                      Cash flow challenges for retailers
                    </li>
                  </ul>
                </div>
              </div>

              {/* Solution */}
              <div className="animate-slide-up h-full" style={{ animationDelay: '0.2s' }}>
                <div className="bg-gray-100 border-l-4 border-[#012345] p-6 rounded-lg h-full flex flex-col justify-start">
                  <h3 className="text-2xl font-bold text-[#012345] mb-4">Our Solution</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="text-[#012345] mr-2 h-5 w-5 mt-0.5" />
                      Direct B2B marketplace connecting manufacturers to retailers
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#012345] mr-2 h-5 w-5 mt-0.5" />
                      Comprehensive catalog with 30,000+ SKUs
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#012345] mr-2 h-5 w-5 mt-0.5" />
                      Digital ordering with real-time tracking
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="text-[#012345] mr-2 h-5 w-5 mt-0.5" />
                      Integrated credit solutions via Wofi
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Stand Out */}
      <section className="section-padding bg-gray-100">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#012345] mb-6">
              Why We Stand Out
            </h2>
            {/* <p className="text-xl text-gray-600">
              Seven key differentiators that make WOGOM the preferred B2B marketplace
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Digital-First Approach​",
                // description: "Advanced platform built for scale with AI-powered recommendations and analytics"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Product & Pricing Discovery​​",
                // description: "Years of experience in Indian retail ecosystem with localized solutions"
              },
              {
                icon: <Package className="h-8 w-8" />,
                title: "Hyperlocal Delivery​",
                // description: "30,000+ SKUs across electronics, home appliances, and consumer goods"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Ecosystem Advantage",
                // description: "6,000+ active retailers and 450+ sellers with consistent growth"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "High-Margin Picks​​",
                // description: "Rigorous seller verification and product quality checks"
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Authenticated Catalogues​​",
                // description: "From discovery to delivery with integrated financial services"
              },
              {
                icon: <ShoppingCart className="h-8 w-8" />,
                title: "Asset-Light Model​",
                // description: "User-friendly interface designed for both tech-savvy and traditional retailers"
              },
              {
                icon: <CheckCircle className="h-8 w-8" />,
                title: "Retailer First Marketplace​​",
                // description: "User-friendly interface designed for both tech-savvy and traditional retailers"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center bg-white border-none hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 bg-wdv-blue rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                    {item.icon}
                  </div>
                  <CardTitle className="text-xl text-[#012345]">{item.title}</CardTitle>
                </CardHeader>
                {/* <CardContent>
                  <CardDescription className="text-base">{item.description}</CardDescription>
                </CardContent> */}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Traction Stats */}
      <section className="section-padding bg-white">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#012345] mb-6">
              Market Traction & Growth
            </h2>
          </div>

          {/* GMV Growth Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-wdv-navy mb-8 text-center">
              GMV Growth Trajectory
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
              <GMVBarChart />
              <LocationBarChart />
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-10 pt-20 bg-gray-100 text-white">
        <div className="container-wdv">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#012345]">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-[#012345] mb-8">
              Join thousands of retailers and sellers who are already benefiting from WOGOM's digital-first marketplace
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#1068b2] text-white hover:bg-[#1068b2] hover:text-white font-semibold" onClick={() => window.open("https://seller.wogom.com/", "_blank")}>
                Start Selling on WOGOM
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-[#1068b2] text-white hover:bg-[#1068b2] hover:text-white font-semibold"
              onClick={() => window.open("https://retailer.wogom.com/", "_blank")}>
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
