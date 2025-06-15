import { useState } from 'react';
import { GraduationCap, Users, Award, Download, ChevronLeft, ChevronRight, BookOpen, Code, Brain, Shield, Cloud, Cpu } from 'lucide-react';

const Training = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const courses = [
    {
      title: "AI & Machine Learning",
      duration: "6 Months",
      level: "Beginner to Advanced",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      highlights: ["Neural Networks", "Deep Learning", "Computer Vision", "NLP"]
    },
    {
      title: "Full-Stack Development",
      duration: "4 Months",
      level: "Beginner to Intermediate",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      highlights: ["React/Angular", "Node.js", "Database Design", "API Development"]
    },
    {
      title: "Data Science",
      duration: "5 Months",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      highlights: ["Python/R", "Statistical Analysis", "Data Visualization", "Predictive Modeling"]
    },
    {
      title: "Cloud Computing & DevOps",
      duration: "3 Months",
      level: "Intermediate to Advanced",
      image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      highlights: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD Pipelines"]
    },
    {
      title: "Cybersecurity",
      duration: "4 Months",
      level: "Beginner to Advanced",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
      highlights: ["Ethical Hacking", "Network Security", "Incident Response", "Risk Assessment"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const downloadCurriculum = () => {
    // This would typically trigger a download of the actual curriculum file
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual file URL
    link.download = 'AI_ML_Curriculum.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="training" className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Training & <span className="text-gradient">Placement Programs</span>
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive, hands-on training programs designed to bridge the gap between education and industry requirements
          </p>
        </div>

        {/* Course Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {courses.map((course, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="relative h-96 bg-gradient-to-r from-primary-900 to-secondary-900">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="relative z-10 h-full flex items-center">
                      <div className="container-custom">
                        <div className="max-w-2xl text-white">
                          <h3 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h3>
                          <div className="flex flex-wrap gap-4 mb-6">
                            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                              {course.duration}
                            </span>
                            <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm">
                              {course.level}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-6">
                            {course.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center text-sm">
                                <div className="w-2 h-2 bg-accent-300 rounded-full mr-2"></div>
                                {highlight}
                              </div>
                            ))}
                          </div>
                          <button 
                            onClick={downloadCurriculum}
                            className="btn-primary flex items-center"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download Curriculum
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {courses.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-primary-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Training Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: <Brain className="w-8 h-8" />, title: "AI & Data Science", desc: "Machine Learning, Deep Learning, Neural Networks" },
            { icon: <Code className="w-8 h-8" />, title: "Full-Stack Development", desc: "Java, Python, React, Node.js" },
            { icon: <Cloud className="w-8 h-8" />, title: "Cloud Computing & DevOps", desc: "AWS, Azure, Docker, Kubernetes" },
            { icon: <Shield className="w-8 h-8" />, title: "Cybersecurity", desc: "Ethical Hacking, Network Security" },
            { icon: <Cpu className="w-8 h-8" />, title: "Internet of Things (IoT)", desc: "Embedded Systems, Sensor Networks" },
            { icon: <BookOpen className="w-8 h-8" />, title: "Campus Recruitment Training", desc: "Interview Preparation, Soft Skills" },
          ].map((program, index) => (
            <div key={index} className="card p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-50 text-primary-600">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
              <p className="text-gray-600">{program.desc}</p>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-center mb-8">Why Choose Our Training Programs?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary-100 text-primary-600">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">100% Placement Support</h4>
              <p className="text-gray-600">Strategic industry partnerships and dedicated placement assistance</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-secondary-100 text-secondary-600">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Industry Expert Trainers</h4>
              <p className="text-gray-600">Learn from professionals with real-world experience</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-accent-100 text-accent-600">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Hands-on Projects</h4>
              <p className="text-gray-600">Build real-world applications and create an impressive portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;