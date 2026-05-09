import React from 'react';
import { BentoGrid, BentoItem } from './components/layout/BentoGrid';
import { HeroTile } from './components/tiles/HeroTile';
import { AboutTile } from './components/tiles/AboutTile';
import { ConnectTile } from './components/tiles/ConnectTile';
import { EducationTile } from './components/tiles/EducationTile';
import { CertificationsTile } from './components/tiles/CertificationsTile';
import { ExperienceTile } from './components/tiles/ExperienceTile';
import { SkillsTile } from './components/tiles/SkillsTile';
import { ProjectsTile } from './components/tiles/ProjectsTile';
import { StatusFooter } from './components/layout/StatusFooter';

function App() {
    return (
        <div className="min-h-screen bg-bg-primary text-slate-100 relative overflow-x-clip">
            {/* Background Effect */}
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-bg-primary to-bg-primary -z-10" />

            <div className="relative z-10 px-4 py-6 md:px-8 md:py-8">
                <BentoGrid>
                    {/* Row 1: Hero & About (Stats/Mission) */}
                    <BentoItem span={2}>
                        <HeroTile />
                    </BentoItem>
                    <BentoItem span={2}>
                        <AboutTile />
                    </BentoItem>

                    {/* Row 2: Inline Status Bar */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-4">
                        <StatusFooter />
                    </div>

                    {/* Row 3: Projects */}
                    <div id="projects" className="col-span-1 md:col-span-2 lg:col-span-4 h-full relative">
                        <BentoItem span={4} className="h-full">
                            <ProjectsTile />
                        </BentoItem>
                    </div>

                    {/* Row 4: Skills */}
                    <div id="skills" className="col-span-1 md:col-span-2 lg:col-span-4">
                        <BentoItem span={4}>
                            <SkillsTile />
                        </BentoItem>
                    </div>

                    {/* Row 5: Experience */}
                    <div id="experience" className="col-span-1 md:col-span-2 lg:col-span-4">
                        <BentoItem span={4}>
                            <ExperienceTile />
                        </BentoItem>
                    </div>

                    {/* Row 6: Education & Certifications */}
                    <div id="education" className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="col-span-1">
                            <BentoItem span={2} className="h-full">
                                <EducationTile />
                            </BentoItem>
                        </div>
                        <div id="certifications" className="col-span-1">
                            <BentoItem span={2} className="h-full">
                                <CertificationsTile />
                            </BentoItem>
                        </div>
                    </div>

                    {/* Row 7: Contact */}
                    <div id="contact" className="col-span-1 md:col-span-2 lg:col-span-4">
                        <BentoItem span={4} className="min-h-[200px] flex items-center justify-center bg-gradient-to-br from-indigo-900/20 to-purple-900/20">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Ready to Collaborate?</h2>
                                <p className="text-slate-400 mb-6 max-w-lg mx-auto">
                                    Whether you have a question, a project idea, or just want to say hi, I&apos;m always open to discussing new opportunities.
                                </p>
                                <ConnectTile />
                            </div>
                        </BentoItem>
                    </div>
                </BentoGrid>
            </div>
        </div>
    );
}

export default App;
