"use client";
import { useState } from 'react';
import Image from 'next/image';

const faqs = [
    {
        question: "Do you take insurance?",
        answer: "I am an out-of-network provider. I can provide you with a monthly superbill that you can submit to your insurance company for potential reimbursement."
    },
    {
        question: "What are your rates?",
        answer: "Please contact me for current rates. Initial intake assessments and standard 50-minute sessions have different fee structures."
    },
    {
        question: "Do you have any openings?",
        answer: "Availability varies. Please reach out to schedule a consultation where we can discuss your needs and current schedule compatibility."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="section-padding bg-secondary-100 border-t border-primary-200/30" style={{ '--index': 5 } as React.CSSProperties}>
            <div className="container-custom max-w-4xl">
                <div className="text-center mb-24 reveal">
                    <h2 className="heading-lg text-primary-500 italic font-light">
                        Frequently Asked <span className="not-italic font-medium">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4 reveal">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-primary-200/50 bg-white/30 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:bg-white/50">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex justify-between items-center text-left group"
                            >
                                <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-primary-600 group-hover:text-primary-500 transition-colors">
                                    {faq.question}
                                </span>
                                <span className="text-primary-400 transition-transform duration-500" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'none' }}>
                                    +
                                </span>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16, 1, 0.3, 1)] ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-8 pb-8">
                                    <p className="text-sm leading-[1.8] text-primary-600/70 font-light tracking-wide max-w-2xl border-t border-primary-100/50 pt-6">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
