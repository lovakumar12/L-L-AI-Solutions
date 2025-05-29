import { ArrowRight, Brain, Sparkles, GraduationCap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-secondary-900">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-950/70"></div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full bg-accent-500/20 blur-2xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/6 w-40 h-40 rounded-full bg-secondary-400/20 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 left-1/3 w-24 h-24 rounded-full bg-primary-300/20 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8 pt-24 pb-8 lg:pt-32 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 mb-12 lg:mb-0">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full py-1.5 px-3 mb-6 border border-white/20">
              <Sparkles className="h-4 w-4 text-accent-300 mr-2" />
              <span className="text-white/90 text-sm">AI Solutions & Education</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Transform Your Future with <span className="text-accent-300">AI Excellence</span>
            </h1>
            
            <p className="text-lg text-white/80 md:pr-12">
              L&L AI Software Solutions combines cutting-edge AI development with comprehensive education programs to empower businesses and individuals in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn-primary flex items-center justify-center sm:justify-start">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#solutions" className="btn-outline bg-white/10 text-white border-white/30 hover:bg-white/20 flex items-center justify-center sm:justify-start">
                Explore Programs
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white">500+</h3>
                <p className="text-white/70 text-sm">Students Trained</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white">50+</h3>
                <p className="text-white/70 text-sm">AI Solutions</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white">100%</h3>
                <p className="text-white/70 text-sm">Success Rate</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl animate-float" style={{ animationDelay: '0.5s' }}>
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="AI Technology" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent"></div>
              </div>
              
              {/* Feature highlights floating */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-full bg-accent-100">
                    <Brain className="h-4 w-4 text-accent-600" />
                  </div>
                  <div className="text-sm font-medium">AI Development</div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-full bg-primary-100">
                    <GraduationCap className="h-4 w-4 text-primary-600" />
                  </div>
                  <div className="text-sm font-medium">Tech Education</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;