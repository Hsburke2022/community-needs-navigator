"use client";
import { useState } from "react";

const mockFeedback = {
  missing: [
    "Budget justification narrative is absent — funders need line-item explanations.",
    "Evaluation plan not included — describe how you will measure success.",
    "Letters of support from community partners are not referenced.",
    "Timeline for deliverables is missing from the proposal.",
  ],
  strengths: [
    "Clear and compelling problem statement that aligns with funder priorities.",
    "Strong organizational background section demonstrating credibility.",
    "Well-defined target population with specific demographic data.",
  ],
  weaknesses: [
    "Goals are broad — use SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound).",
    "The sustainability plan lacks detail on how programming continues post-grant.",
    "Abstract language in the executive summary reduces immediate impact.",
  ],
  improvements: [
    "Add a one-page budget with narrative justifying each line item.",
    "Include 2–3 letters of support from partner organizations.",
    "Rewrite goals as SMART objectives with numeric targets.",
    "Add a 6-month implementation timeline with milestones.",
    "Strengthen the sustainability section with revenue diversification details.",
  ],
};

export default function HowItWorksPage() {
  const [proposalFile, setProposalFile] = useState<File | null>(null);
  const [requirementsFile, setRequirementsFile] = useState<File | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"missing" | "strengths" | "weaknesses" | "improvements">("missing");

  function handleAnalyze() {
    if (!proposalFile || !requirementsFile) return;
    setLoading(true);
    setShowResults(false);
    setTimeout(() => {
      setLoading(false);
      setShowResults(true);
    }, 2200);
  }

  const tabs = [
    { key: "missing" as const, label: "Missing", color: "text-red-600", bg: "bg-red-50 border-red-200", icon: "⚠️" },
    { key: "strengths" as const, label: "Strengths", color: "text-green-700", bg: "bg-green-50 border-green-200", icon: "✅" },
    { key: "weaknesses" as const, label: "Weaknesses", color: "text-amber-700", bg: "bg-amber-50 border-amber-200", icon: "🔍" },
    { key: "improvements" as const, label: "Improvements", color: "text-sage-700", bg: "bg-sage-50 border-sage-200", icon: "🌱" },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-sage-50 to-sage-100 pt-16 pb-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-sage-900 mb-4">How It Works</h1>
          <p className="text-sage-600 text-lg max-w-2xl mx-auto">
            Three simple steps to stronger grant proposals — powered by AI.
          </p>
        </div>
        <svg viewBox="0 0 1440 60" className="w-full block -mb-1" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {[
              { step: "1", icon: "📤", title: "Upload Your Documents", desc: "Upload your grant proposal and the grant requirements document — PDF or Word." },
              { step: "2", icon: "🤖", title: "AI Reviews Everything", desc: "Our AI reads both documents and compares your proposal against every requirement." },
              { step: "3", icon: "📊", title: "Get Your Report", desc: "Receive a detailed breakdown: what's missing, what's strong, what's weak, and how to improve." },
            ].map((s, i) => (
              <>
                <div key={s.step} className="text-center flex-1 bg-sage-50 rounded-2xl p-8 border border-sage-100 shadow-sm w-full">
                  <div className="w-16 h-16 rounded-full bg-sage-600 text-white font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                    {s.step}
                  </div>
                  <div className="text-3xl mb-3">{s.icon}</div>
                  <h3 className="text-lg font-bold text-sage-800 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < 2 && (
                  <div key={`arrow-${i}`} className="flex-shrink-0 flex items-center justify-center">
                    {/* Desktop arrow */}
                    <div className="hidden md:flex flex-col items-center gap-1">
                      <svg className="w-12 h-12 text-sage-400" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 24 H36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                        <path d="M28 14 L40 24 L28 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      </svg>
                    </div>
                    {/* Mobile arrow */}
                    <svg className="md:hidden w-8 h-10 text-sage-400" fill="none" viewBox="0 0 32 48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 4 V36" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                      <path d="M6 28 L16 40 L26 28" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block bg-sage-200 text-sage-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              Interactive Demo
            </span>
            <h2 className="section-heading">Try It Out</h2>
            <p className="text-gray-500">Upload sample documents below to see the kind of feedback our AI provides.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-sage-100 p-8">
            {/* Upload areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Proposal upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Grant Proposal</label>
                <label className={`flex flex-col items-center justify-center h-36 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${proposalFile ? "border-sage-400 bg-sage-50" : "border-gray-200 hover:border-sage-300 hover:bg-sage-50"}`}>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setProposalFile(e.target.files?.[0] ?? null)}
                  />
                  {proposalFile ? (
                    <>
                      <span className="text-2xl mb-1">📄</span>
                      <span className="text-sm font-medium text-sage-700 text-center px-2 truncate max-w-full">{proposalFile.name}</span>
                      <span className="text-xs text-gray-400 mt-1">Click to change</span>
                    </>
                  ) : (
                    <>
                      <span className="text-3xl mb-2">📤</span>
                      <span className="text-sm text-gray-500">Click to upload</span>
                      <span className="text-xs text-gray-400 mt-1">PDF or Word</span>
                    </>
                  )}
                </label>
              </div>

              {/* Requirements upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Grant Requirements</label>
                <label className={`flex flex-col items-center justify-center h-36 border-2 border-dashed rounded-xl cursor-pointer transition-colors ${requirementsFile ? "border-sage-400 bg-sage-50" : "border-gray-200 hover:border-sage-300 hover:bg-sage-50"}`}>
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => setRequirementsFile(e.target.files?.[0] ?? null)}
                  />
                  {requirementsFile ? (
                    <>
                      <span className="text-2xl mb-1">📋</span>
                      <span className="text-sm font-medium text-sage-700 text-center px-2 truncate max-w-full">{requirementsFile.name}</span>
                      <span className="text-xs text-gray-400 mt-1">Click to change</span>
                    </>
                  ) : (
                    <>
                      <span className="text-3xl mb-2">📋</span>
                      <span className="text-sm text-gray-500">Click to upload</span>
                      <span className="text-xs text-gray-400 mt-1">PDF or Word</span>
                    </>
                  )}
                </label>
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!proposalFile || !requirementsFile || loading}
              className="w-full bg-sage-600 text-white font-semibold py-3 rounded-xl hover:bg-sage-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                  </svg>
                  Analyzing your proposal...
                </>
              ) : "Analyze Grant Proposal"}
            </button>

            {!proposalFile || !requirementsFile ? (
              <p className="text-center text-xs text-gray-400 mt-2">Upload both documents to enable analysis</p>
            ) : null}
          </div>

          {/* Results */}
          {showResults && (
            <div className="mt-8 bg-white rounded-2xl shadow-md border border-sage-100 overflow-hidden">
              <div className="bg-sage-700 text-white px-6 py-4">
                <h3 className="font-bold text-lg">AI Analysis Results</h3>
                <p className="text-sage-200 text-sm">Here&apos;s what we found in your grant proposal</p>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-gray-100 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`flex-1 min-w-[100px] py-3 text-sm font-medium transition-colors ${
                      activeTab === tab.key
                        ? "border-b-2 border-sage-600 text-sage-700 bg-sage-50"
                        : "text-gray-500 hover:text-sage-600"
                    }`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {tabs.map((tab) =>
                  activeTab === tab.key ? (
                    <ul key={tab.key} className="space-y-3">
                      {mockFeedback[tab.key].map((item, i) => (
                        <li key={i} className={`flex gap-3 p-3 rounded-lg border ${tab.bg}`}>
                          <span className="mt-0.5 shrink-0">{tab.icon}</span>
                          <span className={`text-sm ${tab.color}`}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
