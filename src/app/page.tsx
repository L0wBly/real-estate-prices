import { redirect } from 'next/navigation'
import { createClient } from '@/prismicio'

export default async function Home() {
  const client = createClient()
  const pages = await client.getAllByType('real_estate_prices')

  if (pages.length === 0) {
    // Tu peux rediriger vers une page d’erreur si aucun contenu
    redirect('/not-found')
  }

  const firstUid = pages[0].uid || 'paris_15'

  // Redirection automatique vers le premier document Prismic
  redirect(`/${firstUid}`)
}
