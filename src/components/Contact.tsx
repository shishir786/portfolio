"use client";

import { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, Clock, MessageSquare, CheckCircle2 } from 'lucide-react';
import { LuGithub, LuLinkedin } from 'react-icons/lu';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const directEmail = 'abdullahshishir786@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (formError) setFormError('');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please complete all fields before sending.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to dispatch message.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch (error: any) {
      setFormError(error.message || 'Unable to deliver message at this time. Please use direct email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Inquiries */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                Get in Touch
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Let's Discuss Projects &amp; Collaborations.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Whether you have an upcoming project, engineering role inquiry, or want to discuss backend architectures, my inbox is always open.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl surface-card border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${directEmail}`}
                      className="text-sm font-semibold text-white hover:text-blue-400 transition-colors truncate block"
                    >
                      {directEmail}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-slate-300 hover:text-white transition-colors shrink-0 cursor-pointer flex items-center gap-1.5 text-xs font-medium"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-mono text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="font-mono text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Time Zone Card */}
              <div className="p-4 rounded-xl surface-card border border-white/[0.08] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Location &amp; Timezone</span>
                  <p className="text-sm font-semibold text-white">
                    Dhaka, Bangladesh <span className="text-xs font-mono text-slate-400 font-normal">(UTC +6:00)</span>
                  </p>
                </div>
              </div>

              {/* Response Time Card */}
              <div className="p-4 rounded-xl surface-card border border-white/[0.08] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Response Window</span>
                  <p className="text-sm font-semibold text-slate-200">
                    Typically responds within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-2 flex items-center gap-4 text-slate-300">
              <span className="text-xs font-mono uppercase text-slate-400">Profiles:</span>
              <a
                href="https://github.com/shishir786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg surface-card border border-white/[0.08] hover:border-blue-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <LuGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/abdullah-shishir"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg surface-card border border-white/[0.08] hover:border-blue-400 hover:text-white transition-colors"
                title="LinkedIn"
              >
                <LuLinkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl surface-card border border-white/[0.08] relative">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider mb-6">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Send a Direct Message</span>
              </div>

              {formError && (
                <div className="p-3.5 mb-6 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-300">
                  {formError}
                </div>
              )}

              {isSubmitted && (
                <div className="p-4 mb-6 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-300 flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Your inquiry was submitted successfully. I will get back to you shortly!</span>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Alex Morgan"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-black/30 border border-white/[0.1] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                      Email Address <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="alex@company.com"
                      required
                      className="w-full px-4 py-2.5 rounded-lg bg-black/30 border border-white/[0.1] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2 font-mono">
                    Message / Project Details <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project, role scope, timeline, or question..."
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/[0.1] text-white text-sm placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-y min-h-[120px]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-action w-full py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
