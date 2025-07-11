
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, DollarSign, Users, Target, CheckCircle, Download, Send } from "lucide-react";
import { motion } from 'framer-motion';
import LocationBarChart from "@/components/ui/LocationBarChart";
import GMVBarChart from "@/components/ui/GMVBarChart";
import CustomModal from "@/components/ui/CustomModal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import DynamicForm from "@/components/ui/DynamicForm";
import { FieldConfig } from "@/types/types";
import { useToast } from "@/components/ui/use-toast";

const Investors = () => {
  const { toast } = useToast();

  const FIRST_LEVEL_CHILD_BOTTOM_Y = 300;
  const INTERMEDIATE_Y_LEVEL_2 = 340;
  const childTargetX = {
    child1: "20%",
    child2: "40%",
    child3: "60%",
    child4: "80%",
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (data: any) => {
    toast({
      title: "Meeting Request Submitted!",
      description:
        "Thank you for scheduling a meeting. We’ve received your request and will confirm the details with you shortly. We look forward to connecting with you!",
    });
    closeModal();
  };

  const formFieldsForScheduleMeeting: FieldConfig[] = [
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/WDV_Pitch Deck_02-07.pdf";
    link.download = "WDV_Pitch Deck_02-07.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen">

      <CustomModal isOpen={isModalOpen} onClose={closeModal} title="Schedule Meeting">
        <DynamicForm fields={formFieldsForScheduleMeeting} onSubmit={handleSubmit} />
      </CustomModal>

      {/* Hero Section */}
      <section className="bg-[#012345] hite section-padding">
        <div className="px-4 py-16 md:py-20 2xl:py-[160px]">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white animate-fade-in">
              Investment Opportunity
            </h1>
            <p className="text-xl lg:text-2xl text-white mb-8 animate-slide-up">
              Partner with us to build India's most collaborative retail ecosystem
            </p>
            <p className="text-lg text-white mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              A unique opportunity to invest in the convergence of B2B commerce, fintech,
              and brand acceleration in India's $1.3 trillion retail market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" className="bg-white text-[#012345] hover:bg-white font-semibold"
                onClick={handleDownload}>
                <Download className="mr-2 h-5 w-5" />
                Download Pitch Deck
              </Button>
              <Button size="lg" variant="outline" className="border-whit hover:bg-white bg-white text-[#012345] border-none hover:text-wdv-navy" onClick={openModal}>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-[#012345] mb-6">
              Investment Highlights
            </h2>
            {/* <p className="text-xl text-gray-600">
              Key reasons why WDV represents a compelling investment opportunity
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg border-none bg-[#1068b2] transform hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ffcb05] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-lg text-white">Proven Traction</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-white text-left">
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />6,000+ Active Retailers</div>
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />450+ Verified Sellers</div>
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />₹271 Cr Disbursed</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg border-none bg-[#1068b2] transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-[#ffcb05] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-lg text-white">Strong Unit Economics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-white">
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />&lt; 0.5% NPA Rate</div>
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />Path to Profitability</div>
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />Scalable Model</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg border-none bg-[#1068b2] transform hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-[#ffcb05] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-lg text-white">Experienced Team</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-white">
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />15+ Years Experience</div>
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />Proven Track Record</div>
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />Deep Domain Expertise</div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg border-none transform hover:scale-105 transition-all duration-300 bg-[#1068b2]" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <div className="w-16 h-16 bg-[#ffcb05] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-black" />
                </div>
                <CardTitle className="text-lg text-white">Market Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-white">
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />$1.3T Retail Market</div>
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />Growing Digitization</div>
                  <div className="flex"><CheckCircle className="h-4 w-4 text-white mr-2 mt-0.5" />Underserved MSMEs</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* GMV Growth Chart */}
      {/* <section className="section-padding bg-gray-100">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#012345] mb-6">
              GMV Growth Trajectory
            </h2>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex mt-10 flex-col md:flex-row justify-center items-stretch gap-6">
              <GMVBarChart />
              <LocationBarChart />
            </div>
           
          </div> */}

      {/* <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-700 w-20">FY22</span>
                <div className="flex-1 mx-4">
                  <div className="bg-gray-200 rounded-full h-12">
                    <div className="bg-wdv-blue rounded-full h-12 flex items-center justify-end pr-1" style={{ width: '10%' }}>
                      <span className="text-white font-bold text-center">₹50 Cr</span>
                    </div>
                  </div>
                </div>
                <div className="text-right w-32">
                  <div className="text-sm text-[#012345] font-medium">+150% YoY</div>
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
                  <div className="text-sm text-[#012345] font-medium">+124% YoY</div>
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
                  <div className="text-sm text-[#012345] font-medium">+124% YoY</div>
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
                  <div className="text-sm text-[#012345] font-medium">+79% YoY</div>
                </div>
              </div>
            </div>
          </div> */}
      {/* </div>
      </section> */}

      {/* Breakeven Table */}
      {/* <section className="section-padding">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#012345] mb-6">
              Path to Profitability
            </h2>
            <p className="text-xl text-gray-600">
              Clear roadmap to breakeven with strong unit economics and scalable operations
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="bg-[#1068b2] text-white p-6">
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
      </section> */}

      {/* Group Structure */}
      <section className="section-padding bg-gray-100">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#012345] mb-6">
              Group Structure
            </h2>
            <p className="text-xl text-[#012345]">
              Integrated ecosystem with clear business divisions and strategic synergies
            </p>
          </div>
          <div className="relative mx-auto max-w-main" style={{ height: "650px" }}>
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* WDV to World Brandverse */}
              <line
                x1="46%"
                y1="161px"
                x2="46%"
                y2="136px"
                stroke="#003366"
                stroke-width="1"
              ></line>
              <line
                x1="46%"
                y1="160px"
                x2="20%"
                y2="160px"
                stroke="#003366"
                stroke-width="1"
              ></line>
              <line
                x1="20%"
                y1="160px"
                x2="20%"
                y2="240px"
                stroke="#003366"
                stroke-width="1"
              ></line>
              <circle cx="46%" cy="140px" r="4" fill="#1068B2"></circle>

              {/* WDV to WOGOM */}
              <line
                x1="49%"
                y1="180px"
                x2="49%"
                y2="137px"
                stroke="#003366"
                stroke-width="1"
              ></line>
              <line
                x1="49%"
                y1="180px"
                x2="40%"
                y2="180px"
                stroke="#003366"
                stroke-width="1"
              ></line>
              <line
                x1="40%"
                y1="179px"
                x2="40%"
                y2="240px"
                stroke="#003366"
                stroke-width="1"
              ></line>
              <circle cx="49%" cy="140px" r="4" fill="#1068B2"></circle>

              {/* WDV to WOFI */}
              <line
                x1="51%"
                y1="136px"
                x2="51%"
                y2="181px"
                stroke="#003366"
                stroke-width="1"
              ></line>
              <line
                x1="51%"
                y1="180px"
                x2="60%"
                y2="180px"
                stroke="#003366"
                stroke-width="1"
              ></line>
              <line
                x1="60%"
                y1="179px"
                x2="60%"
                y2="240px"
                stroke="#003366"
                stroke-width="1"
              ></line>
              <circle cx="51%" cy="140px" r="4" fill="#1068B2"></circle>

              {/* WDV to WOFI Global */}
              <line
                x1="54%"
                y1="143px"
                x2="54%"
                y2="156px"
                stroke="#003366"
                stroke-width="1"
              ></line>
              <line
                x1="54%"
                y1="156px"
                x2="80%"
                y2="156px"
                stroke="#003366"
                stroke-width="1"
              ></line>
              <line
                x1="80%"
                x2="80%"
                y2="254px"
                stroke="#003366"
                stroke-width="1"
                y1="155px"
              ></line>
              <circle cx="54%" cy="142px" r="4" fill="#1068B2"></circle>

              {/* Dashed Sub-Connections */}
              <line
                x1={childTargetX.child1}
                y1={`${FIRST_LEVEL_CHILD_BOTTOM_Y}px`}
                x2={childTargetX.child1}
                y2={`${INTERMEDIATE_Y_LEVEL_2}px`}
                stroke="#003366"
                strokeWidth="2"
                strokeDasharray="6,4"
              />
              <line
                x1="20%"
                y1="405px"
                x2="20%"
                y2="460px"
                stroke="#003366"
                stroke-width="1"
                stroke-dasharray="6,4"
              ></line>
              <circle cx="20%" cy="400px" r="4" fill="#1068B2"></circle>

              <line
                x1={childTargetX.child2}
                y1={`${FIRST_LEVEL_CHILD_BOTTOM_Y}px`}
                x2={childTargetX.child2}
                y2={`${INTERMEDIATE_Y_LEVEL_2}px`}
                stroke="#003366"
                strokeWidth="2"
                strokeDasharray="6,4"
              />
              <line
                x1="40%"
                y1="405px"
                x2="40%"
                y2="500px"
                stroke="#003366"
                stroke-width="1"
                stroke-dasharray="6,4"
              ></line>
              <circle cx="40%" cy="401px" r="4" fill="#1068B2"></circle>
            </svg>

            {/* WDV Node */}
            <div className="absolute top-[40px] left-1/2 transform -translate-x-1/2">
              <div className="border-2 border-[#1068b2] rounded-xl p-4 w-56 text-center shadow bg-white text-[#012345]">
                <h3 className="font-bold text-lg">WDV</h3>
                <p className="text-sm">World Digital Ventures</p>
              </div>
            </div>

            {/* 1st Level Child Nodes */}
            <div className="absolute top-[240px] left-[20%] transform -translate-x-1/2">
              <Node
                title="World Brandverse"
                status="incorporated"
                icon="./images/india.png"
                subtitle="World Brandverse"
              />
            </div>

            <div className="absolute top-[240px] left-[40%] transform -translate-x-1/2">
              <Node
                title="WOGOM"
                status="incorporated"
                subtitle="World Goods Marketplace (B2B)"
                icon="./images/india.png"
              />
            </div>

            <div className="absolute top-[240px] left-[60%] transform -translate-x-1/2">
              <Node
                title="WOFI"
                status="incorporated"
                subtitle="World Finverse"
                icon="./images/india.png"
              />
            </div>

            <div className="absolute top-[240px] left-[80%] transform -translate-x-1/2">
              <Node
                title="WOFI Global"
                subtitle="(Gift City)"
                status="in-progress"
                icon="./images/world.png"
              />
            </div>

            {/* 2nd Level Sub-Nodes */}
            <div className="absolute top-[440px] left-[20%] transform -translate-x-1/2">
              <Node
                title="World Brandverse"
                subtitle="(Hong Kong)"
                status="planned"
                icon="./images/world.png"
                small
              />
            </div>

            <div className="absolute top-[440px] left-[40%] transform -translate-x-1/2">
              <Node
                title="WOGOM"
                subtitle="(Singapore)"
                status="planned"
                icon="./images/world.png"
                small
              />
            </div>
          </div>

          {/* Legend */}
          <div className="w-full flex justify-end mx-auto max-w-main pr-40 2xl:pr-60">
            <div className="flex flex-col items-start gap-4">
              <Legend color="#1068B2" label="Incorporated" />
              <Legend color="#1068B2" dashed label="In Progress" />
              <Legend color="#1068B2" label="Planned for 2026" />
            </div>
          </div>
          {/* <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="text-center mb-12">
                <div className="inline-block bg-wdv-navy text-white px-8 py-4 rounded-xl">
                  <h3 className="text-2xl font-bold">World Digital Ventures</h3>
                  <p className="text-blue-200">Holding Company</p>
                </div>
              </div>
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
                    <h4 className="text-xl font-bold mb-2">Wofi</h4>
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
              <div className="mt-12 bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-bold text-wdv-navy mb-4 text-center">Strategic Synergies</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
                  <div>• Cross-platform user acquisition</div>
                  <div>• Shared data and analytics</div>
                  <div>• Integrated service offerings</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Ideal Partner */}
      <section className="section-padding bg-white">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[#012345]">
              We Seek Strategic Investors Who
            </h2>
            <p className="text-xl text-[#012345]">
              Partner profile for maximum value creation and ecosystem growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-5 bg-[#1068b2] rounded-lg">
                <CheckCircle className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Understand the Indian Market</h3>
                  <p className="text-blue-100">Deep appreciation for India's retail ecosystem complexity and growth potential</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-5 bg-[#1068b2] rounded-lg">
                <CheckCircle className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Bring Strategic Value</h3>
                  <p className="text-blue-100">Beyond capital - offer networks, expertise, and market access</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-5 bg-[#1068b2] rounded-lg">
                <CheckCircle className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Have Patient Capital</h3>
                  <p className="text-blue-100">Long-term investment horizon aligned with ecosystem building approach</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-5 bg-[#1068b2] rounded-lg">
                <CheckCircle className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Support Scale Ambitions</h3>
                  <p className="text-blue-100">Committed to helping us become India's leading retail ecosystem platform</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-5 bg-[#1068b2] rounded-lg">
                <CheckCircle className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Share Our Values</h3>
                  <p className="text-blue-100">Collaborative approach to building sustainable, impactful businesses</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-5 bg-[#1068b2] rounded-lg">
                <CheckCircle className="h-6 w-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Understand Tech + Fintech</h3>
                  <p className="text-blue-100">Experience with marketplace and financial services business models</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-wdv">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#012345] mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-[#012345] mb-8">
              Join us in building India's most collaborative retail ecosystem. Let's create extraordinary value together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#1068b2] text-white hover:bg-[#1068b2] hover:text-white textfont-semibold"
                onClick={handleDownload}>
                <Download className="mr-2 h-5 w-5" />
                Download Pitch Deck
              </Button>
              <Button size="lg" variant="outline" className="bg-[#1068b2] text-white hover:bg-[#1068b2] hover:text-white"
                onClick={openModal}>
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
function Node({ title, subtitle, icon, status = "default", small = false }) {
  const baseClass =
    "relative w-52 h-36 rounded-xl p-4 text-center shadow bg-white text-primary overflow-hidden";
  const defaultBorder = "border border-[#1068b2]";
  const borderClass =
    status === "incorporated"
      ? "border-2 border-[#1068b2]"
      : status === "planned"
        ? "border border-[#1068b2]"
        : status === "in-progress"
          ? ""
          : defaultBorder;

  return (
    <div className={`${baseClass} ${borderClass}`}>
      {status === "in-progress" && (
        <>
          <svg
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            viewBox="0 0 208 144"
            fill="none"
          >
            <path
              d="M0 12 Q0 0 12 0 H11 Q3 0 1 12 V132 Q3 144 12 144 H0 Q0 144 0 132 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
            <path
              d="M208 12 Q208 0 196 0 H197 Q205 0 205 12 V132 Q205 144 196 144 H208 Q208 144 208 132 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
            <path
              d="M12 1 H104 V0 H12 Q0 0 0 12 Q0 1 12 1 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
            <path
              d="M104 3 H196 Q208 3 208 12 Q208 0 196 0 H104 V3 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
            <path
              d="M12 143 H104 V144 H12 Q0 144 0 132 Q0 143 12 143 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
            <path
              d="M104 141 H196 Q208 141 208 132 Q208 144 196 144 H104 V141 Z"
              fill="currentColor"
              className="text-[#1068b2]"
            />
          </svg>
        </>
      )}
      <img
        src={icon}
        alt="icon"
        className="mx-auto mb-2 w-8 h-8 z-10 relative"
        draggable="false"
      />
      <h3 className="font-bold text-base text-[#012345] z-10 relative">{title}</h3>
      {subtitle && <p className="text-xs text-[#012345] mt-1 z-10 relative">{subtitle}</p>}
    </div>
  );
}

function Legend({ color, label, dashed = false }) {
  return (
    <div className="flex items-center gap-2">
      {label === "In Progress" ? (
        // Split bar: left 1px, right 3px
        <div className="flex w-10">
          <div
            className="w-1/2 border-b"
            style={{ borderColor: color, borderWidth: "1px" }}
          ></div>
          <div
            className="w-1/2 border-b"
            style={{ borderColor: color, borderWidth: "3px" }}
          ></div>
        </div>
      ) : (
        // Other types: dashed or solid
        <div
          className={`w-10 ${dashed ? "border-b-dashed" : "border-b-solid"} ${label === "Planned for 2026" ? "border-[1px]" : "border-b-[3px]"
            }`}
          style={{
            borderColor: color,
            backgroundColor: dashed ? "transparent" : color,
          }}
        ></div>
      )}
      <span className="text-sm text-primary">{label}</span>
    </div>
  );
}
export default Investors;
