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
    .then(() => {
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully. I will get back to you soon.'
      });
      form.current.reset();
    })
    .catch(() => {
      setSubmitStatus({
        success: false,
        message: 'Failed to send. Email me directly at aqeelabbaskhan41@gmail.com'
      });
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      icon: <FaWhatsapp size={18} />,
      text: "+92 309 0931916",
      href: "https://wa.me/923090931916"
    },
    {
      icon: <MdOutlineEmail size={18} />,
      text: "aqeelabbaskhan41@gmail.com",
      href: "mailto:aqeelabbaskhan41@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt size={18} />,
      text: "Mianwali, Pakistan",
      href: null
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6" id="contact">
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
          <div className="accent-bar"></div>
          <p className="text-gray-300 text-sm">
            Remote or onsite roles, freelance work, or a collaboration. Send a message below.
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
            className="site-card rounded-lg p-4 sm:p-5 flex flex-col h-full"
          >
            <div className="mb-4 overflow-hidden rounded-lg flex justify-center">
              <img
                src="Aqeel.png"
                alt="Aqeel Abbas Khan"
                className="h-36 w-36 sm:h-48 sm:w-48 object-cover object-top rounded-full border-4 border-yellow-500 shadow-gold-sm"
                style={{ objectPosition: 'top center' }}
              />
            </div>
            
            <h3 className="text-lg font-bold text-white text-center">
              Aqeel <span className="text-yellow-500">Abbas</span> Khan
            </h3>
            <p className="text-gray-300 text-sm mb-4 text-center">Software Engineer</p>

            <div className="space-y-3 mt-auto">
              {contactInfo.map((item, index) => {
                const content = (
                  <>
                    <div className="p-2 bg-gray-700 rounded-lg shrink-0">
                      {React.cloneElement(item.icon, {
                        className: "text-yellow-500"
                      })}
                    </div>
                    <span className="text-sm break-all">{item.text}</span>
                  </>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 min-h-[44px]"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index} className="flex items-center gap-3 text-gray-300 min-h-[44px]">
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="site-card rounded-lg p-4 sm:p-5 h-full"
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
                    className="w-full p-3 text-base sm:text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 min-h-[44px]"
                    required
                  />
                </motion.div>
                <motion.div whileHover={{ scale: 1.01 }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full p-3 text-base sm:text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 min-h-[44px]"
                  />
                </motion.div>
              </div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="w-full p-3 text-base sm:text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 min-h-[44px]"
                  required
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 text-base sm:text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 min-h-[44px]"
                  required
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 text-base sm:text-sm bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-500 min-h-[44px]"
                  required
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 text-sm bg-yellow-500 text-gray-900 font-bold rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 min-h-[44px] ${
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