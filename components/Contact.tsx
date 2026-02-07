import React, { useState } from 'react';
import { Send, Phone, MapPin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will connect with you shortly.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Get Started: <br/><span className="text-primary-500">Elevate Your Brand Today</span></h2>
            <p className="text-gray-400 mb-10 text-lg">
              Ready to transform your digital presence? Fill out the form, and our team of experts will reach out to you with a customized strategy.
            </p>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-900/30 rounded-lg text-primary-400">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">Visit Us</h4>
                        <p className="text-gray-400 mt-1">
                            Flat No: 102, 1st Floor, Sri Ikon Residency,<br/>
                            Plot No 496, Matrusri, near Miyapur,<br/>
                            Hyderabad, Telangana 500049
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-900/30 rounded-lg text-primary-400">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-white font-semibold">Call Us</h4>
                        <p className="text-gray-400 mt-1">+91-998 558 5558</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="bg-dark-950 p-8 rounded-2xl border border-gray-800 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter Name"
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  name="mobile"
                  required
                  placeholder="Enter Number"
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter Email"
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Type your message here"
                  className="w-full bg-dark-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" required className="rounded bg-dark-900 border-gray-700 text-primary-600 focus:ring-primary-500" />
                <label htmlFor="terms" className="text-sm text-gray-500">
                    I agree to the <a href="#" className="text-primary-400 hover:underline">Terms & Conditions</a> and Privacy Policy.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1"
              >
                Submit Request
                <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};