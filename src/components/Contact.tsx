export function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[calc(100svh-8rem)] items-center justify-center overflow-hidden bg-white text-[#06369c] lg:min-h-[calc(100svh-13rem)]"
      aria-labelledby="contact-heading"
    >
      {/* Static Glow Effects (No continuous animations to prevent scroll lag) */}
      <div
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] pointer-events-none rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(6, 54, 156, 0.08) 0%, rgba(6, 54, 156, 0) 70%)' }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] pointer-events-none rounded-full opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(6, 54, 156, 0.06) 0%, rgba(6, 54, 156, 0) 70%)' }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 py-12 text-center md:px-10 lg:px-14">
        <h2
          id="contact-heading"
          className="font-sans text-[0.75rem] font-semibold uppercase tracking-[0.35em] text-[#06369c]/70"
        >
          Get in Touch
        </h2>
        <p className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,6vw,5rem)] font-medium leading-[1.05] tracking-tight text-[#06369c]">
          Tell us about your next event.
        </p>
        <div className="mt-8 flex w-fit max-w-full items-center gap-3 rounded-[2rem] border border-[#06369c]/15 bg-[#06369c] px-5 py-4 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:px-6 md:py-5">
          <p className="shrink-0 font-sans text-[0.65rem] uppercase tracking-[0.25em] text-white/70 sm:text-[0.7rem]">
            Email us
          </p>
          <a
            href="mailto:info@renaissanceevents.com"
            className="min-w-0 truncate font-sans text-base font-medium text-white transition-colors duration-200 hover:text-blue-200 sm:text-lg md:text-xl"
          >
            info@renaissanceevents.com
          </a>
        </div>
      </div>
    </section>
  );
}