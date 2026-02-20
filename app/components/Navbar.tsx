import Link from 'next/link';
import React from 'react';

export default function Navbar() {
    return (
        <header className="sticky top-2 z-50 w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="rounded-full border border-gold/20 bg-background-light/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background-light/40 dark:bg-background-dark/80 px-6 sm:px-10 py-3 shadow-xl">
                <div className="flex h-12 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="text-saffron transition-transform group-hover:scale-110 duration-300">
                            <span className="material-symbols-outlined text-3xl sm:text-4xl">temple_hindu</span>
                        </div>
                        <div className="hidden xs:block">
                            <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">Hare Krishna Images Gallery</h1>
                            <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">Transcendental Art</p>
                        </div>
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-10">
                        <Link href="/" className="text-sm font-bold text-slate-600 hover:text-primary transition-all relative group py-2">
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/about" className="text-sm font-bold text-slate-600 hover:text-primary transition-all relative group py-2">
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                        <Link href="/contact" className="text-sm font-bold text-slate-600 hover:text-primary transition-all relative group py-2">
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </Link>
                    </nav>

                    {/* Search & Actions */}
                    <div className="flex items-center gap-6">
                        <button className="p-2 text-slate-600 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                        <button className="hidden sm:block rounded-full bg-primary px-8 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                            Donate
                        </button>
                        {/* Mobile Menu Toggle (Simplified) */}
                        <button className="md:hidden p-2 text-slate-600">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
