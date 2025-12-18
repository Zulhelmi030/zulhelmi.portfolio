import TitleHeader from "../component/TitleHeader";
import ContactExperience from "../component/ContactExperience";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
        import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAIL_PUBLIC_KEY
      );
      // Reset form and stop loading
      setData({ name: "", email: "", message: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false); // Always stop loading, even on error
    }
  };

  return (
    <section id="contact" className="section-padding">
      <TitleHeader
        title="Get in Touch - Let's Contact"
        sub="💬 Have a question ? Let's talk"
      />

      <div className="grid-12-cols section-padding padding-x">
        <div className="xl:col-span-5 ">
          <form
            ref={formRef}
            className="space-y-6 bg-black-200 p-6 rounded-lg"
            onSubmit={handleSubmit}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-black-100 border border-black-200"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded bg-black-100 border border-black-200"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full p-3 rounded bg-black-100 border border-black-200"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="cta-button bg-blue-500 disabled:opacity-50"
              >
                <p className="text">{loading ? "Sending..." : "Send Message"}</p>
              </button>
            </div>
          </form>
        </div>

        <div className="xl:col-span-7 min-h-96">
          <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
            <ContactExperience />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
