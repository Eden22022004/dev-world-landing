'use client'
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="py-10 px-4 sm:py-12 sm:px-6 text-center bg-white/5 rounded-t-3xl backdrop-blur-xl border-t border-white/20"
        >
            <p className="opacity-80 text-white text-sm sm:text-base">
                © {new Date().getFullYear()} Назар — Dev World. Пишіть:{' '}
                <motion.a
                    href="https://t.me/development_of_site"
                    whileHover={{ scale: 1.1, textShadow: '0 0 12px rgba(255,255,255,0.7)' }}
                    className="underline bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent transition-all break-words"
                >
                    @development_of_site
                </motion.a>
            </p>
        </motion.footer>
    )
}
