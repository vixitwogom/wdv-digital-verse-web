import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

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
              <Card key={index} className="hover:shadow-xl transition-shadow animate-slide-up border-0 shadow-lg" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-wdv-navy to-wdv-blue rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-2xl text-wdv-navy mb-2">{leader.name}</CardTitle>
                  <div className="inline-flex items-center bg-wdv-gold text-wdv-navy px-4 py-2 rounded-full text-sm font-semibold">
                    {leader.role}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {leader.bio}
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <button className="flex items-center space-x-2 text-wdv-blue hover:text-wdv-navy transition-colors">
                      <Linkedin className="h-5 w-5" />
                      <span className="text-sm">LinkedIn</span>
                    </button>
                    <button className="flex items-center space-x-2 text-wdv-blue hover:text-wdv-navy transition-colors">
                      <Mail className="h-5 w-5" />
                      <span className="text-sm">Contact</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
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
            <Card className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-navy rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">V</span>
                </div>
                <CardTitle className="text-xl text-wdv-navy">Visionary Thinking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We envision the future of retail and build solutions that transform entire ecosystems, 
                  not just individual businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">C</span>
                </div>
                <CardTitle className="text-xl text-wdv-navy">Collaborative Spirit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in building together - with our team, partners, and the entire retail 
                  community to create shared success.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-wdv-gold rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-wdv-navy text-2xl font-bold">E</span>
                </div>
                <CardTitle className="text-xl text-wdv-navy">Excellence in Execution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We maintain the highest standards in everything we do, from technology 
                  development to customer service and operational delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="section-padding bg-wdv-navy text-white">
        <div className="container-wdv">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Our Leadership Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-wdv-gold">People-First Approach</h3>
                <p className="text-blue-100 leading-relaxed">
                  We believe that great companies are built by great people. Our leadership team 
                  is committed to creating an environment where every team member can thrive, 
                  innovate, and contribute to our shared mission of transforming India's retail ecosystem.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-wdv-gold">Long-term Vision</h3>
                <p className="text-blue-100 leading-relaxed">
                  While we celebrate short-term wins, our decisions are guided by long-term thinking. 
                  We're building sustainable solutions that will serve India's retail community 
                  for decades to come, not just the next quarter.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-wdv-gold">Continuous Learning</h3>
                <p className="text-blue-100 leading-relaxed">
                  The retail landscape is constantly evolving, and so are we. Our leadership team 
                  maintains a culture of continuous learning, staying ahead of trends and 
                  adapting our strategies to serve our community better.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-wdv-gold">Ethical Leadership</h3>
                <p className="text-blue-100 leading-relaxed">
                  We lead with integrity and transparency in all our dealings. Our success is 
                  measured not just by financial metrics, but by the positive impact we create 
                  for retailers, sellers, and the broader ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-wdv">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-wdv-navy mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're always looking for exceptional talent to join our team and help build 
              the future of India's retail ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-wdv-gold text-wdv-navy px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                View Open Positions
              </button>
              <button className="border-2 border-wdv-navy text-wdv-navy px-8 py-3 rounded-lg font-semibold hover:bg-wdv-navy hover:text-white transition-colors">
                Send Us Your Resume
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
