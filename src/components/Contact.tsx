"use client";

import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Code2, Briefcase, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (formError) setFormError('');
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill out all required fields before sending.');
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message.');
      }

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      // Reset success status after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error: any) {
      setFormError(error.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#1E293B]/30 rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
        {/* Decorative blur blob */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        {/* Left Column: Details & Narrative */}
        <div className="space-y-8 relative z-10 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-[#dfe3e7] tracking-tight">Let's Connect</h2>
            <p className="text-[#c2c6d6] text-base leading-relaxed max-w-md">
              I'm currently looking for new opportunities and collaborations. Whether you have an enquiry,
              a project in mind, or just want to say hi, feel free to reach out and I'll get right back to you!
            </p>
          </div>

          <div className="space-y-5">
            <a
              href="mailto:abdullahshishir786@gmail.com"
              className="flex items-center gap-4 text-[#c2c6d6] hover:text-[#adc6ff] transition-all duration-200 group w-fit"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] border border-white/5 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#c2c6d6]/60 font-semibold uppercase tracking-wider">Email</p>
                <p className="font-medium text-[#dfe3e7] text-sm sm:text-base">abdullahshishir786@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 text-[#c2c6d6] group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#3B82F6] border border-white/5 pointer-events-none">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#c2c6d6]/60 font-semibold uppercase tracking-wider">Location</p>
                <p className="font-medium text-[#dfe3e7] text-sm sm:text-base">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <a
              id="contact-social-github"
              href="https://github.com/shishir786"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#3B82F6]/10 border border-white/10 hover:border-[#3B82F6]/30 flex items-center justify-center text-[#dfe3e7] hover:text-white transition-all"
              title="GitHub"
            >
              <Code2 className="w-4 h-4" />
            </a>
            <a
              id="contact-social-linkedin"
              href="https://linkedin.com/in/abdullah-shishir"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#3B82F6]/10 border border-white/10 hover:border-[#3B82F6]/30 flex items-center justify-center text-[#dfe3e7] hover:text-white transition-all"
              title="LinkedIn"
            >
              <Briefcase className="w-4 h-4" />
            </a>
            <button
              id="contact-btn-share"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: 'Md Abdullah Shishir - Portfolio',
                    url: window.location.href,
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Portfolio URL copied to clipboard!');
                }
              }}
              className="w-11 h-11 rounded-full bg-white/5 hover:bg-[#3B82F6]/10 border border-white/10 hover:border-[#3B82F6]/30 flex items-center justify-center text-[#dfe3e7] hover:text-white transition-all cursor-pointer"
              title="Share Portfolio"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="relative z-10 bg-[#0F172A]/40 p-6 sm:p-8 rounded-2xl border border-white/5">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                id="contact-form"
                onSubmit={handleFormSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[#c2c6d6]/80 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    suppressHydrationWarning
                    className="w-full bg-[#0F172A]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all duration-300 placeholder-slate-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[#c2c6d6]/80 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    suppressHydrationWarning
                    className="w-full bg-[#0F172A]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all duration-300 placeholder-slate-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[#c2c6d6]/80 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message details..."
                    rows={4}
                    className="w-full bg-[#0F172A]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] transition-all duration-300 placeholder-slate-500 resize-none text-sm"
                  ></textarea>
                </div>

                {formError && (
                  <p id="contact-error" className="text-xs font-medium text-red-400">
                    {formError}
                  </p>
                )}

                <button
                  id="contact-btn-submit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 text-sm cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                id="contact-success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-10 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center text-[#3B82F6] mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#dfe3e7] tracking-tight">Message Received!</h3>
                <p className="text-sm text-[#c2c6d6] max-w-sm">
                  Thank you for reaching out. I appreciate your message and will read and reply to your inquiry as soon as possible!
                </p>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#3B82F6] bg-[#3B82F6]/5 px-3 py-1.5 rounded-full border border-[#3B82F6]/20">
                  Ready to connect again
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
