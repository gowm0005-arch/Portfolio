import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";
import { contactInfo } from "../data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const fields = [
    { name: "name", label: "Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "subject", label: "Subject", type: "text" },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Let's talk"
          title="Contact Me"
          subtitle="Have an opportunity or a question? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-5 gap-8">
          <Reveal className="md:col-span-2 space-y-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 glass gradient-border rounded-2xl p-5 hover:-translate-y-1 transition-transform"
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white">
                <FiMail />
              </span>
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <p className="text-sm text-slate-200">{contactInfo.email}</p>
              </div>
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center gap-4 glass gradient-border rounded-2xl p-5 hover:-translate-y-1 transition-transform"
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white">
                <FiPhone />
              </span>
              <div>
                <p className="text-xs text-slate-500">Phone</p>
                <p className="text-sm text-slate-200">{contactInfo.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 glass gradient-border rounded-2xl p-5">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white">
                <FiMapPin />
              </span>
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="text-sm text-slate-200">{contactInfo.location}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="https://github.com/gowm0005-arch"
                className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all"
              >
                <FiGithub />
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="https://www.linkedin.com/in/m-gowtham-b6797341a/e"
                className="w-11 h-11 rounded-full glass flex items-center justify-center hover:text-[var(--color-accent)] hover:-translate-y-1 transition-all"
              >
                <FiLinkedin />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass gradient-border rounded-2xl p-6 sm:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {fields.slice(0, 2).map((f) => (
                  <div key={f.name}>
                    <label htmlFor={f.name} className="block text-xs text-slate-400 mb-1.5">
                      {f.label}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type}
                      required
                      value={form[f.name]}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[var(--color-accent)] outline-none transition-colors"
                      placeholder={`Your ${f.label.toLowerCase()}`}
                    />
                  </div>
                ))}
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[var(--color-accent)] outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-slate-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[var(--color-accent)] outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] font-medium text-white flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <FiSend /> {status === "sent" ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
