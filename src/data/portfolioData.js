export const currentBuild = {
    id: 'ux-insight',
    title: 'UX Insight Platform',
    subtitle: 'AI UX intelligence platform',
    shortStatus: 'Currently building UX Insight Platform',
    description:
        'An AI-assisted platform that audits interfaces, surfaces friction patterns, and turns heuristic reviews into prioritized product improvements.',
    tech: ['Angular', 'NestJS', 'MongoDB', 'LLM-assisted audits', 'UX heuristics'],
    link: 'https://github.com/YACINBK/ux-insight-platform',
    badge: 'Active build',
};

export const featuredProjects = [
    {
        ...currentBuild,
        number: '01',
        color: 'from-indigo-500/20 to-cyan-500/20',
        border: 'group-hover:border-indigo-400/60',
    },
    {
        id: 'quickflow',
        number: '02',
        title: 'QuickFlow',
        subtitle: 'Secure AI productivity suite',
        description:
            'A privacy-first productivity stack that combines local LLM workflows, secure identity management, and automation for professional teams.',
        tech: ['Local LLMs', 'Keycloak', 'Docker', 'OIDC', 'Spring Boot'],
        link: 'https://github.com/YACINBK/quickflow',
        color: 'from-emerald-500/20 to-teal-500/20',
        border: 'group-hover:border-emerald-500/50',
    },
];

export const galleryProjects = [
    {
        id: 'smart-city',
        number: '03',
        title: 'Smart City Sousse',
        subtitle: 'Urban digital twin',
        description:
            'A 3D urban simulation environment for modeling traffic flows, sustainability signals, and infrastructure planning in Sousse.',
        tech: ['Unity', 'C#', 'Traffic Simulation'],
        link: 'https://github.com/YACINBK/smart-city-sousse-2030',
    },
    {
        id: 'portfolio',
        number: '04',
        title: 'Portfolio 2026',
        subtitle: 'Personal brand system',
        description:
            'A modular portfolio built for strong project storytelling, responsive layouts, and faster content updates as new work ships.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
        link: 'https://github.com/YACINBK/portfolio',
    },
];

export const allProjects = [...featuredProjects, ...galleryProjects];

export const portfolioStats = {
    years: '5+',
    certifications: '12+',
    projects: '4',
};

export const heroContent = {
    role: 'AI product engineer focused on LLM workflows, secure platforms, and UX intelligence.',
};

export const mission =
    'I build AI-enabled products that combine strong UX thinking with production-grade engineering. My work spans LLM features, secure backend systems, and analytics-driven web apps designed to move from prototype to dependable release.';

export const experience = {
    company: 'Whitecape Technologies',
    range: 'June 2025 - July 2025',
    role: 'Internship Trainee',
    description:
        'Built intelligent data pipelines and heuristic engines for an AI UX analysis product using LLMOps, RAG, and full-stack delivery practices.',
    tech: ['LLMOps', 'RAG', 'FastAPI', 'Triton', 'NLP', 'Angular', 'Spring Boot'],
};
