# NAKSHI AI — Complete Website Design Specification
### For Developer Handoff · Built with ui-ux-pro-max-skill
> Repo: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill

---

## DESIGN DIRECTOR'S NOTE

After reviewing all reference images, two design directions were available:
- **Dark editorial** (HueRing style — chocolate + warm accent)
- **Light luxury** (Celestique/WaltersFaith style — cream + warm gold)

**Decision: Light Luxury with Dark Contrast Sections.**

Reason: Nakshi AI's product is *jewelry on a model* — the output images are the hero. Dark backgrounds fight the product. Warm cream backgrounds *frame* it. The brand is "Warm · Sharp · Proud · Modern" — that is a light, warm palette with confident typography, not a moody editorial dark site. Dark sections will be used selectively for urgency/CTA contrast.

The reference images that won: **Image 1 (Celestique)** for layout feel, **Image 4 (Adore)** for product grid approach, **Image 5 (WaltersFaith)** for typography hierarchy and spacing.

Color palette that won: **Palette 8 (Desert/Sandstone)** as the base, with **Palette 9 (Espresso)** darks, and the existing brand gold `#B8860B` as the accent.

---

## 1. DESIGN PHILOSOPHY

### Core Aesthetic Direction
**"Luxury Artisan Tech"**

The visual language sits at the intersection of three worlds:
- **Indian jewellery heritage** — warm golds, earthy tones, craftsmanship pride
- **Modern luxury editorial** — generous whitespace, large serif headlines, restrained layout
- **Tech product confidence** — clean UI, precise type scale, functional clarity

The site should feel like what happens when a Tanishq-level brand sensibility meets a modern SaaS product. Not a traditional jewellery store. Not a generic SaaS landing page. Something new.

### The One Thing People Remember
When someone closes the tab, they remember: *"That warm, beautiful site where jewelry magically appeared on models."*

---

## 2. COLOR SYSTEM

### Final Palette (Synthesized from reference images 6–9)

```
────────────────────────────────────────────────────────
BACKGROUND COLORS
────────────────────────────────────────────────────────
--color-bg-primary:     #FAF9F6   /* Feather White — main page bg */
--color-bg-secondary:   #F4F1EA   /* Porcelain Mist — section alt bg */
--color-bg-tertiary:    #E6DAC8   /* Creamy — card backgrounds */
--color-bg-dark:        #3E2522   /* Espresso Dark — CTA sections */
--color-bg-dark-alt:    #291C0E   /* Near Black — footer, deep sections */

────────────────────────────────────────────────────────
BRAND / ACCENT COLORS
────────────────────────────────────────────────────────
--color-gold:           #B8860B   /* Brand Gold — primary CTA, highlights */
--color-gold-light:     #D3A376   /* Warm Tan — hover states, icons */
--color-gold-muted:     #CBB9A4   /* Soft Sandstone — borders, dividers */
--color-ruby:           #8B1A1A   /* Deep Ruby — error states, accents */

────────────────────────────────────────────────────────
TEXT COLORS
────────────────────────────────────────────────────────
--color-text-primary:   #291C0E   /* Near Black — headlines */
--color-text-secondary: #6E473B   /* Dark Brown — body copy */
--color-text-muted:     #A78D78   /* Warm Taupe — captions, metadata */
--color-text-inverse:   #FFF2DF   /* Warm Cream — text on dark bg */
--color-text-gold:      #B8860B   /* Gold — labels, highlights */

────────────────────────────────────────────────────────
UI COLORS
────────────────────────────────────────────────────────
--color-border:         #D7C9B8   /* Khaki — all borders */
--color-border-light:   #E6DAC8   /* Creamy — subtle dividers */
--color-shadow:         rgba(41, 28, 14, 0.08)   /* Warm shadow */
--color-shadow-strong:  rgba(41, 28, 14, 0.20)
--color-success:        #4A7C59   /* Muted green — confirmations */
--color-overlay:        rgba(41, 28, 14, 0.60)   /* Dark overlay on images */
```

### Color Usage Rules

