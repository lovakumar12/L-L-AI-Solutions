import { Mail, Phone, MapPin } from 'lucide-react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const handleRegister = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdlYCwJGmL2zMwopItaPNcHyhbI6Z251kCPxiyBh6m7MGD6Dw/viewform?usp=header',
      '_blank'
    );
  };

  return (
    <section id="contact" className="section gradient-primary relative overflow-hidden">
      {/* Background blur */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 w-40 h-40 rounded-full bg-white blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <p className="text-lg text-white/80">
            Ready to transform your business with AI? Contact us today to discuss your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Contact Info */}
          <div className="lg:col-span-2 text-white">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-white/10">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90 mb-1">Email</h4>
                    <p className="text-white/70">operations@ll-aisolutions.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-white/10">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90 mb-1">Phone</h4>
                    <p className="text-white/70">+91 7993815713</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-white/10">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white/90 mb-1">Office</h4>
                    <p className="text-white/70">L&L Software Solutions</p>
                    <p className="text-white/70">D.no3-26, J.Annavaram Post</p>
                    <p className="text-white/70">Near Hanuman Statue, Main Road Center</p>
                    <p className="text-white/70">Yeleswaram Mandal, Kakinada District</p>
                    <p className="text-white/70">PIN: 533429</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium text-white/90 mb-3">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/ll-aisolutions/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-blue-400"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/ll_aisolutions?igsh=ZWU5M3ZxZXdxa3U5&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:text-pink-400"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <button
              onClick={handleRegister}
              className="bg-blue-600 text-white px-8 py-4 rounded-md text-xl font-semibold hover:bg-blue-700 transition"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

