'use client'

import { FC } from 'react'
import Link from 'next/link'
import { SliceComponentProps } from '@prismicio/react'
import { Content, FilledLinkToWebField } from '@prismicio/client'

type CtaBlockProps = SliceComponentProps<Content.CtaBlockSlice>

const CtaBlock: FC<CtaBlockProps> = ({ slice }) => {
  const { cta_text, contact } = slice.primary
  const safeContact = contact as FilledLinkToWebField & { text?: string }

  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-600 py-24 overflow-hidden text-center">
      {/* Glow / flou décoratif */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-400 opacity-30 blur-3xl rounded-full -z-10" />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        {typeof cta_text === 'string' && cta_text.length > 0 && (
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white drop-shadow-md">
            {cta_text}
          </h2>
        )}

        {safeContact?.url && (
          <Link
            href={safeContact.url}
            target={safeContact.target ?? '_self'}
            className="inline-block mt-4 px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-md hover:shadow-lg hover:bg-gray-100 transition"
          >
            {safeContact.text || 'Contact Us'}
          </Link>
        )}
      </div>
    </section>
  )
}

export default CtaBlock
