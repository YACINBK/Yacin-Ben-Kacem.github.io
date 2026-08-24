**Yacin Ben Kacem**
yacinbenkacem19@gmail.com · +216 29 504 806
yacinbenkacem.me · github.com/YACINBK · linkedin.com/in/yacin-ben-kacem

**Re: Software Engineer Intern — Cresta, Toronto**

Hiring team,

The most useful thing I built this summer was a pipeline that refuses to answer.

At White Cape Technologies I architected an agentic RAG assistant over internal company documents as a nine-node LangGraph state machine: classify → retrieve → rerank → relevance gate → generate → faithfulness check. Generation is deliberately buffered rather than streamed — the generator holds its output in memory and the SSE channel opens only once the faithfulness check passes, so no unverified token reaches the user. When both retrieval attempts fall below the relevance threshold, the system says so instead of improvising. When the generator produces an ungrounded claim, the answer is discarded and the event is logged. I shipped it with 218 contract-driven tests, a Celery ingestion pipeline, and a role-scoped semantic cache in Qdrant at a 0.92 cosine threshold, so a cached answer cannot cross a privilege boundary.

Latency was a design constraint, not an afterthought. A three-way classifier keeps chitchat off the generation path entirely (under 50 ms), cache hits return in roughly 50 ms, and full retrieval-and-verification lands at 2.3–4.3 s — a budget set per route rather than measured after the fact.

That habit comes from pipelines, which is where I do my most careful engineering. I build systems meant to run unattended: an agentic video production pipeline that inspects filesystem state before acting, skips assets it has already produced, detects rejected generations and reformulates the prompt, retries unstable Playwright steps behind selector fallbacks, and resumes after interruption instead of starting over. Before that, a distributed UX analysis platform where I moved LLM inference, OCR, and image processing off the request path into an async job lifecycle — queue, poll, recover — behind a Keycloak-secured Spring Boot gateway. Both taught me the same thing your conversation intelligence work runs on at a far larger scale: at volume, the interesting engineering lives in the failure paths.

Cresta's problem is considerably harder than anything I have shipped — live conversations, millions a day, where a wrong or late suggestion costs a real customer interaction. But the shape is familiar: a model in the hot path, a latency budget, and a requirement that the system be observable enough to trust. Doing that in production rather than in a demo is why I am applying here specifically.

On tooling: agentic coding workflows are how I work, not something I have tried. Claude Code is my primary environment, with custom hooks, project-scoped skills, and multi-agent runs for larger refactors. I instrument and constrain the agent the same way I instrument and constrain a model inside a pipeline — which is how a student ships a system this size on a summer timeline.

**On the note you asked for.** The problems I most enjoy are applied LLMs where reliability is the product: evaluation, faithfulness, observability — and the pipeline and automation layer that makes those guarantees hold under load, meaning ingestion, queues, retries, caching, recovery, and honest failure states. **AI Evaluation & Reliability** and **Platform & Infrastructure** map most directly onto what I already build. **Conversation Intelligence** is where I would be most curious to grow.

I would be joining from Tunisia, five to six hours ahead of Toronto, which puts my afternoons and evenings across your full morning and midday — a working overlap, not a handoff. If relocation is on the table, I would welcome being in the office.

Everything above is open source. The assistant is at github.com/YACINBK/Agentic_Rag_Assistant, and the architecture, latency paths, and failure modes are written up at yacinbenkacem.me.

Thank you for your time.

Yacin Ben Kacem
