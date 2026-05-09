import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export function CertificationsTile() {
    // Exact data from legacy
    const certifications = [
        {
            id: 'nvidia',
            issuer: "NVIDIA",
            count: 7,
            items: [
                { name: "Fundamentals of Deep Learning", url: "https://learn.nvidia.com/certificates?id=MuJ5adzgRqyN4vp8lfuSnw" },
                { name: "Building RAG Agents with LLMs", url: "https://learn.nvidia.com/certificates?id=UdUEr7YxQ_aVFCc8nToZMg" },
                { name: "Applications of AI for Predictive Maintenance", url: "https://learn.nvidia.com/certificates?id=rPm69M4xRwm9BogRbgJRGg" },
                { name: "Building Real-Time Video AI Applications", url: "https://learn.nvidia.com/certificates?id=bOf4VdO3RKe4Gc71UHsgrg" },
                { name: "Building AI-Based Cybersecurity Pipelines", url: "https://learn.nvidia.com/certificates?id=KAsiM385R9y6ZkW69ebAnw" },
                { name: "Generative AI with Diffusion Models", url: "https://learn.nvidia.com/certificates?id=7TjOJBYcQwGtfbHWnugr9g" },
                { name: "Building Transformer-Based NLP Applications", url: "https://learn.nvidia.com/certificates?id=hzNiLDkcR3ag3gTEI0aK2w" },
            ]
        },
        {
            id: 'dl',
            issuer: "DeepLearning.AI",
            count: 2,
            items: [
                { name: "Neural Networks & Deep Learning", url: "https://www.coursera.org/account/accomplishments/verify/WRYZZZF17O2P" },
                { name: "Supervised Machine Learning: Regression and Classification", url: "https://www.coursera.org/account/accomplishments/verify/1B2H4BAE29M0" },
            ]
        },
        {
            id: 'google',
            issuer: "Google & More",
            count: 3,
            items: [
                { name: "Intro to Generative AI (Google)", url: "https://www.coursera.org/account/accomplishments/verify/5R8O9SFIHKNR" },
                { name: "Data Cleaning (365 Data Science)", url: "https://learn.365datascience.com/certificates/CC-76DC872530/" },
                { name: "Python (Sololearn)", url: "#" },
            ]
        }
    ];

    return (
        <div className="flex flex-col h-full bg-glass-bg p-4 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-start mb-6 shrink-0">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Verified Expertise</span>
                <div className="bg-accent-primary/10 px-2 py-1 rounded text-accent-primary text-[10px] font-bold border border-accent-primary/20">
                    12+ Verified
                </div>
            </div>

            <div className="flex flex-col gap-6">
                {certifications.map((cat) => (
                    <div key={cat.id} className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <div className="p-1 rounded bg-accent-primary/10 text-accent-primary">
                                <Award className="w-3 h-3" />
                            </div>
                            <h4 className="text-sm font-bold text-white tracking-wide uppercase">{cat.issuer}</h4>
                        </div>

                        <div className="flex flex-col gap-1 pl-2 border-l border-white/10 ml-2.5">
                            {cat.items.map((cert) => (
                                <a
                                    key={cert.name}
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between px-3 py-1.5 rounded text-xs text-slate-400 hover:text-white hover:bg-white/5 transition-all group"
                                >
                                    <span className="truncate pr-2 group-hover:translate-x-1 transition-transform">{cert.name}</span>
                                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-slate-500" />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
