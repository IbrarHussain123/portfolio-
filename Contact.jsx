// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 bg-white text-center">
//       <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
//       <p className="text-gray-600 mb-8">Interested in working together? Let’s connect!</p>
//       <a href="ibrarhussainhakro123@gmail.com" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
//         Send Message
//       </a>
//     </section>
//   );
// }
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/messages", formData);
      setSuccess(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      {success && <p className="text-green-600 mb-4">{success}</p>}
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-3 rounded"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-3 rounded"
          type="email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          className="border p-3 rounded"
          rows="5"
          required
        />
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}
