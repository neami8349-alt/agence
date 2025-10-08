import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`relative w-full pb-12 md:pb-20 lg:pb-32 px-6 md:px-[calc(18vw-10rem)] ${className}`}>
      <div className="max-w-[138rem] mx-auto flex flex-col items-center">{children}</div>
    </section>
  );
}

interface BlogSliderSectionProps {
  children: ReactNode;
  className?: string;
}

export function BlogSliderSection({
  children,
  className = "",
}: BlogSliderSectionProps) {
  return (
    <div className={`w-full pb-[3rem] md:pb-[5rem] lg:pb-[8rem] ${className}`}>
      <div className="relative overflow-x-scroll pb-[7rem] scroll-smooth [scroll-snap-type:x_mandatory] [scrollbar-width:none] md:px-[calc(18vw-10rem)]">
        <div className="max-w-[138rem] mx-auto">
          <ul className="flex overflow-x-visible items-start m-0 list-none after:block after:ml-[-6.25%] after:content-[''] after:flex-[0_0_calc(-50%+50vw)] sm:after:ml-[-6.25%] lg:after:ml-[-4.34783%]">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface SliderItemProps {
  children: ReactNode;
  className?: string;
}

export function SliderItem({ children, className = "" }: SliderItemProps) {
  return (
    <li
      className={`inline-flex max-w-[42rem] scroll-snap-align-center flex-[0_0_80%] mr-[6.25%] my-0 sm:flex-[0_0_43.75%] lg:flex-[0_0_30.4348%] lg:mr-[4.34783%] ${className}`}
    >
      {children}
    </li>
  );
}
