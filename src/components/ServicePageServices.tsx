import React from 'react';
import Image from 'next/image';
import {
  Users,
  Music,
  Trophy,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';

interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  icon: React.ElementType;
}

const services: Service[] = [
  {
    id: 'large-scale-events',
    number: '1',
    title: 'Large-Scale Events',
    description:
      'Orchestrate complex productions with thousands of attendees. Our expertise in logistics and crowd management ensures flawless execution at any scale.',
    features: [
      'Conferences & Conventions (2,000+)',
      'Sporting Events & Galas',
      'Receptions & After-Parties',
      'Public Celebrations & Ceremonies',
      'Multi-Venue Events',
      'Global Event Management',
      'Vendor Management (AV, Ground Transportation) and more',
    ],
    image: '/images/d1.jpg',
    imageAlt: 'Large conference hall setup',
    icon: Users,
  },
  {
    id: 'exhibitions-and-sponsorships',
    number: '2',
    title: 'Exhibitions and Sponsorships',
    description:
      'Bring your brand to life through immersive experiences. We create interactive environments that forge emotional connections and drive meaningful engagement.',
    features: [
      'Research and Strategy',
      'Pricing and Packages',
      'Sponsor Booths and Fulfillment',
      'Exhibit Sales and Contract Negotiations',
      'Booth Assignments',
      'Working with General Services Contractor for Floor Plan',
      'On-Site Set-up and Execution (Load-In, Load-Out)',
      'Post-Event Evaluations',
    ],
    image: '/images/b1.jpg',
    imageAlt: 'Large sporting event',
    icon: Trophy,
  },
  {
    id: 'association-corporate-and-non-profit-events',
    number: '3',
    title: 'Association, Corporate and Non-Profit Events',
    description:
      'Transform gatherings into memorable experiences. From executive retreats to company-wide celebrations, we create environments that inspire and engage.',
    features: [
      'Executive Summits & Retreats',
      'Annual Meetings & Conferences',
      'Product Launches & Reveals',
      'Award Ceremonies & Galas',
      'Team Building Experiences',
      'Incentive Travel Programs',
      'Corporate Social Responsibility Events',
    ],
    image: '/images/e1.jpg',
    imageAlt: 'Public celebration event',
    icon: Sparkles,
  },
];

export const ServicePageServices: React.FC = () => {
  return (
    <section className="w-full bg-white">

      {/* =========================
          SECTION HEADING
      ========================== */}
      <div className="mx-auto flex w-full max-w-[1480px] flex-col items-center px-6 pb-8 pt-8 text-center sm:px-10 sm:pb-10 sm:pt-10">

        {/* Decorative Line */}
        <div className="mb-4 h-px w-24 bg-[#06369c]/30 sm:mb-5 sm:w-28" />

        {/* Heading */}
        <h2
          className="
            text-[42px]
            font-normal
            leading-[1.05]
            tracking-[-0.025em]
            text-[#06369c]
            sm:text-[50px]
            md:text-[58px]
            lg:text-[64px]
          "
        >
          Our Services
        </h2>

      </div>

      {/* =========================
          SERVICES
      ========================== */}
      {services.map((service, index) => {
        const Icon = service.icon;

        // 01: Image Left / Content Right
        // 02: Content Left / Image Right
        // 03: Image Left / Content Right
        // 04: Content Left / Image Right
        const imageLeft = index % 2 === 0;

        return (
          <div
            id={service.id}
            key={service.number}
            className="mx-auto w-full max-w-[1480px] scroll-mt-32"
          >
            <div className="flex flex-col lg:grid lg:grid-cols-2">

              {/* =========================
                  IMAGE
              ========================== */}
              <div
                className={`
                  flex
                  items-center
                  w-full
                  ${imageLeft ? 'lg:order-1' : 'lg:order-2'}
                `}
              >
                <div
                  className="
                    w-full
                    border-2
                    border-[#06369c]
                    p-2
                  "
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[#eef1f6]">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(min-width: 1480px) 740px, (min-width: 1024px) 50vw, 100vw"
                      className="
                        object-cover
                        object-center
                        transition-transform
                        duration-700
                        hover:scale-[1.02]
                      "
                    />
                  </div>
                </div>
              </div>

              {/* =========================
                  CONTENT
              ========================== */}
              <div
                className={`
                  flex
                  flex-col
                  items-start
                  text-left
                  px-6
                  py-10
                  sm:px-10
                  sm:py-12
                  md:px-14
                  lg:justify-between
                  lg:px-14
                  lg:pt-0
                  lg:pb-16
                  xl:px-20
                  lg:justify-start
                  lg:gap-2
                  lg:pb-6
                  ${
                    imageLeft
                      ? 'lg:order-2'
                      : 'lg:order-1'
                  }
                `}
              >

                {/* Service Number */}
                <span
                  className="
                    mb-6
                    text-[15px]
                    tracking-[0.15em]
                    text-[#06369c]/60
                    sm:mb-7
                    sm:text-[16px]
                    lg:mb-2
                    lg:text-[14px]
                  "
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    mb-7
                    flex
                    h-[52px]
                    w-[52px]
                    items-center
                    justify-center
                    bg-[#06369c]
                    sm:mb-8
                    sm:h-[57px]
                    sm:w-[57px]
                    lg:mb-2
                    lg:h-9
                    lg:w-9
                  "
                >
                  <Icon
                    className="
                      h-[25px]
                      w-[25px]
                      text-white
                      sm:h-[27px]
                      sm:w-[27px]
                      lg:h-5
                      lg:w-5
                    "
                    strokeWidth={1.6}
                  />
                </div>

                {/* Service Heading */}
                <h3
                  className="
                    mb-5
                    max-w-[520px]
                    text-[34px]
                    font-normal
                    leading-[1.08]
                    tracking-[-0.02em]
                    text-[#06369c]
                    sm:mb-6
                    sm:text-[40px]
                    md:text-[44px]
                    lg:text-[46px]
                    lg:mb-2
                    lg:text-[40px]
                  "
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mb-7
                    max-w-[520px]
                    text-[15px]
                    font-normal
                    leading-[1.7]
                    text-[#315276]
                    sm:mb-8
                    sm:text-[16px]
                    md:text-[17px]
                    lg:mb-2
                    lg:text-[17px]
                  "
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-[13px] lg:space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="
                        flex
                        items-start
                        text-[14px]
                        font-normal
                        leading-[1.5]
                        text-[#29496d]
                        sm:text-[15px]
                        md:text-[16px]
                        lg:text-[15px]
                        lg:leading-[1.4]
                      "
                    >
                      <span
                        className={`
                          mr-3
                          mt-[7px]
                          h-[7px]
                          w-[7px]
                          flex-shrink-0
                          rounded-full
                          bg-[#06369c]
                          sm:mr-[17px]
                          sm:h-[8px]
                          sm:w-[8px]
                        `}
                      />

                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="/contact"
                  className="
                    group
                    mt-9
                    inline-flex
                    items-center
                    gap-3
                    border
                    border-[#06369c]
                    bg-[#06369c]
                    px-6
                    py-3.5
                    text-[13px]
                    font-medium
                    uppercase
                    tracking-[0.12em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#06369c]
                    sm:mt-10
                    sm:px-7
                    sm:py-4
                    lg:mt-3
                    lg:gap-2
                    lg:px-4
                    lg:py-2
                    lg:text-[11px]
                  "
                >
                  <span>Explore Service</span>

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
        );
      })}
    </section>
  );
};

export default ServicePageServices;