import { Heart, Building2, Factory, Truck, PieChartIcon as ChartPieIcon, Network, Brain, Code, Database } from 'lucide-react';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const IndustryCard = ({ icon, title, description, delay }: IndustryCardProps) => {
  return (
    <div 
      className="card hover:bg-gray-50 p-6 text-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-50 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Industries = () => {
  const industries = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Development",
      description: "Custom AI solutions, machine learning models, and intelligent automation systems.",
      delay: 0,
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Solutions",
      description: "Enterprise software development, cloud solutions, and digital transformation.",
      delay: 100,
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Advanced analytics, big data processing, and business intelligence solutions.",
      delay: 200,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare AI",
      description: "Medical imaging analysis, patient care optimization, and healthcare automation.",
      delay: 300,
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Finance Tech",
      description: "Algorithmic trading, fraud detection, and financial forecasting systems.",
      delay: 400,
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial AI",
      description: "Predictive maintenance, quality control, and manufacturing optimization.",
      delay: 500,
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistics",
      description: "Supply chain optimization, route planning, and inventory management.",
      delay: 600,
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Education Tech",
      description: "AI-powered learning platforms, student analytics, and educational tools.",
      delay: 700,
    },
    {
      icon: <ChartPieIcon className="w-8 h-8" />,
      title: "Business Intelligence",
      description: "Data visualization, reporting systems, and decision support tools.",
      delay: 800,
    },
  ];

  return (
    <section id="industries" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="text-gradient">AI Solutions</span>
          </h2>
          <p className="text-lg text-gray-600">
            From development to education, our AI solutions power innovation across industries
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <IndustryCard
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              delay={industry.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;