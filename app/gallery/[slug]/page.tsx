'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React, { useState, useEffect, use } from 'react';

interface Category {
    id: number;
    categoryName: string;
    categoryImage: string;
    categoryDescription: string;
    routerPath: string;
}

interface GalleryImage {
    id: number;
    Image: string;
    category: string;
    note: string;
}

export default function GalleryPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;

    const [categories, setCategories] = useState<Category[]>([]);
    const [allImages, setAllImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterText, setFilterText] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const [catRes, imgRes] = await Promise.all([
                    fetch('https://api.askharekrishna.com/api/v1/imageGalleryCategories/'),
                    fetch('https://api.askharekrishna.com/api/v1/image-gallery/')
                ]);

                if (catRes.ok) setCategories(await catRes.json());
                if (imgRes.ok) setAllImages(await imgRes.json());
            } catch (error) {
                console.error('Error fetching gallery data:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    const category = categories.find(c => c.routerPath === slug);

    const handleDownload = async (imageUrl: string, note: string) => {
        try {
            const response = await fetch(imageUrl);
            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${note || 'hare-krishna-image'}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            window.open(imageUrl, '_blank');
        }
    };

    const handleShare = async (imageUrl: string, note: string) => {
        const shareData = {
            title: 'Hare Krishna Images Gallery',
            text: note || 'Check out this beautiful transcendental image!',
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                // If the browser supports file sharing, we could try to share the image itself
                // But for simplicity and broad support, we share the text and link
                await navigator.share(shareData);
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            // Fallback for desktop/unsupported browsers: Copy link to clipboard
            try {
                await navigator.clipboard.writeText(`${shareData.text}\n${shareData.url}`);
                alert('Link copied to clipboard!');
            } catch (err) {
                console.error('Fallback sharing failed:', err);
            }
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
                <Navbar />
                <main className="flex-grow flex items-center justify-center">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-slate-600 dark:text-slate-400 font-medium font-display italic">Loading transcendental art...</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (!category) {
        return (
            <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
                <Navbar />
                <main className="flex-grow flex items-center justify-center p-8 text-center">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Gallery Not Found</h1>
                        <p className="text-slate-600 dark:text-slate-400 mb-8">The requested gallery category does not exist.</p>
                        <Link href="/" className="px-6 py-3 bg-primary text-white rounded-lg font-bold shadow-lg hover:bg-primary/90 transition-all">
                            Return Home
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const filteredImages = allImages
        .filter(img => img.category === category.categoryName)
        .filter(img => img.note?.toLowerCase().includes(filterText.toLowerCase()));

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
            <Navbar />

            <main className="flex-grow">
                {/* Header Section */}
                <div className="relative h-[40vh] bg-slate-900 flex items-center justify-center text-center px-4 overflow-hidden">
                    <div className="absolute inset-0 opacity-40">
                        <Image
                            src={category.categoryImage}
                            alt={category.categoryName}
                            fill
                            className="object-cover blur-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-background-light dark:to-background-dark"></div>
                    </div>

                    <div className="relative z-10 max-w-4xl">
                        <div className="mb-4 flex flex-col items-center gap-2">
                            <Link href="/" className="flex items-center gap-2 text-gold/80 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                                <span className="material-symbols-outlined text-sm">arrow_back</span>
                                Back to Home
                            </Link>
                            <div className="flex justify-center text-xs font-medium text-slate-400 uppercase tracking-widest mt-1">
                                <span>Gallery</span>
                                <span className="mx-2">/</span>
                                <span className="text-gold">{category.categoryName}</span>
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                            {category.categoryName}
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto italic font-display">
                            {category.categoryDescription}
                        </p>
                    </div>
                </div>

                {/* Filter Section */}
                <div className="sticky top-20 z-40 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gold/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-slate-900 dark:text-white">Explore Pastimes</h3>
                                <div className="h-1 w-8 bg-saffron rounded-full"></div>
                            </div>
                            <div className="relative">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">filter_list</span>
                                <input
                                    type="text"
                                    placeholder="Filter by description (note)..."
                                    value={filterText}
                                    onChange={(e) => setFilterText(e.target.value)}
                                    className="w-full md:w-80 rounded-xl border-gold/20 bg-white/50 py-2.5 pl-10 pr-4 text-sm focus:border-primary focus:ring-primary dark:bg-slate-800 dark:border-slate-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {filteredImages.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {filteredImages.map((image) => (
                                <div key={image.id} className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-gold/10 hover:shadow-2xl transition-all duration-300">
                                    <div className="aspect-square relative overflow-hidden bg-slate-100 dark:bg-slate-900">
                                        <Image
                                            src={image.Image}
                                            alt={image.note || category.categoryName}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        {/* Desktop Overlay Action Buttons (Hover) */}
                                        <div className="absolute top-4 right-4 hidden md:flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                                            <button
                                                onClick={() => handleDownload(image.Image, image.note)}
                                                className="bg-white/90 backdrop-blur text-slate-900 p-2.5 rounded-full shadow-xl hover:bg-primary hover:text-white transition-all duration-300"
                                                title="Download Image"
                                            >
                                                <span className="material-symbols-outlined text-xl">download</span>
                                            </button>
                                            <button
                                                onClick={() => handleShare(image.Image, image.note)}
                                                className="bg-white/90 backdrop-blur text-slate-900 p-2.5 rounded-full shadow-xl hover:bg-primary hover:text-white transition-all duration-300"
                                                title="Share Image"
                                            >
                                                <span className="material-symbols-outlined text-xl">share</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-5 flex flex-col justify-between flex-grow">
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white line-clamp-2 leading-relaxed mb-4">
                                                {image.note}
                                            </p>
                                        </div>

                                        {/* Actions Footer */}
                                        <div className="pt-4 border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                                            <div className="flex gap-4">
                                                <button
                                                    onClick={() => handleDownload(image.Image, image.note)}
                                                    className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
                                                >
                                                    <span className="material-symbols-outlined text-lg">download</span>
                                                    <span>Save</span>
                                                </button>
                                                <button
                                                    onClick={() => handleShare(image.Image, image.note)}
                                                    className="flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors uppercase tracking-wider"
                                                >
                                                    <span className="material-symbols-outlined text-lg">share</span>
                                                    <span>Share</span>
                                                </button>
                                            </div>
                                            <span className="text-[10px] text-gold uppercase font-bold tracking-widest bg-gold/5 px-2 py-1 rounded">
                                                Images
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
                                <span className="material-symbols-outlined text-4xl text-slate-400">search_off</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">No matching pastimes</h3>
                            <p className="text-slate-600 dark:text-slate-400">Try adjusting your filter to find what you're looking for.</p>
                            <button
                                onClick={() => setFilterText('')}
                                className="mt-6 text-primary font-bold hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
