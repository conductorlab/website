/**
 * Single editable content source for the Condra marketing page (R9).
 * All copy rendered on the page comes from this file — components never
 * hardcode strings. A non-developer rewrite of the messaging should only
 * ever need to touch this file.
 */

export interface NavLink {
  label: string
  href: string
}

export interface ThenNowCard {
  label: string
  body: string
}

export interface ChecklistItem {
  label: string
  status: string
}

export interface ChannelBar {
  droppedPct: number
  convertedPct: number
}

export interface SpecStep {
  label: string
  state: 'done' | 'current' | 'next'
}

export interface SurfaceItem {
  label: string
  active: boolean
}

export interface FeatureVisual {
  kind: 'readiness' | 'channel' | 'spec' | 'surfaces'
  panelLabel: string
  badge?: string
  checklist?: ChecklistItem[]
  legend?: { converted: string; dropped: string }
  bars?: ChannelBar[]
  steps?: SpecStep[]
  hub?: string
  surfaces?: SurfaceItem[]
}

export interface Feature {
  tag: string
  title: string
  body: string
  visual: FeatureVisual
}

export interface PlatformCard {
  name: string
  body: string
}

export interface TeamFact {
  label: string
  value: string
}

export const siteContent = {
  meta: {
    siteName: 'Condra',
    title: 'Condra — Get your store ready for agentic commerce',
    description:
      'AI assistants are starting to buy things for people. Condra gets your store ready — compliant, live on agent checkout, and easy to measure. Built for the merchants big platforms overlook.',
    ogImage: 'https://condra.dev/og-image.png',
  },

  announcement: {
    badge: 'New',
    text: 'Now onboarding our first merchants',
    href: '#contact',
  },

  header: {
    logo: 'Condra',
    nav: [
      { label: 'The shift', href: '#shift' },
      { label: 'Product', href: '#product' },
      { label: "Who it's for", href: '#who' },
    ] as NavLink[],
    themeToggleLabel: 'Toggle theme',
    cta: { label: 'Talk to us', href: '#contact' },
  },

  hero: {
    badge: 'Infrastructure for agentic commerce',
    heading: 'Get your store ready for the agents that will do the buying.',
    subhead:
      'AI assistants are starting to buy things for people. Condra gets your store ready: compliant, live on agent checkout, and easy to measure. Built for the merchants big platforms overlook.',
    cta: { label: 'Start a conversation', href: '#contact' },
    note: 'No product to sign up for yet — just a conversation.',
  },

  shift: {
    id: 'shift',
    eyebrow: '01 — The shift',
    heading: 'Shopping is moving from browsers to agents.',
    paragraphs: [
      "A sale used to mean a real person browsing your store. Now tools like Google's AI Mode and Gemini can do the whole job themselves — comparing products, confirming the order, and paying — without ever opening your website.",
      'When software is the buyer, the rules change. An agent needs product data it can read, a checkout it’s allowed to use, and a store that meets the technical spec. If your store isn’t set up this way, the agent won’t see it — it will just buy from a store that is.',
      'Not many purchases work this way yet. That’s exactly why now matters: getting ready is slow, hands-on work, and only the merchants who do it early will be ones agents can choose from later.',
    ],
    cards: [
      { label: 'Then', body: 'A person browses your store, decides, and checks out.' },
      { label: 'Now', body: 'An agent reads your product data and pays through an approved checkout.' },
      { label: 'Requirement', body: 'Be structured, compliant, and eligible — or be invisible to the agent.' },
    ] as ThenNowCard[],
  },

  product: {
    id: 'product',
    eyebrow: '02 — What Condra does',
    heading: 'The layer between your store and the agents.',
    intro: 'Four things, in plain terms — no checkout to rebuild, no protocol to learn.',
    features: [
      {
        tag: 'a1 — get live',
        title: 'Get compliant and go live',
        body: 'We check your catalog, checkout, and policies against what agents require, fix what’s missing, and get your store eligible to sell to them — without you rebuilding checkout or hiring for a spec that’s still moving.',
        visual: {
          kind: 'readiness',
          panelLabel: 'agent_readiness',
          badge: 'Eligible',
          checklist: [
            { label: 'Structured catalog exposed', status: 'pass' },
            { label: 'Checkout permitted for agents', status: 'pass' },
            { label: 'Return & refund policy mapped', status: 'pass' },
            { label: 'Spec version pinned', status: 'pass' },
          ],
        },
      },
      {
        tag: 'a2 — measure',
        title: 'See what the channel earns',
        body: 'Standard analytics can’t see agent traffic. Condra shows it clearly: what agents are buying, what’s converting, and where requests are failing before checkout finishes — so you can see the revenue you’re losing today.',
        visual: {
          kind: 'channel',
          panelLabel: 'agent_channel',
          legend: { converted: 'converted', dropped: 'dropped' },
          bars: [
            { droppedPct: 22, convertedPct: 40 },
            { droppedPct: 18, convertedPct: 55 },
            { droppedPct: 34, convertedPct: 44 },
            { droppedPct: 20, convertedPct: 70 },
            { droppedPct: 15, convertedPct: 62 },
            { droppedPct: 28, convertedPct: 80 },
          ],
        },
      },
      {
        tag: 'a3 — stay current',
        title: 'Stay compliant as the spec moves',
        body: 'The rules for agent payments are still being written, and they’ll keep changing. Condra tracks every update and keeps your integration current automatically, so staying eligible never becomes another engineering project for your team.',
        visual: {
          kind: 'spec',
          panelLabel: 'spec_version',
          badge: 'auto-synced',
          steps: [
            { label: 'v1', state: 'done' },
            { label: 'v2', state: 'done' },
            { label: 'v3 · live', state: 'current' },
            { label: 'next', state: 'next' },
          ],
        },
      },
      {
        tag: 'a4 — one integration',
        title: 'One integration, every surface',
        body: 'Google’s AI Mode, Gemini, and whatever comes next each work differently. You connect to Condra once — we handle the differences and add new surfaces as they launch, so you’re never maintaining a separate connection per agent.',
        visual: {
          kind: 'surfaces',
          panelLabel: 'surfaces',
          hub: 'Condra',
          surfaces: [
            { label: 'Google AI Mode', active: true },
            { label: 'Gemini', active: true },
            { label: '+ new surfaces', active: false },
          ],
        },
      },
    ] as Feature[],
  },

  who: {
    id: 'who',
    eyebrow: "03 — Who it's for",
    heading: "Mid-market merchants, and the agencies who run their stacks.",
    intro: 'Doing $1M–$50M in revenue, and not on a platform that gives you agent-readiness for free? This is for you — whatever stack you run.',
    platforms: [
      { name: 'WooCommerce', body: 'Plugin-based stores that need to get eligible without switching platforms.' },
      { name: 'Magento', body: 'Complex catalogs and checkout flows, made readable to agents.' },
      { name: 'Headless', body: 'Custom front ends where product data and checkout live apart — we connect them for agents.' },
      { name: 'Custom', body: 'One-off systems that need a practical path forward, not a rebuild.' },
    ] as PlatformCard[],
    agencyCallout: {
      title: 'Agencies & systems integrators',
      body: 'Offer agent-readiness to your clients without building or maintaining the compliance layer yourself. One integration, deployed across every store you manage.',
    },
  },

  founder: {
    eyebrow: "04 — Who's building it",
    heading: 'Built by people who work on real payments infrastructure.',
    paragraphs: [
      'Condra is built by people who ran checkout at scale inside a major retailer, and now build the infrastructure for agent-driven payments.',
      'That combination matters. Agent-readiness sits where real payments meet a spec that’s still being written. We’ve spent our careers on the first, and we’re building the second — based on how checkout actually behaves, not on a whitepaper.',
    ],
    card: {
      title: 'The Condra team',
      subtitle: 'payments & agentic-commerce infrastructure',
      facts: [
        { label: 'Background', value: 'Production checkout & payments at a major retailer' },
        { label: 'Now building', value: 'Agent-driven commerce infrastructure' },
        { label: 'Focus', value: 'Compliance, reliability, measurement' },
        { label: 'Stage', value: 'Early — working directly with first merchants' },
      ] as TeamFact[],
    },
  },

  closingCta: {
    id: 'contact',
    heading: 'Start the conversation now, so agents can pick you later.',
    body: 'The market is early, and getting ready takes time. A short call is the fastest way to see where your store stands today — no pitch, no signup.',
    formCta: 'Start a conversation',
    emailCta: 'Or email us directly',
    formIntro: 'Tell us a little about your store — we’ll reply within a couple of business days.',
    successMessage: 'Thanks — we’ve got your note and will be in touch soon.',
    errorMessage: 'Something went wrong sending that. Try again, or email us directly.',
  },

  footer: {
    logo: 'Condra',
    tagline: 'Agentic-commerce readiness',
    talkToUs: { label: 'Talk to us', href: '#contact' },
    email: { label: 'Email', href: 'mailto:hello@condra.dev' },
  },

  contact: {
    email: 'hello@condra.dev',
  },
}

export type SiteContent = typeof siteContent
