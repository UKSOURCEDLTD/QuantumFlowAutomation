// Blog post content — Posts 13-14
// Vibe Coding and Self-Hosting AI Infrastructure

export const CONTENT_VIBE_CODING = `
<p class="lead">Google coined the term "vibe coding" when they launched Antigravity. The developer community mocked it. Then they tried it. Then they couldn't go back. Here's what vibe coding actually means in practice, why it works, and how to do it without producing the AI slop that gives the approach a bad name.</p>

<h2>The Old Way vs. The New Way</h2>

<p>Traditional software development is a translation exercise. You have an idea in your head. You translate that idea into architecture. You translate the architecture into code. You translate the code into tests. Every translation step introduces friction, errors, and delay.</p>

<p>Vibe coding eliminates most of these translation steps. You describe the <em>intent</em> — the vibe — and an AI agent handles the translation to code. Instead of specifying "create a React component that maps over an array of posts and renders each with a title, excerpt, date, and category badge with framer-motion entrance animations," you say "build a blog card grid, make it premium with smooth entrance animations."</p>

<p>The agent understands both instructions. But the second one is faster to express, requires less mental overhead, and — when the agent is good — produces the same result.</p>

<h2>Why Most People Get It Wrong</h2>

<p>The criticism of vibe coding is legitimate when it's done badly. And most people do it badly. Here's why:</p>

<h3>Mistake 1: Vibing Without Context</h3>
<p>If you ask an agent to "build a blog page" with no context about your existing codebase, design system, or architecture, you'll get a generic blog page that doesn't fit. Vibe coding isn't an excuse to skip context-setting. The best vibe coders spend 20% of their time ensuring the agent understands the codebase before they start directing.</p>

<p>In Antigravity, this means:</p>
<ul>
<li>Letting the agent read your existing components before creating new ones</li>
<li>Pointing it to your design tokens and CSS conventions</li>
<li>Referencing existing patterns: "build it like how we did the services page"</li>
</ul>

<h3>Mistake 2: Skipping the Plan</h3>
<p>Antigravity has a planning mode for a reason. When you give the agent a complex task, it should first produce an implementation plan — which files it will create or modify, what changes it will make, and how it will verify the result. <strong>Review the plan before approving execution.</strong></p>

<p>We've seen developers skip planning to "move faster." They don't. They move faster for 10 minutes, then spend an hour fixing the mess the agent created because it misunderstood the architecture. Plan first. Always.</p>

<h3>Mistake 3: No Verification Loop</h3>
<p>Vibe coding without verification produces AI slop — code that compiles but doesn't work properly, looks right but has subtle bugs, passes tests that don't test the right things. The verification loop is non-negotiable:</p>
<ol>
<li>Agent writes code</li>
<li>Agent runs the build</li>
<li>Agent opens the browser and screenshots the result</li>
<li>You review the code AND the visual result</li>
<li>You iterate or approve</li>
</ol>

<h2>The Anatomy of a Great Vibe Prompt</h2>

<p>After three months of daily vibe coding, we've identified the structure of prompts that consistently produce excellent results:</p>

<h3>1. Goal (What)</h3>
<p>"Add a newsletter signup section to the blog page."</p>

<h3>2. Context (Where)</h3>
<p>"It should go after the blog post grid, before the footer. Look at the existing BlogCard component for styling conventions."</p>

<h3>3. Vibe (How It Should Feel)</h3>
<p>"Make it premium — glassmorphism card, gradient background, the kind of section that makes visitors think 'this company knows what they're doing.'"</p>

<h3>4. Constraints (What It Must Not Do)</h3>
<p>"Don't use Tailwind — we use vanilla CSS. Don't add new npm dependencies. Keep the component self-contained."</p>

<h3>5. Verification (How to Prove It Works)</h3>
<p>"Run the dev server and screenshot the blog page with the new section visible."</p>

<p>That's 30 seconds of typing. The result? A production-ready component that would have taken 45-60 minutes to build by hand. That's not laziness. That's leverage.</p>

<h2>When Vibe Coding Doesn't Work</h2>

<p>Vibe coding excels at:</p>
<ul>
<li>UI components and styling</li>
<li>CRUD operations and data flow</li>
<li>Refactoring and code cleanup</li>
<li>Test writing</li>
<li>Documentation</li>
<li>Integration glue code</li>
</ul>

<p>Vibe coding struggles with:</p>
<ul>
<li>Novel algorithms (things the model hasn't seen in training)</li>
<li>Complex state management with subtle race conditions</li>
<li>Security-critical code (auth flows, encryption, input sanitisation)</li>
<li>Performance optimisation of hot paths</li>
</ul>

<p>For the second category, switch from vibe mode to pair-programming mode: you lead, the agent assists. Write the critical logic yourself, let the agent handle the boilerplate around it.</p>

<h2>The Productivity Reality</h2>

<p>We track our output meticulously. Since adopting vibe coding with Antigravity:</p>

<ul>
<li><strong>Feature delivery time:</strong> Down 60-70% for UI-heavy work</li>
<li><strong>Bug rate:</strong> Roughly the same — the agent introduces different bugs than humans do, but not more of them</li>
<li><strong>Code quality:</strong> Higher on average — the agent is more consistent about error handling, edge cases, and documentation than we are when we're tired</li>
<li><strong>Developer satisfaction:</strong> Significantly higher — we spend time on interesting problems instead of boilerplate</li>
</ul>

<p>The developers who dismiss vibe coding as "not real programming" are making the same argument that assembly programmers made about high-level languages. The abstraction level has moved up. Again. The developers who adapt will thrive. The rest will be writing hand-crafted artisanal for-loops while their competitors ship features at 5x their speed.</p>

<p>Vibe coding isn't the future. It's the present. Learn to do it well, or learn to compete with people who do.</p>`;

