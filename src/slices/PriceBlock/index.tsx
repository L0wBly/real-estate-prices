import { FC } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type PriceBlockProps = SliceComponentProps<Content.PriceBlockSlice>;

const PriceBlock: FC<PriceBlockProps> = ({ slice }) => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Prix moyens au m²</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Appartements</h3>
            <PrismicRichText
              field={slice.primary.apartment_price}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-gray-700 text-lg">{children}</p>
                ),
              }}
            />
          </div>

          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Maisons</h3>
            <PrismicRichText
              field={slice.primary.house_price}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-gray-700 text-lg">{children}</p>
                ),
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceBlock;
