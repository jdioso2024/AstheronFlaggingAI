import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled ? 'border-[#283039]/50 bg-background-dark/95 backdrop-blur-md shadow-lg' : 'border-transparent bg-transparent'
            }`}>
            <div className="flex items-center justify-between px-6 py-4 lg:px-20 max-w-[1280px] mx-auto w-full">
                <div className="flex items-center gap-3 text-white">
                    <img src="/logo4.png" alt="Astheron Logo" className="h-6 w-auto" />
                    <h2 className="text-xl font-bold leading-tight tracking-tight">Astheron</h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    {[
                        { name: 'Advantages', href: '#features' },
                        { name: 'Technology', href: '#technology' },
                        { name: 'Pricing', href: '#pricing' }
                    ].map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#contact">
                        Contact
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
