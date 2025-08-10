import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type PriceBlockProps = SliceComponentProps<Content.PriceBlockSlice>;

const PriceBlock: FC<PriceBlockProps> = ({ slice }) => {
  return (
    <section className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-12">
          Average Price per m²
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Apartments */}
          <div className="bg-[#fefefe] rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-md font-semibold text-violet-600 mb-2">
              Apartments
            </h3>
            <div className="text-2xl font-semibold text-slate-800 mb-1">
              <PrismicRichText field={slice.primary.apartment_price} />
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Average observed price
            </p>
          </div>

          {/* Houses */}
          <div className="bg-[#fefefe] rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-md font-semibold text-green-600 mb-2">
              Houses
            </h3>
            <div className="text-2xl font-semibold text-slate-800 mb-1">
              <PrismicRichText field={slice.primary.house_price} />
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Average observed price
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceBlock;
