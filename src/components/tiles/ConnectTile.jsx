import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export function ConnectTile() {
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/YACINBK',
            icon: <Github className="w-6 h-6" />,
            color: 'hover:text-white',
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/yacin-ben-kacem/',
            icon: <Linkedin className="w-6 h-6" />,
            color: 'hover:text-blue-400',
        },
        {
            name: 'Email',
            url: 'mailto:yacinbenkacem19@gmail.com',
            icon: <Mail className="w-6 h-6" />,
            color: 'hover:text-green-400',
        },
    ];

    return (
        <div className="flex flex-col h-full bg-glass-bg">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">Connect</h3>
            <div className="flex flex-col md:flex-row gap-3 justify-center w-full">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 group ${link.color}`}
                    >
                        <span className="text-slate-400 group-hover:text-inherit transition-colors">
                            {link.icon}
                        </span>
                        <span className="font-medium">{link.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
