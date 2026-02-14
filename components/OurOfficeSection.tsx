import React from 'react';
import Image from 'next/image';

const OurOfficeSection = () => {
    return (
        <section id="office" className="section-padding bg-secondary-100 overflow-hidden" style={{ '--index': 4 } as React.CSSProperties}>
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-24 lg:gap-32 items-center">

                    {/* Text Content */}
                    <div className="space-y-10 flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 reveal">
                        <div className="space-y-6">
                            <h2 className="heading-lg text-primary-500 italic font-light leading-snug">
                                A Space for <span className="not-italic font-medium">Healing & Connection</span>
                            </h2>
                            <p className="text-lead text-primary-600/90 leading-relaxed max-w-lg">
                                Our office is more than just a room—it’s a carefully curated environment designed to feel
                                safe, grounding, and full of natural light. We believe the space you heal in is just as
                                important as the work we do together.
                            </p>
                        </div>

                        <div className="pt-4">
                            <button className="btn-primary hover-lift group">
                                Take a Virtual Tour
                                <span className="ml-3 group-hover:translate-x-2 transition-transform duration-500">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Visual Content: Arch Layout */}
                    <div className="relative order-1 md:order-2 reveal-scale" style={{ animationDelay: '0.4s' }}>
                        <div className="relative aspect-[4/5] w-full max-w-sm mx-auto image-arch overflow-hidden shadow-sm border border-primary-200/50 group">
                            <Image
                                src="/office-1.jpeg"
                                alt="Main Office Space"
                                fill
                                className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                                unoptimized
                            />
                        </div>

                        {/* Secondary Circular Element */}
                        <div className="absolute -bottom-12 -left-8 w-48 h-48 image-circle border-8 border-secondary-100 shadow-2xl overflow-hidden hidden lg:block reveal-scale" style={{ animationDelay: '0.6s' }}>
                            <Image
                                src="/office-2.jpeg"
                                alt="Office Detail"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                unoptimized
                            />
                        </div>

                        {/* Subtle Decorative Backdrop */}
                        <div className="absolute -top-16 -right-16 w-80 h-80 bg-primary-200/10 rounded-full -z-10 blur-[120px]" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurOfficeSection;
