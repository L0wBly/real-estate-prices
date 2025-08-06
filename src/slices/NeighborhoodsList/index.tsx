'use client'

import { FC } from 'react'
import { PrismicRichText } from '@prismicio/react'
import { motion } from 'framer-motion'
import { SharedSlice } from '@/prismicio-types'

const backgroundMap: Record<string, string> = {
  Convention: 'from-purple-400 to-pink-400',
  Commerce: 'from-green-400 to-emerald-600',
  Javel: 'from-sky-400 to-blue-600',
  'Saint-Lambert': 'from-pink-400 to-pink-600',
}

type NeighborhoodsListProps = {
  slice: SharedSlice
}

const NeighborhoodsList: FC<NeighborhoodsListProps> = ({ slice }) => {
  const neighborhoods = slice.primary.name

  return (
    <section className="relative py-28 bg-neutral-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 tracking-tight">
          Quartiers les plus demandés
        </h2>

        {Array.isArray(neighborhoods) && neighborhoods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
            {neighborhoods.map((item, index) => {
              const title = item.title?.[0]?.text ?? 'Inconnu'
              const gradient = backgroundMap[title] ?? 'from-gray-300 to-gray-500'

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative rounded-2xl p-6 shadow-2xl group hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200"
                >
                  {/* Glow background */}
                  <div
                    className={`absolute -z-10 top-0 left-0 h-full w-full bg-gradient-to-r ${gradient} opacity-10 blur-2xl rounded-2xl`}
                  />

                  {/* Top colored bar */}
                  <div className={`h-1 w-full rounded-t-2xl bg-gradient-to-r ${gradient}`} />

                  <h3 className="text-xl font-semibold text-gray-900 mt-4">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1">Quartier attractif du 15ᵉ</p>
                </motion.div>
              )
            })}
          </div>
        ) : (
          <p className="text-red-500">Aucun quartier trouvé.</p>
        )}
      </div>
    </section>
  )
}

export default NeighborhoodsList
