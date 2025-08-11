import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type TitleSectionProps = SliceComponentProps<Content.TitleSectionSlice>;

const TitleSection: FC<TitleSectionProps> = ({ slice }) => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover blur-[1px] scale-110"
        style={{ backgroundImage: "url('/images/paris15.jpg')" }}
        aria-hidden
      />

      {/* Overlays for readability */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-6xl px-6 sm:px-12 lg:px-24 w-full flex flex-col items-center justify-center h-screen ml-6">
          <div className="max-w-3xl rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl p-6 sm:p-8">
            {/* Title */}
            {slice.primary.title && (
              <PrismicRichText
                field={slice.primary.title}
                components={{
                  heading1: ({ children }) => (
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
                      {children}
                      <span className="block h-1 w-24 mt-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600" />
                    </h1>
                  ),
                }}
              />
            )}

            {/* Description */}
            {slice.primary.description && (
              <div className="mt-5 sm:mt-6">
                <PrismicRichText
                  field={slice.primary.description}
                  components={{
                    paragraph: ({ children }) => (
                      <p className="text-base sm:text-lg text-white/90 leading-relaxed md:max-w-2xl">
                        {children}
                      </p>
                    ),
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
