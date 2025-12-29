import React from 'react';

const Features = () => {
    return (
        <section id="features" className="py-24 px-6 bg-background">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Moderation in the Real World
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        User-generated content is unpredictable. See how AI handles the chaos of live platforms compared to traditional human queues.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Manual Review Card */}
                    <div className="bg-[#0f1216] rounded-2xl border border-white/5 p-8 relative overflow-hidden group">
                        <div className="flex items-start gap-4 mb-10">
                            <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center text-slate-400 shrink-0">
                                <span className="material-symbols-outlined">person_off</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Manual Review</h3>
                                <p className="text-slate-500">The human bottleneck</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Scenario 1 */}
                            <div className="bg-[#161b22] rounded-xl p-5 border border-white/5">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <h4 className="text-white font-semibold text-sm flex-1">Scenario: Viral Comment Section</h4>
                                    <span className="text-[10px] font-bold text-slate-500 tracking-wider border border-slate-700 px-2 py-0.5 rounded shrink-0">FAILED</span>
                                </div>
                                <p className="text-slate-500 text-xs mb-4">"A controversial post gets 5,000 comments in 10 minutes at 2 AM."</p>
                                <div className="bg-black/40 rounded-lg p-3 flex items-center gap-3 text-slate-400 text-xs font-medium border border-white/5">
                                    <span className="material-symbols-outlined text-[16px]">hourglass_empty</span>
                                    Review queue: 4+ hours backlog.
                                </div>
                            </div>

                            {/* Scenario 2 */}
                            <div className="bg-[#161b22] rounded-xl p-5 border border-white/5">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <h4 className="text-white font-semibold text-sm flex-1">Scenario: Live Stream Raid</h4>
                                    <span className="text-[10px] font-bold text-slate-500 tracking-wider border border-slate-700 px-2 py-0.5 rounded shrink-0">OVERWHELMED</span>
                                </div>
                                <p className="text-slate-500 text-xs mb-4">"Trolls coordinate a sudden spam attack on a creator's live chat."</p>
                                <div className="bg-black/40 rounded-lg p-3 flex items-center gap-3 text-slate-400 text-xs font-medium border border-white/5">
                                    <span className="material-symbols-outlined text-[16px]">visibility_off</span>
                                    Mods can't keep up. Streamer stops broadcast.
                                </div>
                            </div>

                            {/* Scenario 3 */}
                            <div className="bg-[#161b22] rounded-xl p-5 border border-white/5">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <h4 className="text-white font-semibold text-sm flex-1">Scenario: Contextual Harassment</h4>
                                    <span className="text-[10px] font-bold text-slate-500 tracking-wider border border-slate-700 px-2 py-0.5 rounded shrink-0">MISSED</span>
                                </div>
                                <p className="text-slate-500 text-xs mb-4">"Bullying that uses specific slang or subtle sarcasm to evade filters."</p>
                                <div className="bg-black/40 rounded-lg p-3 flex items-center gap-3 text-slate-400 text-xs font-medium border border-white/5">
                                    <span className="material-symbols-outlined text-[16px]">error</span>
                                    Human misses cultural context. False negative.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cognitive AI Card */}
                    <div className="bg-[#0f1216] rounded-2xl border border-white/20 p-6 md:p-8 relative overflow-hidden shadow-[0_0_50px_-20px_rgba(255,255,255,0.1)]">
                        <div className="inline-block mb-4 md:mb-0 md:absolute md:top-6 md:right-6 px-3 py-1 rounded-full bg-white text-black border border-white text-xs font-bold">
                            Optimized
                        </div>

                        <div className="flex items-start gap-4 mb-10">
                            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-black shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                <span className="material-symbols-outlined">smart_toy</span>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white">Cognitive AI</h3>
                                <p className="text-slate-200">Automated protection</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Scenario 1 */}
                            <div className="bg-[#161b22] rounded-xl p-5 border border-white/20 shadow-lg shadow-black/40">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <h4 className="text-white font-semibold text-sm flex-1">Scenario: Viral Comment Section</h4>
                                    <span className="text-[10px] font-bold text-white tracking-wider border border-white/30 px-2 py-0.5 rounded shrink-0">SOLVED</span>
                                </div>
                                <p className="text-slate-400 text-xs mb-4">"A controversial post gets 5,000 comments in 10 minutes at 2 AM."</p>
                                <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3 text-white text-xs font-medium border border-white/10">
                                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                                    Auto-scales instantly. 100% screened pre-publish.
                                </div>
                            </div>

                            {/* Scenario 2 */}
                            <div className="bg-[#161b22] rounded-xl p-5 border border-white/20 shadow-lg shadow-black/40">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <h4 className="text-white font-semibold text-sm flex-1">Scenario: Live Stream Raid</h4>
                                    <span className="text-[10px] font-bold text-white tracking-wider border border-white/30 px-2 py-0.5 rounded shrink-0">SOLVED</span>
                                </div>
                                <p className="text-slate-400 text-xs mb-4">"Trolls coordinate a sudden spam attack on a creator's live chat."</p>
                                <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3 text-white text-xs font-medium border border-white/10">
                                    <span className="material-symbols-outlined text-[16px]">shield</span>
                                    Pattern recognition blocks repeat offenders in ms.
                                </div>
                            </div>

                            {/* Scenario 3 */}
                            <div className="bg-[#161b22] rounded-xl p-5 border border-white/20 shadow-lg shadow-black/40">
                                <div className="flex justify-between items-start gap-4 mb-2">
                                    <h4 className="text-white font-semibold text-sm flex-1">Scenario: Contextual Harassment</h4>
                                    <span className="text-[10px] font-bold text-white tracking-wider border border-white/30 px-2 py-0.5 rounded shrink-0">SOLVED</span>
                                </div>
                                <p className="text-slate-400 text-xs mb-4">"Bullying that uses specific slang or subtle sarcasm to evade filters."</p>
                                <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3 text-white text-xs font-medium border border-white/10">
                                    <span className="material-symbols-outlined text-[16px]">psychology</span>
                                    LLM understands intent & nuance. Flagged correctly.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
