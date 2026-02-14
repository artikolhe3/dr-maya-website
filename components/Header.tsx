import Link from 'next/link';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-secondary-100/80 backdrop-blur-xl border-b border-primary-200/30">
            <nav className="container-custom h-24 flex items-center justify-between">
                <div className="flex-1">
                    <a href="#" className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary-500">Lilac Template</a>
                </div>

                <div className="flex items-center space-x-16">
                    {['About', 'Services', 'FAQ', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[9px] uppercase tracking-[0.4em] font-bold text-primary-500 hover:text-primary-300 transition-all duration-500 relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-400 transition-all duration-500 group-hover:w-full" />
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;
