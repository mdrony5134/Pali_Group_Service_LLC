import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";


import { useSubmitContactFormMutation } from "../features/contactApi";

const Contact = () => {
  const [
    submitContactForm,
    { isLoading, isSuccess, isError, error: apiError },
  ] = useSubmitContactFormMutation();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Split fullName into firstName and lastName
    const [firstName, ...lastNameParts] = formData.fullName.split(" ");
    const lastName = lastNameParts.join(" ");

    const payload = {
      subject: formData.subject,
      firstName: firstName || "",
      lastName: lastName || "",
      email: formData.email,
      phoneNumber: formData.phone,
      message: formData.message,
    };

    console.log("Payload sent to backend:", payload);

    try {
      await submitContactForm(payload).unwrap();
      console.log("Form submitted successfully!");
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="bg-[#1a1a42] text-white py-20 px-4 md:px-8"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div
        className="flex flex-col justify-center items-center text-center pb-10"
        variants={itemVariants}
      >
        <p className="px-4 py-2 border border-gray-400 rounded-[32px] mb-3">
          Contact Us
        </p>
        <h2 className="text-[28px] md:text-[40px] font-bold leading-snug">
          Let’s Build a Better <br /> Healthcare Future
        </h2>
        <p className="text-[#FFFFFF] text-[16px] md:text-[18px] mt-4">
        Contact Pali Group Services to secure an IOR <br /> or firestopping inspector for your project.
        </p>
      </motion.div>

      {/* Form and Contact Info Section */}
      <motion.div
        className="max-w-[915px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={containerVariants}
      >
        {/* Form Section */}
        <motion.div
          className="bg-white text-black p-8 rounded-[20px] shadow-md w-full max-w-[432px] mx-auto lg:mx-0"
          variants={itemVariants}
        >
          <h2 className="text-center text-[24px] font-bold mb-6 leading-[28px]">
          Send a request for more information on how we can help with your project!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-gray rounded-md"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 border border-gray rounded-md"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray rounded-md"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray rounded-md"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#1a1a42] text-white py-2 px-4 rounded-md"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Request"}
              </button>
            </div>
          </form>
          {isSuccess && <p className="text-center mt-2 text-green-500">Data submitted successfully!</p>}
          {isError && (
            <p className="text-red-500 text-center mt-2">Error: {apiError?.data?.message || "Something went wrong!"}</p>
          )}
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          className="flex flex-col justify-center items-center space-y-6 lg:space-y-4"
          variants={itemVariants}
        >
          <div>
            <h3 className="text-[24px] font-bold mb-4 text-center lg:text-left">
            Contact Us:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-center lg:justify-start">
                <FaPhoneAlt className="text-blue-400 mr-2" /> +1 415-297-3432
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <FaEnvelope className="text-blue-400 mr-2" />{" "}
                admin@paligroupservices.org
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <FaEnvelope className="text-blue-400 mr-2" />{" "}
                firestopping@paligroupservices.org
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <FaEnvelope className="text-blue-400 mr-2" />{" "}
                support@paligroupservices.org
              </li>
              
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
