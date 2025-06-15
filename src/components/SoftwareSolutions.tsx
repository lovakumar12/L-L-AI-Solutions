import { Heart, Building2, Factory, Truck, GraduationCap, Hotel, ShoppingCart, Cpu, ChevronRight } from 'lucide-react';

const SoftwareSolutions = () => {
  const domains = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Healthcare",
      description: "Smart patient data systems, telemedicine platforms, predictive analytics for diagnostics",
      color: "bg-red-50 text-red-600",
      hoverColor: "hover:bg-red-100"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Finance",
      description: "Secure fintech applications, fraud detection systems, automated compliance tools",
      color: "bg-blue-50 text-blue-600",
      hoverColor: "hover:bg-blue-100"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Retail & E-commerce",
      description: "Inventory management systems, personalized recommendation engines, customer analytics",
      color: "bg-green-50 text-green-600",
      hoverColor: "hover:bg-green-100"
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Manufacturing",
      description: "IoT-based monitoring, predictive maintenance, ERP integrations",
      color: "bg-purple-50 text-purple-600",
      hoverColor: "hover:bg-purple-100"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Learning management systems (LMS), assessment platforms, student performance tracking",
      color: "bg-indigo-50 text-indigo-600",
      hoverColor: "hover:bg-indigo-100"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Logistics",
      description: "Fleet tracking solutions, warehouse automation, route optimization",
      color: "bg-orange-50 text-orange-600",
      hoverColor: "hover:bg-orange-100"
    },
    {
      icon: <Hotel className="w-8 h-8" />,
      title: "Hospitality",
      description: "Reservation systems, customer engagement platforms, feedback & loyalty programs",
      color: "bg-pink-50 text-pink-600",
      hoverColor: "hover:bg-pink-100"
    }
  ];

  const services = [
    "Custom Software Development",
    "Web & Mobile Application Development", 
    "AI & Machine Learning Solutions",
    "Cloud Integration & Deployment",
    "Enterprise Automation Tools"
  ];

  return (
    <section id="software-solutions" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI <span className="text-gradient">Software Solutions</span>
          </h2>
          <p className="text-lg text-gray-600">
            We provide scalable, reliable, and tailor-made software development services across a variety of industries and technologies
          </p>
        </div>

        {/* Key Services */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Our Key Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300">
                <ChevronRight className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-800">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Domains */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-12">Industries We Serve</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <div 
                key={index} 
                className={`card p-6 ${domain.hoverColor} transition-all duration-300 hover:shadow-xl hover:scale-105`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full ${domain.color}`}>
                  {domain.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{domain.title}</h3>
                <p className="text-gray-600 leading-relaxed">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6 text-white/90">
              Whether you're a startup or an enterprise, we collaborate closely with clients to design and deliver solutions that drive growth, efficiency, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Get Started Today
              </a>
              <a href="#contact" className="border border-white/30 text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition-all duration-300">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSolutions;