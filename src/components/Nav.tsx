'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Nav() {
    const [active, setActive] = useState('#projects')

    const links = [
        { href: '#projects', label: 'Проєкти' },
        { href: '#about', label: 'Про мене' },
        { href: '#contact', label: "Зв'язок" }
    ]

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 90 }}
            className="w-full sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg"
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
                <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent transition-all hover:scale-105">
                    DevWorld
                </Link>

                <nav className="flex space-x-6">
                    {links.map((link) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            onClick={() => setActive(link.href)}
                            whileHover={{ scale: 1.1, textShadow: '0 0 12px rgba(255,255,255,0.8)' }}
                            whileTap={{ scale: 0.95 }}
                            className={`relative text-sm font-medium transition-all ${
                                active === link.href
                                    ? 'text-white bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent'
                                    : 'text-white/80 hover:text-white'
                            }`}
                        >
                            {link.label}
                            <span
                                className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 transition-all ${
                                    active === link.href ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                                }`}
                            />
                        </motion.a>
                    ))}
                </nav>
            </div>
        </motion.header>
    )
}
