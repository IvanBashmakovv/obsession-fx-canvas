# Obsession FX — Restructure & Trust Rebuild

Keep the existing dark premium identity (black base, neon lime accent, subtle purple glow, condensed typography, animated background, card UI). Only restructure sections, rewrite copy, strengthen trust signals, and tighten the conversion funnel.

## Scope

Rewrite content + reorder sections across the existing component library. No new design language, no framework changes, no backend. English copy first; Slovak strings reuse the existing `LanguageContext` `t()` pattern where they already exist (new strings: English only for now, SK can be added later).

## Section order (Index.tsx)

```
TickerBar
Navigation
HeroSection              (rewrite copy + trust line + dual CTA)
CertificateTicker        (keep, 1x only — remove the duplicate)
StatsStrip               (rewrite as "Built for traders tired of guessing")
ProblemSection           (NEW — 4 cards: no strategy / weak risk / emotional / no feedback)
SolutionSection          (NEW — 4 cards: learn / risk / execute / mentor)
MissionSection           (rewrite to "Built by traders, not marketers" + quote)
MentorsSection           (humanize: roles, specialization tags, photo placeholders)
BecomeAMentorSection     (keep)
EdgeSection              (NEW — 4 differentiators)
ProgramSection           (restructure into 4 modules w/ topic chips)
StrategiesSection        (rewrite 4 models w/ "best for" lines)
HowItWorksSection        (NEW — 4-step timeline)
ResultsSection / Reviews (rewrite reviews, add verified badges + 5.0 rating)
FormatsSection → Pricing (restructure: Education 299€ active, Education Pro sold-out/waitlist)
SafetySection            (NEW — 4 reassurance cards before final CTA)
FAQSection               (replace with 8 new Q&A)
FinalCTASection          (NEW — "Stop guessing. Start executing.")
ContactSection           (rewrite form labels + dropdown + contact card)
FooterSection            (rewrite columns + risk disclaimer)
```

## New components to create

- `src/components/ProblemSection.tsx`
- `src/components/SolutionSection.tsx`
- `src/components/EdgeSection.tsx`
- `src/components/HowItWorksSection.tsx`
- `src/components/SafetySection.tsx`
- `src/components/FinalCTASection.tsx`

All built with the existing token system (lime `#D4F000`, surface `#161618`, base `#0E0E0F`, text `#F0EDE6`, purple `#6B5FD4`), `font-heading` / `font-body` / `font-label`, same card glassmorphism + `.reveal` animations used elsewhere.

## Components to rewrite (copy only, no visual overhaul)

- `HeroSection.tsx` — new headline already matches ("OBSESSION BEATS TALENT"), update subheadline, add trust line "82+ lessons · 20h+ · 4 models · Mentor support", keep countdown.
- `StatsStrip.tsx` — 4 stats: 82+ Lessons / 20H+ Video / 4 Strategies / Mentor Support, with new title.
- `MissionSection.tsx` — "Built by traders, not marketers" + large pull quote.
- `MentorsSection.tsx` — add role label, specialization tag chips, avatar placeholder area.
- `ProgramSection.tsx` — 4 modules (Foundation, Risk & Psychology, Execution Models, Review) with topic chips.
- `StrategiesSection.tsx` — 4 models numbered with "Best for:" lines.
- `ResultsSection.tsx` — verified-student review cards, 5.0 rating badge.
- `FormatsSection.tsx` — Education (299€, active, full feature list) + Education Pro (sold out, Join Waitlist).
- `FAQSection.tsx` — 8 new questions verbatim.
- `ContactSection.tsx` — Name / Email / Telegram-Instagram / Interest dropdown / Message; right card with contact channels (Telegram + Instagram + Email — note: memory rule forbids displaying direct email, so email row will be replaced with a "Contact via Telegram/Instagram" CTA per project constraints).
- `FooterSection.tsx` — 4 columns + risk disclaimer.
- `Navigation.tsx` — update link list to: Mission / Program / Strategies / Mentors / Reviews / Pricing / FAQ; CTA stays "Start Learning".

## Pages

- `src/pages/Index.tsx` — reorder per the new flow; remove the second `<CertificateTicker />`; insert the 6 new sections at the right positions with `<SectionDivider />` between major blocks.

## Constraints honored

- Memory: no direct email display → contact card surfaces Telegram + Instagram deep links instead of `support@obsessionfx.com`.
- Memory: no inflated profit claims → all copy stays education-focused; FAQ explicitly states no profit guarantee (already aligned).
- Existing color tokens, fonts, animation timings, 8px grid, tap targets preserved.
- i18n: new strings wrapped in `t('EN','SK')`; SK falls back to EN where translation is not yet provided.

## Out of scope

- No new fonts, no new accent colors, no logo changes.
- No backend, no payment integration, no real form submission (form stays UI-only as today).
- No Slovak rewrite of every new string in this pass — placeholders use English for both until translations are provided.
- Real mentor photos / Trustpilot screenshots — placeholders only.

## Verification

After edits: confirm build passes, scroll through preview at 1458px and mobile viewport, check section order matches spec, check no broken imports.

Approve to proceed and I'll implement.
