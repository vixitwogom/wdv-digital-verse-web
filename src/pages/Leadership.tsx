
import LeaderCard from "@/components/leadership/LeaderCard";
import ValueCard from "@/components/leadership/ValueCard";
import PhilosophySection from "@/components/leadership/PhilosophySection";
import JoinTeamSection from "@/components/leadership/JoinTeamSection";

const Leadership = () => {
  const leaders = [
    {
      name: "Nirav Patel",
      role: "Founder & CEO",
      bio: "Visionary leader with 15+ years in retail and technology. Previously led digital transformation initiatives at Fortune 500 companies. Expert in scaling B2B marketplaces and building strategic partnerships across India's retail ecosystem.",
      image: "/placeholder.svg"
    },
    {
      name: "Ravi Patel", 
      role: "Co-Founder & CTO",
      bio: "Technology veteran with deep expertise in fintech and marketplace platforms. Former senior engineer at leading tech companies. Specializes in building scalable architectures and implementing cutting-edge solutions for B2B commerce and financial services.",
      image: "/placeholder.svg"
    },
    {
      name: "Keyur Patel",
      role: "Co-Founder & CFO", 
      bio: "Financial strategist with extensive experience in corporate finance and venture capital. Previously worked with top-tier investment banks and private equity firms. Expert in financial modeling, risk management, and fundraising for high-growth companies.",
      image: "/placeholder.svg"
    },
    {
      name: "Pranav Shah",
      role: "VP Operations",
      bio: "Operations excellence leader with proven track record in supply chain management and business operations. Former operations head at major e-commerce platforms. Specializes in process optimization and scaling operational efficiency across diverse business verticals.",
      image: "/placeholder.svg"
    }
  ];

  const values = [
    {
      letter: "V",
      title: "Visionary Thinking",
      description: "We envision the future of retail and build solutions that transform entire ecosystems, not just individual businesses.",
      bgColor: "bg-wdv-navy"
    },
    {
      letter: "C",
      title: "Collaborative Spirit",
      description: "We believe in building together - with our team, partners, and the entire retail community to create shared success.",
      bgColor: "bg-wdv-blue"
    },
    {
      letter: "E",
      title: "Excellence in Execution",
      description: "We maintain the highest standards in everything we do, from technology development to customer service and operational delivery.",
      bgColor: "bg-wdv-gold",
      textColor: "text-wdv-navy"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding">
        <div className="container-wdv">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Leadership Team
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 animate-slide-up">
              Meet the visionary leaders driving India's retail ecosystem transformation
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Our leadership team combines decades of experience in technology, finance, and operations 
              to build India's most collaborative retail ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Cards */}
      <section className="section-padding">
        <div className="container-wdv">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <LeaderCard key={index} leader={leader} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-wdv">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Our Leadership Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our team in building India's retail ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ValueCard 
                key={index}
                letter={value.letter}
                title={value.title}
                description={value.description}
                bgColor={value.bgColor}
                textColor={value.textColor}
              />
            ))}
          </div>
        </div>
      </section>

      <PhilosophySection />
      <JoinTeamSection />
    </div>
  );
};

export default Leadership;
