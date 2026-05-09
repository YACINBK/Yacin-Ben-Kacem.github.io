import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, X, Layers, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { allProjects, currentBuild, featuredProjects, galleryProjects } from '../../data/portfolioData';

export function ProjectsTile() {
    const [selectedProject, setSelectedProject] = useState(currentBuild.id);
    const details = selectedProject ? allProjects.find((project) => project.id === selectedProject) : null;

    return (
        <div className="flex flex-col h-full relative">
            <div className="flex flex-col gap-8 pb-4">
                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-primary mb-4 block">
                        Featured Builds
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {featuredProjects.map((project) => (
                            <motion.button
                                key={project.id}
                                type="button"
                                onClick={() => setSelectedProject(project.id)}
                                aria-pressed={selectedProject === project.id}
                                className={`relative flex flex-col items-start text-left p-6 rounded-2xl border border-white/5 bg-gradient-to-br ${project.color} transition-all duration-300 hover:scale-[1.02] group ${selectedProject === project.id ? 'ring-2 ring-accent-primary border-transparent' : ''}`}
                            >
                                <div className="flex justify-between w-full mb-4">
                                    <span className="font-mono text-2xl font-bold opacity-30">{project.number}</span>
                                    <div className={`p-2 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity ${project.border} border`}>
                                        <ArrowUpRight className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-slate-300 font-mono mb-0">
                                    {project.subtitle}
                                </p>
                                {project.id === currentBuild.id && (
                                    <span className="mt-4 inline-flex rounded-full border border-accent-primary/30 bg-accent-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent-primary">
                                        {currentBuild.badge}
                                    </span>
                                )}
                            </motion.button>
                        ))}
                    </div>
                </div>

                <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 block">
                        More Projects
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {galleryProjects.map((project) => (
                            <button
                                key={project.id}
                                type="button"
                                onClick={() => setSelectedProject(project.id)}
                                aria-pressed={selectedProject === project.id}
                                className={`flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all group text-left ${selectedProject === project.id ? 'border-accent-primary/50 bg-accent-primary/5' : ''}`}
                            >
                                <div>
                                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-white">
                                        {project.title}
                                    </h4>
                                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                                        {project.subtitle}
                                    </span>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-accent-primary opacity-0 group-hover:opacity-100 transition-all" />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {details && (
                    <motion.div
                        key={details.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="mt-auto border-t border-white/10 pt-6"
                    >
                        <div className="bg-white/5 rounded-2xl p-5 sm:p-6 border border-white/10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                                <Layers className="w-64 h-64" />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row gap-6">
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-3 mb-2">
                                        <h3 className="text-2xl font-bold text-white">{details.title}</h3>
                                        <span className="text-sm font-mono text-accent-primary">{details.number}</span>
                                    </div>
                                    <p className="text-slate-300 leading-relaxed mb-6">
                                        {details.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {details.tech.map((tech) => (
                                            <span key={tech} className="px-2 py-1 rounded text-xs font-medium bg-black/40 text-slate-300 border border-white/5 flex items-center gap-1">
                                                <Code className="w-3 h-3 text-slate-500" />
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        <a
                                            href={details.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-primary hover:bg-accent-secondary text-white font-medium transition-colors text-sm"
                                        >
                                            <Github className="w-4 h-4" />
                                            View Source
                                        </a>
                                        {details.demo && (
                                            <a
                                                href={details.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors text-sm"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 text-slate-500 hover:text-white transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {!selectedProject && (
                <div className="mt-auto pt-6 border-t border-white/5 text-center py-12 text-slate-600 italic">
                    Select a project above to view details.
                </div>
            )}
        </div>
    );
}
