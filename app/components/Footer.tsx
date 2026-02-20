import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="text-saffron">
                                <span className="material-symbols-outlined text-3xl">temple_hindu</span>
                            </div>
                            <h2 className="text-xl font-bold text-white">Hare Krishna Gallery</h2>
                        </div>
                        <p className="text-sm leading-relaxed mb-6">Dedicated to spreading the sublime beauty of Krishna Consciousness through the medium of transcendental art and literature.</p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-gold transition-colors"><span className="material-symbols-outlined">public</span></Link>
                            <Link href="#" className="hover:text-gold transition-colors"><span className="material-symbols-outlined">share</span></Link>
                            <Link href="#" className="hover:text-gold transition-colors"><span className="material-symbols-outlined">mail</span></Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Home Gallery</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">New Arrivals</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Popular Pastimes</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Artists Directory</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Resources</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Bhagavad Gita Online</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Srimad Bhagavatam</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Chaitanya Charitamrita</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Vedic Books</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Connect</h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">About the Project</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Submission Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Support the Gallery</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>© 2024 Hare Krishna Gallery. All spiritual rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
