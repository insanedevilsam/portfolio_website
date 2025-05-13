// src/components/Contact.jsx
function Contact() {
  return (
    <section className="py-10 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-blue-400">Contact Me</h2>
      <form
        className="flex flex-col gap-4"
        action="https://formspree.io/f/{your_form_id}" method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-2 rounded bg-gray-800 text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="p-2 rounded bg-gray-800 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white rounded px-5 py-2"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
export default Contact;