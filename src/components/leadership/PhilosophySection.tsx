
interface PhilosophyItemProps {
  title: string;
  description: string;
}

const PhilosophyItem = ({ title, description }: PhilosophyItemProps) => (
  <div>
    <h3 className="text-2xl font-semibold mb-4 text-wdv-gold">{title}</h3>
    <p className="text-blue-100 leading-relaxed">
      {description}
    </p>
  </div>
);

const PhilosophySection = () => {
  const philosophyItems = [
    {
      title: "People-First Approach",
      description: "We believe that great companies are built by great people. Our leadership team is committed to creating an environment where every team member can thrive, innovate, and contribute to our shared mission of transforming India's retail ecosystem."
    },
    {
      title: "Long-term Vision",
      description: "While we celebrate short-term wins, our decisions are guided by long-term thinking. We're building sustainable solutions that will serve India's retail community for decades to come, not just the next quarter."
    },
    {
      title: "Continuous Learning",
      description: "The retail landscape is constantly evolving, and so are we. Our leadership team maintains a culture of continuous learning, staying ahead of trends and adapting our strategies to serve our community better."
    },
    {
      title: "Ethical Leadership",
      description: "We lead with integrity and transparency in all our dealings. Our success is measured not just by financial metrics, but by the positive impact we create for retailers, sellers, and the broader ecosystem."
    }
  ];

  return (
    <section className="section-padding bg-wdv-navy text-white">
      <div className="container-wdv">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">
            Our Leadership Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {philosophyItems.map((item, index) => (
              <PhilosophyItem 
                key={index}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
