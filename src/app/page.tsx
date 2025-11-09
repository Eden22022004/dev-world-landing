'use client'

import React from 'react'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPalette } from 'react-icons/fa'

export default function Page() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="scroll-smooth"
        >
            <Hero />
            <Projects />

            <section id="about" className="max-w-6xl mx-auto px-6 py-32 md:py-40">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-6"
                >
                    Про мене
                </motion.h2>

                <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto opacity-80"
                >
                    Я створюю сучасні веб-продукти, лендінги та SPA високого рівня. Використовую Next.js, React,
                    Nest.js, Tailwind CSS і інтеграції з OpenAI. Мій підхід — швидкість, прозорість та wow-ефект для
                    користувачів.
                </motion.p>

                <motion.div
                    className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {/* Creative cards */}
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 text-white">
                        <h3 className="text-xl font-semibold mb-2">Інноваційний підхід</h3>
                        <p className="opacity-80">
                            Я використовую сучасні технології та нестандартні рішення для створення унікальних продуктів.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-green-400 to-teal-500 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 text-white">
                        <h3 className="text-xl font-semibold mb-2">Швидкість та ефективність</h3>
                        <p className="opacity-80">
                            Реалізую проєкти швидко, без втрати якості, оптимізую процеси розробки та взаємодії з клієнтом.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-pink-500 to-red-500 p-6 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 text-white">
                        <h3 className="text-xl font-semibold mb-2">WOW-ефект для користувачів</h3>
                        <p className="opacity-80">
                            Приділяю увагу деталям, анімаціям та інтерактивності, щоб продукт залишався в пам’яті користувача.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="mt-16 flex justify-center gap-8 text-4xl text-primary"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <FaReact title="React" />
                    <FaNodeJs title="Node.js" />
                    <FaPalette title="Tailwind / Design" />
                </motion.div>
            </section>

            <Contact />
            <Footer />
        </motion.div>
    )
}
