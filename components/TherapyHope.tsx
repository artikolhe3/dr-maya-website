import React from 'react';
import Image from 'next/image';

const TherapyHope = () => {
    return (
        <section className="bg-secondary-100 overflow-hidden" style={{ '--index': 5 } as React.CSSProperties}>
            <div className="grid md:grid-cols-2">
                {/* Left side image */}
                <div className="relative min-h-[500px] md:min-h-[800px] overflow-hidden reveal">
                    <Image
                        src="/maya-portrait.png"
                        alt="Therapeutic portrait"
                        fill
                        className="object-cover transition-transform duration-[3000ms] hover:scale-105"
                        unoptimized
                    />
                </div>

                {/* Right side text */}
                <div className="flex flex-col justify-center px-12 py-24 md:px-24 lg:px-32 space-y-12 bg-primary-100/30 reveal">
                    <div className="space-y-6">
                        <h2 className="heading-lg text-primary-500">
                            You don't have to <span className="italic font-light">do this all alone.</span>
                        </h2>
                        <p className="text-sm font-medium text-primary-600/80">
                            If you are facing any of these, there's hope:
                        </p>
                    </div>

                    <ul className="space-y-4">
                        {[
                            "Persistent feelings of sadness or hopelessness",
                            "Trouble focusing or making decisions",
                            "Difficulty maintaining relationships",
                            "Feeling constantly exhausted or unmotivated",
                            "A pervasive sense of being overwhelmed"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start space-x-3 text-sm text-primary-600/70 font-light reveal" style={{ animationDelay: `${0.1 * (i + 1)}s` }}>
                                <span className="text-primary-400 mt-1">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="space-y-8">
                        <p className="text-sm leading-[1.8] text-primary-600/70 font-light italic max-w-md">
                            With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                        </p>
                        <div className="pt-2">
                            <a href="#contact" className="text-[10px] uppercase tracking-[0.4em] text-primary-500 font-bold border-b border-primary-300 pb-1 hover:text-primary-400 transition-colors">
                                Get in touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TherapyHope;
