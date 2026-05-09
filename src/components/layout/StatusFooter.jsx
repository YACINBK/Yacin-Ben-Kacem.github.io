import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { currentBuild } from '../../data/portfolioData';

export function StatusFooter() {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            setTime(
                new Intl.DateTimeFormat('en-GB', {
                    timeZone: 'Africa/Tunis',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }).format(new Date())
            );
        };

        updateTime();
        const timer = setInterval(updateTime, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-3">
                    <span className="relative mt-1.5 flex h-2.5 w-2.5 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <div>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Status</span>
                        <p className="mt-1 text-sm font-medium text-slate-200">
                            Available for internships, freelance work, and product collaborations.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between lg:gap-6">
                    <a
                        href={currentBuild.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition-colors hover:border-accent-primary/40 hover:bg-accent-primary/5"
                    >
                        <div>
                            <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Current build</span>
                            <span className="mt-1 block text-sm font-semibold text-white">{currentBuild.title}</span>
                        </div>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition-colors group-hover:text-accent-primary" />
                    </a>

                    <div className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-left">
                        <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">Tunis time</span>
                        <span className="mt-1 block text-sm font-mono text-slate-200">{time}</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
