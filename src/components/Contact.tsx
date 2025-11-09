'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [name, setName] = useState('')
    const [msg, setMsg] = useState('')
    const [sent, setSent] = useState(false)

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault()
        const text = encodeURIComponent(`Привіт, я з лендингу. Мене звати ${name}. ${msg}`)
        window.open(`https://t.me/development_of_site?text=${text}`, '_blank')
        setSent(true)
    }

    return (
        <section id="contact" className="max-w-3xl mx-auto px-6 py-24">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400"
            >
                Зв'язок
            </motion.h2>

            <motion.form
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-10 grid gap-6 bg-white/5 p-10 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/20"
            >
                <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all text-white placeholder:text-white/60"
                    placeholder="Ваше ім'я"
                />
                <textarea
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="p-4 rounded-xl bg-white/10 border border-white/20 focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all text-white placeholder:text-white/60"
                    placeholder="Коротко про завдання"
                ></textarea>

                <motion.button
                    whileHover={{ scale: 1.06, boxShadow: '0 8px 25px rgba(255, 105, 180, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white font-semibold shadow-lg transition-all"
                >
                    Написати в Telegram
                </motion.button>

                {sent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm opacity-80 mt-2 text-center text-white"
                    >
                        Перехід в Telegram відкрито — напишіть мені.
                    </motion.div>
                )}
            </motion.form>
        </section>
    )
}
