import React from 'react';
import { experience } from '../../data/portfolioData';

export function ExperienceTile() {
    return (
        <div className="flex flex-col h-full">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Professional Experience</span>

            <div className="relative border-l border-white/10 ml-3 pl-8 pb-2">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                <div className="flex flex-col gap-2 group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h4 className="text-xl font-bold group-hover:text-accent-primary transition-colors">
                            {experience.company}
                        </h4>
                        <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1 rounded w-fit">
                            {experience.range}
                        </span>
                    </div>

                    <h5 className="text-sm font-semibold text-slate-300">{experience.role}</h5>

                    <p className="text-slate-400 text-sm leading-relaxed mt-2 mb-4">
                        {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {experience.tech.map((tech) => (
                            <span key={tech} className="px-2 py-1 rounded text-xs font-medium bg-white/5 text-slate-400 border border-white/5">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
