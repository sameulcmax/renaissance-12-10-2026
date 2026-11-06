import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-12">
        <div className="flex justify-center">
          <div className="w-full max-w-[1100px] text-left">
            <div className="mb-6 h-px w-24 bg-[#06369c]/30" />

            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.22em] text-[#06369c]/70">
              Strategic event production
            </p>

            <h2
              className="
                mb-6
                text-[42px]
                font-normal
                leading-[0.98]
                tracking-[-0.03em]
                text-[#06369c]
                sm:text-[52px]
                lg:text-[72px]
              "
            >
              Large-Scale Events
            </h2>

            <p
              className="
                mb-8
                max-w-[980px]
                text-[17px]
                font-normal
                leading-[1.9]
                text-[#315276]
                sm:text-[20px]
              "
            >
              From global conferences and destination experiences to high-profile civic
              activations, we design and deliver complex events with precision, clarity,
              and flawless operational control. Every detail is aligned to the audience,
              the brand, and the goals of the experience.
            </p>

            <a
              href="/services"
              className="
                group
                inline-flex
                items-center
                gap-3
                bg-[#06369c]
                px-7
                py-4
                text-[13px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white
                transition-all
                duration-300
                hover:bg-[#052878]
                sm:px-8
              "
            >
              <span>View All Services</span>
              <ArrowUpRight
                className="
                  h-[17px]
                  w-[17px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
                strokeWidth={1.7}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;