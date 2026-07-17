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
   - Status: complete.

5. Technical verification
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
- No disease diagnosis, treatment promise, guaranteed lifespan, or urgent treatment language unless it is a general emergency warning.
