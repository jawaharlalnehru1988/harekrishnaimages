'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const slides = [
    {
        image: '/bhagavadgita.jpg',
        tag: 'Eternal Wisdom',
        title: 'The Song of God',
        description: 'Discover the timeless teachings of Lord Krishna on the battlefield of Kurukshetra.',
    },
    {
        image: '/bhishma.jpg',
        tag: 'Grand Patriarch',
        title: "Bhishma's Devotion",
        description: 'Witness the legendary vow and the transcendental departure of the great grandsire.',
    },
    {
        image: '/goverdana pooja.jpg',
        tag: 'Divine Pastime',
        title: 'Lifting the Hill',
        description: 'Celebrate the protection of Vraja and the humbling of Indra by the little Gopal.',
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
            {/* Carousel Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 opacity-80">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-black/40"></div>
                    </div>

                    {/* Content Overlay */}
                    <div className="relative flex h-full items-center justify-center text-center px-4">
                        <div className={`max-w-4xl transition-all duration-700 delay-300 ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}>
                            <span className="mb-4 inline-block rounded-full bg-saffron/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-saffron border border-saffron/30">
                                {slide.tag}
                            </span>
                            <h2 className="mb-6 text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
                                {slide.title.split(' ').map((word, i, arr) => (
                                    <React.Fragment key={i}>
                                        {i === arr.length - 1 ? (
                                            <span className="text-gold italic font-display">{word}</span>
                                        ) : (
                                            word + ' '
                                        )}
                                    </React.Fragment>
                                ))}
                            </h2>
                            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-100 leading-relaxed opacity-90">
                                {slide.description}
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button className="group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/30">
                                    Explore Gallery
                                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </button>
                                <button className="rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
                                    Read Sastra
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 transition-all duration-300 rounded-full ${index === currentSlide ? 'w-12 bg-primary' : 'w-12 bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
