"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function WaveDown({ from, to }: { from: string; to: string }) {
  return (
    <div className={`${from} -mb-1`}>
      <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill={to} />
      </svg>
    </div>
  );
}

export default function HomePage() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (formData.name && formData.email) setSubmitted(true);
  }

  const features = [
    { icon: "📄", title: "Upload Your Documents", desc: "Simply upload your grant proposal and the grant requirements in PDF or Word format." },
    { icon: "🤖", title: "AI Analysis", desc: "Our AI compares your proposal against the requirements, identifying gaps, strengths, and weaknesses." },
    { icon: "🌱", title: "Actionable Insights", desc: "Receive a clear, prioritized report of exactly what to improve to maximize your funding chances." },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-sage-50 via-sage-100 to-sage-200 pt-20 md:pt-28 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-sage-200 text-sage-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
                AI-Powered Grant Review
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-sage-900 leading-tight mb-5">
                Empowering Communities &amp; Creating Positive Change
              </h1>
              <p className="text-lg text-sage-700 leading-relaxed mb-8">
                Upload your grant proposal and requirements. Our AI instantly identifies what you&apos;re
                missing, highlights your strengths, pinpoints weaknesses, and gives you actionable steps
                to secure funding.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/how-it-works" className="btn-primary text-center">See How It Works</Link>
                <Link href="/contact" className="btn-outline text-center">Get in Touch</Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/images/headshot.jpg" alt="Hannah Burke" fill className="object-cover object-top" priority />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 text-xl">✓</div>
                  <div>
                    <p className="font-semibold text-sage-800 text-sm">Instant AI Feedback</p>
                    <p className="text-gray-500 text-xs">Strengths, gaps &amp; improvements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WaveDown from="bg-transparent" to="white" />
      </section>

      {/* Features */}
      <section className="pt-16 pb-0 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center mb-14">
            <h2 className="section-heading">Why Community Needs Navigator?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Grant writing is hard. We make it easier by giving you expert-level feedback in seconds.
            </p>
          </div>

          {/* Cards with arrows */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            {features.map((f, i) => (
              <>
                <div key={f.title} className="card text-center flex-1 w-full">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="text-lg font-bold text-sage-800 mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
                {i < features.length - 1 && (
                  <div key={`arrow-${i}`} className="flex-shrink-0 flex items-center justify-center">
                    {/* Desktop arrow */}
                    <svg className="hidden md:block w-10 h-10 text-sage-400" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 20 H30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M22 12 L32 20 L22 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    {/* Mobile arrow */}
                    <svg className="md:hidden w-8 h-8 text-sage-400" fill="none" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 8 V30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                      <path d="M12 22 L20 32 L28 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <WaveDown from="bg-white" to="#F3F7F0" />
      </section>

      {/* Photo strip */}
      <section className="pt-16 pb-0" style={{ backgroundColor: "#F3F7F0" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="section-heading">Rooted in Community</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Community Needs Navigator was born from a genuine passion for strengthening nonprofits and
                community organizations. I&apos;ve seen firsthand how transformative the right funding can be,
                and how much potential goes unrealized because of imperfect grant writing.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This platform bridges the gap between powerful ideas and the funding they deserve.
              </p>
              <Link href="/about" className="btn-primary mt-6 inline-block">Learn More About Me</Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-56 rounded-xl overflow-hidden shadow-md">
                <Image src="/images/community.jpg" alt="Hannah working with the community" fill className="object-cover" />
              </div>
              <div className="relative h-56 rounded-xl overflow-hidden shadow-md mt-8">
                <Image src="/images/outdoor.jpg" alt="Hannah outdoors" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
        <WaveDown from="transparent" to="white" />
      </section>

      {/* Email Capture */}
      <section className="pt-16 pb-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-3">Stay in the Loop</h2>
          <p className="text-gray-500 mb-8">
            Be the first to know when the full AI grant review tool launches. Enter your name and email
            below for early access and updates.
          </p>

          {submitted ? (
            <div className="bg-sage-50 border border-sage-200 rounded-2xl p-8">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-xl font-bold text-sage-800 mb-2">You&apos;re on the list!</h3>
              <p className="text-gray-500">
                Thanks, {formData.name}! We&apos;ll reach out to <strong>{formData.email}</strong> with updates and early access.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-sage-50 border border-sage-100 rounded-2xl p-8 shadow-sm text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text" required placeholder="Jane Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email" required placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-sage-400 bg-white"
                  />
                </div>
              </div>
              <button type="submit" className="w-full bg-sage-600 text-white font-semibold py-3 rounded-lg hover:bg-sage-700 transition-colors">
                Get Early Access
              </button>
              <p className="text-center text-gray-400 text-xs mt-3">No spam, ever. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
