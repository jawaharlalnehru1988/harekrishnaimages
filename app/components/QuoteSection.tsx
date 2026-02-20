import React from 'react';

export default function QuoteSection() {
    return (
        <section className="py-16 bg-white dark:bg-background-dark border-y border-gold/10">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <span className="material-symbols-outlined text-gold text-4xl mb-4">format_quote</span>
                <blockquote className="text-2xl md:text-3xl font-display italic text-slate-800 dark:text-slate-200 leading-relaxed">
                    "Always think of Me, become My devotee, worship Me and offer your homage unto Me. Thus you will come to Me without fail. I promise you this because you are My very dear friend."
                </blockquote>
                <cite className="mt-6 block text-saffron font-bold not-italic tracking-wider">— Bhagavad Gita 18.65</cite>
            </div>
        </section>
    );
}
