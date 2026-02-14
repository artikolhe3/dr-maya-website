import Image from 'next/image';

const services = [
    {
        title: "self-esteem",
        description: "Building a strong sense of self is the key to living a fulfilled life. Let's work together to achieve your self-esteem and build your confidence.",
        image: "/office-1.jpeg"
    },
    {
        title: "relationships",
        description: "Navigating relationships can be complex. Understanding the patterns that influence our connections can help us build deeper and more meaningful bonds.",
        image: "/office-2.jpeg"
    },
    {
        title: "burnout",
        description: "Feeling overwhelmed by your current circumstances can feel like a heavy burden. Together, we'll build a roadmap for managing stress and reclaiming your peace.",
        image: "/maya-portrait.png"
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding bg-secondary-100 border-t border-primary-200/30" style={{ '--index': 3 } as React.CSSProperties}>
            <div className="container-custom">
                <div className="text-center mb-24 reveal">
                    <h2 className="heading-lg text-primary-500 italic font-light">
                        My <span className="not-italic font-medium">Specialties</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-0 border-t border-primary-200 reveal">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col p-12 lg:p-16 border-x border-b border-primary-200 text-center space-y-10 group hover:bg-white/30 transition-colors duration-700">
                            <div className="space-y-6 flex-grow">
                                <span className="text-[10px] uppercase tracking-[0.4em] text-primary-400 font-bold italic block">{service.title}</span>
                                <p className="text-sm leading-[1.8] text-primary-600/80 font-light">
                                    {service.description}
                                </p>
                            </div>

                            <div className="relative aspect-square w-48 mx-auto mt-auto reveal-scale" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                                <div className="absolute inset-0 image-circle overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 border-2 border-primary-200/50">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
