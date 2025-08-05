import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type FaqProps = SliceComponentProps<Content.FaqSlice>;

const Faq: FC<FaqProps> = ({ slice }) => {
  const faqs = slice.primary.faqs || [];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>

        {faqs.length === 0 ? (
          <p className="text-center text-red-500">Aucune FAQ renseignée.</p>
        ) : (
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  {faq.question || "❓ Question manquante"}
                </h3>

                {faq.answer ? (
                  <PrismicRichText
                    field={faq.answer}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-gray-700">{children}</p>
                      ),
                    }}
                  />
                ) : (
                  <p className="text-gray-400 italic">Réponse manquante</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Faq;
