'use client'

import { FC, useState } from 'react'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import { Content } from '@prismicio/client'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export type FaqProps = SliceComponentProps<Content.FaqSlice>

const Faq: FC<FaqProps> = ({ slice }) => {
  const faqs = slice.primary.faqs || []
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleIndex = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index))
  }

  return (
    <section className="relative py-28 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`rounded-xl border shadow-md transition hover:shadow-lg 
                ${isOpen ? 'bg-violet-50' : 'bg-white '}`}
              >
                {/* Header clickable */}
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full text-left flex items-center justify-between px-6 py-4 group"
                >
                  <h3 className="text-lg font-semibold text-indigo-600 group-hover:underline">
                    {faq.question || '❓ Question manquante'}
                  </h3>

                  {/* Chevron icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="text-indigo-500" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { height: 'auto', opacity: 1 },
                        collapsed: { height: 0, opacity: 0 },
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden px-6"
                    >
                      <div className="pb-6 pt-0">
                        {faq.answer ? (
                          <PrismicRichText
                            field={faq.answer}
                            components={{
                              paragraph: ({ children }) => (
                                <p className="text-gray-700 leading-relaxed">
                                  {children}
                                </p>
                              ),
                            }}
                          />
                        ) : (
                          <p className="text-gray-400 italic">Réponse manquante</p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
