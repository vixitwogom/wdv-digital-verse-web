
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "Nirav Patel",
    role: "Founder & CEO",
    bio: [
      "15+ years of experience in the production of consumer durables.",
      "Execution-led entrepreneur who combines strategic business acumen with a hands-on leadership style."
    ],
    imageUrl: "./images/niravsir.png"
  },
  {
    name: "Ravi Patel",
    role: "Co-founder & Director",
    bio: [
      "15+ years of experience in the Trading and Broking industry.",
      "Serial entrepreneur adept at understanding market operations and financial structuring."
    ],
    imageUrl: "./images/ravisirnew.png"
  },
  {
    name: "Pranav Shah",
    role: "CBO, World Brandverse",
    bio: [
      "20+ years of experience in CDITM retail industry.",
      "Rich experience in LFR as Head of Business Solutions."
    ],
    imageUrl: "./images/pranavsirnew.png"
  },
  {
    name: "Keyur Patel",
    role: "COO, WOGOM",
    bio: [
      "15+ years of experience in core operations.",
      "Deep expertise and experience in digital transformation."
    ],
    imageUrl: "./images/keyursirnew.png"
  }
];


const LeadershipCard = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden text-center"
    >
      <img
        className="w-full h-56 object-cover object-center"
        alt={`Portrait of ${member.name}`}
        src={member.imageUrl}
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
        <p className="text-[#1068b2] font-semibold mb-2">{member.role}</p>
        <ul className="mt-5 text-sm text-slate-600 list-disc list-inside text-left space-y-5">
          {member.bio.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};


const Leadership = () => {
  return (
    <>
      <Helmet>
        <title>Leadership Team | World Digital Ventures</title>
        <meta name="description" content="Meet the experienced leadership team driving World Digital Ventures forward, including Nirav Patel, Ravi Patel, Keyur Patel, and Pranav Shah." />
      </Helmet>

      <div className="bg-slate-50 py-16 sm:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Our Leadership</h1>
            {/* <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              A team of seasoned entrepreneurs and industry experts with a shared vision to revolutionize India's retail ecosystem.
            </p> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <LeadershipCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
