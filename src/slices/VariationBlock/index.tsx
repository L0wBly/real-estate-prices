import { FC } from "react";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type VariationBlockProps = SliceComponentProps<Content.VariationBlockSlice>;

const VariationBlock: FC<VariationBlockProps> = ({ slice }) => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Variation des prix sur 12 mois
        </h2>

        <div className="inline-block px-6 py-4 bg-blue-50 border border-blue-200 rounded-xl shadow">
          <PrismicRichText
            field={slice.primary.price_variation}
            components={{
              paragraph: ({ children }) => (
                <p className="text-xl font-semibold text-blue-900">{children}</p>
              ),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default VariationBlock;
