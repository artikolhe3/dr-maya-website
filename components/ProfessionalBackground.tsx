"use client";
import { useState } from 'react';

const backgrounds = [
    {
        category: "Education",
        details: "Pepperdine University - PsyD in Clinical Psychology. Specialized training in Relational Psychoanalysis and Depth Psychology."
    },
    {
        category: "Licensure",
        details: "Licensed Clinical Psychologist - State of California (#12345). Certified to practice clinical psychology across the state."
    },
    {
        category: "Certifications",
        details: "EMDR Certified Therapist. Advanced training in Trauma-Informed Care and Somatic Experiencing techniques."
    }
];

const ProfessionalBackground = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="section-padding bg-secondary-100 border-t border-primary-200/20" style={{ '--index': 5 } as React.CSSProperties}>
            <div className="container-custom max-w-3xl">
                <div className="text-center mb-20 reveal">
                    <h2 className="heading-lg text-primary-500 italic font-light">
                        Professional <span className="not-italic font-medium">Background</span>
                    </h2>
                </div>

                <div className="border-t border-primary-500/30 reveal">
                    {backgrounds.map((bg, index) => (
                        <div key={index} className="border-b border-primary-200/50 group">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-8 flex justify-between items-center group transition-all duration-300"
                            >
                                <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-primary-600 group-hover:text-primary-400 transition-colors">
                                    {bg.category}
                                </span>
                                <span className="text-primary-400 text-lg transition-transform duration-500" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'none' }}>
                                    +
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${openIndex === index ? 'max-h-40 pb-8' : 'max-h-0'}`}
                            >
                                <p className="text-sm tracking-wide text-primary-600/70 font-light leading-relaxed max-w-2xl">
                                    {bg.details}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalBackground;
