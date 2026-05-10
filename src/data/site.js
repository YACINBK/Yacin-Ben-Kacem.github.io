export const site = {
    name: 'Yacin Ben Kacem',
    shortName: 'YBK',
    role: 'Software Engineering Student — Backend Orchestration & Agentic AI',
    title: 'Yacin Ben Kacem | Backend & Agentic Systems Architecture',
    description:
        'Software engineering student focused on high-security backend architecture, agentic AI orchestration, and resilient automation pipelines.',
    location: 'Sousse, Tunisia',
    availability:
        'Available for backend systems engineering, AI architecture, and automation-heavy technical projects.',
    email: 'yacinbenkacem19@gmail.com',
    academicEmail: 'yassine.benkacem@eniso.u-sousse.tn',
    phone: '+216 29 504 806',
    github: 'https://github.com/YACINBK',
    linkedin: 'https://www.linkedin.com/in/yacin-ben-kacem/',
    brandLine: 'secure backend / systems orchestration / resilient automation',
    intro:
        'Architecting secure backend systems and agentic AI workflows that survive real-world failure.',
    homeSummary:
        'Systems architect specialized in secure backend boundaries, agentic AI orchestration, and failure-aware automation workflows.',
    currentFocusTitle: 'Live System Trace',
    currentFocus:
        'I design systems that route work, recover from failure, and turn messy inputs into structured outputs.',
    currentFocusHighlights: [
        'backend boundaries',
        'agentic routing',
        'fallback recovery',
        'pipeline execution',
        'verified output',
    ],
    currentFocusCta: 'Open UX Insight repo',
};

export const routes = [
    { href: '/work', label: 'Experience', description: 'Internship and systems work.' },
    { href: '/projects', label: 'Projects', description: 'Architecture, constraints, and results.' },
    { href: '/lab', label: 'Automation', description: 'State-aware automation workflows.' },
    { href: '/dossier', label: 'Credentials', description: 'Skills, certificates, education.' },
    { href: '/contact', label: 'Contact', description: 'Communication endpoints.' },
];

export const focusAreas = [
    {
        title: 'Agentic Systems',
        description:
            'Multi-step AI workflows with state checks, tool routing, retries, and explicit failure states.',
    },
    {
        title: 'Secure Backend',
        description:
            'Gateways, identity, JWT/OIDC validation, access boundaries, and clean API contracts.',
    },
    {
        title: 'Resilient Workflows',
        description:
            'Caching, preprocessing, fallback logic, reproducible outputs, and resource-aware execution.',
    },
];

export const systemProfile = [
    { label: 'Input', value: 'messy data / raw ideas / user workflows' },
    { label: 'Core', value: 'secure APIs / agent routing / fallback recovery' },
    { label: 'Output', value: 'structured, reliable systems' },
];

export const workEntries = [
    {
        type: 'Internship',
        role: 'Systems Engineering Intern',
        organization: 'White Cape Technologies',
        range: 'Jun 2025 - Jul 2025',
        location: 'Sousse, Tunisia',
        summary:
            'Built an AI-driven UX analysis platform using screenshots, OCR, interaction telemetry, and visual heuristics.',
        groups: [
            {
                label: 'Backend / Security',
                items: [
                    'Engineered Spring Boot services with Keycloak-based OAuth2/OIDC security, JWT validation, and access-control checks.',
                    'Kept AI workloads behind gateway-controlled API contracts instead of exposing services directly.',
                ],
            },
            {
                label: 'AI Workflow Orchestration',
                items: [
                    'Orchestrated fallback-aware workflows through isolated Python/FastAPI services for LLM inference, OCR, and image-processing tasks.',
                    'Reduced coupling between core backend logic and heavy AI workloads.',
                ],
            },
            {
                label: 'Data Pipeline',
                items: [
                    'Processed behavioral telemetry, screenshots, OCR payloads, and visual heuristics into structured analysis flows.',
                    'Handled high-volume JSON interaction logs with PostgreSQL persistence and Redis-style caching.',
                ],
            },
            {
                label: 'Infrastructure',
                items: [
                    'Used Docker Compose for local orchestration across Angular, Spring Boot, FastAPI services, PostgreSQL, and cache layers.',
                    'Worked toward explicit failure states, structured logs, and recoverable service behavior.',
                ],
            },
        ],
    },
    {
        type: 'Independent systems',
        role: 'Backend, Agentic AI, Automation, and Data Projects',
        organization: 'Personal builds',
        range: '2024 - Present',
        location: 'Sousse, Tunisia',
        summary:
            'Independent systems built around authentication, failure states, queues, caching, recovery logic, and reproducible outputs.',
        groups: [
            {
                label: 'Systems',
                items: [
                    'QuickFlow: secure assistant for meeting summaries, structured minutes, and email generation.',
                    'Agentic video production: browser automation, rendering, captions, metadata, scheduling, and archival.',
                ],
            },
            {
                label: 'Data / Media',
                items: [
                    'Machine learning/data projects: Play Store install prediction and soil nutrient modeling with reproducible preprocessing.',
                    'Image vectorization workflow: SAM, OpenCV/Pillow, Oklab, VTracer, and VRAM-aware execution.',
                ],
            },
        ],
    },
];

