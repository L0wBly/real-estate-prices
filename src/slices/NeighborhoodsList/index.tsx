"use client";

import { FC } from "react";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";
import { motion } from "framer-motion";

export type NeighborhoodsListProps = SliceComponentProps<Content.NeighborhoodsListSlice>;

const backgroundMap: Record<string, string> = {
  Convention: "from-purple-400 to-purple-600",
  Commerce: "from-emerald-400 to-green-600",
  Javel: "from-sky-400 to-sky-600",
  "Saint-Lambert": "from-pink-400 to-pink-600",
};

const NeighborhoodsList: FC<NeighborhoodsListProps> = ({ slice }) => {
  const neighborhoods = slice.primary.name;

  return (
    <section className="py-20 bg-gradient-to-b from-white via-green-500 to-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 tracking-tight">
          Quartiers les plus demandés
        </h2>

        {neighborhoods?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {neighborhoods.map((item, index) => {
              const title = item.title?.[0]?.text ?? "Inconnu";
              const gradient = backgroundMap[title] ?? "from-gray-300 to-gray-500";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative rounded-2xl p-6 shadow-xl group hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 overflow-hidden`}
                >
                  {/* Gradient background glow */}
                  <div
                    className={`absolute -z-10 top-0 left-0 h-full w-full bg-gradient-to-r ${gradient} opacity-10 blur-2xl rounded-2xl`}
                  />

                  {/* Colored top border */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 rounded-t-2xl bg-gradient-to-r ${gradient}`} />

                  <div className="text-xl font-semibold text-gray-800 group-hover:scale-105 transition-transform">
                    {title}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Quartier attractif du 15ᵉ
                  </p>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <p className="text-red-500">Aucun quartier trouvé dans Prismic</p>
        )}
      </div>
    </section>
  );
};

export default NeighborhoodsList;
