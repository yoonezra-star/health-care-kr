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

Score after the original-guide, calculator UI, and professional interpretation reinforcement: 99 / 100

- Content depth: 30 / 30
  - Every calculator page now has more than 2,000 visible article characters, topic-aware interpretation, FAQ, caution notes, and reference links.
  - A dedicated calculator use guide now explains input checks, result interpretation, record keeping, and when to seek professional advice.
  - Every calculator page now includes a category-specific visual guide, summary metric cards, interpretation table, and three-step result flow.
  - Eight high-value calculators now have manual deep-dive sections with formula context, example calculations, common misconceptions, and consultation triggers.
  - Ten core calculators now have professional interpretation panels with metric cards, realistic cases, comparison tables, checklists, and official-standard caution boxes.
  - Ten original health guide articles now support calculator use with comparison tables, checklists, official public sources, and related-calculator links.
  - Local build check: 10 original guides, minimum 1,927 visible characters, average 2,015 visible characters.
  - Remaining risk: imported calculator widgets still vary in visual detail, so future work should polish the highest-traffic calculators with custom tables or diagrams when search data is available.
- Trust and YMYL safety: 25 / 25
  - Diagnostic-sounding wording was softened, methodology and editorial standards are visible, and official resources are linked without implying partnership.
  - Privacy, disclaimer, contact, advertising, and editorial pages now explain operational scope, correction workflow, ad separation, and medical-safety limits in more detail.
  - A safety-copy layer now softens legacy imported phrases about life expectancy, treatment urgency, guaranteed effects, and overconfident health claims in public output.
  - Remaining risk: WELLBEEP is not a medical institution, so the site must keep avoiding diagnosis, treatment, prescription, or guaranteed outcome wording.
- Navigation and site structure: 20 / 20
  - Topic hubs, related calculators, policy pages, and a public reference hub are linked from home, footer, and calculator pages.
  - The calculator use guide is linked from the top navigation, footer, home page, source boxes, topic hubs, and policy pages.
  - The original guide hub is linked from top navigation, home, footer, calculator guide, and calculator pages.
  - Each topic hub now has a calculator comparison table so users can choose adjacent tools without returning to search.
  - Dedicated hubs now cover health checkup interpretation, health-metric glossary terms, record templates, and standards update history.
  - The health checkup hub now acts as a reading-order gateway with a four-step roadmap, lab-panel table, and links into BMI, WHtR, blood pressure, blood glucose, cholesterol, nutrition, and lifestyle calculators.
  - Remaining risk: Search Console indexing can still take time after new hub pages are deployed.
- Technical readiness: 20 / 20
  - AdSense script, google-adsense-account meta tag, ads.txt, sitemap, canonical links, and robots.txt are present.
  - Local build check: 73 public HTML pages, 43 calculator pages with contextual guide bars, 10 original guide pages, and all 73 HTML pages containing the AdSense script.
  - Local risk-phrase check: no public build output contains the reviewed high-risk legacy phrases such as life-expectancy guarantees, urgent treatment wording, or guaranteed-effect language.
- Policy and ad safety: 4 / 5
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

6. Visual information layer
   - Add category-specific visual guides, summary metric cards, interpretation tables, and three-step result flows to every calculator.
   - Add calculator comparison tables to topic hub pages.
   - Status: complete.

7. Deep-dive hub expansion
   - Add manual deep-dive sections to 8 high-value calculators: BMI, BMR/TDEE, blood pressure, blood glucose, LDL/HDL, abdominal obesity, protein, and activity calories.
   - Add a health checkup interpretation hub, health-metric glossary, standards update log, and health record template.
   - Add example calculation blocks to every calculator page.
   - Status: complete.

8. Original guide expansion
   - Add original guide pages that do not duplicate imported calculator text.
   - Give each guide a practical reading order, comparison table, checklist, official public sources, and related calculators.
   - Link the guide hub from home, top navigation, footer, calculator guide, and calculator pages.
   - Status: complete.

9. Legacy health-claim softening
   - Add a public-output safety-copy layer for older imported calculator titles, descriptions, tool cards, hub comparison tables, guide links, and FAQ schema.
   - Replace or soften risky phrases about life expectancy, guaranteed outcomes, urgent treatment, and overconfident health effects.
   - Status: complete.

10. Technical verification
   - Confirm build success.
   - Confirm every calculator has AdSense script, AdSense account meta tag, FAQ, sources, and related links.
   - Confirm every calculator has visual guide blocks and every topic hub has a comparison table.
   - Confirm every calculator has an example calculation and all 8 selected calculators have deep-dive blocks.
   - Confirm all original guides have article structure, comparison table, source box, related calculators, and sitemap entries.
   - Confirm reviewed high-risk legacy phrases do not remain in the public build output.
   - Confirm sitemap, canonical, robots, ads.txt, and policy pages are live after deployment.
   - Status: local build verification complete; final live check follows deployment.

11. Professional calculator reinforcement
   - Add professional interpretation profiles to 10 approval-critical calculators: BMI, BMR/TDEE, blood pressure, blood glucose, LDL/HDL, pack-year, protein, sodium, added sugar, and caffeine.
   - Add metric cards, realistic interpretation cases, comparison tables, action checklists, and official-standard caution boxes to these pages.
   - Expand the health checkup hub into a four-step reading flow with lab-panel connections and public-resource routing.
   - Status: complete locally; deployment verification follows.

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
- A worked example calculation or realistic record-keeping example.
- If the calculator is a core health-checkup topic, a manual deep-dive section with limitations and consultation triggers.
- If the topic needs more explanation than a calculator page can hold, an original guide with a table, checklist, official public sources, and links back to related calculators.
- No disease diagnosis, treatment promise, guaranteed lifespan, or urgent treatment language unless it is a general emergency warning.
