
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Briefcase } from "lucide-react";
import CustomModal from "@/components/ui/CustomModal";
import { useToast } from "@/components/ui/use-toast";
import { FieldConfig } from "@/types/types";
import DynamicForm from "@/components/ui/DynamicForm";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenBrandverse, setisModalOpenBrandverse] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const openModalBrandverse = () => setisModalOpenBrandverse(true);

  const closeModal = () => setIsModalOpen(false);
  const closeModalBrandverse = () => setisModalOpenBrandverse(false);
  const { toast } = useToast();
  const handleSubmitInvestment = (data: any) => {
    toast({
      title: "Inquiry Submitted Successfully!",
      description:
        "Thank you for your interest in investing with World Digital Venture. Our team has received your inquiry and will connect with you soon to explore the opportunity further.",
    });
    closeModal();
  };

  const handleSubmitBrandverse = (data: any) => {
    toast({
      title: "Thank You for Reaching Out to Brandverse!",
      description: "Your partnership request has been received. The Brandverse team will review your proposal and get in touch soon to explore how we can create impactful collaborations together.",
    });
    closeModalBrandverse();
  };
  const handleSubmit = (e: React.FormEvent) => {
    // e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting World Digital Venture. We’ve received your message and will get back to you shortly.",
    });
    // closeModal();
  };


  const formFieldsForInvestment: FieldConfig[] = [
    { name: "firstName", label: "First Name", type: "text", placeholder: "Enter your first name", required: true },
    { name: "lastName", label: "Last Name", type: "text", placeholder: "Enter your last name", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210" },
    { name: "company", label: "Company Name", type: "text", placeholder: "Enter company name" },
    {
      name: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell us about your requirements...",
      required: true,
    },
  ];

  const formFieldsForBrandverse: FieldConfig[] = [
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

  const formFieldsForContact: FieldConfig[] = [
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
        { label: "Join as Retailer", value: "retailer" },
        { label: "Become a Seller", value: "seller" },
        { label: "Brand Partnership", value: "brand" },
        { label: "Investment Opportunity", value: "investor" },
        { label: "Credit Solutions", value: "Credit Solutions" },
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
      <section className="bg-[#012345] text-white section-padding-sm">
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
            {[{
              icon: <Users className="h-8 w-8 text-black" />,
              title: "Join as Retailer",
              desc: "Access better margins, credit solutions, and discover new products through our ecosystem.",
              btnText: "Get Started"
            }, {
              icon: <MessageSquare className="h-8 w-8 text-black" />,
              title: "Brand Partnership",
              desc: "Accelerate your brand's growth in India's retail market with our comprehensive solutions.",
              btnText: "Partner with us"
            }, {
              icon: <Briefcase className="h-8 w-8 text-black" />,
              title: "Investment Inquiry",
              desc: "Explore investment opportunities in India's most collaborative retail ecosystem.",
              btnText: "Get In Touch"
            }].map((card, i) => (
              <Card
                key={i}
                className="text-center hover:shadow-lg transition-shadow animate-slide-up bg-[#1068b2] border-none flex flex-col h-full"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-[#ffcb05] rounded-xl flex items-center justify-center mx-auto mb-4">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{card.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col justify-between flex-grow">
                  <p className="text-white mb-4 flex-grow">
                    {card.desc}
                  </p>
                  <Button className="w-full text-black bg-[#ffcb05] hover:bg-[#ffcb05] hover:text-black mt-auto"
                    onClick={() => {
                      if (i === 0) {
                        window.open("https://retailer.wogom.com/", "_blank", "noopener,noreferrer");
                      } else if (i === 1) {
                        openModalBrandverse()
                      } else if (i === 2) {
                        openModal();
                      }
                    }}>
                    {card.btnText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <CustomModal isOpen={isModalOpen} onClose={closeModal} title="Investment Inquiry">
            <DynamicForm fields={formFieldsForInvestment} onSubmit={handleSubmitInvestment} />
          </CustomModal>
          <CustomModal isOpen={isModalOpenBrandverse} onClose={closeModalBrandverse} title="Brand Partnership">
            <DynamicForm fields={formFieldsForBrandverse} onSubmit={handleSubmitBrandverse} />
          </CustomModal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-wdv-navy mb-8">Send us a Message</h2>
              <DynamicForm fields={formFieldsForContact} onSubmit={handleSubmit} />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-wdv-navy mb-8">Contact Information</h2>

              <div className="space-y-8">
                <Card className="border-0 shadow-lg bg-[#1068b2]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#ffcb05] rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Office Address</h3>
                        <p className="text-white">
                          World Digital Ventures<br />
                          Technology Hub, Ahmedabad<br />
                          Gujarat 380015, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-[#1068b2]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#ffcb05] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Phone Numbers</h3>
                        <p className="text-white">
                          General Inquiries: +91 98765 43210<br />
                          Business Development: +91 98765 43211<br />
                          Support: +91-97960 02002
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-[#1068b2]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#ffcb05] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">Email Addresses</h3>
                        <div className="text-white space-y-2 break-words">
                          <div className="break-all">
                            <span className="font-medium">General:</span> info@worlddigitalventures.com
                          </div>
                          <div className="break-all">
                            <span className="font-medium">Business:</span> business@worlddigitalventures.com
                          </div>
                          <div className="break-all">
                            <span className="font-medium">Investors:</span> investors@worlddigitalventures.com
                          </div>
                        </div>

                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="container-wdv">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-[#012345]">Quick Response Guaranteed</h3>
                    <p className="text-[#012345] max-w-2xl mx-auto">
                      We typically respond to all inquiries within 24 hours during business days.
                      For urgent matters, please call us directly at +91-97960 02002.
                    </p>
                  </div>
                </div>
                {/*<Card className="border-0 shadow-lg">
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
                </Card> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      {/* <section className="section-padding-sm bg-wdv-navy text-white">
        <div className="container-wdv">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Quick Response Guaranteed</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We typically respond to all inquiries within 24 hours during business days.
              For urgent matters, please call us directly at +91 98765 43210.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
