import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding bg-secondary-100" style={{ '--index': 6 } as React.CSSProperties}>
            <div className="container-custom">
                <div className="grid md:grid-cols-2 gap-24 items-start">

                    {/* Left: Outreach Info */}
                    <div className="space-y-12 reveal">
                        <div className="space-y-8">
                            <h2 className="heading-lg text-primary-500 italic font-light">
                                Let’s <span className="not-italic font-medium">connect.</span>
                            </h2>
                            <p className="text-lead text-primary-600/90 leading-relaxed">
                                I offer a free 15-minute consultation to discuss your needs and see if we’re
                                a good fit. Whether you’re ready to start or just have a few questions,
                                I’d love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <div className="space-y-2">
                                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary-400">Email</h3>
                                <p className="text-sm font-medium text-primary-600 underline underline-offset-[6px] tracking-widest hover:text-primary-500 transition-colors">
                                    hello@drmayareynolds.com
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary-400">Location</h3>
                                <p className="text-sm text-primary-600 font-light tracking-widest leading-loose uppercase">
                                    123th Street 45 W,<br />Santa Monica, CA 90401
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Minimalist Form */}
                    <div className="bg-white/40 p-10 md:p-16 border border-primary-200/50 shadow-sm reveal-scale" style={{ animationDelay: '0.4s' }}>
                        <form className="space-y-8">
                            <div className="space-y-3 group">
                                <label className="text-[9px] uppercase tracking-[0.3em] text-primary-400 font-bold">Name *</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-primary-200 py-3 focus:border-primary-500 outline-none transition-all duration-500 text-sm font-light text-primary-700 placeholder:text-primary-300"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="space-y-3 group">
                                <label className="text-[9px] uppercase tracking-[0.3em] text-primary-400 font-bold">Email *</label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent border-b border-primary-200 py-3 focus:border-primary-500 outline-none transition-all duration-500 text-sm font-light text-primary-700 placeholder:text-primary-300"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>
                            <div className="space-y-3 group">
                                <label className="text-[9px] uppercase tracking-[0.3em] text-primary-400 font-bold">Message *</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-transparent border-b border-primary-200 py-3 focus:border-primary-500 outline-none transition-all duration-500 text-sm font-light text-primary-700 resize-none placeholder:text-primary-300"
                                    placeholder="How can I help you?"
                                    required
                                ></textarea>
                            </div>
                            <div className="pt-8">
                                <button type="submit" className="btn-primary w-full md:w-auto hover-lift">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
