"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    // Buraya mail gönderme servisi entegre edilebilir
  };

  return submitted ? (
    <p className="text-green-600 text-center">
      Thanks! Your message has been sent.
    </p>
  ) : (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        onChange={handleChange}
        required
        className="w-full border p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
        required
        className="w-full border p-2 rounded h-32"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
}
