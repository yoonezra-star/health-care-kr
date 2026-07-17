# WELLBEEP AdSense approval plan

Last updated: 2026-07-18

## Goal

WELLBEEP should look less like a collection of thin calculator widgets and more like a maintained health-calculator reference site. The approval strategy is to make every calculator page useful even before a user interacts with the tool.

## Policy signals checked

- Google AdSense readiness guidance emphasizes unique, relevant content, clear navigation, and content that keeps users engaged.
- AdSense content issue guidance calls out insufficient content, content quality issues, navigation issues, and incomplete sites.
- AdSense connection guidance requires the ad code or meta tag inside the page head and ads.txt at the site root.

Official references:

- https://support.google.com/adsense/answer/7299563
- https://support.google.com/adsense/answer/81904
- https://support.google.com/adsense/answer/7584263
- https://support.google.com/adsense/answer/48182

## Current risk analysis

Before the calculator guide update:

- Total calculator pages: 43
- Pages below 1,500 visible characters when scripts/styles were removed: 43
- Pages without a clear deep-guide or FAQ block in the imported body: 38
- Pages with sensitive health topics such as blood pressure, blood sugar, pregnancy, smoking, cholesterol, or lifespan: 23

Primary risks:

- Calculator pages could be interpreted as thin utility pages.
- Some older imported copy used diagnostic-sounding wording such as "자가진단", "확진", and urgent treatment language.
- Sources and update standards were visible on policy pages, but not consistently on every calculator page.
- Internal links existed in side panels, but the article body did not consistently guide users to adjacent calculators.

## Current approval readiness score

Score after the latest guide and policy-page updates: 95 / 100

- Content depth: 29 / 30
  - Every calculator page now has more than 2,000 visible article characters, topic-aware interpretation, FAQ, caution notes, and reference links.
  - A dedicated calculator use guide now explains input checks, result interpretation, record keeping, and when to seek professional advice.
  - Remaining risk: imported calculator widgets still vary in visual and copy quality, so future work should polish the highest-traffic calculators manually.
- Trust and YMYL safety: 25 / 25
  - Diagnostic-sounding wording was softened, methodology and editorial standards are visible, and official resources are linked without implying partnership.
  - Privacy, disclaimer, contact, advertising, and editorial pages now explain operational scope, correction workflow, ad separation, and medical-safety limits in more detail.
  - Remaining risk: WELLBEEP is not a medical institution, so the site must keep avoiding diagnosis, treatment, prescription, or guaranteed outcome wording.
- Navigation and site structure: 20 / 20
  - Topic hubs, related calculators, policy pages, and a public reference hub are linked from home, footer, and calculator pages.
  - The calculator use guide is linked from the top navigation, footer, home page, source boxes, topic hubs, and policy pages.
  - Remaining risk: Search Console indexing can still take time after new hub pages are deployed.
- Technical readiness: 20 / 20
  - AdSense script, google-adsense-account meta tag, ads.txt, sitemap, canonical links, and robots.txt are present.
- Policy and ad safety: 1 / 5 buffer risk
  - Advertising policy now explicitly prohibits ad-click encouragement and confusing ad placement.
  - Final approval still depends on Google review, traffic quality, and account/site history.

## Step-by-step execution plan

1. Foundation audit
   - Compare pages against AdSense readiness signals.
   - Score pages by visible text length, FAQ presence, source presence, and sensitive-topic risk.
   - Status: complete.

2. Sitewide calculator guide
   - Add topic-aware sections to every calculator page: use case, interpretation, cautions, FAQ, source links, update/correction notice.
   - Add FAQPage, BreadcrumbList, and Article citation metadata.
   - Status: complete.

3. Sensitive health wording cleanup
   - Replace diagnostic or overconfident terms with safer reference-oriented wording.
   - Prioritize metabolic syndrome, blood pressure, diabetes, pregnancy/fertility, cholesterol, smoking, and lifespan pages.
   - Status: complete.

4. Internal linking and navigation strengthening
   - Add "related calculators" inside the article body, not only in the sidebar.
   - Keep policy pages discoverable from the footer and calculator side panel.
   - Add topic hub pages for body, nutrition, vitals, lifestyle, and general health calculators.
   - Add a public reference hub that links to official or professional resources without implying partnership.
   - Add a calculator methodology page that explains formula selection, interpretation limits, source use, and correction workflow.
   - Status: complete.

5. Policy and guide depth
   - Add a calculator use guide for input quality, result interpretation, record keeping, and professional-consultation triggers.
   - Expand advertising, privacy, disclaimer, editorial, contact, and about pages with operational details.
   - Status: complete.

6. Technical verification
   - Confirm build success.
   - Confirm every calculator has AdSense script, AdSense account meta tag, FAQ, sources, and related links.
   - Confirm sitemap, canonical, robots, ads.txt, and policy pages are live after deployment.
   - Status: pending final live check.

## Ongoing content rule

Every new calculator should include:

- A clear purpose and when to use it.
- Explanation of what the result means.
- Limitations and when to seek professional advice.
- At least three FAQs.
- Credible public sources or criteria.
- Related calculators for continued navigation.
- A link back to its topic hub and relevant public reference resources.
- A link to the calculator methodology page when the formula or interpretation could be misunderstood.
- No disease diagnosis, treatment promise, guaranteed lifespan, or urgent treatment language unless it is a general emergency warning.
