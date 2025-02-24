import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Kurt',
    default: 'Kurt',
  },
  description:
    'I’m Kurt, a tech enthusiast and adventurer currently based in London. I’m passionate about exploring the world, connecting with people, and diving into creative projects that merge technology and fun. Whether I’m gaming, learning something new, or hacking away at a golf course, I love embracing challenges and making the most of every moment.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
