import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import axios from "axios";
import "../stylecss/StyleContact.css";

export default function ContactComponent() {
  const [isinput, setIsinput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isinput.name || !isinput.email || !isinput.message) {
      alert("Please fill all required fields!");
      return;
    } else {
      alert("Your Message Has Been Sent Successfully");
    }
    const serviceId = "service_vp6hi4f";
    const templateId = "template_ph3zyrj";
    const publicKey = "2fttCMkHqpWUIeV5L";

    const templateParams = {
      user_name: isinput.name,
      user_email: isinput.email,
      user_subject: isinput.subject,
      message: isinput.message,
    };

    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      alert("Your Message Has Been Sent Successfully");
      setIsinput({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Failed to send message", error);
      alert("Failed to send message, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-text">
          <h2>Contact</h2>
          <p>
            I Would Love To Hear From You Project and How I Could Help. Please
            Fill In The Form And I Will Get Back To You As Soon As Possible{" "}
          </p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              value={isinput.name}
              onChange={(e) => setIsinput({ ...isinput, name: e.target.value })}
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              value={isinput.email}
              onChange={(e) =>
                setIsinput({ ...isinput, email: e.target.value })
              }
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              value={isinput.subject}
              onChange={(e) =>
                setIsinput({ ...isinput, subject: e.target.value })
              }
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              value={isinput.message}
              onChange={(e) =>
                setIsinput({ ...isinput, message: e.target.value })
              }
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
        <hr />
      </div>

      <div className="social-media">
        <a
          href="https://github.com/ZyadKhalifa"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/zyad.khalifa.1/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/zyad_khalifa/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/zyad-khalifa-6a0b9b223/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </>
  );
}