export const CONTENT_SELF_HOSTING = `
<p class="lead">The default advice for any business deploying AI is "use a managed service." OpenAI's API. Anthropic's Claude. Google's Vertex AI. And for many use cases, that's the right call. But when you're deploying autonomous agents that handle sensitive business data, interact with your customers, and make decisions on your behalf — the case for self-hosting becomes overwhelming. Here's how we do it, what it costs, and why it matters.</p>

<h2>The Problem with Managed AI Services</h2>

<p>Managed services are excellent for prototyping, development, and low-stakes applications. But they come with three fundamental constraints that become deal-breakers at production scale:</p>

<h3>1. Data Sovereignty</h3>
<p>When your agent processes a customer's email through the OpenAI API, that email transits through OpenAI's infrastructure. Yes, they promise not to use it for training. Yes, they have SOC 2 compliance. But under GDPR, the mere act of sending EU personal data to a US-based processor creates compliance obligations that most SMEs aren't equipped to manage.</p>

<p>Self-hosting eliminates this entirely. Your data stays on your infrastructure. Your compliance surface area shrinks to zero for the AI component.</p>

<h3>2. Cost at Scale</h3>
<p>API pricing is per-token. This is great when you're processing 100 requests a day. It becomes painful at 10,000. And it becomes prohibitive at 100,000.</p>

<p>A typical agent workflow processes 2,000-5,000 tokens per interaction. At OpenAI's GPT-4o pricing (~$2.50 per million input tokens, $10 per million output tokens), 1,000 interactions per day costs roughly £150-300/month. That sounds reasonable until you consider that a dedicated GPU instance running an open-source model of comparable quality costs £50-100/month — and handles unlimited interactions.</p>

<h3>3. Dependency Risk</h3>
<p>In January 2026, OpenAI had three separate outages that lasted more than 2 hours each. If your entire agent infrastructure runs through their API, those outages shut down your AI workforce completely. Self-hosting with redundancy means you control your uptime.</p>

<h2>The Google Cloud Self-Hosting Stack</h2>

<p>Our self-hosting architecture is built entirely on Google Cloud Platform, and it's designed for reliability, cost-efficiency, and operational simplicity:</p>

<h3>The Components</h3>

<h4>1. OpenClaw on Cloud Run</h4>
<p>The agent orchestration layer runs on Cloud Run — Google's serverless container platform. This means:</p>
<ul>
<li>No servers to manage — Google handles scaling, patching, and infrastructure</li>
<li>Scale to zero — if no one's talking to your agent at 3am, you're paying nothing</li>
<li>Scale to thousands — if you get a traffic spike, Cloud Run auto-scales in milliseconds</li>
<li>Pay per request — you're billed for actual compute, not idle capacity</li>
</ul>

<h4>2. Gemini API via Vertex AI</h4>
<p>While we self-host the orchestration layer, we use Google's Gemini models through Vertex AI for the LLM inference. Why? Because running your own LLM requires expensive GPU instances (A100s at minimum), and Google's Vertex AI pricing is competitive enough that self-hosting the model itself doesn't make financial sense for most workloads.</p>

<p>The key: your data stays within Google Cloud. It never leaves the GCP boundary. Vertex AI's data handling policies are GDPR-compliant, and with VPC Service Controls, you can ensure your agent's inference requests never traverse the public internet.</p>

<h4>3. Firestore for Memory</h4>
<p>Agent memory — conversation history, learned preferences, accumulated knowledge — lives in Firestore. It's serverless, automatically scales, and costs fractions of a penny per operation. For a typical agent deployment handling 500 conversations per day, the Firestore bill is under £5/month.</p>

<h4>4. Secret Manager for Credentials</h4>
<p>API keys, channel tokens (WhatsApp, Slack, Telegram), database credentials — all stored in Google Secret Manager. Never hardcoded, never in environment variables, never in config files. Rotated regularly. Audited continuously.</p>

<h4>5. Cloud Monitoring + Logging</h4>
<p>Every agent action is logged. Every decision is traceable. If an agent sends an unexpected message to a customer, we can reconstruct exactly what happened, what data informed the decision, and why. This observability isn't optional — it's essential for trust, debugging, and compliance.</p>

<h2>The Monthly Bill: Real Numbers</h2>

<p>Here's what our typical SME deployment costs per month:</p>

<table>
<thead>
<tr><th>Component</th><th>Monthly Cost</th><th>Notes</th></tr>
</thead>
<tbody>
<tr><td>Cloud Run (OpenClaw)</td><td>£8-25</td><td>Scales to zero overnight/weekends</td></tr>
<tr><td>Vertex AI (Gemini)</td><td>£15-40</td><td>Depends on interaction volume</td></tr>
<tr><td>Firestore</td><td>£2-5</td><td>Agent memory and sessions</td></tr>
<tr><td>Secret Manager</td><td>£0.50</td><td>Near-zero cost</td></tr>
<tr><td>Cloud Monitoring</td><td>£0-5</td><td>Free tier covers most SMEs</td></tr>
<tr><td><strong>Total</strong></td><td><strong>£25-75</strong></td><td><strong>For a 24/7 AI agent workforce</strong></td></tr>
</tbody>
</table>

<p>Compare that to managed alternatives:</p>
<ul>
<li>ChatGPT Teams: £20/user/month (and you still need to build the agent logic yourself)</li>
<li>Custom OpenAI API integration: £150-300/month (for comparable interaction volume)</li>
<li>Enterprise AI platforms: £500-2,000/month (Intercom Fin, Zendesk AI, etc.)</li>
</ul>

<p>Self-hosting with OpenClaw on GCP is 3-10x cheaper than managed alternatives at SME scale. And you get more control, better privacy, and no vendor lock-in.</p>

<h2>The Operational Reality</h2>

<p>Self-hosting sounds like it requires a dedicated DevOps team. With modern cloud infrastructure, it doesn't. Our deployments typically require:</p>

<ul>
<li><strong>Initial setup:</strong> 1-2 days (including channel configuration and agent tuning)</li>
<li><strong>Ongoing maintenance:</strong> 1-2 hours per month (mostly reviewing logs and tuning agent behaviour)</li>
<li><strong>Updates:</strong> Pull the latest OpenClaw image, redeploy to Cloud Run. Five minutes.</li>
</ul>

<p>The infrastructure is boring. That's the point. Boring infrastructure lets you focus on what matters: the agent intelligence, the business logic, the customer experience. Not the servers.</p>

<p>Self-hosting AI isn't about being a technology purist. It's about cost, control, and compliance. For UK SMEs processing customer data through AI agents, it's increasingly the only responsible choice. And with OpenClaw on Google Cloud, it's never been easier.</p>`;
