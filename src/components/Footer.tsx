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
              <a 
                href="https://www.linkedin.com/company/ll-aisolutions/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-primary-700 transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/ll_aisolutions?igsh=ZWU5M3ZxZXdxa3U5&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-primary-700 transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
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
          
          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Office</h3>
            <address className="text-gray-400 not-italic">
              L&L software solutions<br />
              D.no3-26, J.Annavaram Post<br />
              Near Hanuman Statue, Main Road Center<br />
              Yeleswaram Mandal<br />
              Kakinada District<br />
              PIN: 533429<br /><br />
              <a href="tel:+917993815713" className="hover:text-white transition-colors duration-300">
                +91 7993815713
              </a>
            </address>
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