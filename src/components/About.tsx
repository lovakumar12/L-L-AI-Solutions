import { Target, Eye, Users, Lightbulb, GraduationCap, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">L&L AI Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            L&L AI Solutions is a forward-thinking technology company driven by a passion for innovation, 
            skill-building, and industry transformation. We specialize in cutting-edge software solutions 
            and industry-relevant training & placement programs, designed to empower businesses and 
            individuals in today's fast-paced digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Who We Are</h3>
                <p className="text-gray-600 leading-relaxed">
                  At L&L AI Solutions, we believe that technology is more than just code—it's a catalyst for change. 
                  Our organization was founded with a dual mission to provide custom software solutions that solve 
                  real-world problems for businesses and deliver practical, job-oriented training programs that 
                  bridge the gap between education and employability.
                </p>
              </div>

              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-primary-100 text-primary-700">
                    <Code className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Software Solutions Division</h4>
                  <p className="text-gray-600">
                    Scalable, reliable, and tailor-made software development services across various 
                    industries and technologies to help organizations stay competitive.
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
                  <h4 className="text-lg font-semibold mb-2">Training & Placement Division</h4>
                  <p className="text-gray-600">
                    Hands-on, career-focused programs with placement support through strategic 
                    industry tie-ups, preparing students for in-demand tech careers.
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
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-primary-100 text-primary-700 mr-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-600">
              To empower individuals and businesses by delivering impactful software solutions and 
              skill-oriented education that fosters innovation, employability, and growth.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-lg bg-secondary-100 text-secondary-700 mr-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To become a trusted global partner in software innovation and digital talent development, 
              enabling a smarter and more connected future.
            </p>
          </div>
        </div>

        {/* Learning Approach */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-center">Our Learning Approach</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Lightbulb className="w-6 h-6" />, title: "Project-Based Learning", desc: "Practical, hands-on projects" },
              { icon: <Users className="w-6 h-6" />, title: "Industry Challenges", desc: "Real-time industry problems" },
              { icon: <GraduationCap className="w-6 h-6" />, title: "Personal Mentorship", desc: "One-on-one guidance" },
              { icon: <Code className="w-6 h-6" />, title: "Soft Skills Training", desc: "Communication & teamwork" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="p-3 rounded-lg bg-accent-100 text-accent-700 inline-block mb-3">
                  {item.icon}
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-medium">
            At L&L AI Solutions, we don't just teach or build software—we shape futures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;