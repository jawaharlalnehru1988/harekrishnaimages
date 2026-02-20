import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Category {
    id: number;
    categoryName: string;
    categoryImage: string;
    categoryDescription: string;
    routerPath: string;
    mappedImageCount: number;
}

async function getCategories(): Promise<Category[]> {
    try {
        const res = await fetch('https://api.askharekrishna.com/api/v1/imageGalleryCategories/', { next: { revalidate: 3600 } });
        if (!res.ok) {
            throw new Error('Failed to fetch categories');
        }
        return res.json();
    } catch (error) {
        console.error('Error loading gallery categories:', error);
        return [];
    }
}

export default async function FeaturedGallery() {
    const categories = await getCategories();

    return (
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12">
                <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Featured Galleries</h2>
                    <div className="h-1 w-20 bg-saffron rounded-full"></div>
                </div>
                <Link href="#" className="group flex items-center gap-1 text-primary font-bold hover:underline">
                    View All Categories
                    <span className="material-symbols-outlined text-sm">open_in_new</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={`/gallery/${category.routerPath}`}
                        className="group relative overflow-hidden rounded-xl bg-slate-100 shadow-xl transition-all hover:-translate-y-2 cursor-pointer block h-full"
                    >
                        <div className="aspect-[4/5] overflow-hidden relative h-full">
                            <Image
                                src={category.categoryImage}
                                alt={category.categoryName}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                            <h3 className="text-2xl font-bold mb-2 transition-colors group-hover:text-gold">{category.categoryName}</h3>
                            <p className="text-sm opacity-80 mb-4 line-clamp-2">{category.categoryDescription}</p>
                            <span className="w-fit rounded-lg bg-gold px-4 py-2 text-xs font-bold uppercase tracking-wider text-white group-hover:bg-gold/80 transition-all shadow-lg group-hover:shadow-gold/20">
                                View Collection
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
