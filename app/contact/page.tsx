"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", organization: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">Get in Touch</h1>
          <p className="text-sage-600 text-lg max-w-xl mx-auto">
            Have questions, want early access, or interested in a partnership? I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-sage-800 mb-6">Let&apos;s Connect</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you&apos;re a nonprofit looking to improve your grant applications, a community
                organization wanting to learn more, or a funder interested in collaboration — I&apos;m here
                to help.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 text-xl shrink-0">
                    ✉️
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:hsburke2003@gmail.com" className="text-sage-700 font-medium hover:text-sage-900 transition-colors">
                      hsburke2003@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 text-xl shrink-0">
                    🌿
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Service</p>
                    <p className="text-gray-700 font-medium">AI-Powered Grant Review</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 text-xl shrink-0">
                    🎓
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Affiliation</p>
                    <p className="text-gray-700 font-medium">Penn State University</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-5 bg-sage-50 rounded-xl border border-sage-100">
                <p className="text-sage-700 text-sm font-semibold mb-1">Response Time</p>
                <p className="text-gray-500 text-sm">
                  I typically respond within 1–2 business days. For urgent inquiries, please include &ldquo;URGENT&rdquo; in your subject line.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-sage-50 border border-sage-200 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                  <div className="text-5xl mb-4">🌱</div>
                  <h3 className="text-xl font-bold text-sage-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-500">
                    Thank you, {form.name}! I&apos;ll be in touch at <strong>{form.email}</strong> soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Organization (optional)</label>
                    <input
                      type="text"
                      placeholder="Your nonprofit or organization"
                      value={form.organization}
                      onChange={(e) => setForm({ ...form, organization: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your organization, grant needs, or how I can help..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage-400 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-sage-600 text-white font-semibold py-3 rounded-lg hover:bg-sage-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
