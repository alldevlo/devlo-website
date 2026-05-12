# Lemlist Website Visitors Tracker

Date: 2026-05-12

## Purpose

The public site loads the Lemlist Website Visitors tracker so the devlo
watchlist can identify companies visiting `devlo.ch` and feed signal-based
prioritization.

## Implementation

- Code path: `src/app/root-layout-shell.tsx`
- Script id: `lemlist-website-visitors`
- Default team id: `tea_Ps9QPwhyb4Cv8GrML`
- Disable switch: set `NEXT_PUBLIC_ENABLE_LEMLIST_VISITOR_TRACKING=false`
- Optional overrides:
  - `NEXT_PUBLIC_LEMLIST_VISITOR_TRACKING_KEY`
  - `NEXT_PUBLIC_LEMLIST_TEAM_ID`

## CFO Cost Profile

| Field | Value |
|---|---|
| Client/project | Internal devlo website, `devlo.ch` |
| Provider/service | Lemlist Website Visitors |
| Metered operations | Company identification from website visits |
| Unit economics | 20 Lemlist credits per identified company |
| Expected usage | Current Lemlist UI shows `0 / 4` companies identified today |
| Worst-case usage | Current UI cap implies 4 companies/day = 80 credits/day, 2,400 credits/month |
| Runtime guard | `NEXT_PUBLIC_ENABLE_LEMLIST_VISITOR_TRACKING=false` disables the tracker at build/runtime config level |
| Hard cap | Provider-side daily company-identification limit in Lemlist UI |
| Provider quota | Lemlist Website Visitors watchlist cap; do not raise without Charles approval |
| Notifications | No automation notification; this is a passive website tracker |
| Override | Charles must approve any increase above the current Lemlist UI cap |

## Verification

Read-only checks performed on 2026-05-12:

- Lemlist API `/api/team` authenticates for team `devlo (main)`.
- Live `devlo.ch` did not expose the tracker script before this change.
- Local rendered page now includes `https://app.lemlist.com/api/visitors/tracking`.
