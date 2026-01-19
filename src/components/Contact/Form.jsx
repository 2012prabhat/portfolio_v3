import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function Form({ itemVariants }) {
  const { themeColors } = useSelector((state) => state.themeReducer);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // null | success | error
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    try {
      const response = await fetch("/api/contactUs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const StatusMessage = () => {
    if (!status) return null;

    const config = {
      success: {
        icon: "✓",
        message: "Message sent successfully!",
        bgColor: "bg-green-100",
        textColor: "text-green-800",
        borderColor: "border-green-300",
      },
      error: {
        icon: "✕",
        message: "Failed to send message. Please try again.",
        bgColor: "bg-red-100",
        textColor: "text-red-800",
        borderColor: "border-red-300",
      },
    };

    const { icon, message, bgColor, textColor, borderColor } = config[status];

    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`p-4 mb-6 rounded-lg border ${bgColor} ${textColor} ${borderColor} flex items-center`}
      >
        <span className="text-xl mr-3 font-bold">{icon}</span>
        <span>{message}</span>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="rounded-2xl p-8 shadow-xl transition-all duration-500 hover:shadow-2xl"
      style={{
        backgroundColor: themeColors.cardBg,
        border: `1px solid ${themeColors.border}`,
      }}
      variants={itemVariants}
      whileHover={{ scale: 1.01 }}
    >
      <h3
        className="text-2xl font-semibold mb-6"
        style={{ color: themeColors.primaryColor }}
      >
        Send a Message
      </h3>

      <StatusMessage />

      <form onSubmit={sendMessage} className="space-y-6">
        {/* Name */}
        <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-5 py-3 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 transition-all duration-300 disabled:opacity-70"
            style={{
              border: `1px solid ${themeColors.border}`,
              color: themeColors.text,
            }}
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-5 py-3 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 transition-all duration-300 disabled:opacity-70"
            style={{
              border: `1px solid ${themeColors.border}`,
              color: themeColors.text,
            }}
          />
        </motion.div>

        {/* Message */}
        <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }}>
          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            className="w-full px-5 py-3 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 transition-all duration-300 disabled:opacity-70"
            style={{
              border: `1px solid ${themeColors.border}`,
              color: themeColors.text,
              caretColor: themeColors.text,
            }}
          />
        </motion.div>

        {/* Submit */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 rounded-lg font-medium transition-all duration-300"
          style={{
            backgroundColor: isSubmitting
              ? `${themeColors.primaryColor}80`
              : themeColors.primaryColor,
            color: "#fff",
          }}
          whileHover={!isSubmitting ? { scale: 1.02 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
        >
          {isSubmitting ? "Sending..." : "Send Message →"}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Form;
