import React from 'react';
import { ArrowRight, Award, Bitcoin, Check, CircleDollarSign, Cpu, Gauge, LockKeyhole, MapPin, Menu, Network, Server, ShieldCheck, Sparkles, TrendingUp, X, Zap } from 'lucide-react';
import { useWallet } from '../lib/web3';
import riotLogo from '../assets/riot-removebg.png';

const REFERRALS: { levels: string; rate: string; label: string; featured?: boolean }[] = [
    { levels: 'Level 1', rate: '5%', label: 'Direct referral', featured: true },
    { levels: 'Level 2', rate: '3%', label: 'Secondary network' },
    { levels: 'Level 3', rate: '2%', label: 'Tertiary volume' },
    { levels: 'Levels 4-6', rate: '1%', label: 'Intermediate tier' },
    { levels: 'Levels 7-9', rate: '1%', label: 'Global executive' },
    { levels: 'Level 10', rate: '1%', label: 'Diamond master' },
];

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
                    <a href="#riot-platforms" className="transition-colors hover:text-[#d8ff3e]">Riot Platforms</a>
                    <a href="#referrals" className="transition-colors hover:text-[#d8ff3e]">Referral</a>
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
                    <a href="#riot-platforms" onClick={() => setMenuOpen(false)}>Riot Platforms</a>
                    <a href="#referrals" onClick={() => setMenuOpen(false)}>Referral</a>
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

                <section id="referrals" className="border-t border-white/10 py-24">
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Referral income</p>
                            <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none sm:text-5xl">Earn as your network grows.</h2>
                            <p className="mt-5 max-w-md text-base leading-7 text-[#a9b3a1]">Invite others to mine with you and earn a share of their mining yield across 10 levels — credited every 37-day cycle.</p>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-4 rounded-2xl border border-[#d8ff3e]/25 bg-[#d8ff3e]/5 p-5">
                                    <span className="font-display text-4xl font-black text-[#d8ff3e]">5%</span>
                                    <div>
                                        <p className="font-bold">Direct referral yield</p>
                                        <p className="text-sm text-[#879487]">Earn 5% from Level 1 on every cycle.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                                    <span className="font-display text-4xl font-black text-[#f4f7ec]">$20</span>
                                    <div>
                                        <p className="font-bold">Invitation income</p>
                                        <p className="text-sm text-[#879487]">Bonus paid when your invite activates a node.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            {REFERRALS.map((r) => (
                                <div key={r.levels} className={`landing-referral-row ${r.featured ? 'landing-referral-row--featured' : ''}`}>
                                    <div className="flex items-center gap-4">
                                        <span className="landing-referral-rate">{r.rate}</span>
                                        <div>
                                            <strong>{r.levels}</strong>
                                            <p>{r.label}</p>
                                        </div>
                                    </div>
                                    <ArrowRight size={16} className="shrink-0 text-[#879487]" />
                                </div>
                            ))}
                        </div>
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

