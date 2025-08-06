import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type TitleSectionProps = SliceComponentProps<Content.TitleSectionSlice>;

const TitleSection: FC<TitleSectionProps> = ({ slice }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image with blur and dark overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover blur-[1px] scale-105 z-1"
        style={{
          backgroundImage: "url('/images/paris15.jpg')",
        }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content layer */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 sm:px-12 lg:px-24 max-w-4xl fade-up">
        {/* Title */}
        {slice.primary.title && (
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] mb-4">
                  {children}
                </h1>
              ),
            }}
          />
        )}

        {/* Description */}
        {slice.primary.description && (
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-lg sm:text-xl text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] leading-relaxed max-w-3xl">
                  {children}
                </p>
              ),
            }}
          />
        )}
      </div>


    </section>
  );
};

export default TitleSection;