export const projects = [
    {
        slug: 'ux-insight-platform',
        title: 'UX Insight Platform',
        summary: 'Distributed system for automated web UX analysis.',
        type: 'Internship platform',
        status: 'Active flagship',
        timeline: '2025 - Present',
        kind: 'SoftwareSourceCode',
        role: 'Internship core project and current flagship system.',
        stack: 'Angular / Spring Boot / FastAPI / Keycloak / ChromaDB / PostgreSQL / Redis / Docker',
        problem:
            'UX reviews often stay subjective. This system turns screenshots, interaction logs, OCR, and visual heuristics into structured analysis.',
        result:
            'Moved heavy AI work into an async lifecycle with queued processing, polling, recovery logic, caching, and cleaner service boundaries.',
        architecture: [
            'Angular frontend for uploads, progress state, and results.',
            'Spring Boot gateway for persistence, file handling, orchestration, async jobs, and API contracts.',
            'FastAPI LLM service with ChromaDB RAG, embeddings, prompt constraints, and fallback-aware provider logic.',
            'FastAPI image-processing service for screen classification, UI detection, and OCR.',
            'PostgreSQL for durable state, Redis caching for repeated expensive calls, Docker Compose for local orchestration.',
        ],
        constraints: [
            'Keycloak OAuth2/OIDC security with JWT validation at the gateway.',
            'Access-control and ownership checks for protected analysis jobs.',
            'Fail-closed LLM behavior and explicit error states.',
        ],
        flow: ['Angular', 'Spring Gateway', 'FastAPI AI', 'PostgreSQL / Redis'],
        tech: ['Angular', 'Spring Boot', 'FastAPI', 'Keycloak', 'ChromaDB', 'RAG', 'PostgreSQL', 'Redis', 'Docker'],
        repository: 'https://github.com/YACINBK/ux-insight-platform',
        repositoryLabel: 'Open repository',
    },
    {
        slug: 'quickflow',
        title: 'QuickFlow',
        summary: 'Secure assistant for meetings, structured minutes, and email generation.',
        type: 'Full-stack system',
        status: 'Independent build',
        timeline: '2025',
        kind: 'SoftwareSourceCode',
        role: 'Independent full-stack system.',
        stack: 'Spring Boot / Angular / Keycloak / OAuth2-OIDC / MongoDB / LLM workflows',
        problem:
            'Meeting and email generation need authentication, saved context, and predictable workflow rules, not a loose prompt box.',
        result:
            'Built a private productivity system where generated output is governed by backend rules, identity, and reusable workflows.',
        architecture: [
            'Spring Boot backend for business workflows, persistence, and identity management.',
            'Angular frontend for meeting, email, and contact flows.',
            'Keycloak identity model with social login support and OAuth2/OIDC concepts.',
            'Controlled generation with cached request fingerprints and reusable communication flows.',
        ],
        constraints: [
            'Token-aware backend flows and environment-based secrets.',
            'Authentication and workflow reliability treated as first-class concerns.',
            'Workflow-specific prompt rules instead of a general free-form prompt box.',
        ],
        flow: ['Auth', 'Workflow Rules', 'LLM Generation', 'Saved Context', 'Email / Minutes'],
        tech: ['Spring Boot', 'Angular', 'Keycloak', 'OAuth2/OIDC', 'MongoDB', 'LLM workflow orchestration'],
        repository: 'https://github.com/TaherBenAfia/quickflow',
        repositoryLabel: 'Open repository',
    },
    {
        slug: 'ml-data-projects',
        title: 'Machine Learning / AI Data Projects',
        summary: 'Predictive modeling with reproducible preprocessing and feature engineering.',
        type: 'Data systems',
        status: 'Engineering Portfolio',
        timeline: '2024 - 2025',
        kind: 'SoftwareSourceCode',
        role: 'Independent data science and ML work.',
        stack: 'Python / pandas / NumPy / scikit-learn / PyTorch / Keras / LightGBM',
        problem:
            'Raw datasets require structured collection, cleaning, feature engineering, and evaluation before becoming useful models.',
        result:
            'Built structured data workflows where model outputs are backed by reproducible preprocessing, feature engineering, and multi-output evaluation.',
        architecture: [
            'Play Store Predictive Analysis: deep-learning models trained on a 3M-row dataset to predict app installs and extract performance insights.',
            'Soil Nutrient Prediction: satellite/environmental data cleaning, feature engineering, and multi-output LightGBM modeling.',
            'Notebook logic refactored into repeatable Python data steps where possible.',
        ],
        constraints: [
            'Reproducible preprocessing before any model training step.',
            'Explicit feature engineering instead of hidden notebook state.',
            'Multi-output model evaluation with structured validation splits.',
        ],
        flow: ['Raw Dataset', 'Cleaning', 'Feature Engineering', 'Training', 'Evaluation'],
        tech: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'Keras', 'LightGBM'],
        repository: 'https://github.com/YACINBK/soil-nutrient-prediction',
        repositoryLabel: 'View Soil Nutrient repo',
    },

    {
        slug: 'smart-city-sousse',
        title: 'Smart City Sousse 2030',
        summary: 'Urban monitoring platform with backend data, simulation, and analytics dashboards.',
        type: 'Backend + dashboard',
        status: 'Academic/independent',
        timeline: '2025',
        kind: 'CreativeWork',
        role: 'Academic/independent platform project.',
        stack: 'Django REST / SQLite / Simulation scripts / Streamlit / Plotly / Folium',
        problem:
            'A smart-city scenario needs realistic data, useful APIs, and readable dashboards instead of static tables.',
        result:
            'Built a readable city-monitoring prototype with backend data, simulation, and dashboard layers.',
        architecture: [
            'Django REST backend with SQLite data model and clean API layer.',
            'Synthetic city-data generation and simulation scripts.',
            'Streamlit analytics dashboard with maps, KPIs, and Plotly/Folium charts.',
        ],
        constraints: [
            'Backend-managed data access with separation of concerns.',
            'Simulation data separated from dashboard rendering.',
        ],
        flow: ['Django REST', 'Simulation Scripts', 'SQLite', 'Streamlit Dashboard', 'Maps / KPIs'],
        tech: ['Django', 'Django REST Framework', 'Streamlit', 'Plotly', 'Folium', 'SQLite'],
        repository: 'https://github.com/YACINBK/smart-city-sousse-2030-V2',
        repositoryLabel: 'Open repository',
    },
];

