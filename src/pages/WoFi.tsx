
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CreditCard, TrendingUp, Shield, Zap, CheckCircle, Clock, Users, DollarSign } from "lucide-react";

const WoFi = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding">
        <div className="container-wdv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-wdv-gold text-wdv-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <CreditCard className="h-4 w-4 mr-2" />
                Financial Services
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                WoFi
              </h1>
              <h2 className="text-xl lg:text-2xl mb-4 text-blue-100">
                Digital-first fintech tailored for MSMEs in the retail ecosystem
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Turns credit access from a barrier into an enabler, empowering retailers with flexible financial solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-wdv-gold text-wdv-navy hover:bg-yellow-400 font-semibold">
                  Apply for Credit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wdv-navy">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-wdv-gold mb-2">₹271 Cr</div>
                    <div className="text-sm text-blue-100">Total Disbursed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-wdv-gold mb-2">1,259</div>
                    <div className="text-sm text-blue-100">Active Retailers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-2">0.48%</div>
                    <div className="text-sm text-blue-100">NPA Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-wdv-gold mb-2">67 days</div>
                    <div className="text-sm text-blue-100">Avg Repayment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Stand Out */}
      <section className="section-padding">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Why We Stand Out
            </h2>
            <p className="text-xl text-gray-600">
              Four key differentiators that make WoFi the preferred fintech partner for MSMEs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Digital-First Approach",
                description: "Fully automated loan processing with minimal paperwork and quick approvals within 24-48 hours"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Risk-Based Pricing",
                description: "Advanced analytics and ecosystem data to offer competitive rates with industry-leading NPA of 0.48%"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "MSME Focus",
                description: "Tailored products specifically designed for small and medium retailers with flexible repayment options"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Ecosystem Integration",
                description: "Seamlessly integrated with WOGOM marketplace for streamlined purchase financing and working capital"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-wdv-gold rounded-xl flex items-center justify-center text-wdv-navy">
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-wdv-navy">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Our Financial Products
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive credit solutions designed for every stage of your business journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Purchase Invoice Discounting */}
            <Card className="h-full hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-wdv-navy text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wdv-gold rounded-lg flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-wdv-navy" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Purchase Invoice Discounting</CardTitle>
                    <CardDescription className="text-blue-200">Immediate working capital</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Get instant liquidity against your purchase invoices. Perfect for maintaining cash flow while scaling operations.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Up to 80% invoice value</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24-hour approval</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Competitive interest rates</li>
                </ul>
              </CardContent>
            </Card>

            {/* Invoice Discounting (Seller) */}
            <Card className="h-full hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-wdv-blue text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wdv-gold rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-wdv-navy" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Invoice Discounting (Seller)</CardTitle>
                    <CardDescription className="text-blue-200">Seller financing solutions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Help your suppliers get paid faster with our seller financing program, strengthening your supply chain relationships.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Flexible terms</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Quick processing</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Ecosystem integration</li>
                </ul>
              </CardContent>
            </Card>

            {/* Seasonal Term Loan */}
            <Card className="h-full hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-wdv-gold text-wdv-navy rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wdv-navy rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Seasonal Term Loan</CardTitle>
                    <CardDescription className="text-gray-700">Festival & seasonal financing</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Prepare for peak seasons with dedicated term loans for inventory buildup during festivals and high-demand periods.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Seasonal repayment structure</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Higher loan amounts</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Festival-focused timing</li>
                </ul>
              </CardContent>
            </Card>

            {/* Supply Chain Financing */}
            <Card className="h-full hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-green-600 text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wdv-gold rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-wdv-navy" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Supply Chain Financing</CardTitle>
                    <CardDescription className="text-green-200">End-to-end financing</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Comprehensive financing solutions that cover your entire supply chain from procurement to sales, optimizing cash flow.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Holistic approach</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Optimized cash flow</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Digital tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="section-padding bg-wdv-navy text-white">
        <div className="container-wdv">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Our Performance Metrics
            </h2>
            <p className="text-xl text-blue-100">
              Industry-leading performance backed by robust risk management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-wdv-gold mb-2">₹271 Cr</div>
              <div className="text-lg text-blue-100 mb-2">Total Disbursed</div>
              <div className="text-sm text-gray-300">Cumulative loan amount</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-wdv-gold mb-2">1,259</div>
              <div className="text-lg text-blue-100 mb-2">Active Retailers</div>
              <div className="text-sm text-gray-300">Unique borrowers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">0.48%</div>
              <div className="text-lg text-blue-100 mb-2">NPA Rate</div>
              <div className="text-sm text-gray-300">Non-performing assets</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-wdv-gold mb-2">67</div>
              <div className="text-lg text-blue-100 mb-2">Avg Repayment</div>
              <div className="text-sm text-gray-300">Days to repay</div>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Loan Performance Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">92%</div>
                <div className="text-blue-100">On-time Repayments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">7.5%</div>
                <div className="text-blue-100">Early Repayments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400 mb-2">0.48%</div>
                <div className="text-blue-100">Defaults</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wdv">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Ready to Access Credit?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join over 1,259 retailers who have already transformed their business with WoFi's financial solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-wdv-gold text-wdv-navy hover:bg-yellow-400 font-semibold">
                Apply for Credit Now
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

export default WoFi;
