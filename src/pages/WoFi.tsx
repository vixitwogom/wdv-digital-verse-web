import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CreditCard, TrendingUp, Shield, Zap, CheckCircle, Clock, Users, DollarSign, Send } from "lucide-react";
import CustomModal from "@/components/ui/CustomModal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const WoFi = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#012345] text-white py-32 md:py-[150px] 2xl:py-[200px]">
        <div className="container-wdv px-4 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 2xl:gap-20 items-center">
            {/* Left Section - Content */}
            <div className="animate-fade-in space-y-6 2xl:space-y-10">
              <div className="inline-flex items-center bg-wdv-gold text-wdv-navy px-4 py-2 rounded-full text-sm 2xl:text-base font-semibold mb-4">
                <CreditCard className="h-4 w-4 2xl:h-5 2xl:w-5 mr-2" />
                Financial Services
              </div>

              <h1 className="text-3xl lg:text-5xl 2xl:text-5xl font-bold mb-6 leading-tight">
                <span className="whitespace-nowrap">World Finverse</span>
                <span className="block text-lg leading-[2]">(est. 2024)</span>
              </h1>

              <h2 className="text-xl lg:text-2xl 2xl:text-3xl text-white leading-snug">
                World Finverse (Wofi) is digital-first fintech tailored for MSMEs, Retailers & Businesses.
              </h2>

              {/* <p className="text-lg 2xl:text-xl text-white leading-relaxed">
                Wofi turns credit access from a barrier into a growth engine for businesses and retailers via digital, collateral-free lending.
              </p> */}

              <div className="flex flex-col sm:flex-row gap-4 2xl:gap-6">
                <Button
                  size="lg"
                  className="bg-white text-[#012345] hover:bg-white hover:text-[#012345] font-semibold text-base 2xl:text-lg px-6 py-3 2xl:px-8 2xl:py-4"
                  onClick={() => window.open("https://worldfinverse.com/", "_blank")}>
                  Apply for Credit
                  <ArrowRight className="ml-2 h-5 w-5 2xl:h-6 2xl:w-6" />
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-[#012345] hover:bg-white hover:text-[#012345] font-semibold border-none text-base 2xl:text-lg px-6 py-3 2xl:px-8 2xl:py-4"
                >
                  Learn More
                </Button> */}
              </div>
            </div>

            {/* Right Section - Stats */}
            <div className="animate-scale-in">
              <div className="bg-white backdrop-blur-sm rounded-2xl p-8 2xl:p-12">
                <div className="grid grid-cols-2 gap-6 2xl:gap-10 text-center">
                  {[
                    { value: '₹271 Cr', label: 'Total Disbursed' },
                    { value: '1,259', label: 'Active Retailers' },
                    { value: '< 0.50%', label: 'NPA Rate' },
                    { value: '67 days', label: 'Avg Repayment' },
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="text-3xl 2xl:text-5xl font-bold text-[#012345] mb-2">
                        {item.value}
                      </div>
                      <div className="text-sm 2xl:text-lg text-[#012345]">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Why We Stand Out */}
      <section className="section-padding bg-white">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#012345] mb-6">
              Why We Stand Out
            </h2>
            {/* <p className="text-xl text-gray-600">
              Four key differentiators that make WoFi the preferred fintech partner for MSMEs
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Digital-First Onboarding​​​​",
                // description: "Fully automated loan processing with minimal paperwork and quick approvals within 24-48 hours"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Collateral-Free Capital​​​",
                // description: "Advanced analytics and ecosystem data to offer competitive rates with industry-leading NPA of 0.48%"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Flexible and Fast​​​",
                // description: "Tailored products specifically designed for small and medium retailers with flexible repayment options"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "Trusted & Transparent ​​​",
                // description: "Seamlessly integrated with WOGOM marketplace for streamlined purchase financing and working capital"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Ecosystem Advantage​​​ ​​​",
                // description: "Seamlessly integrated with WOGOM marketplace for streamlined purchase financing and working capital"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Built-in Safeguards​ ​​​",
                // description: "Seamlessly integrated with WOGOM marketplace for streamlined purchase financing and working capital"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg bg-[#1068b2] transition-shadow animate-slide-up border-none" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-wdv-navy">
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                {/* <CardContent>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardContent> */}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-100">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#012345] mb-6">
              Our Financial Products
            </h2>
            {/* <p className="text-xl text-gray-600">
              Comprehensive credit solutions designed for every stage of your business journey
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Purchase Invoice Discounting */}
            <Card className="h-full hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-[#1068b2] text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wdv-gold rounded-lg flex items-center justify-center">
                    <CreditCard className="h-6 w-6 text-wdv-navy" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Invoice Discounting</CardTitle>
                    {/* <CardDescription className="text-blue-200">Immediate working capital</CardDescription> */}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  WOFI offers seamless invoice discounting to help distributors unlock working capital instantly.
                  Instead of extending credit retailer-by-retailer, WOFI assigns a single credit limit and disburses funds against submitted sales invoices.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Collateral Free </li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Quick Disbursal</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Easy and Flexible Repayment Facility</li>
                </ul>
              </CardContent>
            </Card>

            {/* Invoice Discounting (Seller) */}
            <Card className="h-full hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-[#1068b2] text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wdv-gold rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-wdv-navy" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Purchase Invoice Discounting</CardTitle>
                    {/* <CardDescription className="text-blue-200">Seller financing solutions</CardDescription> */}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  WOFI’s Purchase Invoice Discounting lets retailers buy now and pay later, after goods are delivered.
                  We settle the invoice directly with the distributor, giving retailers up to 60 days to repay.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />No upfront collateral</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Daily interest calculation</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Fast Delivery</li>
                </ul>
              </CardContent>
            </Card>

            {/* Seasonal Term Loan */}
            <Card className="h-full hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-[#1068b2] text-wdv-navy rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wdv-gold rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Term Loan</CardTitle>
                    {/* <CardDescription className="text-blue-200">Festival & seasonal financing</CardDescription> */}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  WOFI Term Loans provide upfront capital with easy EMIs, designed to support high-value business needs like bulk inventory purchases/seasonal purchases. We help you seize big opportunities even when liquidity is tight.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />High Loan Amount</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Quick Disbursal</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Easy EMI Structure</li>
                </ul>
              </CardContent>
            </Card>

            {/* Supply Chain Financing */}
            <Card className="h-full hover:shadow-xl transition-shadow border-0 bg-white">
              <CardHeader className="bg-[#1068b2] text-white rounded-t-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-wdv-gold rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-wdv-navy" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Supply Chain Finance</CardTitle>
                    {/* <CardDescription className="text-green-200">End-to-end financing</CardDescription> */}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  WOFI’s Supply Chain Finance empowers retailers with faster, collateral-free credit while involving distributors in the lending process. Retailers can secure large loans (e.g., ₹50 lakhs) to fund day-to-day capital requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Faster access to credit </li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Higher loan amount</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Strengthens ties with retail partners</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      {/* <section className="section-padding bg-white text-[white]">
        <div className="container-wdv">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-[#012345] font-bold mb-6">
              Our Performance Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#012345] mb-2">₹271 Cr</div>
              <div className="text-lg text-[#012345] mb-2">Total Disbursed</div>
              <div className="text-sm text-[#012345]">Cumulative loan amount</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#012345] mb-2">1,259</div>
              <div className="text-lg text-[#012345] mb-2">Active Retailers</div>
              <div className="text-sm text-[#012345]">Unique borrowers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#012345] mb-2">0.48%</div>
              <div className="text-lg text-[#012345] mb-2">NPA Rate</div>
              <div className="text-sm text-[#012345]">Non-performing assets</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#012345] mb-2">67</div>
              <div className="text-lg text-[#012345] mb-2">Avg Repayment</div>
              <div className="text-sm text-[#012345]">Days to repay</div>
            </div>
          </div>

          <div className="mt-12 bg-[#1068b2] backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Loan Performance Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">92%</div>
                <div className="text-blue-100">On-time Repayments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">7.5%</div>
                <div className="text-blue-100">Early Repayments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">0.48%</div>
                <div className="text-blue-100">NPA</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-wdv">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#012345] mb-6">
              Ready to Access Credit?
            </h2>
            {/* <p className="text-xl text-gray-600 mb-8">
              Join over 1,259 retailers who have already transformed their business with WoFi's financial solutions
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#1068b2] text-white hover:bg-[#1068b2] hover:text-white font-semibold"
                onClick={() => window.open("https://worldfinverse.com/", "_blank")}>
                Apply for Credit Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="bg-[#1068b2] text-white hover:bg-[#1068b2] hover:text-white font-semibold border-none"
                onClick={openModal}>
                Schedule Consultation
              </Button>
              <CustomModal isOpen={isModalOpen} onClose={closeModal} title="Schedule Consulation">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-left text-[#012345] mb-2">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full border-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-left text-sm font-semibold text-[#012345] mb-2">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-left text-sm font-semibold text-[#012345] mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full border-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-left text-sm font-semibold text-[#012345] mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full border-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-left text-sm font-semibold text-[#012345] mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Enter company name"
                      className="w-full border-black"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-left text-sm font-semibold text-[#012345] mb-2">
                      Area of Interest *
                    </label>
                    <select
                      id="interest"
                      className="w-full px-3 py-2 border border-black text-[#012345] rounded-lg focus:outline-none focus:ring-2 focus:ring-wdv-blue focus:border-transparent"
                    >
                      <option value="">Select your interest</option>
                      <option value="retailer">Invoice Discounting</option>
                      <option value="seller">Purchase Invoice Discounting</option>
                      <option value="brand">Term Loan</option>
                      <option value="investor">Supply Chain Finance</option>
                      {/* <option value="credit">Credit Solutions</option> */}
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-left text-sm font-semibold text-[#012345] mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your requirements, questions, or how we can help you..."
                      className="w-full h-32 border-black"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[#1068b2] text-white hover:bg-[#1068b2] font-semibold">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CustomModal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WoFi;
