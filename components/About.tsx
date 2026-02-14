import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="bg-secondary-100 overflow-hidden" style={{ '--index': 2 } as React.CSSProperties}>
            {/* Quote / Transition Section */}
            <div className="py-40 border-b border-primary-200/50">
                <div className="container-custom text-center space-y-10 reveal">
                    <h2 className="heading-lg text-primary-500 max-w-3xl mx-auto italic font-light leading-snug">
                        "You don't have to navigate <span className="not-italic font-medium">this journey</span> all alone."
                    </h2>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-primary-400 font-bold">
                        A Safe Space for Healing in Santa Monica
                    </p>
                </div>
            </div>

            {/* Main About Section */}
            <div className="section-padding">
                <div className="container-custom grid md:grid-cols-2 gap-24 items-center">
                    {/* Left: Content */}
                    <div className="space-y-10 reveal">
                        <div className="space-y-6">
                            <h2 className="heading-lg text-primary-500">Hi, I'm Dr. Maya.</h2>
                            <p className="text-lead text-primary-600/90 italic">
                                I am a clinical psychologist committed to providing a safe and supportive
                                environment where we can explore your life with empathy and guidance.
                            </p>
                            <p className="text-sm leading-[1.8] text-primary-600/70 font-light max-w-lg">
                                My approach is deeply relational and depth-oriented, focusing on underlying
                                patterns rather than just symptoms. I specialize in treating anxiety, panic,
                                trauma, and burnout for high-achieving adults.
                            </p>
                        </div>
                        <div className="pt-4">
                            <button className="btn-primary hover-lift">Learn more about my approach</button>
                        </div>
                    </div>

                    {/* Right: Overlapping Images */}
                    <div className="relative pt-12 reveal-scale" style={{ animationDelay: '0.3s' }}>
                        <div className="relative aspect-[3/4] w-full max-w-sm mr-auto ml-0 image-arch overflow-hidden shadow-sm border border-primary-200/50">
                            <Image
                                src="/maya-portrait.png"
                                alt="Dr. Maya Reynolds"
                                fill
                                className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                                unoptimized
                            />
                        </div>
                        <div className="absolute top-1/2 -right-8 w-64 h-64 image-circle border-8 border-secondary-100 shadow-2xl overflow-hidden hidden md:block z-10">
                            <Image
                                src="/office-1.jpeg"
                                alt="Therapy Environment"
                                fill
                                className="object-cover transition-transform duration-[2000ms] hover:scale-110"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
