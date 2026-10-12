import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {}

const features = [
  'Conferences & Conventions (1000+)',
  'Music Festivals & Concerts',
  'Sporting Events & Competitions',
  'Public Celebrations & Ceremonies',
  'Multi-Venue Productions',
  'Live Streaming & Hybrid Events',
  'Global Event Coordination',
];

export const ServicesSection: React.FC<ServicesSectionProps> = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-10 lg:px-12">
        
        {/* Main Split Layout: items-center ensures the left block is vertically aligned with the right list */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Heading, Description & Button (Span 5) */}
          <div className="flex flex-col items-start lg:col-span-5">
            
            {/* Heading */}
            <h2
              className="
                mb-6
                text-[36px]
                font-normal
                leading-[1.1]
                tracking-[-0.02em]
                text-[#06369c]
                sm:text-[42px]
                lg:text-[48px]
              "
            >
              Large-Scale Events
            </h2>

            {/* Description */}
            <p
              className="
                mb-8
                text-[16px]
                font-normal
                leading-[1.7]
                text-[#315276]
                sm:text-[18px]
              "
            >
              Orchestrate complex productions with thousands of attendees. Our expertise in
              logistics and crowd management ensures flawless execution at any scale.
            </p>

            {/* Button */}
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

          {/* Right Column: Clean List Layout (Span 7) */}
          <div className="flex flex-col lg:col-span-7">
            <ul className="divide-y divide-[#e2e8f0]">
              {features.map((item, index) => (
                <li
                  key={index}
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    py-5
                    first:pt-0
                    last:pb-0
                    sm:py-6
                  "
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span
                      className="
                        text-[13px]
                        font-medium
                        tracking-wider
                        text-[#06369c]/60
                        transition-colors
                        duration-300
                        group-hover:text-[#06369c]
                        sm:text-[14px]
                      "
                    >
                      0{index + 1}
                    </span>
                    <span
                      className="
                        text-[16px]
                        font-medium
                        text-[#29496d]
                        transition-colors
                        duration-300
                        group-hover:text-[#06369c]
                        sm:text-[18px]
                      "
                    >
                      {item}
                    </span>
                  </div>
                  
                  <ArrowUpRight
                    className="
                      h-5
                      w-5
                      text-[#06369c]
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      group-hover:opacity-100
                    "
                    strokeWidth={1.6}
                  />
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;