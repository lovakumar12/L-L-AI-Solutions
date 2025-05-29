import { Brain, Database, LineChart, Shield, Cpu, BarChart3, GraduationCap, Users, BookOpen, Code } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <div 
      className="card group p-6 hover:border-primary-300 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-3 rounded-xl bg-primary-100 text-primary-700 inline-block mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-700 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Custom AI Development",
      description: "Tailored AI solutions designed to address your specific business challenges and objectives.",
      delay: 0,
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "AI Education Programs",
      description: "Comprehensive training programs in AI, machine learning, and data science for all skill levels.",
      delay: 100,
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights through advanced analytics and visualization.",
      delay: 200,
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Hands-on Workshops",
      description: "Interactive workshops and practical training sessions led by industry experts.",
      delay: 300,
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Learn modern web development with hands-on projects and industry-standard practices.",
      delay: 400,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Career Support",
      description: "Placement assistance, mentorship, and ongoing support for your tech career journey.",
      delay: 500,
    },
  ];

  return (
    <section id="solutions" className="section gradient-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services & Programs</h2>
          <p className="text-lg text-white/80">
            Comprehensive AI solutions and educational programs to transform your business and career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;