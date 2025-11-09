'use client'

import { motion } from 'framer-motion'
import ThreeScene from './ThreeScene'

// 🩹 Обхід проблеми з типами Motion
const MotionH1: any = motion.h1
const MotionP: any = motion.p
const MotionDiv: any = motion.div
const MotionA: any = motion.a

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <ThreeScene />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <MotionH1
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 90 }}
                        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent leading-tight"
                    >
                        Привіт, я Назар — створюю веб-продукти
                    </MotionH1>

                    <MotionP
                        initial={{ x: -30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.35 }}
                        className="mt-6 text-lg opacity-80"
                    >
                        Я роблю швидкі, красиві та ефективні сайти: від лендінгів до повноцінних web-продуктів. Поринь у мій віртуальний світ — побачиш приклади моєї роботи й зможеш зв'язатись одразу.
                    </MotionP>

                    <div className="mt-8 flex gap-4 flex-wrap">
                        <MotionA
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-6 py-3 rounded-2xl glass shadow-lg"
                        >
                            Написати мені
                        </MotionA>
                        <MotionA
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#projects"
                            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 text-white shadow-lg"
                        >
                            Переглянути проєкти
                        </MotionA>
                    </div>
                </div>

                <MotionDiv
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="w-full md:w-1/2 glass p-6 rounded-3xl shadow-2xl backdrop-blur-xl border border-white/10"
                >
                    <div className="flex items-center gap-4">
                        <img src="/images/avatar.png" alt="avatar" className="w-16 h-16 rounded-full ring-2 ring-purple-400" />
                        <div>
                            <div className="font-semibold">Назар К.</div>
                            <div className="text-sm opacity-70">Frontend / Fullstack</div>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="font-bold text-lg">3+</div>
                            <div className="text-xs opacity-70">роки досвіду</div>
                        </div>
                        <div>
                            <div className="font-bold text-lg">20+</div>
                            <div className="text-xs opacity-70">зроблених проєктів</div>
                        </div>
                        <div>
                            <div className="font-bold text-lg">24/7</div>
                            <div className="text-xs opacity-70">підтримка</div>
                        </div>
                    </div>
                </MotionDiv>
            </div>
        </section>
    )
}