export const automationEntries = [
    {
        slug: 'agentic-video-production',
        title: 'Agentic AI Video Production Pipeline',
        subtitle:
            'A state-aware content production agent that turns raw ideas into rendered, captioned, upload-ready short-form videos.',
        detail:
            'The system starts from raw concept text, plans content with an LLM, controls a browser to generate AI video clips, produces narration, renders final scenes, adds Whisper captions, prepares metadata, schedules publishing, and archives final assets.',
        repository: 'https://github.com/YACINBK/agentic-video-pipeline',
        repositoryLabel: 'Open repository',
        tech: ['Python', 'Playwright', 'OpenRouter LLMs', 'FFmpeg', 'MoviePy', 'Whisper', 'pydub', 'YouTube API', 'Google Drive API', 'OAuth'],
        flow: [
            { title: 'Input', detail: 'Raw concept text' },
            { title: 'Planning', detail: 'LLM generates title, script, and scene prompts' },
            { title: 'Browser Execution', detail: 'Playwright handles authenticated sessions, selector fallbacks, retries, and generated-video extraction' },
            { title: 'Assembly', detail: 'TTS narration, FFmpeg muxing, MoviePy processing' },
            { title: 'Post-production', detail: 'Whisper captions, styled overlays, final render' },
            { title: 'Distribution', detail: 'Metadata, scheduling, YouTube upload, Drive archive' },
        ],
        agenticReasons: [
            'Inspects filesystem state before acting.',
            'Skips completed assets instead of regenerating work.',
            'Detects failed or rejected generations.',
            'Reformulates prompts when generation fails.',
            'Retries unstable browser automation steps.',
            'Resumes safely after interruption.',
            'Routes work across LLMs, Playwright, TTS, FFmpeg, Whisper, Drive, and YouTube.',
        ],
        browserLayer:
            'Playwright-based automation controls an authenticated browser session, reuses cookies, navigates unstable UI states, detects input fields through selector fallbacks, submits scene prompts, monitors the DOM for generated video output, handles rejection and timeout states, and extracts generated media for the rendering workflow.',
        outcomes: [
            'Turns raw ideas into production-ready video assets.',
            'Recovers from partial failures without restarting the entire workflow.',
            'Combines browser automation, media processing, captions, metadata, scheduling, and archival.',
        ],
    },
    {
        slug: 'image-vectorization',
        title: 'Image Vectorization Workflow',
        subtitle: 'Generation-to-SVG workflow under 8GB VRAM constraints.',
        detail:
            'A constraint-aware creative workflow: image generation, SAM subject isolation, OpenCV/Pillow preprocessing, Oklab perceptual color quantization, VTracer SVG tracing, and batch VRAM management.',
        repository: 'https://github.com/YACINBK/image-vectorization',
        repositoryLabel: 'Open repository',
        tech: ['Python', 'Stable Diffusion', 'SAM', 'OpenCV', 'Pillow', 'Oklab', 'VTracer', 'CUDA / VRAM management'],
        flow: [
            { title: 'Generate', detail: 'Create source images with VRAM-aware batch sizing' },
            { title: 'Segment', detail: 'Use SAM for subject isolation and background removal' },
            { title: 'Preprocess', detail: 'Clean, resize, and normalize with OpenCV/Pillow' },
            { title: 'Quantize', detail: 'Reduce palette with Oklab before tracing' },
            { title: 'Trace', detail: 'Export scalable SVG with VTracer' },
            { title: 'Recover', detail: 'Flush VRAM and checkpoint batch state' },
        ],
        outcomes: [
            'Converts manual creative work into a repeatable workflow.',
            'Produces vector-ready assets within an 8GB VRAM budget.',
            'Keeps every stage explicit so outputs are debuggable.',
        ],
    },

];

