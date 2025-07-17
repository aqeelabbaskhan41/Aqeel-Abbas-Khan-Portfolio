import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      form.current.reset();
    })
    .catch((error) => {
      console.error('FAILED...', error.text);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please email me directly at aqeelabbaskhan41@gmail.com'
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      icon: <FaWhatsapp size={18} />,
      text: "923090931916",
      href: "https://wa.me/923090931916"
    },
    {
      icon: <MdOutlineEmail size={18} />,
      text: "aqeelabbaskhan41@gmail.com",
      href: "mailto:aqeelabbaskhan41@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt size={18} />,
      text: "Musa Khel, Mianwali, Pakistan",
      href: "#"
    }
  ];

  return (
    <section className="bg-gray-900 py-12 px-4 sm:px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Get In <span className="text-yellow-500">Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-yellow-500 mx-auto mb-3"></div>
          <p className="text-gray-300 text-sm">
            Reach out for collaborations or opportunities
          </p>
        </motion.div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-5 border border-gray-700 flex flex-col h-full"
          >
            <div className="mb-4 overflow-hidden rounded-lg flex justify-center">
              <img
                src="Aqeel1.png"
                alt="Aqeel Abbas Khan"
                className="h-48 w-48 object-cover rounded-full border-4 border-yellow-500 hover:scale-105 transition-transform duration-300"
                style={{ objectPosition: 'top center' }}
              />
            </div>
            
            <h3 className="text-lg font-bold text-white text-center">
              Aqeel <span className="text-yellow-500">Abbas</span> Khan
            </h3>
            <p className="text-gray-300 text-sm mb-4 text-center">Computer Scientist</p>

            <div className="space-y-3 mt-auto">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  whileHover={{ x: 3 }}
                >
                  <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-800 transition-colors duration-200">
                    {React.cloneElement(item.icon, { 
                      className: "text-yellow-500 group-hover:text-yellow-400" 
                    })}
                  </div>
                  <span className="text-xs sm:text-sm">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-lg p-5 border border-gray-700 h-full"
          >
            <h3 className="text-lg font-bold text-white mb-4">
              Send a <span className="text-yellow-500">Message</span>
            </h3>
            
            {submitStatus && (
              <div className={`mb-4 p-3 rounded-lg text-sm ${
                submitStatus.success 
                  ? 'bg-green-900 text-green-300' 
                  : 'bg-red-900 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}
            
            <form ref={form} onSubmit={sendEmail} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-2.5 text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-2.5 text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  />
                </motion.div>
              </div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-2.5 text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  required
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-2.5 text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  required
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-2.5 text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  required
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2.5 text-sm bg-yellow-500 text-gray-900 font-bold rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-yellow-600'
                }`}
                whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;