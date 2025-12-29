import React from 'react';

const Headline = () => {
    return (
        <section className="relative flex flex-col items-center justify-center px-6 py-24 lg:py-40 overflow-hidden bg-background-dark">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

            <div className="layout-content-container flex flex-col items-center max-w-[960px] w-full z-10 text-center">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white mb-8 hover:bg-white/10 transition-colors">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    v0.1
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8 text-white">
                    Protect Your Community from <span className="text-slate-500">Gambling Intrusion</span>
                </h1>

                <p className="text-slate-400 text-lg lg:text-2xl leading-relaxed max-w-[720px] mb-12">
                    Our AI-powered system is designed to detect and prevent gambling activities in real-time, ensuring a safer and healthier community.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    <button className="flex h-12 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 text-base font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all">
                        <span className="material-symbols-outlined text-[20px]">description</span>
                        Read Docs
                    </button>
                    <a className="flex h-12 items-center justify-center rounded-lg bg-white px-8 text-base font-bold text-black hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
                        Contact Sales
                    </a>
                </div>

                <div className="flex flex-col items-center gap-6 text-sm text-slate-500">
                    <p>Trusted by Our Loyal Client</p>
                    <div className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mt-8 max-w-[1000px]">
                        {[
                            { image: "/bagibagi.webp" },
                        ].map((company, index) => (
                            <div key={index} className="flex items-center gap-4 opacity-90 hover:opacity-100 transition-all duration-300 group cursor-default hover:scale-110">
                                <img src={company.image} alt={company.name} className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Headline;
