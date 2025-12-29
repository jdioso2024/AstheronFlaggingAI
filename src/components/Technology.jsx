import React from 'react';

const Technology = () => {
    return (
        <section id="technology" className="py-24 px-6 bg-[#0d1216]">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Understand the Core</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        A transparent, three-step process from raw input to structured, actionable intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="flex flex-col gap-6">
                        <div className="min-h-[360px] h-auto bg-[#161b22] border border-[#283039] rounded-xl p-4 overflow-hidden relative group hover:border-blue-500/30 transition-colors">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent pointer-events-none"></div>

                            <div className="bg-[#0f1318] rounded-lg border border-[#283039] p-4 h-full flex flex-col justify-center items-center">
                                <div className="w-full max-w-[240px] bg-[#1c2127] rounded border border-[#2d353b] p-3 shadow-lg">
                                    <div className="flex gap-1.5 mb-3">
                                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        <div className="ml-auto text-[10px] text-slate-600 font-mono">input.txt</div>
                                    </div>
                                    <p className="text-slate-300 text-xs font-mono leading-relaxed mb-4">
                                        "Inpo ngab 🏆𝗔𝗝𝗥𝟴𝟴🏆 No debat pokoknya ngab 🏆𝗔𝗝𝗥𝟴𝟴🏆"
                                    </p>
                                    <div className="flex justify-center">
                                        <span className="text-[10px] bg-[#0d1216] text-blue-400 px-2 py-1 rounded-full border border-blue-900/30 flex items-center gap-1">
                                            <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse"></span> Receiving Stream
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-blue-500 tracking-wider mb-2 block uppercase">Step 1 - Input Understanding</span>
                            <h3 className="text-xl font-bold text-white mb-3">Raw Data Ingestion</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                System receives client text content for analysis. The raw input is processed without initial changes or decisions, preserving the original context and formatting.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col gap-6">
                        <div className="min-h-[360px] h-auto bg-[#161b22] border border-[#283039] rounded-xl p-4 overflow-hidden relative group hover:border-blue-500/30 transition-colors">
                            <div className="bg-[#0f1318] rounded-lg border border-[#283039] p-4 h-full flex flex-col justify-center items-center relative">
                                <div className="flex flex-wrap gap-2 justify-center w-full px-2 mb-8">
                                    <span className="px-2 py-1 text-xs rounded border border-red-500/30 bg-red-500/10 text-red-400">🏆𝗔-𝗝-𝗥-𝟴-𝟴🏆</span>
                                    <span className="px-2 py-1 text-xs rounded border border-slate-700 bg-slate-800 text-slate-400">Inpo</span>
                                    <span className="px-2 py-1 text-xs rounded border border-slate-700 bg-slate-800 text-slate-400">Pokoknya</span>
                                    <span className="px-2 py-1 text-xs rounded border border-slate-700 bg-slate-800 text-slate-400">Ngab</span>
                                    <span className="px-2 py-1 text-xs rounded border border-red-500/30 bg-red-500/10 text-red-400">🏆𝗔𝗝𝗥𝟴𝟴🏆</span>
                                </div>

                                <div className="w-full space-y-3 px-4">
                                    <div>
                                        <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                                            <span>Sentiment: Judol</span>
                                            <span className="text-red-400">0.98</span>
                                        </div>
                                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-red-500 w-[98%]"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                                            <span>Confidence: High</span>
                                            <span className="text-orange-400">0.99</span>
                                        </div>
                                        <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
                                            <div className="h-full bg-orange-500 w-[99%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-blue-500 tracking-wider mb-2 block uppercase">Step 2 - Model Analysis</span>
                            <h3 className="text-xl font-bold text-white mb-3">Token-Level Processing</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Model performs token-level analysis on the received content, identifying risk indications based on context and language patterns for each token independently.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col gap-6">
                        <div className="min-h-[360px] h-auto bg-[#161b22] border border-[#283039] rounded-xl p-4 overflow-hidden relative group hover:border-blue-500/30 transition-colors">
                            <div className="bg-[#0f1318] rounded-lg border border-[#283039] p-4 h-full flex flex-col justify-center font-mono text-[10px] md:text-xs">
                                <div className="text-slate-500 mb-2">response.json</div>
                                <div className="text-slate-300">
                                    <span className="text-slate-500">{`{`}</span><br />
                                    &nbsp;&nbsp;<span className="text-purple-400">"name"</span>: <span className="text-green-400">"TestA"</span>,<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">"original text"</span>: <span className="text-green-400">"Inpo ngab 🏆AJR88🏆..."</span>,<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">"censored text"</span>: <span className="text-green-400">"Inpo ngab 🏆 ### 🏆..."</span>,<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">"defined threshold"</span>: <span className="text-blue-400">0.8</span>,<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">"detections"</span>: [<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`{`} <span className="text-purple-400">"word"</span>: <span className="text-green-400">"AJR88"</span>, <span className="text-purple-400">"confidence"</span>: <span className="text-blue-400">1.0</span> {`}`},<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;{`{`} <span className="text-purple-400">"word"</span>: <span className="text-green-400">"A-J-R-8-8"</span>, <span className="text-purple-400">"confidence"</span>: <span className="text-blue-400">1.0</span> {`}`}<br />
                                    &nbsp;&nbsp;],<br />
                                    &nbsp;&nbsp;<span className="text-purple-400">"max confidence"</span>: <span className="text-blue-400">1.0</span><br />
                                    <span className="text-slate-500">{`}`}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="text-xs font-bold text-blue-500 tracking-wider mb-2 block uppercase">Step 3 - Structured Output</span>
                            <h3 className="text-xl font-bold text-white mb-3">Actionable Intelligence</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                System returns analysis results in a structured format: Original Text, Censored Text, Configurable Confidence Threshold, Token Confidence Scores, and Max Confidence Score.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Technology;
