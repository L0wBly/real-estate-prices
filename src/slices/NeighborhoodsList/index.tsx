import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type NeighborhoodsListProps = SliceComponentProps<Content.NeighborhoodsListSlice>;

const NeighborhoodsList: FC<NeighborhoodsListProps> = ({ slice }) => {
  const neighborhoods = slice.primary.name || [];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Quartiers les plus demandés
        </h2>

        {neighborhoods.length === 0 ? (
          <p className="text-center text-red-500">Aucun quartier renseigné dans Prismic.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {neighborhoods.map((quartier, index) => (
              <li
                key={index}
                className="bg-white shadow rounded-xl p-4 text-lg font-medium text-gray-800 hover:bg-indigo-50 transition"
              >
                {quartier.title ? (
                  <PrismicRichText
                    field={quartier.title}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="text-gray-800 text-lg">{children}</p>
                      ),
                      heading1: ({ children }) => (
                        <h3 className="text-xl font-bold">{children}</h3>
                      ),
                    }}
                  />
                ) : (
                  <span className="text-red-400 italic">Nom manquant</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default NeighborhoodsList;
