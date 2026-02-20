import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-background-light/95 backdrop-blur supports-[backdrop-filter]:bg-background-light/60 dark:bg-background-dark/95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="text-saffron">
                            <span className="material-symbols-outlined text-4xl">temple_hindu</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Hare Krishna Gallery</h1>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Transcendental Art</p>
                        </div>
                    </div>
                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#" className="text-sm font-medium text-primary border-b-2 border-primary pb-1">Home</Link>
                        <Link href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Gallery</Link>
                        <Link href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Books</Link>
                        <Link href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">About</Link>
                        <Link href="#" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">Contact</Link>
                    </nav>
                    {/* Search & Actions */}
                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
                            <input
                                className="w-64 rounded-full border-gold/30 bg-white/50 py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary dark:bg-slate-800"
                                placeholder="Search pastimes..."
                                type="text"
                            />
                        </div>
                        <button className="p-2 text-slate-600 hover:text-primary md:hidden">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                        <button className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
                            Donate
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
