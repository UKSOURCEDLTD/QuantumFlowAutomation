// Blog post content — Posts 20-21
// Multimodal AI and OpenClaw Automations Running Our Business

export const CONTENT_MULTIMODAL = `
<p class="lead">Most businesses think of AI as a text tool. You type a question, it types an answer. But the most capable AI models in 2026 — Gemini 3 in particular — are natively multimodal. They see images, hear audio, read documents, watch video, and process code — all in the same context window, all at the same time. This isn't a novelty feature. It's the unlock that makes AI agents genuinely useful for real-world business operations.</p>

<h2>What "Multimodal" Actually Means</h2>

<p>A multimodal AI model processes multiple types of information simultaneously:</p>

<ul>
<li><strong>Text:</strong> Emails, documents, chat messages, structured data</li>
<li><strong>Images:</strong> Photos, screenshots, diagrams, scanned documents, charts</li>
<li><strong>Audio:</strong> Voice messages, phone calls, meeting recordings, podcasts</li>
<li><strong>Video:</strong> Screen recordings, surveillance feeds, product demos</li>
<li><strong>Code:</strong> Source files, configuration, scripts, database schemas</li>
<li><strong>Structured data:</strong> Spreadsheets, JSON, CSV, database tables</li>
</ul>

<p>Crucially, it processes these <em>together</em> — not as separate inputs that get stitched together, but as a unified understanding. Show it a screenshot of a broken webpage alongside the source code, and it sees both, understands the relationship, and identifies the fix. Play it a voice message from a customer while showing it their order history, and it comprehends the full context.</p>

<h2>Why This Matters More Than You Think</h2>

<p>The real world isn't text. Your business runs on a chaotic mix of formats:</p>

<ul>
<li>Invoices arrive as PDFs, photos of paper documents, email attachments, and forwarded messages</li>
<li>Customer complaints come as emails, WhatsApp voice notes, phone calls, and angry social media posts with screenshots</li>
<li>Product issues are reported with photos, videos, and verbal descriptions</li>
<li>Meeting decisions live in recordings, rough notes, whiteboard photos, and follow-up emails</li>
</ul>

<p>A text-only AI agent can handle maybe 40% of this. A multimodal agent handles 95%. That gap — the 55% of business information that isn't clean text — is where most AI deployments fail. Multimodal closes it.</p>

<h2>Real Use Cases We've Deployed</h2>

<h3>1. Invoice Processing from Any Format</h3>
<p>A client's accounts team receives invoices in every format imaginable: typed PDFs, handwritten notes photographed on a phone, email-embedded tables, and scanned faxes (yes, faxes still exist in some industries). Our agent reads all of them. It doesn't matter if the invoice is a crisp PDF or a blurry phone photo of a handwritten receipt — Gemini 3's vision capabilities extract the supplier name, amounts, dates, and line items with over 97% accuracy.</p>

<h3>2. Visual QA for E-Commerce</h3>
<p>For our Amazon business, we built an agent that reviews product listing images. It checks that the main image meets Amazon's requirements (white background, product fills 85%+ of frame, no text overlays), compares lifestyle images against brand guidelines, and flags any images that might trigger a listing violation. It processes 50+ images in under a minute — work that used to take someone 30 minutes per listing.</p>

<h3>3. Meeting Intelligence</h3>
<p>Client meetings generate recordings. Our agent takes the recording, transcribes it, identifies action items, extracts key decisions, creates tasks in our project management system, and sends a summary to all attendees — all within 5 minutes of the meeting ending. But here's the multimodal part: when someone shares their screen during the meeting, the agent also captures and processes the visual content. If someone shows a mockup, the agent links it to the relevant action item. If someone shows a spreadsheet, the agent extracts the data points discussed.</p>

<h3>4. Customer Support with Context</h3>
<p>A customer sends a WhatsApp message: "This doesn't look right" with a photo of a damaged product. The agent sees the photo, identifies the product from its visual appearance, pulls up the order history, assesses the damage severity from the image, and drafts a response offering a replacement — all before a human touches it. Without multimodal, this interaction requires a human to look at the photo. With it, the agent handles the entire flow.</p>

<h3>5. Document Understanding</h3>
<p>Contracts, proposals, reports — business documents aren't just text. They have tables, headers, signatures, watermarks, charts, and formatting that carries meaning. Multimodal AI reads documents the way humans do — understanding layout, hierarchy, and visual emphasis. It can compare two versions of a contract and identify changes, including changes to tables, charts, and diagrams that text-based diff tools miss entirely.</p>

<h2>The Technical Requirements</h2>

<p>Not all AI models are equally multimodal. Here's how the major models compare for business multimodal use cases:</p>

<table>
<thead>
<tr><th>Capability</th><th>Gemini 3 Pro</th><th>Claude Opus 4.5</th><th>GPT-4o</th></tr>
</thead>
<tbody>
<tr><td>Image understanding</td><td>Excellent</td><td>Excellent</td><td>Good</td></tr>
<tr><td>Document/PDF processing</td><td>Excellent</td><td>Good</td><td>Good</td></tr>
<tr><td>Audio processing</td><td>Native</td><td>Via transcription</td><td>Native</td></tr>
<tr><td>Video understanding</td><td>Native</td><td>Frame extraction</td><td>Limited</td></tr>
<tr><td>Mixed-format context</td><td>Best in class</td><td>Good</td><td>Good</td></tr>
<tr><td>Context window for media</td><td>2M tokens</td><td>200K tokens</td><td>128K tokens</td></tr>
</tbody>
</table>

<p>Gemini 3's advantage isn't just in individual modalities — it's in the context window. A 2-million-token context window means you can feed it an hour-long meeting recording, fifty product images, and a 200-page contract <em>simultaneously</em> and it maintains coherence across all of them. No other model comes close to this capacity.</p>

<h2>Getting Started with Multimodal Agents</h2>

<p>If your current AI deployment is text-only, here's how to add multimodal capabilities:</p>

<ol>
<li><strong>Audit your information formats.</strong> What types of data flow through your business? Where do images, audio, and documents appear in your workflows?</li>
<li><strong>Identify the format gap.</strong> Which tasks currently require a human specifically because they involve non-text information?</li>
<li><strong>Start with documents.</strong> PDF and image processing is the most mature multimodal capability. Invoice processing, document analysis, and form extraction are reliable first projects.</li>
<li><strong>Add voice gradually.</strong> WhatsApp voice notes, meeting recordings, and phone call summaries — add audio processing once document handling is proven.</li>
<li><strong>Build toward video.</strong> Video understanding is the most compute-intensive but also the most impactful for specific use cases like quality control and training.</li>
</ol>

<p>The businesses that treat AI as a text tool are using 40% of its capability. Multimodal doesn't just add features — it fundamentally expands what an AI agent can do for your business. Your operational data is multimodal. Your AI should be too.</p>`;

