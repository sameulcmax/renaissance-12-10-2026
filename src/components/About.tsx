import React from "react";

const About: React.FC = () => {
  return (
    <section className="relative flex min-h-[560px] w-full items-center justify-center overflow-hidden bg-white px-6 py-24 sm:min-h-[600px] md:min-h-[540px]">
      <div className="mx-auto flex w-full max-w-none flex-col items-center text-center">

        {/* Fine Decorative Line */}
        <div
  className="
    mb-10
    h-px
    w-[160px]
    bg-gradient-to-r
    from-transparent
    via-[#123E9E]
    to-transparent
    md:mb-11
  "
/>

        {/* Heading */}
        <h2 className="text-[48px] font-normal leading-[1.1] tracking-[-0.025em] text-[#123E9E] sm:text-[56px] md:text-[64px] lg:text-[72px]">
          About
        </h2>

        {/* Body */}
        <div className="mt-9 w-full max-w-[1500px] text-[26px] font-normal leading-[1.6] tracking-[0.01em] text-[#123E9E] sm:text-[30px] md:text-[34px]">
          <p>
            Created in 1991, Renaissance Meetings and Special Events is a
            full-service event management and marketing firm specializing in
            meetings, conferences, special events, fundraising and sponsorship
            creating the ‘brand experience’ for our clients. Whether you are
            launching a new product, hosting a large-scale event or seeking
            sponsors for your next event, our expertise will guide you every
            step of the way.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;