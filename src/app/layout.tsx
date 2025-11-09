import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
    title: 'Dev World — Георгій (Frontend / Fullstack)',
    description: 'Мій віртуальний світ як розробника — лендінг, портфоліо, контакти.'
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
