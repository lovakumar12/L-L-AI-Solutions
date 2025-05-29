import { ShieldCheck, Trophy, Users, Lightbulb, GraduationCap, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bridging <span className="text-gradient">Innovation</span> and <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-gray-600">
            L&L AI Software Solutions combines cutting-edge AI development with comprehensive tech education, creating a unique ecosystem where innovation meets learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-primary-100 text-primary-700">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses and individuals through AI innovation and education, creating opportunities for growth and transformation in the digital age.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-secondary-100 text-secondary-700">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education Excellence</h3>
                  <p className="text-gray-600">
                    Providing industry-leading training in AI, machine learning, data science, and full-stack development with practical, hands-on learning.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-accent-100 text-accent-700">
                    <Code className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tech Innovation</h3>
                  <p className="text-gray-600">
                    Developing cutting-edge AI solutions while training the next generation of tech professionals through real-world projects.
                  </p>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-green-100 text-green-700">
                    <Users className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Career Support</h3>
                  <p className="text-gray-600">
                    Comprehensive placement assistance, mentorship, and ongoing support to help you succeed in your tech career.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Training session" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-5">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-700">500+</div>
                <div className="text-sm text-gray-600">Graduates</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-5">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary-700">100%</div>
                <div className="text-sm text-gray-600">Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;