import { ChevronRight, BrainCircuit, Bot, Fingerprint, BadgeCheck, Shield } from 'lucide-react';

const Solutions = () => {
  return (
    <section className="section relative overflow-hidden bg-gray-50">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary-100 to-transparent rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-secondary-100 to-transparent rounded-full blur-3xl opacity-70 -z-10"></div>
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pushing Digital <span className="text-gradient">Boundaries</span>
          </h2>
          <p className="text-lg text-gray-600">
            Beyond conventions, we redefine the digital horizon by melding traditional wisdom with modern technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AI Innovations" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-4 animate-float">
              <div className="flex items-center space-x-3">
                <BrainCircuit className="w-6 h-6 text-primary-600" />
                <span className="font-semibold">Neural Networks</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 left-1/4 bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-3">
                <Bot className="w-6 h-6 text-secondary-600" />
                <span className="font-semibold">Advanced Chatbots</span>
              </div>
            </div>
            
            <div className="absolute top-1/3 -right-6 bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center space-x-3">
                <Fingerprint className="w-6 h-6 text-accent-600" />
                <span className="font-semibold">Biometric Analysis</span>
              </div>
            </div>
          </div>
          
          {/* Text content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Innovative AI Solutions</h3>
              <p className="text-gray-600 mb-6">
                Our cutting-edge AI technologies are designed to address complex business challenges while pushing the boundaries of what's possible in the digital realm.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Custom neural networks for complex pattern recognition",
                  "Natural language processing for advanced customer interactions",
                  "Computer vision systems for medical imaging and quality control",
                  "Reinforcement learning for autonomous decision-making systems",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                    <span className="ml-2 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4">
              <h3 className="text-2xl font-semibold mb-4">Ethical AI Development</h3>
              <p className="text-gray-600 mb-6">
                We prioritize responsible AI development practices that ensure transparency, fairness, and security while delivering powerful technological solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <BadgeCheck className="w-6 h-6 text-primary-600" />,
                    title: "Bias Mitigation",
                    description: "Advanced techniques to identify and reduce algorithmic bias"
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-secondary-600" />,
                    title: "Data Privacy",
                    description: "Robust protocols to protect sensitive information"
                  },
                ].map((feature, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center space-x-3 mb-2">
                      {feature.icon}
                      <h4 className="font-semibold">{feature.title}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4">
              <a href="#contact" className="btn-primary inline-flex items-center">
                Discover Our Solutions
                <ChevronRight className="ml-1 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;