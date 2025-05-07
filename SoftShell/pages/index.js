import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function SoftSell() {
  const [darkMode, setDarkMode] = useState(false);
  const [testimonials, setTestimonials] = useState([
    {
      name: "John Doe",
      role: "IT Manager",
      company: "Acme Corp",
      quote: "SoftSell helped us recover unused license value!",
    },
    {
      name: "Jane Smith",
      role: "CFO",
      company: "BetaTech",
      quote: "Smooth process and instant payout.",
    },
  ]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newQuote = {
      name: form.name.value,
      role: form.role.value,
      company: form.company.value,
      quote: form.quote.value,
    };
    setTestimonials([...testimonials, newQuote]);
    form.reset();
  };

  return (
    <main>
      <div className="min-h-screen px-6 md:px-20 py-10 transition-colors duration-300">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">SoftSell</h1>
          <button
  onClick={() => setDarkMode(!darkMode)}
  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 border-2 ${
    darkMode
      ? 'bg-gray-800 text-white border-gray-600 hover:bg-gray-700'
      : 'bg-white text-gray-900 border-gray-300 hover:bg-gray-100'
  }`}
>
  {darkMode ? "Light" : "Dark"} Mode
</button>

        </header>

        {/* Hero Section */}
        <section className="hero text-center mb-20">
          <motion.h2
            className="text-5xl font-extrabold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Turn Unused Software Into Cash
          </motion.h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            SoftSell helps businesses resell unused software licenses in minutes — fast, safe, and reliable.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 shadow-md transition">
            Get a Free Quote
          </button>
        </section>

        {/* How It Works */}
        <section className="how-it-works section-padding mb-20">
          <h3 className="section-title text-2xl font-bold mb-8">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {["Upload License", "Get Valuation", "Get Paid"].map((step, i) => (
              <motion.div
                key={i}
                className="step-card p-6 border rounded shadow-sm bg-white dark:bg-gray-800"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="step-icon text-3xl mb-3">🔄</div>
                <h4 className="text-xl font-semibold mb-2">{step}</h4>
                <p>We make it simple and fast to go from submission to payout.</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-choose-us section-padding mb-20">
          <h3 className="section-title text-2xl font-bold mb-8">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "Fast Valuation", desc: "Get a price within hours." },
              { icon: "🔒", title: "Secure Transactions", desc: "Fully encrypted and safe." },
              { icon: "🤝", title: "Trusted by 100+ Businesses", desc: "We work with industry leaders." },
              { icon: "🕐", title: "24/7 Support", desc: "Always here to help you." },
            ].map((item, i) => (
              <div key={i} className="tile p-6 border rounded shadow-sm bg-white dark:bg-gray-800">
                <div className="tile-icon text-3xl mb-3">{item.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials section-padding mb-20">
          <h3 className="section-title text-2xl font-bold mb-8">Customer Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((review, i) => (
              <div key={i} className="review p-4 border rounded shadow-sm bg-white dark:bg-gray-800">
                <p className="italic mb-4">"{review.quote}"</p>
                <p className="font-semibold">
                  {review.name}, {review.role} - {review.company}
                </p>
              </div>
            ))}
          </div>

          {/* Add a Quote Form */}
          <div className="add-quote-form mt-10 p-6 border rounded-lg shadow-sm bg-white dark:bg-gray-800">
            <h4 className="text-xl font-semibold mb-4">Add Your Testimonial</h4>
            <form onSubmit={handleQuoteSubmit} className="grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="role"
                placeholder="Your Role"
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="p-2 border rounded"
              />
              <textarea
                name="quote"
                placeholder="Your Testimonial"
                rows="3"
                required
                className="p-2 border rounded"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Submit Quote
              </button>
            </form>
          </div>
        </section>

        {/* Contact Form */}
        <section className="contact-form section-padding mb-20">
          <h3 className="section-title text-2xl font-bold mb-8">Contact Us</h3>
          <form className="grid gap-4 max-w-xl">
            <input type="text" placeholder="Name" required className="p-2 border rounded" />
            <input type="email" placeholder="Email" required className="p-2 border rounded" />
            <input type="text" placeholder="Company" className="p-2 border rounded" />
            <select className="p-2 border rounded">
              <option>License Type</option>
              <option>Windows</option>
              <option>Adobe</option>
              <option>Other</option>
            </select>
            <textarea placeholder="Message" rows="4" className="p-2 border rounded"></textarea>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 mt-10">© 2025 SoftSell. All rights reserved.</footer>
      </div>
    </main>
  );
}
