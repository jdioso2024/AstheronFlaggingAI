import React from 'react';

const Pricing = () => {
    return (
        <section id="pricing" className="py-24 px-6 bg-[#111418] relative">
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#137fec0a] to-transparent pointer-events-none"></div>

            <div className="max-w-[900px] mx-auto flex flex-col items-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Choose Your Intelligence</h2>
                <p className="text-slate-400 text-center max-w-xl mb-16">Our models are available exclusively to partners. Review our pricing tiers below and reach out to begin your integration.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-12">

                    <div className="flex flex-col p-8 rounded-2xl border border-[#283039] bg-[#1c2127] relative hover:border-primary/50 transition-colors z-10">
                        <h3 className="text-xl font-bold text-white">AI Flagging</h3>
                        <p className="text-slate-400 text-sm mt-2 mb-6">Gambling Promotion Detection</p>
                        <div className="text-4xl font-bold text-white mb-6">Rp. 100<span className="text-lg font-normal text-slate-500">/Message</span></div>
                        <div className="h-px w-full bg-[#283039] mb-6"></div>
                        <ul className="flex flex-col gap-3 text-sm text-slate-300">
                            {['Large scale domain specific dataset', 'Function Calling & JSON', 'Miliseconds Processing', 'Continuously Improved Model'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-[20px]">check</span> {item}</li>
                            ))}
                        </ul>
                    </div>


                    <div className="flex flex-col p-8 rounded-2xl border border-[#283039] bg-[#1c2127]/50 relative z-10 opacity-60">
                        <div className="absolute top-6 right-6 bg-slate-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-slate-600">Coming Soon</div>
                        <h3 className="text-xl font-bold text-white">COMING SOON</h3>
                        <p className="text-slate-400 text-sm mt-2 mb-6">Work In Progress</p>
                        <div className="text-4xl font-bold text-white mb-6 blur-[4px] select-none">Rp. XXX<span className="text-lg font-normal text-slate-500">/ image</span></div>
                        <div className="h-px w-full bg-[#283039] mb-6"></div>
                    </div>
                </div>

                {/* CTA Card */}
                <div className="w-full rounded-2xl border border-[#283039] bg-[#101922] p-8 md:p-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <h3 className="text-xl font-bold text-white mb-2">Ready to get started?</h3>
                        <p className="text-slate-400 text-sm">Connect with our sales team to request your API keys and discuss volume pricing for your enterprise.</p>
                    </div>
                    <a href="https://wa.me/6281227031147" target="_blank" rel="noopener noreferrer" className="whitespace-nowrap flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-bold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10">
                        Contact Sales
                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
