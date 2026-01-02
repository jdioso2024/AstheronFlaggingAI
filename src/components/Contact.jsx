import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-[#0d1216]">
            <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-background-dark to-[#1c2127] border border-[#283039] p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Let's Build Together</h2>
                    <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                        We are looking for partners to push the boundaries of AI. Whether you are an enterprise or a research lab, let's discuss how we can collaborate.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://wa.me/6281227031147" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white text-black font-bold text-lg hover:bg-slate-200 transition-all shadow-lg shadow-white/10 flex items-center justify-center">
                            Contact Sales
                        </a>

                    </div>

                    <div className="mt-16 pt-10 border-t border-[#283039]">
                        <p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Trusted by Our Loyal Client</p>
                        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
                            {[
                                { image: "/bagibagi.webp" }
                            ].map((company, index) => (
                                <div key={index} className="flex items-center gap-2.5 opacity-50 hover:opacity-100 transition-all duration-300 group cursor-default hover:scale-125">
                                    <img src={company.image} alt={company.name} className="h-8 w-auto grayscale group-hover:grayscale-0 transition-all duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
