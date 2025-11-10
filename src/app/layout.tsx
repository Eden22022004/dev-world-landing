import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
    title: 'Dev World — Назар (Frontend / Fullstack)',
    description: 'Мій віртуальний світ як розробника — лендінг, портфоліо, контакти.',
    icons: {
        icon: '/favicon.ico', // favicon для браузера
        shortcut: '/favicon.ico', // маленький значок для вкладок
        apple: '/favicon.ico' // для iOS
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="uk">
        <body>
        <div className="min-h-screen flex flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
        </div>
        </body>
        </html>
    )
}
