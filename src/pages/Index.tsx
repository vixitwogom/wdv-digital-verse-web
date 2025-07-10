
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";
import { ArrowRight, CheckCircle, TrendingUp, HeartHandshake as Handshake, Gem } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const Index = () => {
  const { toast } = useToast();

  const navigate = useNavigate();

const handleFeatureClick = () => {
  navigate("/contact"); // 👈 Navigate to /contact route
};

  const milestonesData = [
    {
      year: "2021",
      events: [
        {
          height: "h-[160px]",
          month: "",
          title: "Concept Kick-off",
          image: null,
          hasBorder: true,
        },
        {
          height: "h-[129px]",
          month: "September",
          title: "1st Distributor Onboarded",
          image: null,
          hasBorder: true,
        },
        {
          height: "h-24",
          month: "September",
          title: "1st Retailer Onboarded",
          image: null,
          hasBorder: false,
        },
      ],
    },
    {
      year: "2022",
      events: [
        {
          height: "h-[160px]",
          month: "September",
          title: "1 Crore GMV crossed",
          image: null,
          hasBorder: true,
        },
        {
          height: "h-[129px]",
          month: "October",
          title: "100th Distributor Onboarded",
          image: null,
          hasBorder: true,
        },
        {
          height: "h-24",
          month: "December",
          title: "1000th Retailer Onboarded",
          image: null,
          hasBorder: false,
        },
      ],
    },
    {
      year: "2023",
      events: [
        {
          height: "h-[160px]",
          month: "January",
          title: "10 Crore GMV crossed",
          image: null,
          hasBorder: true,
        },
        {
          height: "h-[129px]",
          month: "August",
          title: "NBFC Fintech Partnership",
          image: "/images/2023.png",
          hasBorder: true,
        },
        {
          height: "h-24",
          month: "November",
          title: "100 Crore GMV crossed",
          image: null,
          hasBorder: false,
        },
      ],
    },
    {
      year: "2024",
      events: [
        {
          height: "h-[160px]",
          month: "April",
          title: "Acquired Ckart",
          image: "/images/ckart.png",
          hasBorder: true,
        },
        {
          height: "h-[129px]",
          month: "",
          title: "Wofi Established",
          image: "/images/2024-wofi.png",
          hasBorder: true,
        },
        {
          height: "h-24",
          month: "",
          title: "Brandverse Established",
          image: null,
          hasBorder: true,
        },
        {
          height: "h-24",
          month: "October",
          title: "500 Crore GMV crossed",
          image: null,
          hasBorder: false,
        },
      ],
    },
    {
      year: "2025",
      events: [
        {
          height: "h-[160px]",
          month: "May",
          title: "Acquired Schneider License",
          image: "/images/Schneider.png",
          hasBorder: false,
        },
      ],
    },
  ];

  const renderEvent = (event, index) => {
    const containerClasses = `${event.height} flex flex-col ${event.height === "h-[160px]" ? "justify-center" : "mt-6"
      } ${event.hasBorder ? "border-b border-[#5C5C5C66]" : ""}`;

    const isFirstEvent2021 = event.title === "Concept Kick-off";
    const finalContainerClasses = isFirstEvent2021
      ? `${event.height} flex items-center ${event.hasBorder ? "border-b border-[#5C5C5C66]" : ""
      }`
      : containerClasses;

    return (
      <div key={index} className={finalContainerClasses}>
        {event.month && (
          <p className="text-[#6DB5F1] font-ID font-normal 2xl:text-base text-xs">
            {event.month}
          </p>
        )}
        {event.image && (
          <span className="">
            <img src={event.image} alt="" />
          </span>
        )}
        <p className="text-[#002136] font-ID font-bold 2xl:text-lg text-sm">
          {event.title}
        </p>
      </div>
    );
  };
  return (
    <PageWrapper>
      <Helmet>
        <title>World Digital Ventures | Empowering Retail Ecosystems</title>
        <meta name="description" content="WDV is building India’s largest and most profitable digital ecosystem of MSMEs in the consumer electronics space." />
      </Helmet>

      <section className="relative bg-[#012345] text-white py-[120px] md:py-[170px] 2xl:py-[300px] overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #001f3d, #2d68d8)',
        }}
      >
        <div className="absolute inset-0 bg-[url('./images/hero2.png')] bg-cover bg-center"></div>

        {/* <div className="absolute inset-0 bg-[url('./images/hero.png')] bg-cover bg-center md:hidden"></div> */}


        <div className="relative z-10 max-w-7xl mx-auto px-4 container flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="w-full md:w-1/2 text-left md:text-left">
            <motion.h1
              className="text-xl md:text-3xl 2xl:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Empowering Retail Ecosystem through <br />Money, Margin and Discovery
            </motion.h1>
            <motion.h2
              className="text-lg md:text-2xl 2xl:text-3xl font-semibold text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div
                className="w-full flex gap-x-10 z-50 py-1 lgckdrop-blur-sm transition-all duration-300"
              >
                <a
                  href="https://www.wogom.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-[100px] h-[60px] flex justify-center items-center"
                >
                  <img
                    src="./images/wogom.png"
                    alt="Wogom"
                    className="h-full w-full object-contain"
                    draggable="false"
                  />
                </a>

                <a
                  href="https://worldfinverse.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-[100px] h-[60px] flex justify-center items-center"
                >
                  <img
                    src="./images/wofi.png"
                    alt="Wofi"
                    className="h-full w-full object-contain"
                    draggable="false"
                  />
                </a>

                <a
                  href="/brandverse"
                  className=" w-[100px] h-[60px] flex justify-center items-center"
                >
                  <img
                    src="./images/brandverse.png"
                    alt="Brandverse"
                    className="h-full w-full object-contain"
                    draggable="false"
                  />
                </a>
              </div>
            </motion.h2>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <Button
                  size="lg"
                  className="min-w-[200px] w-full whitespace-nowrap bg-white text-[#012345] font-semibold hover:bg-white"
                  onClick={handleFeatureClick}
                >
                  Join the Ecosystem <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                {/* <a href="/investor-deck.pdf" download className="w-full">
                  <Button
                    size="lg"
                    variant="outline"
                    className="min-w-[200px] w-full whitespace-nowrap bg-[#012345] text-white hover:text-[#012345]"
                  >
                    Investor Deck
                  </Button>
                </a> */}
              </div>
            </motion.div>

          </div>
          {/* <div className="hidden md:flex w-full md:w-[40%] 2xl:w-[57%] justify-center md:justify-end">
            <img src="./images/Globe.webp" alt="Globe" className="max-w-full h-auto" />
          </div> */}


          {/* Right Side: Icons Box */}
          {/* <div className="md:w-1/2 bg-white rounded-2xl py-[130px] px-[20px] sm:px-[70px] flex justify-center items-center">
            <div className="flex gap-10">
              {[
                { icon: "/images/dollar.png", label: "Money" },
                { icon: "/images/arrow.png", label: "Margin" },
                { icon: "/images/search.png", label: "Discovery" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                    <img src={item.icon} alt={item.label} className="w-8 h-8" />
                  </div>
                  <p className="text-[#012345] font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div> */}

        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16 text-[#012345]">The Three Pillars of Our Ecosystem</h2>
          {/* <p className="text-xl mb-12">We've built an integrated platform that addresses the core needs of India's retail <br /> ecosystem</p> */}
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div className="p-8 rounded-lg shadow-md border-none bg-[#1068b2]" whileHover={{ y: -5 }}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 mb-3 bg-[#ffcb05] rounded-full flex items-center justify-center">
                  <img src="./images/dollar.png" alt="" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Money</h3>
              <p className='text-white'>Access to credit and financial services through Wofi - turning credit access from a barrier into an enabler for growth</p>
            </motion.div>
            <motion.div className="p-8 border-none rounded-lg shadow-md bg-[#1068b2]" whileHover={{ y: -5 }}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 mb-3 bg-[#ffcb05] rounded-full flex items-center justify-center">
                  <img src="./images/arrow.png" alt="" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Margin</h3>
              <p className='text-white'>Better margins through Brandverse, connecting global brands with India's retail network and increasing profitability
              </p>
            </motion.div>
            <motion.div className="p-8 border-none rounded-lg shadow-md bg-[#1068b2]" whileHover={{ y: -5 }}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 mb-3 bg-[#ffcb05] rounded-full flex items-center justify-center">
                  <img src="./images/search.png" alt="" className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Discovery</h3>
              <p className='text-white'>Brand discovery and market expansion through WOGOM's B2B marketplace solving fragmented sourcing </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#012345]">Our Integrated Ecosystem</h2>
          <div className="grid md:grid-cols-3 gap-5 text-left">
            {/* WOGOM Card */}
            <Link
              to="/wogom"
              className="p-8 rounded-xl  bg-white shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-4 w-full">
                <div className="bg-[#1068b2] p-4 rounded-lg mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#ffcb05]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#012345]">WOGOM</h3>
                <p className="text-[#012345] mb-4">B2B Marketplace</p>
                <ul className="text-sm space-y-1 text-[#012345] w-full">
                  <li className="flex justify-between">``
                    <span>Sellers:</span>
                    <strong>450+</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>Retailers:</span>
                    <strong>6,000+</strong>
                  </li>
                  <li className="flex justify-between">
                    <span>SKUs:</span>
                    <strong>30,000+</strong>
                  </li>
                </ul>
              </div>
              <span className="text-[#012345] font-semibold flex items-center mt-4">
                Learn More <span className="ml-1">→</span>
              </span>
            </Link>

            {/* WoFi Card */}
            <Link
              to="/wofi"
              className="p-8 rounded-xl  bg-white shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="bg-[#1068b2] p-4 rounded-lg mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffcb05]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <rect x="4" y="6" width="16" height="12" rx="2" ry="2" />
                    <path d="M4 10h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#012345]">Wofi</h3>
                <p className="text-[#012345] mb-4">Financial Services</p>
                <ul className="text-sm space-y-1 text-[#012345] w-full">
                  <li className="flex justify-between">Disbursed: <strong>₹271 Cr</strong></li>
                  <li className="flex justify-between">Retailers: <strong>1,259</strong></li>
                  <li className="flex justify-between">NPA: <strong className="text-green-600">&lt; 0.50%</strong></li>
                </ul>
              </div>
              <span className="text-[#012345] font-semibold flex items-center mt-4">
                Learn More <span className="ml-1">→</span>
              </span>
            </Link>

            {/* Brandverse Card */}
            <Link
              to="/brandverse"
              className="p-8 rounded-xl  bg-white shadow-md hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center mb-4">
                <div className="bg-[#1068b2] p-4 rounded-lg mb-2 border-none">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#ffcb05]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#012345]">Brandverse</h3>
                <p className="text-[#012345] mb-4">Brand Acceleration</p>
                <ul className="text-sm space-y-1 text-[#012345] w-full">
                  <li className="flex justify-between">• Localized Market Entry</li>
                  <li className="flex justify-between">• Licensing & Operations</li>
                  <li className="flex justify-between">• Omnichannel Execution</li>
                </ul>
              </div>
              <span className="text-[#012345] font-semibold flex items-center mt-4">
                Learn More <span className="ml-1">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-2 sm:px-4 py-16">
          <div className="">
            <div className="max-w-main mx-auto px-4 mb-28">
              <h2 className="!leading-[42px] text-center text-[#012345]">Key Milestones</h2>
            </div>

            <div className="relative">
              {/* Line for larger screens */}
              <div className="hidden sm:block absolute 2xl:top-[9.8%] top-[7.5%] left-0 right-0 h-1 bg-primary"></div>

              {/* Cards wrapper */}
              <div className="flex sm:flex-row flex-col sm:gap-7 gap-10 max-w-main mx-auto px-4">
                {milestonesData.map((milestone, yearIndex) => (
                  <div
                    key={yearIndex}
                    className="flex sm:flex-col flex-row items-center sm:items-center gap-4 sm:gap-2 relative w-full"
                  >
                    {/* Year */}
                    <div className="flex flex-col items-center relative">
                      <h2 className="leading-snug 2xl:text-[40px] text-3xl font-bold text-primary font-ID">
                        {milestone.year}
                      </h2>

                      {/* Dot */}
                      <span className="px-1 bg-[#F0F0F0] relative">
                        <p className="w-3 h-3 bg-primary rounded-full relative z-10"></p>
                      </span>

                      {/* Vertical line (Mobile only) - show only if not last item */}
                      {yearIndex !== milestonesData.length - 1 && (
                        <div className="block sm:hidden w-1 h-[370px] bg-primary my-2"></div>
                      )}
                    </div>

                    {/* Card */}
                    <div className="bg-[#F0F0F0] shadow-custom 2xl:px-6 px-4 2xl:w-[230px] w-full rounded-[10px]">
                      {milestone.events.map((event, eventIndex) =>
                        renderEvent(event, eventIndex)
                      )}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <section className="py-20 bg-[#012345]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl sm:text-5xl font-bold mb-10">
            Let's build India's most collaborative retail <br className="hidden sm:block" /> ecosystem together
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-lg">
            We seek strategic investors who understand the massive opportunity in India's retail transformation. Join us in empowering millions of retailers with the tools they need to thrive in the digital economy.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full max-w-lg mx-auto">
            <Link to="/investors" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full px-6 py-4 bg-yellow-400 text-black font-semibold hover:bg-yellow-500"
              >
                View Investment Opportunity <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <a href="/investor-deck.pdf" download className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full px-6 py-4 bg-[#012345] text-white font-semibold border border-white hover:bg-white hover:text-black"
              >
                Download Pitch Deck
              </Button>
            </a>
          </div>
        </div>
      </section> */}

    </PageWrapper>
  );
};

export default Index;
