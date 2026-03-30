export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: ContentBlock[];
}

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "stat"; value: string; label: string }
  | { type: "quote"; text: string; source?: string };

export const posts: BlogPost[] = [
  {
    slug: "what-is-agentic-ai-and-why-should-your-small-business-care",
    title: "What Is Agentic AI — and Why Should Your Small Business Care?",
    description:
      "Agentic AI is the biggest shift in business technology since the smartphone. Here's what it actually means, why it matters for SMEs, and how to start using it without a six-figure budget.",
    date: "2026-03-30",
    readTime: "8 min read",
    tags: ["Agentic AI", "Small Business", "AI Strategy"],
    content: [
      {
        type: "paragraph",
        text: "If you've been anywhere near a tech headline in the last six months, you've probably seen the phrase \"agentic AI\" thrown around. Google, Salesforce, Microsoft — they're all racing to build it. Search interest has surged by over 5,000%. Gartner predicts that by the end of this year, 40% of enterprise applications will have task-specific AI agents baked in, up from just 5% in 2025.",
      },
      {
        type: "paragraph",
        text: "But most of the conversation is aimed at enterprise. Big budgets, big teams, big deployments. If you're running a small or medium-sized business in the UK, it can feel like this stuff isn't for you yet.",
      },
      {
        type: "paragraph",
        text: "It is. And if you're not paying attention, your competitors will be.",
      },
      {
        type: "heading",
        text: "So what actually is agentic AI?",
      },
      {
        type: "paragraph",
        text: "Let's cut through the jargon. Most AI tools you've used so far — ChatGPT, Copilot, Gemini — are reactive. You give them a prompt, they give you a response. You ask, they answer. That's useful, but it's still you doing the work. You're the one deciding what to ask, when to ask it, and what to do with the answer.",
      },
      {
        type: "paragraph",
        text: "Agentic AI flips that. Instead of waiting for your prompt, an AI agent is given a goal and works towards it autonomously. It can break a task into steps, use tools, make decisions, and adapt when things don't go to plan — all without you holding its hand.",
      },
      {
        type: "paragraph",
        text: "Think of it like this: a chatbot answers your question. An AI agent does the job.",
      },
      {
        type: "heading",
        text: "What does this look like in a real business?",
      },
      {
        type: "paragraph",
        text: "Forget the abstract. Here's what agentic AI looks like when it's actually running inside a small business:",
      },
      {
        type: "list",
        items: [
          "An agent monitors your inbox, spots overdue invoices, drafts a follow-up email, and sends it — checking your tone of voice matches previous messages.",
          "An agent watches your booking calendar, identifies gaps, and sends personalised outreach to leads who haven't booked yet.",
          "An agent scans your compliance documents every week, flags anything out of date, and drafts the updated version for your approval.",
          "An agent handles inbound customer enquiries, answers the ones it's confident about, and routes the rest to the right person with context attached.",
        ],
      },
      {
        type: "paragraph",
        text: "None of these require a massive tech team. None of them require a six-figure budget. They require someone who understands your business well enough to set the agent up properly — and then it runs.",
      },
      {
        type: "heading",
        text: "Why this matters more for small businesses than big ones",
      },
      {
        type: "paragraph",
        text: "Here's the thing most people get wrong: they assume AI is an enterprise play. But the data tells a completely different story.",
      },
      {
        type: "stat",
        value: "91%",
        label: "of SMBs using AI report increased revenue",
      },
      {
        type: "paragraph",
        text: "Research from the Wharton School found that smaller companies are actually winning the AI ROI race. Why? Because large enterprises get bogged down in procurement, compliance reviews, and internal politics. A small business can go from idea to live AI in weeks, not quarters.",
      },
      {
        type: "paragraph",
        text: "When you're a team of 5, 10, or 50 — every hour matters. If an AI agent saves your office manager 10 hours a week on admin, that's not a nice-to-have. That's a hire you don't need to make. That's profit.",
      },
      {
        type: "heading",
        text: "The chatbot-to-agent progression",
      },
      {
        type: "paragraph",
        text: "It helps to understand where agentic AI sits in the broader landscape. There are roughly four levels:",
      },
      {
        type: "list",
        items: [
          "Rule-based chatbots — the ones that ask you to press 1, 2, or 3. No intelligence, just decision trees. Most businesses have outgrown these.",
          "Generative AI chatbots — like ChatGPT. They understand natural language, can generate text, and handle open-ended questions. Useful, but still reactive.",
          "Copilots — AI embedded inside tools you already use (like Microsoft 365 Copilot). They assist you while you work — suggesting edits, summarising meetings, drafting emails. Still you driving, but with a very good passenger.",
          "Agentic AI — autonomous systems that take a goal and execute it. They plan, act, use tools, and iterate. This is the shift.",
        ],
      },
      {
        type: "paragraph",
        text: "Most small businesses are still somewhere between level 1 and level 2. The opportunity is to skip ahead — not by replacing everything, but by identifying one or two workflows where an agent could do the heavy lifting.",
      },
      {
        type: "heading",
        text: "The UK SME landscape right now",
      },
      {
        type: "paragraph",
        text: "The numbers paint a clear picture of where things are heading:",
      },
      {
        type: "list",
        items: [
          "35–39% of UK SMEs are already using AI tools in some form.",
          "Another 31% are actively considering it — meaning roughly 70% of the market is either in or looking in.",
          "A third of UK businesses plan to invest in AI this year.",
          "26% of UK SMEs want to bring in external AI consultants to help them get started.",
          "83% of growing SMBs have adopted AI, compared to just 55% of declining ones.",
        ],
      },
      {
        type: "paragraph",
        text: "That last stat is worth sitting with. The gap between businesses that are growing and businesses that aren't is increasingly an AI gap. This isn't about being on the cutting edge for the sake of it — it's about staying competitive.",
      },
      {
        type: "heading",
        text: "How to get started without overcomplicating it",
      },
      {
        type: "paragraph",
        text: "If you're reading this and thinking \"this sounds great but I wouldn't know where to start\" — that's normal. Most business owners feel that way. The trick is not to try and transform everything at once.",
      },
      {
        type: "paragraph",
        text: "Here's a practical starting point:",
      },
      {
        type: "list",
        items: [
          "Pick one workflow that eats up time every week. Invoice chasing, lead follow-ups, report writing, answering the same customer questions — something repetitive, predictable, and important.",
          "Measure the before. How many hours does it take? How many people are involved? What's the error rate?",
          "Build or commission the agent. This is where you either use an off-the-shelf tool or bring in someone who can build something bespoke.",
          "Measure the after. Did it save time? Did accuracy improve? Was the team happier?",
          "Scale from there. Once you've seen the ROI on one workflow, the second and third become much easier to justify.",
        ],
      },
      {
        type: "quote",
        text: "The era of 'playing with ChatGPT' is over. What matters now is picking one workflow, measuring the before and after, and scaling from there.",
      },
      {
        type: "heading",
        text: "What this means for your business",
      },
      {
        type: "paragraph",
        text: "Agentic AI isn't a trend. It's the next layer of how businesses operate. The companies that move now — even with small, focused projects — will have a compounding advantage over those that wait.",
      },
      {
        type: "paragraph",
        text: "You don't need a data science team. You don't need to understand large language models. You need to know what's eating your team's time and be open to letting an AI agent handle it.",
      },
      {
        type: "paragraph",
        text: "If you want to explore what agentic AI could look like in your business, we offer a free AI audit. No commitment, no sales pitch — just an honest look at where AI saves you the most time.",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
