import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative py-24 px-4 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl opacity-10 pointer-events-none">
                        <span className="material-symbols-outlined text-[40rem] text-gold animate-pulse">temple_hindu</span>
                    </div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-saffron/10 text-saffron text-sm font-bold uppercase tracking-widest mb-6 border border-saffron/20">
                            Our Spiritual Mission
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
                            Spreading Beauty Through <span className="text-gold italic font-display">Transcendental Art</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto italic font-display">
                            "The artistic sense of the devotee is used to describe the pastimes of the Lord, and this is the perfection of art."
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform rotate-2">
                                <Image
                                    src="/bhishma.jpg"
                                    alt="Transcendental Image"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">The Vision</h2>
                                    <div className="h-1 w-20 bg-saffron rounded-full mb-6"></div>
                                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                        The Hare Krishna Images Gallery is a dedicated sanctuary for spiritual seekers and art enthusiasts alike. Our mission is to preserve and present the sublime beauty of Krishna's pastimes through high-quality, curated visual media.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="p-6 bg-background-light dark:bg-slate-800 rounded-2xl border border-gold/10 shadow-sm">
                                        <span className="material-symbols-outlined text-saffron text-3xl mb-4">auto_awesome</span>
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Purity</h3>
                                        <p className="text-sm text-slate-500">Curated images following the authentic traditions of Vedic literature.</p>
                                    </div>
                                    <div className="p-6 bg-background-light dark:bg-slate-800 rounded-2xl border border-gold/10 shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-3xl mb-4">public</span>
                                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">Access</h3>
                                        <p className="text-sm text-slate-500">Free download and sharing of divine art for devotees worldwide.</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gold/10">
                                    <blockquote className="border-l-4 border-gold pl-6 py-2 italic text-slate-700 dark:text-slate-300">
                                        "This gallery is not just a collection of pictures, but a window into the spiritual world."
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 text-center">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Support Our Cause</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-10">
                            Your contributions help us maintain the servers and continue adding more transcendental art to this public gallery.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                                Get Involved
                            </Link>
                            <Link href="/" className="px-10 py-4 border-2 border-slate-200 dark:border-slate-700 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                Explore Gallery
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
