import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center bg-secondary-100 overflow-hidden" style={{ '--index': 1 } as React.CSSProperties}>
            <div className="container-custom grid md:grid-cols-2 gap-16 md:gap-24 items-center py-20">
                {/* Left Side: Arch Image */}
                <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:ml-0 reveal-scale">
                    <div className="absolute inset-0 image-arch overflow-hidden shadow-sm border border-primary-200/50">
                        <Image
                            src="/maya-portrait.png"
                            alt="Dr. Maya Reynolds, PsyD"
                            fill
                            className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                            priority
                            unoptimized
                        />
                    </div>
                </div>

                {/* Right Side: Centered Content */}
                <div className="flex flex-col items-center text-center space-y-10 reveal" style={{ animationDelay: '0.4s' }}>
                    <div className="space-y-6">
                        <h1 className="heading-xl text-primary-500 max-w-md mx-auto leading-[1.1]">
                            Live your life in <span className="italic font-light">full bloom</span>
                        </h1>
                        <p className="text-[10px] uppercase tracking-[0.4em] text-primary-400 font-bold">
                            Therapy for Adults in Minneapolis, MN
                        </p>
                    </div>
                    <div className="pt-4">
                        <button className="btn-primary hover-lift">Connect with me</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
