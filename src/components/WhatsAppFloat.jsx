import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/923090931916?text=Hi%20Aqeel%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="whatsapp-float"
    >
      <span className="whatsapp-float-ping" aria-hidden="true"></span>
      <span className="whatsapp-float-btn">
        <FaWhatsapp />
      </span>
    </a>
  );
};

export default WhatsAppFloat;
