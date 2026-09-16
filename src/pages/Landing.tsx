import React from 'react';
import { ArrowRight, Award, Bitcoin, Check, CircleDollarSign, Cloud, Cpu, Gauge, HardDrive, LockKeyhole, MapPin, Menu, Network, Server, ShieldCheck, Sparkles, TrendingUp, TriangleAlert, X, Zap } from 'lucide-react';
import { useWallet } from '../lib/web3';
import riotLogo from '../assets/riot-removebg.png';

const Landing: React.FC = () => {
    const { connect } = useWallet();
    const [menuOpen, setMenuOpen] = React.useState(false);

    const handleConnect = async () => {
        await connect();
    };

    return (
        <div className="landing-page min-h-screen overflow-hidden bg-[#07100d] text-[#f2f5e9]">
            <header className="landing-header mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
                <a href="#top" className="flex items-center gap-3" aria-label="Riot Mining home">
                    <img src={riotLogo} alt="Riot Mining" className="h-11 w-auto object-contain drop-shadow-[0_0_18px_rgba(216,255,62,0.25)]" />
                    <span className="font-display text-lg font-black uppercase tracking-[0.16em]">Riot Mining</span>
                </a>

                <nav className="hidden items-center gap-8 text-sm font-semibold text-[#a9b3a1] md:flex">
                    <a href="#how-it-works" className="transition-colors hover:text-[#d8ff3e]">Bitcoin mining</a>
                    <a href="#mining-methods" className="transition-colors hover:text-[#d8ff3e]">Mining methods</a>
                    <a href="#riot-platforms" className="transition-colors hover:text-[#d8ff3e]">Riot Platforms</a>
                    <a href="#benefits" className="transition-colors hover:text-[#d8ff3e]">Benefits</a>
                    <a href="#security" className="transition-colors hover:text-[#d8ff3e]">Security</a>
                </nav>

                <div className="hidden md:block">
                    <button onClick={handleConnect} className="landing-button landing-button-small">
                        Connect wallet <ArrowRight size={16} />
                    </button>
                </div>
                <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-[#d8ff3e] md:hidden" aria-label="Toggle navigation">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            {menuOpen && (
                <nav className="mx-5 flex flex-col gap-4 border-y border-white/10 px-2 py-5 text-sm font-semibold text-[#a9b3a1] md:hidden">
                    <a href="#how-it-works" onClick={() => setMenuOpen(false)}>Bitcoin mining</a>
                    <a href="#mining-methods" onClick={() => setMenuOpen(false)}>Mining methods</a>
                    <a href="#riot-platforms" onClick={() => setMenuOpen(false)}>Riot Platforms</a>
                    <a href="#benefits" onClick={() => setMenuOpen(false)}>Benefits</a>
                    <a href="#security" onClick={() => setMenuOpen(false)}>Security</a>
                    <button onClick={handleConnect} className="landing-button mt-2 w-full">Connect wallet <ArrowRight size={16} /></button>
                </nav>
            )}

            <main id="top" className="mx-auto max-w-6xl px-5 pb-20 pt-12 sm:px-8 sm:pt-20">
                <section className="landing-hero grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="relative z-10">
                        <p className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]"><Sparkles size={15} /> Digital mining, refined</p>
                        <h1 className="max-w-3xl font-display text-5xl font-black uppercase leading-[0.94] tracking-[-0.02em] text-[#f4f7ec] sm:text-7xl">
                            Make your capital <span className="text-[#d8ff3e]">work harder.</span>
                        </h1>
                        <p className="mt-7 max-w-xl text-base leading-7 text-[#a9b3a1] sm:text-lg">
                            A transparent, wallet-first mining platform built for people who want a clearer way to grow with digital assets.
                        </p>
                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <button onClick={handleConnect} className="landing-button landing-button-large">Connect wallet <ArrowRight size={18} /></button>
                            <a href="#how-it-works" className="landing-secondary-button">Explore the platform</a>
                        </div>
                        <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold text-[#879487]">
                            <span className="flex items-center gap-2"><Check size={15} className="text-[#d8ff3e]" /> Built on BNB Chain</span>
                            <span className="flex items-center gap-2"><Check size={15} className="text-[#d8ff3e]" /> Non-custodial access</span>
                        </div>
                    </div>

                    <div className="landing-orbit relative mx-auto aspect-square w-full max-w-[470px]">
                        <div className="absolute inset-[8%] rounded-full border border-[#d8ff3e]/20" />
                        <div className="absolute inset-[18%] rounded-full border border-[#d8ff3e]/15" />
                        <div className="absolute inset-[29%] rounded-full border border-[#d8ff3e]/10" />
                        <div className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[#d8ff3e]/40 bg-[#101d16] shadow-[0_0_70px_rgba(216,255,62,0.17)] sm:h-52 sm:w-52">
                            <Bitcoin size={38} className="mb-3 text-[#d8ff3e]" />
                            <span className="font-display text-2xl font-black uppercase tracking-[0.12em]">RIOT</span>
                            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-[#849283]">Mining protocol</span>
                        </div>
                        <div className="landing-orbit-dot absolute left-[8%] top-[25%]"><TrendingUp size={17} /></div>
                        <div className="landing-orbit-dot absolute right-[10%] top-[17%]"><ShieldCheck size={17} /></div>
                        <div className="landing-orbit-dot absolute bottom-[18%] right-[17%]"><CircleDollarSign size={17} /></div>
                    </div>
                </section>

                <section id="benefits" className="mt-24 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                    <div className="landing-stat"><span>01</span><strong>Clear ownership</strong><p>Your wallet stays in your control at every step.</p></div>
                    <div className="landing-stat"><span>02</span><strong>Built for consistency</strong><p>Track mining power, stakes, and rewards in one place.</p></div>
                    <div className="landing-stat"><span>03</span><strong>Designed to scale</strong><p>Simple entry today, a stronger mining journey tomorrow.</p></div>
                </section>

                <section id="how-it-works" className="grid gap-10 py-24 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">How Bitcoin mining works</p>
                        <h2 className="mt-4 max-w-md font-display text-4xl font-black uppercase leading-none sm:text-5xl">Mining, explained simply.</h2>
                        <p className="mt-5 max-w-md text-base leading-7 text-[#a9b3a1]">
                            Bitcoin mining is the engine that keeps the Bitcoin network running. Miners use powerful computers to solve cryptographic puzzles that validate transactions and secure the network — and they are rewarded in BTC for every block they add.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="landing-step"><span>01</span><Network size={23} /><strong>Validate</strong><p>Miners bundle pending transactions into a new block and confirm they are legitimate.</p></div>
                        <div className="landing-step"><span>02</span><Cpu size={23} /><strong>Hash</strong><p>Specialized ASIC machines race to solve a SHA-256 puzzle — proof of work — for the right to add the block.</p></div>
                        <div className="landing-step"><span>03</span><Bitcoin size={23} /><strong>Earn BTC</strong><p>The winning miner earns the block reward plus transaction fees, paid directly in Bitcoin.</p></div>
                        <div className="landing-step"><span>04</span><Zap size={23} /><strong>Scale on power</strong><p>Profitability comes from cheap energy and efficient hardware — Riot self-mines 44.4 EH/s on low-cost power.</p></div>
                    </div>
                </section>

                <section id="riot-platforms" className="border-t border-white/10 py-24">
                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">The team behind the power</p>
                        <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none sm:text-5xl">Built on Riot Platforms.</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#a9b3a1]">
                            Riot Platforms (NASDAQ: RIOT) is one of the largest publicly traded Bitcoin mining and digital infrastructure companies in North America — vertically integrated, energy-optimized, and built on its own power infrastructure.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="flex items-center gap-3"><Server size={20} className="text-[#d8ff3e]" /><span className="text-[11px] font-black uppercase tracking-widest text-[#d8ff3e]">Data centers</span></div>
                            <h3 className="mt-5 font-display text-xl font-black uppercase">Built for high-performance computing</h3>
                            <p className="mt-3 text-sm leading-6 text-[#a9b3a1]">Large-scale data centers with direct access to low-cost power for AI and high-density workloads.</p>
                            <div className="mt-5 space-y-2 text-sm font-semibold text-[#a9b3a1]">
                                <p className="flex items-center gap-2"><Check size={15} className="text-[#d8ff3e]" /> 2.0 GW approved power pipeline</p>
                                <p className="flex items-center gap-2"><Check size={15} className="text-[#d8ff3e]" /> 1,300+ acres controlled</p>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-[#d8ff3e]/25 bg-[#d8ff3e]/5 p-6">
                            <div className="flex items-center gap-3"><Gauge size={20} className="text-[#d8ff3e]" /><span className="text-[11px] font-black uppercase tracking-widest text-[#d8ff3e]">Bitcoin mining</span></div>
                            <h3 className="mt-5 font-display text-xl font-black uppercase">Large-scale self mining</h3>
                            <p className="mt-3 text-sm leading-6 text-[#a9b3a1]">One of the most advanced mining fleets in the industry, operating across Texas and Kentucky.</p>
                            <div className="mt-5 space-y-2 text-sm font-semibold text-[#a9b3a1]">
                                <p className="flex items-center gap-2"><Check size={15} className="text-[#d8ff3e]" /> 44.4 EH/s hash rate capacity</p>
                                <p className="flex items-center gap-2"><Check size={15} className="text-[#d8ff3e]" /> 100% self mining</p>
                            </div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                            <div className="flex items-center gap-3"><Award size={20} className="text-[#d8ff3e]" /><span className="text-[11px] font-black uppercase tracking-widest text-[#d8ff3e]">Engineering</span></div>
                            <h3 className="mt-5 font-display text-xl font-black uppercase">In-house engineering</h3>
                            <p className="mt-3 text-sm leading-6 text-[#a9b3a1]">ESS Metron and E4A Solutions bring electrical manufacturing and power deployment in-house.</p>
                            <div className="mt-5 space-y-2 text-sm font-semibold text-[#a9b3a1]">
                                <p className="flex items-center gap-2"><Check size={15} className="text-[#d8ff3e]" /> 38+ years of experience</p>
                                <p className="flex items-center gap-2"><Check size={15} className="text-[#d8ff3e]" /> In-house design &amp; manufacturing</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid gap-3 sm:grid-cols-3">
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><MapPin size={18} className="shrink-0 text-[#d8ff3e]" /><div><strong className="font-display font-black uppercase tracking-wider">Corsicana</strong><p className="text-sm text-[#879487]">Corsicana, Texas</p></div></div>
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><MapPin size={18} className="shrink-0 text-[#d8ff3e]" /><div><strong className="font-display font-black uppercase tracking-wider">Rockdale</strong><p className="text-sm text-[#879487]">Rockdale, Texas</p></div></div>
                        <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"><MapPin size={18} className="shrink-0 text-[#d8ff3e]" /><div><strong className="font-display font-black uppercase tracking-wider">Paducah</strong><p className="text-sm text-[#879487]">Paducah, Kentucky</p></div></div>
                    </div>
                </section>

                <section id="mining-methods" className="border-t border-white/10 py-24">
                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Ways to mine Bitcoin</p>
                        <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none sm:text-5xl">Traditional mining vs cloud mining.</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#a9b3a1]">
                            Both paths secure the same Bitcoin network through proof of work — the difference is who owns and runs the hardware. Here is how each one works.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 lg:grid-cols-2">
                        <div className="rounded-3xl border border-white/10 bg-[#0c1a13] p-7">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d8ff3e]/10 text-[#d8ff3e]"><HardDrive size={22} /></div>
                                <div>
                                    <span className="text-[11px] font-black uppercase tracking-widest text-[#d8ff3e]">Traditional (self) mining</span>
                                    <h3 className="font-display text-2xl font-black uppercase leading-none">Run it yourself</h3>
                                </div>
                            </div>
                            <p className="mt-5 text-sm leading-6 text-[#a9b3a1]">You buy the machines, power them, and run them around the clock. You keep full ownership — and full responsibility — for the operation.</p>

                            <p className="mt-6 text-xs font-black uppercase tracking-widest text-[#f4f7ec]">How it works</p>
                            <div className="mt-3 space-y-2.5 text-sm leading-6 text-[#a9b3a1]">
                                <p className="flex gap-2.5"><span className="font-display font-black text-[#d8ff3e]">1.</span><span>Buy ASIC hardware — specialized computers built to solve Bitcoin's SHA-256 puzzle.</span></p>
                                <p className="flex gap-2.5"><span className="font-display font-black text-[#d8ff3e]">2.</span><span>Power, cool and connect them — machines run 24/7, so cheap electricity and good ventilation matter.</span></p>
                                <p className="flex gap-2.5"><span className="font-display font-black text-[#d8ff3e]">3.</span><span>Point your hashrate at a mining pool so rewards are split in proportion to your power.</span></p>
                                <p className="flex gap-2.5"><span className="font-display font-black text-[#d8ff3e]">4.</span><span>Earn the block reward — currently 3.125 BTC per block — plus transaction fees.</span></p>
                            </div>

                            <p className="mt-6 text-xs font-black uppercase tracking-widest text-[#f4f7ec]">The upside</p>
                            <div className="mt-3 space-y-2 text-sm text-[#a9b3a1]">
                                <p className="flex items-start gap-2"><Check size={15} className="mt-0.5 shrink-0 text-[#d8ff3e]" /> Full ownership and control of every machine.</p>
                                <p className="flex items-start gap-2"><Check size={15} className="mt-0.5 shrink-0 text-[#d8ff3e]" /> Keep the upside if Bitcoin's price rises.</p>
                                <p className="flex items-start gap-2"><Check size={15} className="mt-0.5 shrink-0 text-[#d8ff3e]" /> No third party sits between you and your rewards.</p>
                            </div>

                            <p className="mt-6 text-xs font-black uppercase tracking-widest text-[#f4f7ec]">The trade-offs</p>
                            <div className="mt-3 space-y-2 text-sm text-[#a9b3a1]">
                                <p className="flex items-start gap-2"><TriangleAlert size={15} className="mt-0.5 shrink-0 text-[#f0b429]" /> High upfront cost for miners and a constant electricity bill.</p>
                                <p className="flex items-start gap-2"><TriangleAlert size={15} className="mt-0.5 shrink-0 text-[#f0b429]" /> Noise, heat, and ongoing maintenance are yours to handle.</p>
                                <p className="flex items-start gap-2"><TriangleAlert size={15} className="mt-0.5 shrink-0 text-[#f0b429]" /> Hardware can become obsolete as mining difficulty rises.</p>
                            </div>
                        </div>
                        <div className="rounded-3xl border border-[#d8ff3e]/25 bg-[#d8ff3e]/5 p-7">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#d8ff3e]/10 text-[#d8ff3e]"><Cloud size={22} /></div>
                                <div>
                                    <span className="text-[11px] font-black uppercase tracking-widest text-[#d8ff3e]">Cloud mining</span>
                                    <h3 className="font-display text-2xl font-black uppercase leading-none">Rent the hashrate</h3>
                                </div>
                            </div>
                            <p className="mt-5 text-sm leading-6 text-[#a9b3a1]">You rent a share of a data center's mining power instead of buying hardware. The operator runs everything on your behalf.</p>

                            <p className="mt-6 text-xs font-black uppercase tracking-widest text-[#f4f7ec]">How it works</p>
                            <div className="mt-3 space-y-2.5 text-sm leading-6 text-[#a9b3a1]">
                                <p className="flex gap-2.5"><span className="font-display font-black text-[#d8ff3e]">1.</span><span>Buy a contract that rents a fixed amount of hashrate for a set period.</span></p>
                                <p className="flex gap-2.5"><span className="font-display font-black text-[#d8ff3e]">2.</span><span>The provider runs the ASIC fleet and pays electricity, cooling, and maintenance.</span></p>
                                <p className="flex gap-2.5"><span className="font-display font-black text-[#d8ff3e]">3.</span><span>After fees, your share of mining rewards is credited to your account.</span></p>
                                <p className="flex gap-2.5"><span className="font-display font-black text-[#d8ff3e]">4.</span><span>No hardware or technical setup — you simply watch earnings from a dashboard.</span></p>
                            </div>

                            <p className="mt-6 text-xs font-black uppercase tracking-widest text-[#f4f7ec]">The upside</p>
                            <div className="mt-3 space-y-2 text-sm text-[#a9b3a1]">
                                <p className="flex items-start gap-2"><Check size={15} className="mt-0.5 shrink-0 text-[#d8ff3e]" /> No hardware, electricity, heat, or noise to manage.</p>
                                <p className="flex items-start gap-2"><Check size={15} className="mt-0.5 shrink-0 text-[#d8ff3e]" /> A low barrier to entry — start with a smaller amount.</p>
                                <p className="flex items-start gap-2"><Check size={15} className="mt-0.5 shrink-0 text-[#d8ff3e]" /> Professionally managed infrastructure on your behalf.</p>
                            </div>

                            <p className="mt-6 text-xs font-black uppercase tracking-widest text-[#f4f7ec]">The trade-offs</p>
                            <div className="mt-3 space-y-2 text-sm text-[#a9b3a1]">
                                <p className="flex items-start gap-2"><TriangleAlert size={15} className="mt-0.5 shrink-0 text-[#f0b429]" /> Thinner margins after the operator's fees.</p>
                                <p className="flex items-start gap-2"><TriangleAlert size={15} className="mt-0.5 shrink-0 text-[#f0b429]" /> You must trust the provider's honesty and uptime — scams are common.</p>
                                <p className="flex items-start gap-2"><TriangleAlert size={15} className="mt-0.5 shrink-0 text-[#f0b429]" /> Contracts can lose money if difficulty climbs or BTC price falls.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
                        <p className="max-w-2xl text-sm leading-6 text-[#a9b3a1]">
                            Traditional mining gives you full ownership with real operational effort. Cloud mining trades that control for convenience and a hands-off experience.
                        </p>
                        <button onClick={handleConnect} className="landing-button">Start mining <ArrowRight size={16} /></button>
                    </div>
                </section>

                <section id="security" className="flex flex-col gap-7 border-t border-white/10 py-10 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4"><LockKeyhole className="text-[#d8ff3e]" /><div><p className="font-bold">Your wallet, your access.</p><p className="text-sm text-[#879487]">Riot Mining never asks for your private keys.</p></div></div>
                    <button onClick={handleConnect} className="landing-secondary-button">Enter platform <ArrowRight size={16} /></button>
                </section>
            </main>
        </div>
    );
};

export default Landing;