| Situation | Color To Use |
|---|---|
| Page backgrounds | `--color-bg-primary` (#FAF9F6) |
| Alternate section backgrounds | `--color-bg-secondary` (#F4F1EA) |
| Card / component backgrounds | `--color-bg-tertiary` (#E6DAC8) |
| All CTA buttons | `--color-gold` (#B8860B) with white text |
| CTA button hover | `--color-bg-dark` (#3E2522) background |
| Headlines | `--color-text-primary` (#291C0E) |
| Body copy | `--color-text-secondary` (#6E473B) |
| Captions, metadata | `--color-text-muted` (#A78D78) |
| All borders and lines | `--color-border` (#D7C9B8) |
| Dark hero / CTA sections | `--color-bg-dark` with `--color-text-inverse` |
| Countdown timer, urgency | `--color-bg-dark` (#3E2522) |
| Success / confirmation | `--color-success` |

### DO NOT USE
- Pure `#000000` black anywhere
- Pure `#FFFFFF` white anywhere
- Blue, purple, or green as primary accents
- Grey tones (use warm equivalents instead)

---

## 3. TYPOGRAPHY SYSTEM

### Font Pairing Decision

```
DISPLAY / HEADLINES:  "Cormorant Garamond"
  — Elegant serif with high contrast strokes
  — Feels like luxury editorial (Vogue, Tanishq)
  — Works beautifully at large sizes
  — Google Fonts: https://fonts.google.com/specimen/Cormorant+Garamond

BODY / UI:  "DM Sans"
  — Clean, modern, slightly humanist
  — High legibility at small sizes
  — Pairs well with Cormorant without competing
  — Google Fonts: https://fonts.google.com/specimen/DM+Sans

ACCENT / HINDI TEXT:  "Noto Serif Devanagari"
  — For नक्शी logo text and Hindi phrases
  — Google Fonts: https://fonts.google.com/noto/specimen/Noto+Serif+Devanagari
```

### Import Code
```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=Noto+Serif+Devanagari:wght@400;600&display=swap');
```

### Type Scale

```
────────────────────────────────────────────────────────
DISPLAY SIZES (Cormorant Garamond)
────────────────────────────────────────────────────────
--text-display-xl:  clamp(64px, 8vw, 96px)   /* Hero main headline */
--text-display-lg:  clamp(48px, 6vw, 72px)   /* Section hero headlines */
--text-display-md:  clamp(36px, 4vw, 52px)   /* Sub-section headlines */
--text-display-sm:  clamp(28px, 3vw, 40px)   /* Card titles, large labels */

────────────────────────────────────────────────────────
BODY SIZES (DM Sans)
────────────────────────────────────────────────────────
--text-xl:   24px / 1.6    /* Large body, intro paragraphs */
--text-lg:   20px / 1.6    /* Feature descriptions */
--text-md:   17px / 1.7    /* Standard body copy */
--text-sm:   15px / 1.6    /* Secondary copy, card text */
--text-xs:   13px / 1.5    /* Captions, metadata, labels */
--text-2xs:  11px / 1.4    /* Fine print, legal text */

────────────────────────────────────────────────────────
FONT WEIGHTS
────────────────────────────────────────────────────────
Cormorant: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
DM Sans:   300 (light), 400 (regular), 500 (medium), 600 (semibold)
```

### Typography Rules

```
Headlines (h1–h3):    Cormorant Garamond, weight 500–600, color #291C0E
Sub-headlines (h4):   DM Sans, weight 600, color #291C0E
Section labels:       DM Sans, weight 500, UPPERCASE, letter-spacing: 0.15em, 
                      color #B8860B, font-size: 12–13px
Body paragraphs:      DM Sans, weight 400, color #6E473B
UI text (buttons):    DM Sans, weight 500–600
Captions/meta:        DM Sans, weight 400, color #A78D78, font-size: 13–14px
Hindi text (नक्शी):  Noto Serif Devanagari, weight 400
```

---

## 4. SPACING & LAYOUT SYSTEM

### Base Unit
```
--space-unit: 8px

--space-1:   4px    /* 0.5×  */
--space-2:   8px    /* 1×    */
--space-3:   12px   /* 1.5×  */
--space-4:   16px   /* 2×    */
--space-5:   24px   /* 3×    */
--space-6:   32px   /* 4×    */
--space-8:   48px   /* 6×    */
--space-10:  64px   /* 8×    */
--space-12:  80px   /* 10×   */
--space-16:  96px   /* 12×   */
--space-20:  120px  /* 15×   */
--space-24:  160px  /* 20×   */
```

### Container Widths
```
--container-max:    1280px   /* Maximum content width */
--container-text:   760px    /* Text-heavy sections */
--container-narrow: 600px    /* Forms, centered content */
--container-wide:   1440px   /* Full-bleed sections */

Side padding (mobile):  24px
Side padding (tablet):  40px
Side padding (desktop): 60px
```

### Section Spacing
```
Section padding top/bottom (desktop): 100px–160px
Section padding top/bottom (mobile):  60px–80px
Between elements inside section: 24px–48px
```

### Grid System
```
Main grid:     12 columns, 24px gap
Feature cards: 3 columns (desktop), 2 (tablet), 1 (mobile)
Pricing cards: 4 columns (desktop), 2 (tablet), 1 (mobile)
```

---

## 5. COMPONENT DESIGN SPECIFICATIONS

### 5.1 Navigation

```
HEIGHT:           72px desktop · 60px mobile
BACKGROUND:       #FAF9F6 with backdrop-filter: blur(12px)
                  When scrolled 80px: background opacity increases to 0.95
BORDER-BOTTOM:    1px solid #D7C9B8 (appears on scroll)
POSITION:         sticky top: 0, z-index: 100

Logo:
  - "NAKSHI AI" in Cormorant Garamond, weight 600, 22px
  - नक्शी below in Noto Serif, 12px, color #B8860B
  - Letter spacing on NAKSHI: 0.1em

Nav links (desktop):
  - DM Sans, weight 400, 15px
  - Color: #6E473B
  - Hover: color #291C0E, underline animation slides in from left
  - Active: color #B8860B

CTA Button in Nav:
  - "Join Waitlist →"
  - Background: #B8860B, color: white
  - Padding: 10px 22px
  - Border-radius: 2px (NOT rounded — slightly sharp feels luxury)
  - Hover: background #291C0E
  - Font: DM Sans weight 500, 14px

Mobile: Hamburger → full-screen overlay menu
  - Background: #291C0E
  - Links in Cormorant Garamond, 36px, color #FFF2DF
  - Close button top-right
```

### 5.2 Hero Section

```
LAYOUT:           Split — Left text (55%) + Right image (45%)
                  Image floats slightly overlapping the viewport edge
BACKGROUND:       #FAF9F6
MIN-HEIGHT:       90vh desktop · auto mobile

Pre-headline label:
  - "India's First AI Jewelry Photography Bot"
  - DM Sans, 12px, uppercase, letter-spacing: 0.2em
  - Color: #B8860B
  - Small decorative line (40px) to left of text

Main headline:
  - "Your Jewelry." → weight 300, italic
  - "On a Model." → weight 600, normal
  - "In 60 Seconds." → weight 300, italic
  - font-size: clamp(52px, 7vw, 88px)
  - Color: #291C0E
  - Line height: 1.1

Sub-copy:
  - Max-width: 480px
  - DM Sans, 17px, color #6E473B
  - Margin-top: 24px

CTA Area:
  - Primary button: "Join the Waitlist — It's Free →"
    Background #B8860B, white text, padding 16px 32px, border-radius 2px
    Hover: scale(1.02) + shadow
  - Trust line below: 13px, color #A78D78
    "🔒 No credit card required · 📱 WhatsApp only · ⚡ 60-second results"

Hero Image Treatment:
  - Jewelry-on-model result image (or placeholder collage of 3 stacked images)
  - Slight rotation: -3deg on outer image, 0deg on main
  - Box shadow: 0 24px 60px rgba(41,28,14,0.15)
  - Border-radius: 4px

Decoration:
  - Subtle geometric ornament (Rajasthani-inspired angular motif) top-right
  - Color: #D3A376, opacity: 0.3
  - Animated: slow rotation 60s infinite
```

### 5.3 Social Proof Bar

```
BACKGROUND:       #291C0E (dark — creates contrast after light hero)
PADDING:          20px 0
CONTENT:          Scrolling marquee of city names + jeweler count

Left static:      "[number] jewelers on the waitlist"  DM Sans 13px white/70%
Marquee items:    "● Jaipur  ● Surat  ● Mumbai  ● Delhi  ● Ahmedabad  ● Hyderabad 
                   ● Kolkata  ● Jaipur  ● Pune..."
Marquee speed:    30s linear infinite
Font:             DM Sans 13px, color: #D3A376 (gold)
Gap between items: 48px
```

### 5.4 Problem Section

```
BACKGROUND:       #F4F1EA (slightly darker than hero)
LAYOUT:           Centered, max-width 900px

Section label:    "THE PROBLEM" — gold, uppercase, small caps
Headline:         "Studio Shoots Are Killing Your Margins."
                  Cormorant Garamond, 52px, weight 600

Pain cards (3):
  Layout:         3 columns horizontal
  Card bg:        #FAF9F6
  Border:         1px solid #D7C9B8
  Border-radius:  4px
  Padding:        40px 32px
  Shadow:         0 4px 24px rgba(41,28,14,0.06)
  
  Icon area:      Large number (₹/⏱/😤) in Cormorant 64px, color #E6DAC8
  Title:          Cormorant Garamond 28px weight 600
  Body:           DM Sans 15px color #6E473B
  
  Hover state:    translateY(-4px), shadow increases
  Animation:      Fade-up on scroll, staggered 100ms each

Closing line:
  "Until now."
  Cormorant Garamond, italic, 36px, color #B8860B, centered
  Decorative em-dash lines either side
```

### 5.5 Feature Cards

```
BACKGROUND:       #FAF9F6
LAYOUT:           3-col grid with large section label

Feature card anatomy:
  Top:            Icon or small ornamental number (01, 02, 03...)
                  Color: #B8860B
  Title:          Cormorant Garamond 26px weight 600
  Body:           DM Sans 15px
  "Learn more":   DM Sans 13px, underline, color #B8860B
  
  Card padding:   40px
  Border-left:    2px solid #B8860B (on hover: animates in from bottom)
  
Scroll animation: Each card fades up sequentially on scroll entry
```

### 5.6 Comparison Table

```
BACKGROUND:       #291C0E (dark section)
TABLE STYLE:
  Header row:     Background #3E2522, text #D3A376 uppercase
  Body rows:      Alternating #291C0E / #3E2522 (5% difference)
  Nakshi AI col:  Background #B8860B/15%, gold border-left 2px
  Text:           DM Sans, color #FFF2DF/80%
  Checkmarks:     ✓ in #B8860B · ✗ in #A78D78
  
  Mobile:         Horizontal scroll with sticky first column
```

### 5.7 Pricing Cards

```
BACKGROUND:       #F4F1EA
LAYOUT:           4-column for desktop, 2 for tablet, 1 stacked for mobile

Card anatomy:
  Name:           DM Sans, 12px uppercase, letter-spacing 0.15em, #B8860B
  Price:          Cormorant Garamond, 52px, weight 600, #291C0E
  Period:         "/month" DM Sans 16px, #A78D78
  Divider:        1px solid #D7C9B8, margin 24px 0
  Feature list:   DM Sans 14px, each with ✓ icon in #B8860B
  CTA button:     Full-width, padding 14px

Card states:
  Default:        Background #FAF9F6, border 1px solid #D7C9B8
  Popular (Growth): Background #FFF2DF, border 2px solid #B8860B
                    "★ Most Popular" badge — small pill, bg #B8860B, white text
                    Slight scale: 1.02, shadow stronger
  Hover:          shadow increases, subtle translateY(-2px)

Monthly/Annual toggle:
  Pill toggle, active state bg #291C0E, inactive text #A78D78
  Switching triggers price number counter animation
```

### 5.8 Countdown Timer

```
BACKGROUND:       #3E2522 (warm dark)
LAYOUT:           Centered, full-width section

Label:            "Launching In" — DM Sans, 12px uppercase, #D3A376
Timer blocks:     4 blocks (Days · Hours · Minutes · Seconds)
  Number:         Cormorant Garamond 72px weight 300, color #FFF2DF
  Unit label:     DM Sans 11px uppercase, color #A78D78
  Block bg:       #291C0E, border 1px solid #6E473B
  Block size:     100px × 100px desktop · 72px × 72px mobile
  Separator:      ":" in #B8860B, Cormorant 48px

Below timer:      Waitlist count — "847 jewelers already registered"
                  DM Sans 14px, color #D3A376
```

### 5.9 Waitlist Registration Form

```
BACKGROUND:       #FAF9F6
MAX-WIDTH:        560px, centered

Form inputs:
  Height:         52px
  Background:     #FFFFFF
  Border:         1px solid #D7C9B8
  Border-radius:  2px
  Focus:          border-color #B8860B, box-shadow 0 0 0 3px rgba(184,134,11,0.12)
  Font:           DM Sans 15px, color #291C0E
  Placeholder:    color #BEB5A9
  
  Label:          DM Sans 13px weight 500, color #6E473B, margin-bottom 8px
  
Checkboxes:
  Custom styled: 18px × 18px
  Checked: background #B8860B, white checkmark
  Unchecked: border 2px solid #D7C9B8

Submit button:
  Full-width, height 56px
  Background: #B8860B → gradient to #9A7008 on hover
  Font: DM Sans 16px weight 600, white
  Letter-spacing: 0.02em
  Border-radius: 2px
  Loading state: spinner replaces text
  Success state: "You're on the list! 🎉" with confetti burst

Privacy note:     DM Sans 12px, #A78D78, centered below button
```

### 5.10 Referral Section

```
BACKGROUND:       #E6DAC8 (warm, slightly different from other sections)
LAYOUT:           2-column — Steps (left) + Share templates (right)

Step circles:     40px diameter, background #B8860B, white number inside
                  Connected by dashed vertical line
Step text:        DM Sans 15px, color #6E473B

Earnings highlight box:
  Background: #291C0E
  Text: "Earn up to ₹2,500/month"
  Cormorant Garamond 32px, color #D3A376
  Padding: 32px 40px, border-radius 4px
```

### 5.11 Footer

```
BACKGROUND:       #291C0E
PADDING:          80px 0 40px

Logo area:        "NAKSHI AI" white + नक्शी in #D3A376
Tagline:          Italic Cormorant, 18px, #A78D78

4 columns:        Product · Company · Legal · Contact
Link color:       #BEB5A9
Link hover:       #D3A376 + slight translateX(4px)
Font:             DM Sans 14px

Divider:          1px solid #3E2522

Bottom bar:       "© 2025 Nakshi AI · Made with 🙏 for Indian jewelers"
                  DM Sans 12px, #6E473B
                  Right: WhatsApp + Instagram icons (SVG, white, 20px)
```

---

## 6. DESIGN PATTERN SELECTION

*From the uploaded pattern library (patterns-reference.csv)*

### Primary Pattern — Homepage
**Pattern 12: Waitlist / Coming Soon**

This is the correct primary pattern during the 15-day launch period.

```
Section order for the homepage:
1. ANNOUNCEMENT BANNER (countdown)
2. HERO with countdown timer integrated (Pattern 12)
3. PROBLEM STATEMENT (Problem intro)
4. SOLUTION / HOW IT WORKS (3-step)
5. FEATURES GRID (Pattern 1 — Features section)
6. BEFORE/AFTER (Pattern 21 — Transformation reveal)
7. COMPARISON TABLE (Pattern 6)
8. PRICING TEASER (Pattern 8 teaser cards)
9. REFERRAL TEASER
10. WAITLIST FORM (full registration — Pattern 12)
11. SOCIAL PROOF (counter + city marquee)
12. FOOTER
```

### Secondary Pattern — Pricing Page
**Pattern 8: Pricing Page + CTA**

```
1. Hero (value anchor — "Studio shoot vs Nakshi AI")
2. Monthly/Annual toggle
3. 4 pricing cards with comparison
4. Full comparison table
5. FAQ accordion
6. Final CTA + waitlist form
```

### Supporting Pattern — Features Page
**Pattern 3: Product Demo + Features** (without video — use static before/after images)

```
1. Hero
2. Feature deep-dive sections (alternating image + text layout)
3. Coming soon section
4. CTA
```

---

## 7. MOTION & ANIMATION SYSTEM

### Scroll Animations (all use Intersection Observer)

```javascript
// Base animation config
const ANIMATION_CONFIG = {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px'
}

// CSS classes to apply
.animate-fade-up {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.animate-fade-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

// Staggered children: add animation-delay via nth-child
// 0ms, 100ms, 200ms, 300ms
```

### Specific Animations

```
HERO ENTRANCE:
  1. Pre-headline label: fade-in, 0ms delay
  2. Main headline: words split, each word fades up, 50ms stagger
  3. Sub-copy: fade-up, 200ms delay
  4. CTA button: fade-up + slight scale from 0.95, 350ms delay
  5. Hero image: fade-in from right (translateX 40px), 400ms delay
  Duration: all 700ms ease-out

MARQUEE BAR:
  CSS animation: translateX(-50%) 30s linear infinite
  Pause on hover

COUNTDOWN TIMER:
  Numbers: flip animation on change (CSS 3D flip)
  CSS: rotateX(90deg) → rotateX(0deg) on update

PRICING CARD HOVER:
  transform: translateY(-4px)
  box-shadow increases
  transition: 250ms ease

FEATURE CARD HOVER:
  Border-left extends upward: height 0% → 100%
  transition: 300ms ease

CTA BUTTON:
  Default → hover: 
  background color transition 200ms
  transform: scale(1.02) 200ms

FORM SUCCESS CONFETTI:
  Canvas confetti burst (use canvas-confetti library)
  Colors: #B8860B, #D3A376, #FFF2DF, #291C0E

PAGE SCROLL PROGRESS:
  Thin gold line (#B8860B) at very top of viewport
  Grows from 0% to 100% width as user scrolls
```

### What NOT to Animate
```
- Do not animate text that users need to read quickly
- Do not use animation for core navigation
- Do not use bouncy/spring animations (not luxury)
- Do not auto-play any video without mute
- All animations: ease-out, never ease-in (ease-in feels slow to start)
```

---

## 8. ICONOGRAPHY & DECORATIVE ELEMENTS

### Icons
```
Library:   Lucide Icons (https://lucide.dev)
Size:      20px for UI icons · 24px for feature icons
Stroke:    1.5px
Color:     Match surrounding text color
           CTAs: white
           Features: #B8860B
```

### Decorative Elements

```
ORNAMENTAL DIVIDER:
  ——— ✦ ———
  Three dashes, diamond, three dashes
  Color: #B8860B
  Used between sections or below section labels

SECTION LABEL STYLE:
  ✦  SECTION NAME  ✦
  DM Sans 12px, uppercase, letter-spacing 0.2em
  Color: #B8860B
  Centered or left-aligned

BACKGROUND TEXTURE:
  Very subtle noise texture on hero bg
  opacity: 0.03
  CSS: background-image: url("data:image/svg+xml,...")
  Use sparingly — one or two sections only

GEOMETRIC ORNAMENT (Rajasthani-inspired):
  Simple angular pattern inspired by Kundan tile work
  SVG, very low opacity (0.05–0.10), decorative only
  Appears in hero section top-right
  Does NOT resemble actual imagery

QUOTE MARKS (Testimonials):
  Large Cormorant " in #D3A376, opacity 0.4
  Behind the testimonial text
  font-size: 120px
```

### WhatsApp Bot UI Mockup Element (on How It Works page)

```
Phone frame: iPhone-style outline, border 2px solid #D7C9B8
Chat bubbles:
  User (right): background #D3A376/20%, border-radius 16px 4px 16px 16px
  Bot (left):   background #F4F1EA, border-radius 4px 16px 16px 16px
  Font:         DM Sans 13px
Typing indicator: 3 animated dots in #A78D78
```

---

## 9. PAGE-BY-PAGE LAYOUT BLUEPRINTS

### 9.1 Homepage Layout

```
┌─────────────────────────────────────────────────────────┐
│ ANNOUNCEMENT BANNER                                      │
│ bg: #B8860B · text: white · 40px height                 │
├─────────────────────────────────────────────────────────┤
│ STICKY NAVIGATION                                        │
│ bg: #FAF9F6/95 · 72px                                   │
├─────────────────────────────────────────────────────────┤
│ HERO                                                     │
│ bg: #FAF9F6 · min-height: 90vh                          │
│ LEFT: Headline + copy + CTA                             │
│ RIGHT: Product image collage (3 stacked images)         │
├─────────────────────────────────────────────────────────┤
│ SOCIAL PROOF MARQUEE                                     │
│ bg: #291C0E · 56px height                               │
├─────────────────────────────────────────────────────────┤
│ PROBLEM SECTION                                         │
│ bg: #F4F1EA · 3 pain cards                              │
├─────────────────────────────────────────────────────────┤
│ SOLUTION / HOW IT WORKS                                 │
│ bg: #FAF9F6 · 3-step horizontal layout                  │
├─────────────────────────────────────────────────────────┤
│ FEATURES GRID                                           │
│ bg: #F4F1EA · 3-column cards                            │
├─────────────────────────────────────────────────────────┤
│ BEFORE / AFTER (TRANSFORMATION)                         │
│ bg: #291C0E · dark section                              │
│ "₹15,000 studio shoot vs ₹699/month"                    │
│ Side-by-side visual comparison                          │
├─────────────────────────────────────────────────────────┤
│ COMPARISON TABLE                                        │
│ bg: #3E2522 · dark section                              │
├─────────────────────────────────────────────────────────┤
│ PRICING TEASER                                          │
│ bg: #FAF9F6 · 4 cards, Growth highlighted               │
├─────────────────────────────────────────────────────────┤
│ REFERRAL TEASER                                         │
│ bg: #E6DAC8 · warm section                              │
├─────────────────────────────────────────────────────────┤
│ COUNTDOWN + WAITLIST FORM (HERO CTA)                    │
│ bg: #F4F1EA · countdown timer + registration form       │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
│ bg: #291C0E                                             │
└─────────────────────────────────────────────────────────┘
```

### 9.2 Pricing Page Layout

```
┌─────────────────────────────────────────────────────────┐
│ NAV                                                      │
├─────────────────────────────────────────────────────────┤
│ HERO                                                     │
│ "Less Than ₹25 a Day. Studio-Quality Every Day."        │
│ bg: #F4F1EA · centered text + value comparison line     │
├─────────────────────────────────────────────────────────┤
│ MONTHLY/ANNUAL TOGGLE + 4 PRICING CARDS                 │
│ bg: #FAF9F6                                             │
├─────────────────────────────────────────────────────────┤
│ FULL FEATURE COMPARISON TABLE                           │
│ bg: #F4F1EA                                             │
├─────────────────────────────────────────────────────────┤
│ FREE TRIAL BOX                                          │
│ bg: #291C0E · "Start Free. No Card Required."           │
├─────────────────────────────────────────────────────────┤
│ FAQ ACCORDION                                           │
│ bg: #FAF9F6                                             │
├─────────────────────────────────────────────────────────┤
│ FINAL CTA                                               │
│ bg: #E6DAC8 · "Join Waitlist" form                      │
├─────────────────────────────────────────────────────────┤
│ FOOTER                                                  │
└─────────────────────────────────────────────────────────┘
```

---

## 10. RESPONSIVE BREAKPOINTS

```css
/* Mobile first */
--bp-sm:   480px    /* Large mobile */
--bp-md:   768px    /* Tablet */
--bp-lg:   1024px   /* Laptop */
--bp-xl:   1280px   /* Desktop */
--bp-2xl:  1440px   /* Wide desktop */

/* Usage */
@media (min-width: 768px) { /* tablet+ */ }
@media (min-width: 1024px) { /* desktop+ */ }
```

### Key Responsive Behaviors

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero layout | Stacked (text above image) | Side by side | Side by side |
| Feature cards | 1 column | 2 columns | 3 columns |
| Pricing cards | 1 column + scroll | 2 columns | 4 columns |
| Comparison table | Horizontal scroll | Horizontal scroll | Full table |
| Nav | Hamburger overlay | Hamburger overlay | Inline links |
| Display font size | clamp starts at 40px | Mid range | Full size |
| Section padding | 60px vertical | 80px | 120-160px |

---

## 11. MICROINTERACTIONS & STATES

### Button States
```
DEFAULT:   Background #B8860B · color white
HOVER:     Background #291C0E · transform scale(1.02) · transition 200ms
ACTIVE:    Background #3E2522 · scale(0.99)
DISABLED:  Background #D7C9B8 · color #BEB5A9 · cursor not-allowed
LOADING:   Spinner (white, 16px) replaces text · no interaction
```

### Input States
```
DEFAULT:   Border 1px solid #D7C9B8
FOCUS:     Border #B8860B · shadow 0 0 0 3px rgba(184,134,11,0.15)
ERROR:     Border #8B1A1A · helper text below in #8B1A1A
SUCCESS:   Border #4A7C59 · check icon appears right of field
FILLED:    Label floats above (floating label pattern)
```

### FAQ Accordion
```
CLOSED:   Arrow pointing down, bg #FAF9F6
OPEN:     Arrow rotates 180deg (300ms), content reveals with max-height
          transition (500ms ease), bg #FFF9F0 (very slight warm tint)
HOVER:    bg #F4F1EA on question row
```

### Countdown Timer Flip
```
Each digit uses CSS 3D card-flip animation on number change
Front: current number, Back: new number
flip duration: 400ms ease-in-out
```

---

## 12. ACCESSIBILITY REQUIREMENTS

```
Color contrast:
  All body text on #FAF9F6: minimum 4.5:1 ratio ✓
  White text on #B8860B: verify → use #291C0E text on #D3A376 if needed
  White text on #291C0E: well above 7:1 ✓

Focus states:
  All interactive elements: outline 2px solid #B8860B, offset 3px
  Never use outline: none without custom focus replacement

Semantic HTML:
  h1 → one per page only
  Proper landmark roles: <nav>, <main>, <section>, <footer>
  Form labels: explicit for=id pairing
  Buttons vs links: buttons for actions, links for navigation

Motion:
  All animations respect: @media (prefers-reduced-motion: reduce)
  If reduced-motion: disable transforms and transitions
  Countdown still works, just no flip animation

Images:
  All decorative images: aria-hidden="true"
  Product/UI images: descriptive alt text
  WhatsApp screenshots: "WhatsApp chat showing jewelry model result"
```

---

## 13. PERFORMANCE GUIDELINES

```
Images:
  Format:  WebP with JPEG fallback
  Sizes:   Multiple srcset breakpoints: 400w, 800w, 1200w
  Lazy load: All below-the-fold images (loading="lazy")
  Hero image: Preload (link rel="preload")

Fonts:
  Preconnect: fonts.googleapis.com + fonts.gstatic.com
  Display: font-display: swap on all faces
  Load only used weights (see import string above)

Animations:
  Use transform + opacity only (GPU-composited)
  Do not animate width, height, margin, padding
  will-change: transform only where needed

CSS:
  Critical CSS inline in <head>
  Non-critical CSS deferred

Target metrics:
  LCP: < 2.5s
  CLS: < 0.1
  FID: < 100ms
```

---

## 14. ASSET CHECKLIST FOR DEVELOPER

Before coding begins, collect or create these assets:

```
IMAGES NEEDED:
□ Hero section: 3 jewelry model shot examples (AI generated)
□ Before image: flat jewelry on plain surface
□ After image: same jewelry on model
□ WhatsApp bot UI screenshot mockup
□ Founder photo (optional — for About page)

ICONS NEEDED (all from Lucide):
□ CheckCircle2  — feature confirmations
□ Timer         — 60-second claim
□ Smartphone    — WhatsApp channel
□ Gem           — gemstone swap
□ Layers        — batch processing
□ Image         — photography
□ Share2        — referral
□ BadgeCheck    — trust signals
□ AlertCircle   — error states

LOGO FILES:
□ NAKSHI AI wordmark (SVG) — dark version (#291C0E)
□ NAKSHI AI wordmark (SVG) — light version (#FFF2DF)
□ Favicon (32px, 16px ICO + PNG)
□ OG Image (1200×630px) for social sharing

COPY PASTE FROM:
□ NakshiAI_Website_Content.md — all text content
□ NakshiAI_MasterDoc.md — pricing tables, features
```

---

## 15. TECH STACK RECOMMENDATION

*For building with https://github.com/nextlevelbuilder/ui-ux-pro-max-skill*

```
Framework:      Next.js 14 (App Router)
Styling:        Tailwind CSS + CSS Variables for design tokens
Animation:      Framer Motion (for scroll animations + page transitions)
                CSS animations for marquee, countdown, hover states
Fonts:          Next.js Font optimization (next/font/google)
Icons:          lucide-react
Confetti:       canvas-confetti (npm package)
Countdown:      Custom hook using setInterval + useEffect
Forms:          React Hook Form + Zod validation
WhatsApp link:  wa.me/[number]?text=[encoded-text]
Analytics:      Vercel Analytics (free tier)
Hosting:        Vercel (free tier sufficient for waitlist phase)
```

### File Structure
```
/app
  /page.tsx              ← Homepage
  /how-it-works/page.tsx
  /features/page.tsx
  /pricing/page.tsx
  /waitlist/page.tsx
  /referral/page.tsx
  /faq/page.tsx
  /about/page.tsx
  /contact/page.tsx
  /terms/page.tsx
  /privacy/page.tsx
  /layout.tsx            ← Nav + Footer + fonts
  /globals.css           ← CSS variables + base styles

/components
  /ui/Button.tsx
  /ui/Input.tsx
  /ui/Badge.tsx
  /sections/Hero.tsx
  /sections/Problem.tsx
  /sections/Features.tsx
  /sections/Pricing.tsx
  /sections/Countdown.tsx
  /sections/WaitlistForm.tsx
  /sections/Comparison.tsx
  /layout/Navbar.tsx
  /layout/Footer.tsx
  /layout/AnnouncementBanner.tsx
```

---

## 16. QUICK REFERENCE — DESIGN TOKENS

*Copy this block into your globals.css*

```css
:root {
  /* Colors */
  --color-bg-primary:     #FAF9F6;
  --color-bg-secondary:   #F4F1EA;
  --color-bg-tertiary:    #E6DAC8;
  --color-bg-dark:        #3E2522;
  --color-bg-dark-alt:    #291C0E;
  --color-gold:           #B8860B;
  --color-gold-light:     #D3A376;
  --color-gold-muted:     #CBB9A4;
  --color-text-primary:   #291C0E;
  --color-text-secondary: #6E473B;
  --color-text-muted:     #A78D78;
  --color-text-inverse:   #FFF2DF;
  --color-border:         #D7C9B8;
  --color-border-light:   #E6DAC8;
  --color-success:        #4A7C59;

  /* Typography */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
  --font-hindi:   'Noto Serif Devanagari', serif;

  /* Spacing */
  --space-1: 4px;   --space-2: 8px;   --space-3: 12px;
  --space-4: 16px;  --space-5: 24px;  --space-6: 32px;
  --space-8: 48px;  --space-10: 64px; --space-12: 80px;
  --space-16: 96px; --space-20: 120px; --space-24: 160px;

  /* Shadows */
  --shadow-sm:  0 2px 8px rgba(41, 28, 14, 0.06);
  --shadow-md:  0 8px 24px rgba(41, 28, 14, 0.10);
  --shadow-lg:  0 24px 60px rgba(41, 28, 14, 0.15);

  /* Border radius */
  --radius-sm:  2px;
  --radius-md:  4px;
  --radius-lg:  8px;
  --radius-pill: 100px;

  /* Transitions */
  --transition-fast:   150ms ease-out;
  --transition-base:   250ms ease-out;
  --transition-slow:   400ms ease-out;
  --transition-enter:  700ms ease-out;
}
```

---

*Nakshi AI — Website Design Specification v1.0*
*Synthesized from 9 reference images + 30-pattern library*
*For use with: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill*
