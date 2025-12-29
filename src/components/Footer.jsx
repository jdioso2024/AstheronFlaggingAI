import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-background-dark border-t border-[#283039] py-12 px-6">
            <div className="max-w-[1100px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 text-white mb-6">
                            <img src="/logo4.png" alt="Astheron Logo" className="h-8 w-auto" />
                            <h2 className="text-2xl font-bold">Astheron</h2>
                        </div>
                        <p className="text-slate-400 max-w-sm mb-6">
                            Empowering developers with the world's most advanced cognitive intelligence API. Built for speed, security, and scale.
                        </p>
                        <div className="flex gap-4">
                            {['code', 'alternate_email', 'forum'].map((icon, i) => (
                                <a key={i} className="h-10 w-10 flex items-center justify-center rounded-full bg-[#1c2127] text-slate-400 hover:bg-white hover:text-black transition-all" href="#">
                                    <span className="material-symbols-outlined text-[20px]">{icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="flex flex-col gap-4 text-slate-400 text-sm">
                            {[
                                { name: 'Features', href: '#features' },
                                { name: 'Documentation', href: '#' },
                                { name: 'API Reference', href: '#' },
                                { name: 'Pricing', href: '#pricing' }
                            ].map(item => (
                                <li key={item.name}><a className="hover:text-primary transition-colors" href={item.href}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="flex flex-col gap-4 text-slate-400 text-sm">
                            {[
                                { name: 'About Us', href: '#' },
                                { name: 'Blog', href: '#' },
                                { name: 'Careers', href: '#' },
                                { name: 'Contact', href: '#contact' }
                            ].map(item => (
                                <li key={item.name}><a className="hover:text-primary transition-colors" href={item.href}>{item.name}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#283039] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">© Astheron Technologies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
