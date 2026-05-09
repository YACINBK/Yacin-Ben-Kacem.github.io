import React from 'react';
import { GraduationCap, Award, FolderOpen } from 'lucide-react';
import { mission, portfolioStats } from '../../data/portfolioData';

function StatItem({ icon, value, label, link }) {
    return (
        <a
            href={link}
            className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-1 hover:border-accent-primary/50 transition-all duration-300 group cursor-pointer"
        >
            <div className="text-accent-primary mb-1 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <span className="text-xl font-bold text-white group-hover:text-accent-primary transition-colors">
                {value}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">
                {label}
            </span>
        </a>
    );
}

export function AboutTile() {
    return (
        <div className="flex flex-col justify-between h-full">
            <div className="grid grid-cols-3 gap-3 mb-6">
                <StatItem
                    icon={<GraduationCap className="w-5 h-5" />}
                    value={portfolioStats.years}
                    label="Years"
                    link="#education"
                />
                <StatItem
                    icon={<Award className="w-5 h-5" />}
                    value={portfolioStats.certifications}
                    label="Certs"
                    link="#certifications"
                />
                <StatItem
                    icon={<FolderOpen className="w-5 h-5" />}
                    value={portfolioStats.projects}
                    label="Projects"
                    link="#projects"
                />
            </div>

            <div className="relative pl-4 border-l-2 border-accent-primary/30">
                <h3 className="text-lg font-bold text-white mb-2">
                    Mission
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                    {mission}
                </p>
            </div>
        </div>
    );
}
