import React from 'react';

export default function Newsletter() {
    return (
        <section className="bg-primary/5 dark:bg-primary/10 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-16 shadow-2xl border border-gold/10">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Receive Daily Darshan</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Get a beautiful transcendental image and a scriptural meditation delivered to your inbox or WhatsApp every morning.</p>
                    </div>
                    <div className="w-full lg:w-auto">
                        <form className="flex flex-col gap-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    className="flex-1 min-w-[300px] rounded-xl border-slate-200 py-4 px-6 focus:border-primary focus:ring-primary dark:bg-slate-700 dark:border-slate-600"
                                    placeholder="Your email address"
                                    type="email"
                                    required
                                />
                                <input
                                    className="flex-1 min-w-[300px] rounded-xl border-slate-200 py-4 px-6 focus:border-primary focus:ring-primary dark:bg-slate-700 dark:border-slate-600"
                                    placeholder="WhatsApp number (Optional)"
                                    type="tel"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="flex-1 rounded-xl bg-saffron px-8 py-4 font-bold text-white shadow-lg shadow-saffron/20 hover:bg-saffron/90 transition-all uppercase tracking-wider text-sm" type="submit">
                                    Subscribe Now
                                </button>
                                <a
                                    href="https://wa.me/916382043976"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 rounded-xl border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-8 py-4 font-bold text-center transition-all flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                                >
                                    <span className="material-symbols-outlined">chat</span>
                                    Ping on WhatsApp
                                </a>
                            </div>
                        </form>
                        <p className="mt-4 text-xs text-slate-400 text-center lg:text-left italic">Join 50,000+ devotees worldwide.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
