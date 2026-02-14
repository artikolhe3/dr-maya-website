import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-secondary-100 overflow-hidden border-t border-primary-200/20" style={{ '--index': 7 } as React.CSSProperties}>
            {/* Large CTA Section */}
            <div className="bg-primary-500 py-32 md:py-48 text-center text-white reveal">
                <div className="container-custom max-w-2xl space-y-10">
                    <h2 className="heading-lg text-secondary-100 italic font-light leading-snug">
                        Ready to begin <span className="not-italic font-medium">your journey?</span>
                    </h2>
                    <p className="text-sm font-light leading-[1.8] text-secondary-200/80 max-w-lg mx-auto">
                        I offer a free 15-minute consultation to discuss your needs and see if we’re a good fit. I look forward to connecting with you.
                    </p>
                    <div className="pt-6">
                        <button className="btn-primary border-white text-white hover:bg-white hover:text-primary-500 hover-lift">
                            Connect with me −
                        </button>
                    </div>
                </div>
            </div>

            {/* Minimalist Info Row */}
            <div className="py-24 md:py-32 bg-secondary-100">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 items-start md:text-left text-center reveal">
                        {/* Title Column */}
                        <div className="space-y-6">
                            <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary-600">DR. MAYA REYNOLDS</h3>
                            <p className="text-[10px] text-primary-500/80 leading-loose uppercase tracking-[0.3em] font-light">
                                123th Street 45 W,<br />Santa Monica, CA 90401
                            </p>
                            <p className="text-[10px] font-bold text-primary-500 underline underline-offset-8 tracking-[0.3em] hover:text-primary-400 transition-colors">
                                hello@drmayareynolds.com
                            </p>
                        </div>

                        {/* Hours Column */}
                        <div className="space-y-6">
                            <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary-600">Hours</h3>
                            <p className="text-[10px] text-primary-500/80 font-light tracking-[0.3em] uppercase leading-loose">
                                Monday — Friday<br />10 am — 6 pm
                            </p>
                        </div>

                        {/* Find Column */}
                        <div className="space-y-6">
                            <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary-600">Find</h3>
                            <div className="flex flex-col space-y-3 text-[10px] text-primary-500 font-bold underline underline-offset-4 tracking-[0.4em] uppercase">
                                <a href="#home" className="hover:text-primary-300 transition-colors">Home</a>
                                <a href="#about" className="hover:text-primary-300 transition-colors">About</a>
                                <a href="#services" className="hover:text-primary-300 transition-colors">Services</a>
                                <a href="#contact" className="hover:text-primary-300 transition-colors">Contact</a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bottom Links */}
                    <div className="mt-32 border-t border-primary-200/40 pt-10 flex flex-col md:flex-row justify-between items-center text-[8px] uppercase tracking-[0.5em] font-bold text-primary-400/60">
                        <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
                            <span className="hover:text-primary-500 cursor-pointer transition-colors">Privacy policy</span>
                            <span className="hover:text-primary-500 cursor-pointer transition-colors">Terms of service</span>
                            <span className="hover:text-primary-500 cursor-pointer transition-colors">Sitemap</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>© 2026 Maya Reynolds</span>
                            <span className="mx-2">•</span>
                            <span>Design by Antigravity</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
