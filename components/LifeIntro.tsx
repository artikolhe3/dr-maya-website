import React from 'react';
import Image from 'next/image';

const LifeIntro = () => {
    return (
        <section className="bg-secondary-100 overflow-hidden" style={{ '--index': 2 } as React.CSSProperties}>
            <div className="grid md:grid-cols-2 min-h-[60vh]">
                {/* Left side text */}
                <div className="flex flex-col justify-center px-12 py-24 md:px-24 lg:px-32 space-y-8 reveal">
                    <h2 className="heading-lg text-primary-500 max-w-sm">
                        Live a <span className="italic font-light">fulfilling life.</span>
                    </h2>
                    <p className="text-sm leading-[1.8] text-primary-600/70 font-light max-w-md">
                        Life can be challenging—especially when you’re trying to balance your personal and professional life.
                        It’s easy to feel like you’re alone in facing those challenges, but I want you to know that I’m here to help.
                    </p>
                    <div className="pt-6">
                        <a href="#contact" className="text-[10px] uppercase tracking-[0.4em] text-primary-500 font-bold border-b border-primary-300 pb-1 hover:text-primary-400 transition-colors">
                            Get in touch
                        </a>
                    </div>
                </div>

                {/* Right side image */}
                <div className="relative min-h-[400px] md:min-h-full overflow-hidden reveal">
                    <Image
                        src="/office-1.jpeg"
                        alt="Aesthetic workspace"
                        fill
                        className="object-cover transition-transform duration-[3000ms] hover:scale-110"
                        unoptimized
                    />
                </div>
            </div>
        </section>
    );
};

export default LifeIntro;
