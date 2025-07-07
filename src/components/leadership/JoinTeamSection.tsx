
const JoinTeamSection = () => {
  return (
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
  );
};

export default JoinTeamSection;
