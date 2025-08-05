import { FC } from "react";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type CtaBlockProps = SliceComponentProps<Content.CtaBlockSlice>;

const CtaBlock: FC<CtaBlockProps> = ({ slice }) => {
  const { cta_text, contact } = slice.primary;

  return (
    <section className="py-16 bg-indigo-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">
          {cta_text || "Vous avez un projet ?"}
        </h2>

        {contact ? (
          <PrismicLink
            field={contact}
            className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-indigo-50 transition"
          >
            Nous contacter
          </PrismicLink>
        ) : (
          <p className="text-red-200 italic">Lien de contact manquant</p>
        )}
      </div>
    </section>
  );
};

export default CtaBlock;
