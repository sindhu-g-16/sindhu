import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send, CheckCircle2, MessageSquare, Linkedin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Simulate reliable submission
    setSubmitted(true);
  };

  const mailtoLink = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
    subject || `Portfolio Inquiry from ${name || 'Collaborator'}`
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  )}`;

  return (
    <section id="contact" className="py-24 border-t border-[#221A36] relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#FF8E72]">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF9FF] font-display">
            Let's Connect & Collaborate
          </h2>
          <p className="text-sm text-[#B3AAC7]">
            Whether you have an internship opportunity, project collaboration, or data science discussion, feel free to reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Contact Card */}
            <div className="bg-[#140F22] border border-[#2B2147] hover:border-[#8B5CF6]/40 rounded-2xl p-6 space-y-4 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#201836] text-[#FF8E72]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#8E83A8] uppercase tracking-wider">
                    Direct Email
                  </div>
                  <a 
                    href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                    className="text-base font-bold text-[#FAF9FF] hover:text-[#FF8E72] transition-colors"
                  >
                    {PORTFOLIO_DATA.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="px-3.5 py-2 text-xs font-medium rounded-lg bg-[#1B142F] hover:bg-[#251C3E] border border-[#372A5C] text-[#D1CADF] transition-colors flex items-center gap-1.5"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#B3AAC7]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="px-3.5 py-2 text-xs font-medium rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#FF6B6B] text-white hover:opacity-95 transition-opacity flex items-center gap-1.5"
                >
                  <span>Open Mail Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Connection Card */}
            <div className="bg-[#140F22] border border-[#2B2147] hover:border-[#0A66C2]/40 rounded-2xl p-6 space-y-4 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[#0D2238] text-[#38BDF8]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#8E83A8] uppercase tracking-wider">
                    Professional Network
                  </div>
                  <div className="text-base font-bold text-[#FAF9FF]">
                    LinkedIn Profile
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#B3AAC7] leading-relaxed">
                Connect with Gunturu Sindhu for networking, professional recommendations, and updates on ongoing data science projects.
              </p>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#38BDF8] hover:text-[#7DD3FC] transition-colors"
              >
                <span>View LinkedIn Profile</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick response note */}
            <div className="p-4 rounded-xl bg-[#140F22] border border-[#221938] text-xs text-[#8E83A8] space-y-1">
              <div className="text-[#D1CADF] font-semibold">Response Time Commitment</div>
              <p>Typically replies within 24 hours to student inquiries, project discussions, and internship recruiters.</p>
            </div>

          </div>

          {/* Right Column: Interactive Message Composer */}
          <div className="lg:col-span-7">
            <div className="bg-[#140F22] border border-[#2B2147] rounded-2xl p-6 sm:p-8">
              
              <h3 className="text-xl font-bold text-[#FAF9FF] font-display mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-[#9F95B7] mb-6">
                Fill out the quick form below or launch an email directly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#1B142F] border border-[#3C2E63] text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-[#FAF9FF] font-display">
                    Thank You, {name}!
                  </h4>
                  <p className="text-xs text-[#B3AAC7] max-w-md mx-auto leading-relaxed">
                    Your message draft is ready. You can also send this directly via your email client if you prefer instant dispatch to <strong className="text-white">{PORTFOLIO_DATA.personal.email}</strong>.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={mailtoLink}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-[#7C3AED] to-[#FF6B6B] rounded-xl flex items-center gap-1.5"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Default Mail App</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 text-xs font-semibold text-[#D1CADF] hover:text-white bg-[#251C3E] rounded-xl transition-colors"
                    >
                      Compose Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C5BDE0]">
                        Your Name <span className="text-[#FF6B6B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Alex Johnson"
                        className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#0D0A17] border border-[#30254F] text-[#FAF9FF] placeholder-[#665D7D] focus:outline-none focus:border-[#C084FC] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-[#C5BDE0]">
                        Your Email <span className="text-[#FF6B6B]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#0D0A17] border border-[#30254F] text-[#FAF9FF] placeholder-[#665D7D] focus:outline-none focus:border-[#C084FC] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#C5BDE0]">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Internship Opportunity / CivicsFix Project Discussion"
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#0D0A17] border border-[#30254F] text-[#FAF9FF] placeholder-[#665D7D] focus:outline-none focus:border-[#C084FC] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-[#C5BDE0]">
                      Message <span className="text-[#FF6B6B]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share project details, questions, or introductory note..."
                      className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#0D0A17] border border-[#30254F] text-[#FAF9FF] placeholder-[#665D7D] focus:outline-none focus:border-[#C084FC] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#FF6B6B] hover:opacity-95 rounded-xl shadow-lg shadow-[#7C3AED]/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prepare Message</span>
                    </button>

                    <a
                      href={mailtoLink}
                      className="text-xs text-[#FF8E72] hover:underline flex items-center gap-1"
                    >
                      <span>Or click to open email directly</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
