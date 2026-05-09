import React from 'react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { currentBuild } from '../../data/portfolioData';

function SoftSkills() {
    const skills = [
        'Strategic Problem Solving',
        'Adaptability',
        'Effective Communication',
        'Team Leadership',
    ];

    return (
        <div className="flex flex-col p-6 bg-glass-bg border-b border-glass-border">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Human Factors</span>
            <h4 className="text-xl font-bold mb-4">Soft Skills</h4>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="px-3 py-1.5 rounded text-xs font-medium bg-accent-primary/10 border border-accent-primary text-accent-primary whitespace-nowrap"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}

function Terminal() {
    const text = useTypewriter(
        `> Initializing build: ${currentBuild.title}...\n> Auditing interface signals with AI...\n> Status: ACTIVE_DEVELOPMENT\n> Current Task: turning UX findings into product-ready actions...`,
        30
    );

    return (
        <div className="flex flex-col flex-1 bg-black/40 font-mono text-sm max-h-[300px] overflow-hidden">
            <div className="flex items-center gap-4 p-3 bg-white/5 border-b border-glass-border">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-slate-500">yacin@working-on: ~/status</span>
            </div>

            <div className="p-4 text-slate-300">
                <div className="flex gap-2 mb-2">
                    <span className="text-green-500">yacin@whitecape:~$</span>
                    <span className="text-white">./current_focus.sh</span>
                </div>
                <div className="whitespace-pre-wrap leading-relaxed">
                    {text}
                    <span className="inline-block w-2 h-4 bg-accent-primary ml-1 animate-pulse align-middle" />
                </div>
            </div>
        </div>
    );
}

export function FocusTile() {
    return (
        <div className="flex flex-col h-full -m-8">
            <div className="flex flex-col h-full rounded-2xl overflow-hidden">
                <SoftSkills />
                <Terminal />
            </div>
        </div>
    );
}
