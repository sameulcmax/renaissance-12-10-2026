
"use client";

export function TellUsAboutNextRoom() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-[#06369c] py-20 sm:py-24 md:py-28"
    >
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <h2 className="mt-5 text-[clamp(3.2rem,8vw,8rem)] font-normal leading-[0.94] tracking-[-0.05em] text-white">
          Tell us about
          <br className="hidden sm:block" />
          your next event.
        </h2>

        <div className="mt-10 flex w-fit max-w-full items-center gap-3 rounded-[2rem] border border-white/15 bg-white px-5 py-4 shadow-[0_20px_80px_rgba(15,23,42,0.12)] sm:px-6 sm:py-5">
          <p className="shrink-0 text-[0.68rem] font-medium uppercase tracking-[0.28em] text-[#06369c]/70 sm:text-[0.75rem]">
            Email us
          </p>
          <a
            href="mailto:info@renaissanceevents.com"
            className="min-w-0 truncate text-base font-medium text-[#06369c] transition-colors duration-200 hover:text-blue-700 sm:text-lg md:text-xl lg:text-2xl"
          >
            info@renaissanceevents.com
          </a>
        </div>
      </div>
    </section>
  );
}