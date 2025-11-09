'use client'
import { motion } from 'framer-motion'

const mock = [
    {
        title: 'Лендінг для кафе',
        desc: 'Next.js, Tailwind, Stripe',
        img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
        link: 'https://coffeeok.com.ua/',
    },
    {
        title: 'Dashboard для CRM',
        desc: 'React + Charting',
        img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
        link: 'https://keycrm.app/',
    },
    {
        title: 'Магазин NFT',
        desc: 'Next.js + Web3',
        img: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=800&q=80',
        link: 'https://frgmnt.agency/projects/nft/',
    },
    {
        title: 'Сервіс бронювання',
        desc: 'Fullstack, MongoDB',
        img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
        link: 'https://www.bookinghub.com.ua/',
    },
]

export default function Projects() {
    return (
        <section id="projects" className="max-w-6xl mx-auto px-6 py-32 md:py-40">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                Проєкти
            </h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {mock.map((p, i) => (
                    <motion.a
                        key={p.title}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                        whileHover={{ scale: 1.04, rotateX: 2, rotateY: -2 }}
                        className="relative glass p-6 rounded-3xl shadow-xl border border-white/10 cursor-pointer overflow-hidden block group transition-all duration-300 hover:shadow-2xl hover:border-white/20"
                    >
                        <div className="overflow-hidden rounded-2xl relative">
                            <img
                                src={p.img}
                                alt={p.title}
                                className="w-full h-44 object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center md:rounded-2xl"
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.span
                                    className="text-white text-sm bg-white/10 backdrop-blur-md px-5 py-2 rounded-xl border border-white/20"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    Відкрити проєкт
                                </motion.span>
                            </motion.div>
                        </div>

                        <motion.h3
                            className="mt-4 font-semibold text-lg"
                            whileHover={{ color: '#38bdf8' }}
                            transition={{ duration: 0.3 }}
                        >
                            {p.title}
                        </motion.h3>
                        <p className="text-sm opacity-70 mt-1">{p.desc}</p>
                    </motion.a>
                ))}
            </div>
        </section>
    )
}