export const labEntries = automationEntries;

export const toolkit = [
    {
        category: 'Backend',
        items: ['Spring Boot', 'FastAPI', 'Flask', 'PostgreSQL', 'Redis', 'Docker', 'API contracts'],
    },
    {
        category: 'Agentic AI',
        items: ['LangGraph', 'LangChain', 'MCP servers', 'RAG', 'Tool-calling agents', 'Prompt engineering'],
    },
    {
        category: 'Media Workflows',
        items: ['FFmpeg', 'MoviePy', 'Whisper', 'pydub', 'OpenCV', 'Pillow', 'VTracer', 'Oklab quantization'],
    },
    {
        category: 'Automation',
        items: ['Playwright', 'Browser automation', 'Web scraping', 'Selector fallbacks', 'Retry logic', 'Queue orchestration'],
    },
    {
        category: 'Machine Learning',
        items: ['PyTorch', 'Keras', 'scikit-learn', 'pandas', 'NumPy', 'LightGBM', 'Feature engineering'],
    },
    {
        category: 'Programming',
        items: ['Python', 'Java', 'C/C++', 'C#', 'TypeScript/JavaScript', 'SQL'],
    },
    {
        category: 'Security & Delivery',
        items: ['Docker', 'Git/GitHub/GitLab', 'Keycloak', 'OAuth2/OIDC', 'JWT', 'Linux CLI', 'Postman', 'Fallback-aware workflows'],
    },
];

