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
      "AI assistants are starting to buy on shoppers' behalf. Condra gets your store compliant, live on agent checkout, and measured — built for the merchants big platforms overlook.",
    ogImage: 'https://condra.dev/og-image.png',
  },

  announcement: {
    badge: 'New',
    text: 'Now onboarding the first cohort of merchants',
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
      "AI assistants are starting to buy on shoppers' behalf. Condra gets your store compliant, live on agent checkout, and measured — built for the merchants big platforms overlook.",
    cta: { label: 'Start a conversation', href: '#contact' },
    note: 'No product to sign up for yet — just a conversation.',
  },

  shift: {
    id: 'shift',
    eyebrow: '01 — The shift',
    heading: 'Shopping is moving from browsers to agents.',
    paragraphs: [
      "A purchase used to mean a person on your storefront. Now Google's AI Mode, Gemini, and others carry the whole task to payment — comparing, confirming, and checking out without ever loading your page.",
      'When the buyer is software, the rules change. Agents need machine-readable product data, a checkout they’re allowed to use, and a merchant that meets the spec. Stores that aren’t structured for this don’t show up — the agent just picks someone who is.',
      "Volume is still small today. That's the point: eligibility is slow, mechanical work, and the merchants who do it now are the ones agents can choose from later.",
    ],
    cards: [
      { label: 'Then', body: 'Human browses your storefront, evaluates, and checks out.' },
      { label: 'Now', body: 'An agent reads structured data and transacts through a permitted checkout.' },
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
        body: 'We map your catalog, checkout, and policies to what agent surfaces require, fix the gaps, and get your store eligible to transact — without you rebuilding checkout or hiring for a spec that’s still moving.',
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
        body: 'Agent traffic is invisible in standard analytics. Condra isolates it: what agents are buying, what’s converting, and — just as important — where requests are failing and revenue is leaking out before checkout completes.',
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
        body: 'The standards for agent-driven payments are still being written and will keep changing. Condra tracks them and updates your integration automatically, so staying eligible isn’t a recurring engineering project on your side.',
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
        body: 'Google’s AI Mode, Gemini, and whatever comes next each have their own requirements. You integrate Condra once; we handle the differences between surfaces and add new ones as they open, so you’re not maintaining a separate connection per agent.',
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
    intro: "Do $1M–$50M and not on a platform that hands you agent-readiness for free? This is for you — across the stacks merchants actually run.",
    platforms: [
      { name: 'WooCommerce', body: 'Plugin-based stores that need eligibility without a re-platform.' },
      { name: 'Magento', body: 'Complex catalogs and checkout flows, mapped to what agents read.' },
      { name: 'Headless', body: 'Custom front ends where structured data and checkout are decoupled.' },
      { name: 'Custom', body: 'Bespoke stacks that need a pragmatic path, not a rebuild.' },
    ] as PlatformCard[],
    agencyCallout: {
      title: 'Agencies & systems integrators',
      body: 'Offer agent-readiness to your merchant clients without building and maintaining the compliance layer yourself. One integration you can deploy across every store you manage.',
    },
  },

  founder: {
    eyebrow: "04 — Who's building it",
    heading: 'Built by people who work on real payments infrastructure.',
    paragraphs: [
      'Condra is built by people who’ve run checkout at scale inside a major retailer — and now build the plumbing for agent-driven payments.',
      'That combination is the point. Agent-readiness sits where production payments meet an emerging spec. We’ve spent careers on the first and we’re building on the second — grounded in how checkout really behaves, not a whitepaper.',
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
    body: 'The market is early and eligibility takes time. A short call is the fastest way to see where your store stands — no pitch, no signup.',
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
