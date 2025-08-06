import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type PriceBlockProps = SliceComponentProps<Content.PriceBlockSlice>;

const PriceBlock: FC<PriceBlockProps> = ({ slice }) => {
  return (
    <section className="bg-[#f9fafb] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800 mb-12">
          Prix moyens au m²
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Appartement */}
          <div className="bg-[#fefefe] rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-md font-semibold text-violet-600 mb-2">
              Appartements
            </h3>
            <div className="text-2xl font-semibold text-slate-800 mb-1">
              7 590 € / m²
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Prix moyen observé
            </p>
          </div>

          {/* Maison */}
          <div className="bg-[#fefefe] rounded-2xl shadow-md p-6 transition-all hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-md font-semibold text-green-600 mb-2">
              Maisons
            </h3>
            <div className="text-2xl font-semibold text-slate-800 mb-1">
              10 200 € / m²
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Prix moyen observé
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default PriceBlock;
