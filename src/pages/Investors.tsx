
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, DollarSign, Users, Target, CheckCircle, Download } from "lucide-react";

const Investors = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding">
        <div className="container-wdv">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Investment Opportunity
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 animate-slide-up">
              Partner with us to build India's most collaborative retail ecosystem
            </p>
            <p className="text-lg text-blue-200 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              A unique opportunity to invest in the convergence of B2B commerce, fintech, 
              and brand acceleration in India's $1.3 trillion retail market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-wdv-gold text-wdv-navy hover:bg-yellow-400 font-semibold">
                <Download className="mr-2 h-5 w-5" />
                Download Pitch Deck
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-wdv-navy">
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="section-padding">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Investment Highlights
            </h2>
            <p className="text-xl text-gray-600">
              Key reasons why WDV represents a compelling investment opportunity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up">
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-wdv-navy">Proven Traction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>6,000+ Active Retailers</div>
                  <div>450+ Verified Sellers</div>
                  <div>₹271 Cr Disbursed</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-wdv-navy" />
                </div>
                <CardTitle className="text-lg text-wdv-navy">Strong Unit Economics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>0.48% NPA Rate</div>
                  <div>Path to Profitability</div>
                  <div>Scalable Model</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-wdv-navy">Experienced Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>15+ Years Experience</div>
                  <div>Proven Track Record</div>
                  <div>Deep Domain Expertise</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-wdv-navy">Market Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>$1.3T Retail Market</div>
                  <div>Growing Digitization</div>
                  <div>Underserved MSMEs</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GMV Growth Chart */}
      <section className="section-padding bg-gray-50">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              GMV Growth Trajectory
            </h2>
            <p className="text-xl text-gray-600">
              Consistent growth demonstrating strong market validation and execution capability
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700 w-20">FY22</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-12">
                    <div className="bg-wdv-blue rounded-full h-12 flex items-center justify-end pr-6" style={{ width: '10%' }}>
                      <span className="text-white font-bold">₹50 Cr</span>
                    </div>
                  </div>
                </div>
                <div className="text-right w-32">
                  <div className="text-sm text-green-600 font-medium">+150% YoY</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700 w-20">FY23</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-12">
                    <div className="bg-wdv-gold rounded-full h-12 flex items-center justify-end pr-6" style={{ width: '25%' }}>
                      <span className="text-wdv-navy font-bold">₹125 Cr</span>
                    </div>
                  </div>
                </div>
                <div className="text-right w-32">
                  <div className="text-sm text-green-600 font-medium">+124% YoY</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700 w-20">FY24</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-12">
                    <div className="bg-wdv-navy rounded-full h-12 flex items-center justify-end pr-6" style={{ width: '56%' }}>
                      <span className="text-white font-bold">₹280 Cr</span>
                    </div>
                  </div>
                </div>
                <div className="text-right w-32">
                  <div className="text-sm text-green-600 font-medium">+124% YoY</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700 w-20">FY25E</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-12">
                    <div className="bg-green-600 rounded-full h-12 flex items-center justify-end pr-6" style={{ width: '100%' }}>
                      <span className="text-white font-bold">₹500 Cr</span>
                    </div>
                  </div>
                </div>
                <div className="text-right w-32">
                  <div className="text-sm text-green-600 font-medium">+79% YoY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breakeven Table */}
      <section className="section-padding">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Path to Profitability
            </h2>
            <p className="text-xl text-gray-600">
              Clear roadmap to breakeven with strong unit economics and scalable operations
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="bg-wdv-navy text-white p-6">
              <h3 className="text-2xl font-bold text-center">Financial Projections (₹ Crores)</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Metric</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">FY23</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">FY24</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">FY25E</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">FY26E</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Revenue</td>
                    <td className="px-6 py-4 text-center">₹12.5</td>
                    <td className="px-6 py-4 text-center">₹28.0</td>
                    <td className="px-6 py-4 text-center font-semibold text-wdv-blue">₹50.0</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">₹85.0</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">EBITDA</td>
                    <td className="px-6 py-4 text-center text-red-600">-₹8.2</td>
                    <td className="px-6 py-4 text-center text-red-600">-₹5.6</td>
                    <td className="px-6 py-4 text-center font-semibold text-yellow-600">₹2.5</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">₹18.7</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">EBITDA Margin</td>
                    <td className="px-6 py-4 text-center text-red-600">-65.6%</td>
                    <td className="px-6 py-4 text-center text-red-600">-20.0%</td>
                    <td className="px-6 py-4 text-center font-semibold text-yellow-600">5.0%</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">22.0%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Cash Flow</td>
                    <td className="px-6 py-4 text-center text-red-600">-₹12.3</td>
                    <td className="px-6 py-4 text-center text-red-600">-₹8.9</td>
                    <td className="px-6 py-4 text-center font-semibold text-yellow-600">-₹1.2</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600">₹15.4</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-green-50 p-4 text-center">
              <span className="text-green-700 font-semibold">Breakeven Expected: Q4 FY25</span>
            </div>
          </div>
        </div>
      </section>

      {/* Group Structure */}
      <section className="section-padding bg-gray-50">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Group Structure
            </h2>
            <p className="text-xl text-gray-600">
              Integrated ecosystem with clear business divisions and strategic synergies
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Parent Company */}
              <div className="text-center mb-12">
                <div className="inline-block bg-wdv-navy text-white px-8 py-4 rounded-xl">
                  <h3 className="text-2xl font-bold">World Digital Ventures</h3>
                  <p className="text-blue-200">Holding Company</p>
                </div>
              </div>

              {/* Subsidiaries */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-wdv-blue text-white p-6 rounded-xl mb-4">
                    <h4 className="text-xl font-bold mb-2">WOGOM</h4>
                    <p className="text-blue-200 text-sm">B2B Marketplace</p>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Revenue: Transaction fees</li>
                    <li>• Model: Commission-based</li>
                    <li>• Growth: 6K+ retailers</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-wdv-gold text-wdv-navy p-6 rounded-xl mb-4">
                    <h4 className="text-xl font-bold mb-2">WoFi</h4>
                    <p className="text-gray-700 text-sm">Financial Services</p>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Revenue: Interest income</li>
                    <li>• Model: Lending platform</li>
                    <li>• Growth: ₹271 Cr disbursed</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="bg-gradient-to-r from-wdv-navy to-wdv-blue text-white p-6 rounded-xl mb-4">
                    <h4 className="text-xl font-bold mb-2">Brandverse</h4>
                    <p className="text-blue-200 text-sm">Brand Acceleration</p>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Revenue: Service fees</li>
                    <li>• Model: Consulting & ops</li>
                    <li>• Growth: 25+ brands</li>
                  </ul>
                </div>
              </div>

              {/* Synergies */}
              <div className="mt-12 bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-wdv-navy mb-4 text-center">Strategic Synergies</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>• Cross-platform user acquisition</div>
                  <div>• Shared data and analytics</div>
                  <div>• Integrated service offerings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Partner */}
      <section className="section-padding bg-wdv-navy text-white">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              We Seek Strategic Investors Who
            </h2>
            <p className="text-xl text-blue-100">
              Partner profile for maximum value creation and ecosystem growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-wdv-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-wdv-gold">Understand the Indian Market</h3>
                  <p className="text-blue-100">Deep appreciation for India's retail ecosystem complexity and growth potential</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-wdv-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-wdv-gold">Bring Strategic Value</h3>
                  <p className="text-blue-100">Beyond capital - offer networks, expertise, and market access</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-wdv-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-wdv-gold">Have Patient Capital</h3>
                  <p className="text-blue-100">Long-term investment horizon aligned with ecosystem building approach</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-wdv-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-wdv-gold">Support Scale Ambitions</h3>
                  <p className="text-blue-100">Committed to helping us become India's leading retail ecosystem platform</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-wdv-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-wdv-gold">Share Our Values</h3>
                  <p className="text-blue-100">Collaborative approach to building sustainable, impactful businesses</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-wdv-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-wdv-gold">Understand Tech + Fintech</h3>
                  <p className="text-blue-100">Experience with marketplace and financial services business models</p>
                </div>
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
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us in building India's most collaborative retail ecosystem. Let's create extraordinary value together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-wdv-gold text-wdv-navy hover:bg-yellow-400 font-semibold">
                <Download className="mr-2 h-5 w-5" />
                Download Investment Deck
              </Button>
              <Button size="lg" variant="outline" className="border-wdv-navy text-wdv-navy hover:bg-wdv-navy hover:text-white">
                Schedule Investor Meeting
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;
