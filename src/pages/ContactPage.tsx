import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { CONTACT_EMAIL, SOCIAL_LINKS } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="flex flex-col text-brand-primary">
      {/* 1. HERO SECTION */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          {/* Left Title */}
          <div className="relative z-10 col-span-4 flex flex-col justify-end px-3 py-8 md:col-span-8 md:px-4 md:py-12">
            <p className="mb-3 md:mb-4 text-[0.85rem] font-bold tracking-[0.18em] uppercase opacity-75 md:text-base">
              let's collaborate
            </p>
            <h1 className="text-[clamp(3.5rem,22vw,17rem)] leading-[0.8] font-bold tracking-[-0.13em]">
              contact me.
            </h1>
          </div>

          {/* Right Image Card */}
          <div className="relative col-span-4 md:col-span-4 border-l border-brand-primary/50">
            <div className="relative aspect-square max-h-[66svh] w-full overflow-hidden bg-brand-dark">
              <img
                alt="Rivisha"
                src="/api/media/file/hero-image-1.webp"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SAY HELLO & CONTACT FORM */}
      <section className="text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-0 pb-0">
            <div className="grid grid-cols-4 md:grid-cols-10">
              {/* Left Info Column (Cols 1-4) */}
              <div className="col-span-4 p-3 md:p-4 md:col-span-4 flex flex-col justify-between gap-16 py-12 md:py-16">
                <div>
                  <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                    say hello.
                  </h2>
                </div>

                <div className="flex flex-col gap-8">
                  {/* Location Info */}
                  <div className="flex flex-col gap-1">
                    <p className="text-[0.65rem] tracking-[0.18em] uppercase opacity-60 font-bold">Based in</p>
                    <p className="text-sm font-mono opacity-80">Sri Lanka · UTC+5:30</p>
                    <p className="text-[0.65rem] tracking-[0.18em] uppercase opacity-50">Available for freelance</p>
                  </div>

                  {/* Email Link */}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="group inline-flex w-fit items-start gap-3 text-lg md:text-xl leading-relaxed"
                  >
                    <Mail className="mt-1 h-5 w-5 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
                    <span className="underline decoration-1 underline-offset-[6px] opacity-80 transition-opacity group-hover:opacity-100 font-mono text-sm md:text-base">
                      {CONTACT_EMAIL}
                    </span>
                  </a>

                  {/* Social Channels */}
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a
                        href={SOCIAL_LINKS.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex w-fit items-center gap-3"
                      >
                        <svg className="h-4 w-4 shrink-0 fill-current opacity-60 transition-opacity group-hover:opacity-100" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        <span className="opacity-80 transition-opacity group-hover:opacity-100 text-[0.65rem] tracking-[0.18em] uppercase">
                          GitHub · RivishaMarambage
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex w-fit items-center gap-3"
                      >
                        <svg className="h-4 w-4 shrink-0 fill-current opacity-60 transition-opacity group-hover:opacity-100" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        <span className="opacity-80 transition-opacity group-hover:opacity-100 text-[0.65rem] tracking-[0.18em] uppercase">
                          LinkedIn · rivisha-marambage
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Form Column (Cols 5-10) */}
              <div className="col-span-4 md:col-span-6 md:border-l border-brand-primary/50 border-t md:border-t-0">
                {submitted ? (
                  <div className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px] text-center gap-4">
                    <CheckCircle2 className="h-12 w-12" style={{ color: 'var(--color-brand-accent)' }} />
                    <h3 className="text-2xl md:text-3xl font-bold">
                      Thanks for reaching out!
                    </h3>
                    <p className="opacity-80 max-w-[40ch] leading-relaxed">
                      Your message has been received. I'll get back to you as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', message: '' });
                      }}
                      className="mt-4 border border-brand-primary/50 px-5 py-2 text-xs uppercase tracking-widest hover:bg-brand-primary hover:text-brand-cream transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col divide-y divide-brand-primary/50 border-b border-brand-primary/50"
                  >
                    {/* Name */}
                    <div className="flex flex-col">
                      <label className="px-3 md:px-4 pt-4 pb-1 text-[0.65rem] tracking-[0.18em] uppercase opacity-60 font-bold">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                        placeholder="Your name"
                        className="bg-transparent px-3 md:px-4 py-3 pb-4 text-brand-primary placeholder:opacity-30 focus:outline-none text-lg"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="px-3 md:px-4 pt-4 pb-1 text-[0.65rem] tracking-[0.18em] uppercase opacity-60 font-bold">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                        placeholder="your@email.com"
                        className="bg-transparent px-3 md:px-4 py-3 pb-4 text-brand-primary placeholder:opacity-30 focus:outline-none text-lg font-mono"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label className="px-3 md:px-4 pt-4 pb-1 text-[0.65rem] tracking-[0.18em] uppercase opacity-60 font-bold">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                        placeholder="+94 ..."
                        className="bg-transparent px-3 md:px-4 py-3 pb-4 text-brand-primary placeholder:opacity-30 focus:outline-none text-lg font-mono"
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col flex-1">
                      <label className="px-3 md:px-4 pt-4 pb-1 text-[0.65rem] tracking-[0.18em] uppercase opacity-60 font-bold">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                        placeholder="Tell me about your project..."
                        className="bg-transparent px-3 md:px-4 py-3 pb-4 text-brand-primary placeholder:opacity-30 focus:outline-none resize-none text-lg flex-1"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="group/roll flex items-center justify-between px-3 md:px-4 py-4 md:py-6 text-lg font-semibold uppercase tracking-[0.06em] transition-colors hover:bg-brand-primary hover:text-brand-cream disabled:opacity-60"
                    >
                      <span className="relative block overflow-hidden">
                        <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-full">
                          {loading ? 'Sending...' : 'Send message'}
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-0"
                        >
                          {loading ? 'Sending...' : 'Send message'}
                        </span>
                      </span>
                      <span className="transition-transform duration-300 group-hover/roll:translate-x-2">→</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
