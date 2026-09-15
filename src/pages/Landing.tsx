import React from 'react';
import { ArrowRight, Bitcoin, Check, CircleDollarSign, LockKeyhole, Menu, ShieldCheck, Sparkles, TrendingUp, WalletCards, X } from 'lucide-react';
import { useWallet } from '../lib/web3';

const PLANS: { name: string; price: string; hash: string; apy: string }[] = [
    { name: 'Starter Cluster', price: '100', hash: '+250 GH/s', apy: '5.0%' },
    { name: 'Referral Pro Miner', price: '200', hash: '+500 GH/s', apy: '5.0%' },
    { name: 'Precision Node', price: '400', hash: '+1,000 GH/s', apy: '5.0%' },
    { name: 'Standard Cluster', price: '500', hash: '+1,250 GH/s', apy: '5.5%' },
    { name: 'Pro AI Node', price: '1,000', hash: '+2,500 GH/s', apy: '6.0%' },
    { name: 'Enterprise Cluster', price: '2,000', hash: '+5,000 GH/s', apy: '7%' },
    { name: 'Industrial Node', price: '5,000', hash: '+12,500 GH/s', apy: '8%' },
    { name: 'Apex AI Cluster', price: '10,000', hash: '+25,000 GH/s', apy: '12%' },
];

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
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d8ff3e] text-[#07100d] shadow-[0_0_30px_rgba(216,255,62,0.22)]">
                        <Bitcoin size={22} strokeWidth={2.5} />
                    </span>
                    <span className="font-display text-lg font-black uppercase tracking-[0.16em]">Riot Mining</span>
                </a>

                <nav className="hidden items-center gap-8 text-sm font-semibold text-[#a9b3a1] md:flex">
                    <a href="#how-it-works" className="transition-colors hover:text-[#d8ff3e]">How it works</a>
                    <a href="#plans" className="transition-colors hover:text-[#d8ff3e]">Plans</a>
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
                    <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it works</a>
                    <a href="#plans" onClick={() => setMenuOpen(false)}>Plans</a>
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
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Your next move</p>
                        <h2 className="mt-4 max-w-md font-display text-4xl font-black uppercase leading-none sm:text-5xl">Start in three simple steps.</h2>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="landing-step"><span>01</span><WalletCards size={23} /><strong>Connect</strong><p>Link your preferred wallet securely.</p></div>
                        <div className="landing-step"><span>02</span><TrendingUp size={23} /><strong>Upgrade</strong><p>Choose a plan for your mining power.</p></div>
                        <div className="landing-step"><span>03</span><CircleDollarSign size={23} /><strong>Track</strong><p>Follow progress from your dashboard.</p></div>
                    </div>
                </section>

                <section id="plans" className="py-24">
                    <div className="text-center">
                        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#d8ff3e]">Mining plans</p>
                        <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none sm:text-5xl">Choose your mining node.</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#a9b3a1]">Stake USDT to activate a mining node. Every plan runs a 37-day cycle with daily BTC rewards credited straight to your dashboard.</p>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {PLANS.map((p) => (
                            <div key={p.name} className="landing-plan">
                                <div className="flex items-center justify-between gap-2">
                                    <span className="landing-plan-badge"><TrendingUp size={14} /> {p.hash}</span>
                                    <span className="text-[11px] font-black uppercase tracking-widest text-[#d8ff3e]">{p.apy}</span>
                                </div>
                                <strong>{p.name}</strong>
                                <p className="landing-plan-price"><span>$</span>{p.price}<em>USDT</em></p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
                        <div className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-sm font-semibold text-[#a9b3a1] sm:justify-start">
                            <span className="flex items-center gap-2"><Check size={15} className="text-[#d8ff3e]" /> 37-day cycle</span>
                            <span className="flex items-center gap-2"><Check size={15} className="text-[#d8ff3e]" /> Daily BTC rewards</span>
                            <span className="flex items-center gap-2"><Check size={15} className="text-[#d8ff3e]" /> Non-custodial</span>
                        </div>
                        <button onClick={handleConnect} className="landing-button">Start mining <ArrowRight size={16} /></button>
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

