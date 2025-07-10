
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Star, Globe, Settings, Truck, CheckCircle, TrendingUp, Users, Zap, Target, Award, Send } from "lucide-react";
import CustomModal from "@/components/ui/CustomModal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DynamicForm from "@/components/ui/DynamicForm";
import { FieldConfig } from "@/types/types";
import { useToast } from "@/components/ui/use-toast";

const Brandverse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    toast({
      title: "Thank You",
      // description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
    closeModal();
  };


  const formFields: FieldConfig[] = [
    { name: "firstName", label: "First Name", type: "text", placeholder: "Enter your first name", required: true },
    { name: "lastName", label: "Last Name", type: "text", placeholder: "Enter your last name", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
    { name: "company", label: "Company Name", type: "text", placeholder: "Enter company name" },
    {
      name: "interest",
      label: "Area of Interest",
      type: "select",
      required: true,
      options: [
        { label: "Market Entry", value: "retailer" },
        { label: "Licensing & Ops", value: "seller" },
        { label: "Omnichannel", value: "brand" },
        { label: "Complete Brand Acceleration", value: "investor" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell us about your requirements...",
      required: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#012345] text-white py-28 md:py-36 2xl:py-60">
        <div className="container-wdv">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center bg-wdv-gold text-wdv-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="h-4 w-4 mr-2" />
                Brand Acceleration
              </div>
              <h1 className="text-3xl lg:text-5xl 2xl:text-5xl font-bold mb-6 leading-tight">
                <span className="whitespace-nowrap">World Brandverse</span>
                <span className="block text-lg leading-[2]">(est. 2024)</span>
              </h1>
              <h2 className="text-xl lg:text-2xl mb-8 text-white">
                Your gateway to India's retail ecosystem - accelerating brand growth through strategic market entry and execution
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-[#012345] hover:bg-white hover:text-[#012345] font-semibold"
                  onClick={openModal}>
                  Partner with Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <CustomModal isOpen={isModalOpen} onClose={closeModal} title="Schedule Meeting">
                  <DynamicForm fields={formFields} onSubmit={handleFormSubmit} />
                </CustomModal>
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="bg-white backdrop-blur-sm rounded-2xl p-8">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[#012345]">Market Entry</span>
                    <div className="text-2xl font-bold text-[#012345]">✓</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#012345]">Licensing & Ops</span>
                    <div className="text-2xl font-bold text-[#012345]">✓</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#012345]">Omnichannel</span>
                    <div className="text-2xl font-bold text-[#012345]">✓</div>
                  </div>
                  <div className="text-center mt-4 pt-4 border-t border-black/20">
                    <div className="text-sm text-[#012345]">Complete Brand Acceleration</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings */}
      <section className="section-padding bg-white">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#012345] mb-6">
              Key Offerings
            </h2>
            {/* <p className="text-xl text-gray-600">
              Comprehensive solutions to accelerate your brand's success in the Indian market
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Localized Market Entry */}
            <Card className="h-full hover:shadow-xl border-none bg-[#1068b2] transition-shadow border-2 hover:border-wdv-blue animate-slide-up">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-[#ffcb05] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-10 w-10 text-black" />
                </div>
                <CardTitle className="text-2xl text-white">1. Localized Market Entry</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed text-white">
                  Strategic entry into Indian markets with deep local insights, regulatory compliance, and cultural adaptation
                </CardDescription>
                <ul className="space-y-2 text-sm text-white">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Market research & competitive analysis
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Local partnership identification
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Regulatory compliance support
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Cultural adaptation strategies
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Licensing & Operations */}
            <Card className="h-full hover:shadow-xl border-none bg-[#1068b2] transition-shadow border-2 hover:border-wdv-gold animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-[#ffcb05] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-10 w-10 text-black" />
                </div>
                <CardTitle className="text-2xl text-white">2. Licensing & Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  End-to-end operational setup including licensing, supply chain management, and operational excellence
                </CardDescription>
                <ul className="space-y-2 text-sm text-white">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Business licensing & permits
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Supply chain optimization
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Operational process setup
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Quality assurance systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Omnichannel Execution */}
            <Card className="h-full hover:shadow-xl border-none bg-[#1068b2] transition-shadow border-2 hover:border-wdv-navy animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-[#ffcb05] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-10 w-10 text-black" />
                </div>
                <CardTitle className="text-2xl text-white">3. Omnichannel Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 leading-relaxed">
                  Seamless integration across online and offline channels with comprehensive distribution network access
                </CardDescription>
                <ul className="space-y-2 text-sm text-white">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Multi-channel distribution
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Digital marketplace integration
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Retail network access
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />
                    Performance analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
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
              Five key pillars that make Brandverse the preferred partner for brand acceleration in India
            </p> */}
          </div>

          <div className="flex flex-col items-center gap-10">
            {/* Row 1 - 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Users className="h-8 w-8" />,
                  title: "Deep General Trade Expertise",
                },
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Omnichannel Execution",
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Regulatory and Compliance Mastery",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white px-5 border-none text-center hover:shadow-lg transition-shadow animate-slide-up w-full max-w-[350px]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="flex flex-col justify-between items-center">
                    <div className="w-16 h-16 bg-[#1068b2] rounded-xl flex items-center justify-center mb-4 text-white">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl text-wdv-navy">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Row 2 - 2 Cards Centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
              {[
                {
                  icon: <Target className="h-8 w-8" />,
                  title: "Consumer Electronics Focus",
                },
                {
                  icon: <Award className="h-8 w-8" />,
                  title: "Single Pane Stewardship",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-white px-5 border-none text-center hover:shadow-lg transition-shadow animate-slide-up w-full max-w-[350px]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="flex flex-col justify-between items-center">
                    <div className="w-16 h-16 bg-[#1068b2] rounded-xl flex items-center justify-center mb-4 text-white">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl text-wdv-navy">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      {/* <section className="section-padding">
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
      </section> */}

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-wdv">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Ready to Accelerate Your Brand?
            </h2>
            {/* <p className="text-xl text-gray-600 mb-8">
              Join successful brands that have transformed their market presence through Brandverse's strategic acceleration programs
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button size="lg" className="bg-[#1068b2] text-white hover:bg-[#1068b2] hover:text-white font-semibold">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
              <Button size="lg" variant="outline" className="bg-[#1068b2] text-white hover:bg-[#1068b2] hover:text-white font-semibold border-none"
                onClick={openModal}>
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brandverse;
