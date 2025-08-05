import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type TitleSectionProps = SliceComponentProps<Content.TitleSectionSlice>;

const TitleSection: FC<TitleSectionProps> = ({ slice }) => {
  return (
    <section className="py-12 text-center bg-white">
      <div className="max-w-4xl mx-auto px-4">
        {slice.primary.title && (
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading1: ({ children }) => (
                <h1 className="text-4xl font-bold mb-4">{children}</h1>
              ),
              heading2: ({ children }) => (
                <h2 className="text-3xl font-semibold mb-3">{children}</h2>
              ),
            }}
          />
        )}
        {slice.primary.description && (
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p className="text-lg text-gray-700">{children}</p>
              ),
            }}
          />
        )}
      </div>
    </section>
  );
};

export default TitleSection;
