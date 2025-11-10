import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'Dev World — Назар (Frontend / Fullstack)',
  description: 'Мій віртуальний світ як розробника — лендінг, портфоліо, контакти.',
  icons: {
    icon: '/favicon.ico', // favicon
    shortcut: '/favicon.ico',
    apple: '/favicon.ico'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="hb8l77hvrdjfYPL3Ybi_9AGVBBTWwQU6nwUaF2INfTM"
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