export const selectedCredentials = [
    {
        title: 'Building RAG Agents with LLMs',
        trait: 'Retrieval-Oriented Agent Design',
        description: 'Signals my focus on retrieval-aware agent systems: connecting LLMs with documents, tools, planning behavior, and structured deliverable workflows.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=UdUEr7YxQ_aVFCc8nToZMg'
    },
    {
        title: 'Building AI-Based Cybersecurity Pipelines',
        trait: 'Security-Aware AI Pipelines',
        description: 'Supports my secure-systems profile: AI inference over high-volume security data, telemetry processing, anomaly detection, and pipeline-oriented threat analysis.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=KAsiM385R9y6ZkW69ebAnw'
    },
    {
        title: 'Building Real-Time Video AI Applications',
        trait: 'Multimodal Pipeline Engineering',
        description: 'Connects to my automation and media-pipeline work: video AI workflows, applied computer vision, and production-style processing of generated media assets.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=bOf4VdO3RKe4Gc71UHsgrg'
    },
    {
        title: 'Generative AI with Diffusion Models',
        trait: 'Generative Media Systems',
        description: 'Reinforces my image-generation and vectorization work: diffusion-based media generation, controlled visual outputs, and creative AI pipeline design.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=7TjOJBYcQwGtfbHWnugr9g'
    },
    {
        title: 'Building Transformer-Based NLP Applications',
        trait: 'Language Model Application Design',
        description: 'Strengthens my LLM systems base: transformer NLP, text-processing workflows, named-entity recognition concepts, and deployment-aware model application design.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=hzNiLDkcR3ag3gTEI0aK2w'
    },
    {
        title: 'Applications of AI for Predictive Maintenance',
        trait: 'Time-Series Reliability Modeling',
        description: 'Extends my data-systems profile into predictive reliability: time-series anomaly detection, failure prediction, remaining-useful-life reasoning, and maintenance-oriented ML workflows.',
        verifyUrl: 'https://learn.nvidia.com/certificates?id=rPm69M4xRwm9BogRbgJRGg'
    }
];

export const certificateArchive = [
    {
        provider: 'NVIDIA Deep Learning Institute',
        items: [
            { title: 'Building LLM Applications with Prompt Engineering', url: 'https://learn.nvidia.com/certificates?id=8kh6ha76RLCZjdAknIMeTQ' },
            { title: 'Fundamentals of Deep Learning', url: 'https://learn.nvidia.com/certificates?id=MuJ5adzgRqyN4vp8lfuSnw' },
        ],
    },
    {
        provider: 'DeepLearning.AI / Coursera',
        items: [
            { title: 'Neural Networks and Deep Learning', url: 'https://www.coursera.org/account/accomplishments/verify/WRYZZZF17O2P' },
            { title: 'Supervised Machine Learning: Regression and Classification', url: 'https://www.coursera.org/account/accomplishments/verify/1B2H4BAE29M0' },
        ],
    },
    {
        provider: 'Google Cloud / Coursera',
        items: [
            { title: 'Introduction to Generative AI', url: 'https://www.coursera.org/account/accomplishments/verify/5R8O9SFIHKNR' },
        ],
    },
    {
        provider: '365 Data Science',
        items: [
            { title: 'Data Cleaning and Preprocessing with pandas', url: 'https://learn.365datascience.com/certificates/CC-76DC872530/' },
        ],
    },
];

export const competitionSignals = [
    {
        title: 'IndabaX Tunisia 2025 — Challenge 1',
        meta: 'Top 50% · 31 / 69 · Zindi',
        description: 'Ranked 31 / 69 in IndabaX Tunisia 2025 Challenge 1, a Zindi-hosted 20-hour applied ML hackathon focused on telecom KPI anomaly detection for 4G/5G network behavior. The challenge involved identifying faults, degradation, failures, and risk patterns from network-cell performance data.',
        certificateUrl: '/zindi-cert.png'
    }
];

export const education = [
    {
        institution: 'Ecole Nationale d\'Ingenieurs de Sousse (ENISo)',
        title: 'Engineering Degree in Software Engineering',
        range: 'Sep 2024 - Present',
    },
    {
        institution: 'Preparatory Institute for Engineering Studies of Monastir',
        title: 'Mathematics & Physics Preparatory Cycle',
        range: 'Sep 2022 - Jun 2024',
        note: 'National rank: 509 / 1800',
    },
];

export const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'C1 Advanced' },
    { name: 'French', level: 'B2 Upper Intermediate' },
    { name: 'German', level: 'A1 Beginner' },
];

export const contactLinks = [
    { label: 'Email', href: `mailto:${site.email}`, value: site.email, type: 'copy', microcopy: 'route ready' },
    { label: 'Academic email', href: `mailto:${site.academicEmail}`, value: site.academicEmail, type: 'copy', microcopy: 'campus route' },
    { label: 'GitHub', href: site.github, value: 'github.com/YACINBK', type: 'external', microcopy: 'repository channel' },
    { label: 'LinkedIn', href: site.linkedin, value: 'linkedin.com/in/yacin-ben-kacem', type: 'external', microcopy: 'professional channel' },
];

export const socialLinks = contactLinks.filter((link) => ['GitHub', 'LinkedIn'].includes(link.label));
