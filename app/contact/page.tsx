'use client';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";

export default function ContactPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
            <Navbar />

            <main className="flex-grow">
                {/* Header Section */}
                <section className="py-24 px-4 bg-white dark:bg-slate-900/50 border-b border-gold/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="material-symbols-outlined text-saffron text-5xl mb-6">contact_support</span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Connect With Us</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 font-display italic">
                            "To approach the Lord, one must approach His humble servants first."
                        </p>
                    </div>
                </section>

                <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-8">Organization Details</h2>
                                <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-gold/10 space-y-8">
                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-saffron/10 flex items-center justify-center text-saffron shrink-0">
                                            <span className="material-symbols-outlined">corporate_fare</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xs uppercase tracking-widest text-gold font-bold mb-1">Organization</h3>
                                            <p className="text-xl font-bold">Ask Hare Krishna</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <span className="material-symbols-outlined">person</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xs uppercase tracking-widest text-gold font-bold mb-1">Founder / Owner</h3>
                                            <p className="text-xl font-bold">Narasimha dasa</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0">
                                            <span className="material-symbols-outlined">call</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xs uppercase tracking-widest text-gold font-bold mb-1">Phone / WhatsApp</h3>
                                            <a href="tel:+916382043976" className="text-xl font-bold hover:text-primary transition-colors block">
                                                +91 6382043976
                                            </a>
                                            <a
                                                href="https://wa.me/916382043976"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-3 inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2 rounded-full text-sm font-bold hover:shadow-lg hover:shadow-[#25D366]/20 transition-all"
                                            >
                                                Message on WhatsApp
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-primary/5 dark:bg-primary/10 rounded-3xl border border-primary/10">
                                <h3 className="font-bold text-lg mb-4">Spiritual Consultations</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Feel free to reach out for any inquiries regarding images, spiritual guidance, or to provide feedback on our gallery project. Your association is highly valued.
                                </p>
                            </div>
                        </div>

                        {/* Quick Contact Form */}
                        <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gold/10 self-start">
                            <h2 className="text-2xl font-bold mb-8">Quick Message</h2>
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Your Name</label>
                                        <input type="text" className="w-full bg-background-light dark:bg-slate-700 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Rama" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
                                        <input type="email" className="w-full bg-background-light dark:bg-slate-700 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="rama@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Subject</label>
                                    <input type="text" className="w-full bg-background-light dark:bg-slate-700 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="Inquiry about Gallery" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">Message</label>
                                    <textarea rows={4} className="w-full bg-background-light dark:bg-slate-700 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-primary transition-all" placeholder="How can we assist you?"></textarea>
                                </div>
                                <button className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-xl shadow-primary/20 hover:bg-primary/90 transition-all uppercase tracking-widest text-sm">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
