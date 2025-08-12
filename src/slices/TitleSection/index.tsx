"use client";
import { FC, useEffect, useState } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type TitleSectionProps = SliceComponentProps<Content.TitleSectionSlice>;

const TitleSection: FC<TitleSectionProps> = ({ slice }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50); // tiny delay for smoother entry
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative min-h-[90vh] sm:min-h-screen w-full overflow-hidden">
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
          <div
            className={[
              "max-w-3xl rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 shadow-2xl p-6 sm:p-8",
              "transition-all duration-700 ease-out",
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            ].join(" ")}
          >
            {/* Title */}
            {slice.primary.title && (
              <PrismicRichText
                field={slice.primary.title}
                components={{
                  heading1: ({ children }) => (
                    <h1
                      className={[
                        "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white",
                        "drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]",
                        "transition-all duration-700 ease-out",
                        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                      ].join(" ")}
                      style={{ transitionDelay: "120ms" }}
                    >
                      {children}
                      <span
                        className={[
                          "block h-1 mt-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600",
                          "transition-all duration-700 ease-out",
                          mounted ? "w-24" : "w-0",
                        ].join(" ")}
                        style={{ transitionDelay: "280ms" }}
                      />
                    </h1>
                  ),
                }}
              />
            )}

            {/* Description */}
            {slice.primary.description && (
              <div
                className={[
                  "mt-5 sm:mt-6 transition-all duration-700 ease-out",
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
                ].join(" ")}
                style={{ transitionDelay: "400ms" }}
              >
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
