CMG WEBSITE — UPDATED HOMEPAGE

Open index.html to preview. Upload the entire folder contents together to your existing static host; no build step is required. Google Fonts needs an internet connection; local serif and sans-serif fallbacks are provided.

HOMEPAGE FLOW
Hero → Pain-Point Cards → Core Consulting Notebook → This Week at CMG → CMG Difference → CMG Framework → Operational Transition → Connect With Our Team → Final CTA.

This Week at CMG is one section (#this-week), including the article preview, newsletter preview/read link, Weekly Audio feature, and integrated email signup. Audio is never a separate homepage section.

CHANGED FILES
- index.html: approved section order; standalone core notebook; unified weekly hub; screenshot-based CMG Difference; operational transition; contact and final CTA; working supporting-page links.
- script.js: notebook chapter changes, page-turn animation, relocated diagnostic navigation, accessible navigation state, audio configuration, and real newsletter submission handling. Original diagnostic copy, framework content, and simulator calculation are retained.
- README.txt: delivery and publishing notes.

ADDED FILES
- homepage.css: editorial serif typography matching the screenshots; charcoal, warm paper, off-white, blueprint blue, slate, and weathered gold palette; notebook styling; responsive layouts; focus and reduced-motion support. Original styles.css remains intact.
- consulting.html: eight consulting chapters and links to discovery/impact tools.
- diagnostics.html: original eight-situation story experience and recommendations, relocated off the homepage.
- business-impact.html: original interactive simulator and disclaimer, relocated off the homepage.
- insights.html: destinations for the existing article and newsletter previews. Full editions were not supplied and are clearly marked as coming soon.
- site-config.js: audio URL and newsletter endpoint settings.
- QA.txt: browser verification results.

PRESERVED
The original logo, brand colors, existing source CSS, twelve pain-point prompts, eight story situations, five-stage framework, simulator inputs/calculations, and useful weekly content remain. The notebook uses the five supplied framework stages (Discover, Align, Analyze, Realign, Execute) plus Leadership, Growth, and Technology & systems drawn from existing site navigation. This is an eight-chapter browsing experience, not a claim that the existing five-stage framework has eight stages.

CONTENT / CONNECTIONS TO COMPLETE BEFORE LAUNCH
The supplied ZIP contains no audio asset, full article, full newsletter, signup endpoint, or scheduling URL.
1. Replace the preview-only content in insights.html with your approved full article and newsletter. Update the title/excerpts in index.html each week.
2. Add your audio asset to the site and set audioUrl in site-config.js. The native audio player is then shown inside the weekly hub. An empty setting displays 'Audio edition coming soon.' No invented duration or fake play control is used.
3. Set newsletterEndpoint in site-config.js to your newsletter integration. It must accept a form-encoded POST with an email field, allow requests from your site, and return HTTP 2xx only when accepted. Configure subscription consent/confirmation with your provider. Keep private API keys on the server, never in this static config. Validate the live integration with your provider before launch.
4. The contact link uses Billy@cmgcolorado.com, the contact address supplied in the original README. Confirm that address before publication; it opens the visitor's email app.

When the newsletter endpoint is blank, no email is transmitted and the interface explains that signup is not yet available. It never displays the old fake 'SUBSCRIBED' result. The original poll recorded nothing and is omitted from the weekly hub rather than claiming to save votes.

PREVIEW AND ACCESSIBILITY
Layouts checked at 1440, 768, 390, and 320 pixels; supporting pages also checked at 390 and 320 pixels. Notebook chapters work with buttons and keyboard activation, selected chapters expose aria-pressed state, and motion respects the reduced-motion preference. Navigation supports Escape and visible keyboard focus.

The simulator is an illustrative model retained from the source, not a prediction or guaranteed result. The diagnostic remains a guided reflection, not a scored assessment.
