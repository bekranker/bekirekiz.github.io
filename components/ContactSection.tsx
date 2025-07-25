import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
      <div className="max-w-xl mx-auto">
        <ContactForm />
      </div>
    </section>
  );
}
