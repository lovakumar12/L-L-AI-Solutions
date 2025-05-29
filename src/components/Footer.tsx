import { ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Logo isFooter={true} />
            <p className="mt-4 text-gray-400">
              Transforming businesses with advanced AI solutions and innovative technology to drive growth and efficiency.
            </p>
            <div className="mt-6 flex space-x-4">
              {['linkedin', 'twitter', 'facebook', 'instagram'].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="p-2 rounded-full bg-gray-800 hover:bg-primary-700 transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Solutions', href: '#solutions' },
                { name: 'Industries', href: '#industries' },
                { name: 'About Us', href: '#about' },
                { name: 'Contact', href: '#contact' },
                { name: 'Blog', href: '#blog' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Custom AI Development',
                'Data Analytics',
                'Predictive Modeling',
                'AI Security Solutions',
                'Machine Learning Integration',
              ].map((service, index) => (
                <li key={index}>
                  <a 
                    href="#solutions" 
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest in AI and receive insights from our experts.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button 
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-800 my-10" />
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} L&L AI Software Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {[
              'Privacy Policy',
              'Terms of Service',
              'Cookie Policy',
              'Sitemap',
            ].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;