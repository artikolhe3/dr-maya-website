import Image from 'next/image';

const Office = () => {
    return (
        <section id="office" className="section-padding bg-secondary-100 overflow-hidden" style={{ '--index': 4 } as React.CSSProperties}>
            <div className="container-custom grid md:grid-cols-2 gap-24 items-center">
                {/* Left: Content */}
                <div className="space-y-10 reveal">
                    <div className="space-y-6">
                        <h2 className="heading-lg text-primary-500 italic font-light">
                            Live a <span className="not-italic font-medium">fulfilling life.</span>
                        </h2>
                        <p className="text-lead text-primary-600/90 leading-relaxed max-w-lg">
                            Life can be challenging—especially when you’re trying to balance your personal and professional life.
                            It’s easy to feel alone, but I’m here to help you navigate these patterns.
                        </p>
                    </div>
                    <div className="pt-4">
                        <button className="btn-primary hover-lift">Get in touch</button>
                    </div>
                </div>

                {/* Right: Modern Grid */}
                <div className="relative reveal-scale" style={{ animationDelay: '0.4s' }}>
                    <div className="relative aspect-[4/3] image-arch overflow-hidden shadow-sm border border-primary-200/50 group">
                        <Image
                            src="/office-2.jpeg"
                            alt="Safe and private consultation space"
                            fill
                            className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                            unoptimized
                        />
                    </div>
                    {/* Decorative Circle */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-200/10 rounded-full -z-10 blur-[100px]" />
                </div>
            </div>
        </section>
    );
};

export default Office;
