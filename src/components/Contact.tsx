"use client";
import { useState, type FormEvent } from "react";
import { Reveal, RevealText } from "./Reveal";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#06369c] text-white"
      aria-labelledby="contact-heading"
    >
      {/* Static Glow Effects (No continuous animations to prevent scroll lag) */}
      <div
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] pointer-events-none rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(96, 165, 250, 0.15) 0%, rgba(96, 165, 250, 0) 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] pointer-events-none rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)' }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1600px] gap-16 px-6 py-6 md:px-10 md:py-10 lg:grid-cols-12 lg:gap-10 lg:px-14 lg:py-14">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="mt-8 mb-6 font-sans text-[0.75rem] uppercase tracking-[0.35em] text-white/80 font-semibold">
              Get in Touch
            </p>
          </Reveal>
          <RevealText
            as="h2"
            text="Let’s create something unforgettable"
            className="font-display text-[clamp(2.4rem,5vw,4.2rem)] font-medium leading-[1.05] tracking-tight text-white"
          />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md font-sans text-base font-light leading-relaxed text-white/90 md:text-lg">
              Share a glimpse of your vision. Our team will respond with care,
              clarity, and the craftsmanship your occasion deserves.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 flex items-end justify-end">
          <div className="flex w-full max-w-xl items-center gap-3 rounded-[2rem] border border-white/15 bg-white/5 px-5 py-4 shadow-[0_20px_80px_rgba(15,23,42,0.2)] backdrop-blur-sm sm:px-6 md:px-7 md:py-5">
            <p className="shrink-0 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-white/70 sm:text-[0.7rem]">
              Email us
            </p>
            <a
              href="mailto:info@renaissanceevents.com"
              className="min-w-0 truncate font-sans text-base font-medium text-white transition-colors duration-200 hover:text-blue-200 sm:text-lg md:text-xl lg:text-2xl"
            >
              info@renaissanceevents.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}