export const CONTENT_SEVEN_AUTOMATIONS = `
<p class="lead">Theory is cheap. Everyone can talk about what AI agents could do. Here are seven specific automations running in our business through OpenClaw right now — what they do, how they're configured, and exactly how much time and money they save. No hypotheticals. Just production systems working 24/7.</p>

<h2>1. The Morning Briefing Agent</h2>

<h3>What it does</h3>
<p>Every weekday at 6:30 AM, an agent pulls data from our email inbox, Amazon Seller Central, project management tool, and calendar. It compiles a structured briefing covering: new emails triaged by priority, yesterday's sales and revenue, tasks due today, and any alerts (low inventory, overdue invoices, system issues).</p>

<h3>How it's configured</h3>
<p>A cron job in OpenClaw triggers the agent. It has tool access to Gmail API, Amazon SP-API, our task management API, and Google Calendar. The output format is defined in the agent's system prompt — consistent structure every day so I can scan it in 30 seconds.</p>

<h3>Time saved</h3>
<p>45 minutes per day × 5 days = <strong>3.75 hours per week</strong>. That's the time I used to spend opening each system, checking notifications, and mentally compiling the morning picture.</p>

<hr>

<h2>2. The Email Triage Agent</h2>

<h3>What it does</h3>
<p>Monitors the business inbox every 10 minutes. Classifies each new email into one of five categories: Client Enquiry, Supplier Communication, Invoice, Newsletter/Promotional, or Spam. Client enquiries get an immediate acknowledgement response. Invoices get forwarded to the accounts queue with extracted details. Newsletters and spam get archived automatically.</p>

<h3>How it's configured</h3>
<p>Runs as a persistent agent with a 10-minute cron cycle. Tool access: Gmail API (read and send), Firestore (for logging). Guardrails: client enquiry responses are templated acknowledgements only — no substantive replies without human review. Invoices are never auto-processed, just queued.</p>

<h3>Time saved</h3>
<p>Inbox management dropped from 60+ minutes per day to 10 minutes of reviewing the agent's triage decisions. <strong>4+ hours per week</strong>.</p>

<hr>

<h2>3. The Inventory Monitor</h2>

<h3>What it does</h3>
<p>Checks inventory levels across our Amazon catalogue daily. Calculates days-of-stock-remaining using 30-day average velocity, adjusted for seasonal trends. When a product drops below the reorder threshold (calculated as supplier lead time + 20% buffer in days of velocity), it sends an alert with a full restock analysis: recommended quantity, estimated cost, projected revenue, and margin.</p>

<h3>How it's configured</h3>
<p>Daily cron at 8 AM. Tool access: Amazon SP-API (inventory and sales data), Firestore (historical velocity data), Telegram API (alert delivery). The restock formula is defined in the agent's instructions — not hardcoded — so we can adjust the buffer percentage or lead time assumptions by editing a markdown file.</p>

<h3>Money saved</h3>
<p>Before this agent, we stockout on at least one product every month. Average revenue lost per stockout event: £500-1,200. Since deployment (4 months): <strong>zero stockouts</strong>. Estimated savings: <strong>£3,000-5,000 in prevented lost revenue</strong>.</p>

<hr>

<h2>4. The Competitor Price Tracker</h2>

<h3>What it does</h3>
<p>Monitors competitor pricing for our key Amazon products every 6 hours. Compares against our current prices and alerts if a competitor drops below our price by more than 5%, or if we have pricing headroom (all competitors are 15%+ above us). Includes a weekly summary of pricing trends across the competitive landscape.</p>

<h3>How it's configured</h3>
<p>6-hourly cron. Tool access: Keepa API (competitor pricing data), Amazon SP-API (our pricing), Telegram API (alerts). The monitoring thresholds (5% below, 15% above) are configurable in the agent definition.</p>

<h3>Impact</h3>
<p>Caught a competitor undercutting on our best-selling product within 6 hours of the change — we adjusted pricing same-day and prevented an estimated £800 in lost sales over what would have been a week before we noticed. <strong>Pays for the entire OpenClaw infrastructure for a year in one save.</strong></p>

<hr>

<h2>5. The Client Reporting Agent</h2>

<h3>What it does</h3>
<p>For each active client with a deployed AI agent, generates a weekly performance report: total interactions handled, breakdown by channel (WhatsApp, Slack, email), escalation rate (% routed to humans), average response time, and top 5 query categories. Formats it as a professional email and sends it to the client every Monday morning.</p>

<h3>How it's configured</h3>
<p>Weekly cron (Monday 8 AM). Tool access: OpenClaw runtime API (agent metrics), Gmail API (sending), Firestore (client contact details and report history). Each client has a record in Firestore with their agent ID, preferred email, and any custom metrics they want tracked.</p>

<h3>Time saved</h3>
<p>Previously took 30-45 minutes per client per week to compile these reports manually. With 5 active clients: <strong>2.5-3.75 hours per week</strong>. And the reports are more thorough, more consistent, and never late.</p>

<hr>

<h2>6. The Content Distribution Agent</h2>

<h3>What it does</h3>
<p>When a new blog post is published, the agent generates platform-specific promotional content: a LinkedIn post (professional tone, 150-200 words), a Twitter/X thread (3-5 tweets, conversational tone), and a Telegram community message (brief, with link). It schedules these for optimal posting times based on historical engagement data.</p>

<h3>How it's configured</h3>
<p>Triggered by a webhook when the CMS publishes a new post. Tool access: CMS API (fetch post content), LinkedIn API, Twitter API, Telegram API, Firestore (engagement history and optimal timing data). The tone and format for each platform is defined in the agent's system prompt.</p>

<h3>Time saved</h3>
<p>Content distribution used to take 45-60 minutes per post (writing platform-specific versions, scheduling, cross-posting). Now: zero minutes. The agent handles it end-to-end within 2 minutes of publication. <strong>4+ hours per month</strong>.</p>

<hr>

<h2>7. The Proposal Draft Agent</h2>

<h3>What it does</h3>
<p>When a potential client fills out our contact form or has an initial discovery call, I provide a brief summary of their needs to Zeus. The agent generates a draft proposal tailored to their specific situation: relevant service packages, estimated timeline, pricing options, case studies from similar clients, and a personalised cover letter.</p>

<h3>How it's configured</h3>
<p>Triggered on demand via Telegram. Tool access: Firestore (proposal templates, case study library, pricing matrix), Gmail API (delivery). The proposal structure and pricing tiers are defined in a knowledge base the agent references — update the pricing once and every future proposal reflects it.</p>

<h3>Time saved</h3>
<p>Writing a custom proposal used to take 2-3 hours. Now: 10-15 minutes (mostly review and personal touches). With 3-4 proposals per month: <strong>8-10 hours per month</strong>.</p>

<hr>

<h2>The Total Picture</h2>

<table>
<thead>
<tr><th>Automation</th><th>Time Saved (Weekly)</th><th>Infrastructure Cost</th></tr>
</thead>
<tbody>
<tr><td>Morning Briefing</td><td>3.75 hours</td><td>~£2/month</td></tr>
<tr><td>Email Triage</td><td>4+ hours</td><td>~£5/month</td></tr>
<tr><td>Inventory Monitor</td><td>1 hour + prevented losses</td><td>~£3/month</td></tr>
<tr><td>Competitor Tracker</td><td>2 hours + revenue protection</td><td>~£4/month</td></tr>
<tr><td>Client Reporting</td><td>3 hours</td><td>~£3/month</td></tr>
<tr><td>Content Distribution</td><td>1 hour</td><td>~£2/month</td></tr>
<tr><td>Proposal Drafts</td><td>2.5 hours</td><td>~£2/month</td></tr>
<tr><td><strong>Total</strong></td><td><strong>17+ hours/week</strong></td><td><strong>~£21/month</strong></td></tr>
</tbody>
</table>

<p>Seventeen hours per week. That's more than two full working days recovered for £21 per month in infrastructure costs. Not theoretical savings. Not projected ROI. Actual, measured, production hours saved every single week.</p>

<p>This is why we're so bullish on OpenClaw and agent-first operations. The savings compound. Each automation we add makes the next one easier to build and the total value more obvious. And we're just getting started — there are at least another ten automations on our roadmap for Q2 2026.</p>

<p>The question isn't "should we automate this?" The question is "why haven't we automated this already?"</p>`;
