'use client'

import { FC } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SliceComponentProps } from '@prismicio/react'
import { Content } from '@prismicio/client'

type NeighborhoodsListProps = SliceComponentProps<Content.NeighborhoodsListSlice>

const backgroundMap: Record<string, string> = {
  Convention: 'from-purple-400 to-pink-400',
  Commerce: 'from-green-400 to-emerald-600',
  Javel: 'from-sky-400 to-blue-600',
  'Saint-Lambert': 'from-pink-400 to-pink-600',
}

const imageMap: Record<string, string> = {
  Convention: '/images/neighborhoods/convention.jpg',
  Commerce: '/images/neighborhoods/commerce.jpg',
  Javel: '/images/neighborhoods/javel.jpg',
  'Saint-Lambert': '/images/neighborhoods/saint-lambert.jpg',
}

const NeighborhoodsList: FC<NeighborhoodsListProps> = ({ slice }) => {
  const neighborhoods = slice.primary.name

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Parallax background animation */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#e5f3f8] via-[#f8f9fa] to-[#e5f3f8] animate-parallax" />

      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-16 tracking-tight">
          Quartiers les plus demandés
        </h2>

        {Array.isArray(neighborhoods) && neighborhoods.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
            {(neighborhoods as { title?: { text: string }[] }[]).map((item, index) => {
              const title = item.title?.[0]?.text ?? 'Inconnu'
              const gradient = backgroundMap[title] ?? 'from-gray-300 to-gray-500'
              const imageUrl = imageMap[title] ?? '/images/paris15.jpg'

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80, rotateX: 10, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative rounded-2xl shadow-xl group hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 overflow-hidden"
                >
                  {/* Gradient glow */}
                  <div
                    className={`absolute -z-10 top-0 left-0 h-full w-full bg-gradient-to-r ${gradient} opacity-10 blur-2xl rounded-2xl`}
                  />

                  {/* Quartier image */}
                  <Image
                    src={imageUrl}
                    alt={`Image du quartier ${title}`}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />

                  {/* Texte */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500 mt-2">
                      Quartier attractif du 15ᵉ
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default NeighborhoodsList
