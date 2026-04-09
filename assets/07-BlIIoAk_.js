var e=`---
title: "Asset Preparation + Photo Editing"
duration: 90
level: 3
levelLabel: "LVL 3"
levelColor: "#fbbf24"
videos:
  - id: "iCBkgEYSgXI"
    title: "Canva Tutorial for Beginners 2024 — Kevin Stratvert"
  - id: "FTFaQWZBqQ8"
    title: "Figma Tutorial for Beginners — DesignCourse"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "Which file format supports transparent backgrounds?"
      options: ["JPEG", "PNG", "WebP", "Both PNG and WebP"]
      answer: 3
      explanation: "PNG and WebP both support transparency (alpha channel). JPEG does not — it always has a white or coloured background fill. Use PNG or WebP when you need a transparent background."
    - type: multiple-choice
      question: "What resolution is correct for images intended for print at high quality?"
      options: ["72 DPI", "150 DPI", "300 DPI", "600 DPI"]
      answer: 2
      explanation: "300 DPI is the standard for professional print quality — business cards, brochures, posters. 72 DPI is sufficient for screens. Using 72 DPI for print produces blurry, pixelated results."
    - type: fill-blank
      question: "The image format that provides the best quality-to-file-size ratio for web photographs is ___"
      answer: "WebP"
      explanation: "WebP is a modern image format developed by Google. It produces files 25-35% smaller than JPEG at equivalent quality. It supports transparency too. It is now supported by all major browsers."
---

## Phase 1 — Learn (40 min)

**Why this matters:** Even the best design falls apart with poorly prepared images — wrong size, wrong format, visible backgrounds where you need transparency, blurry print output. Asset preparation is the unsexy skill that separates polished work from amateur-looking work.

- **Background removal** — free tools: remove.bg (one click, very accurate), Canva (Background Remover in image toolbar), Photopea (free web Photoshop). Use when: product shots, profile photos, cutout images.
- **Image formats**:
  - **JPEG** — photos and complex images for web. No transparency. Lossy compression (some quality lost). Use at 80% quality for web.
  - **PNG** — when you need transparency (logos, icons, cutouts). Lossless. Larger file size than JPEG.
  - **SVG** — vector format. Infinitely scalable without quality loss. Perfect for logos and icons. Editable as code.
  - **WebP** — best for web photos. Smaller than JPEG, same quality, supports transparency. Use this for all web images where possible.
  - **PDF** — for print-ready files and presentations.
- **Resolution (DPI)**:
  - **72 DPI** — screen / web (monitors display at 72–144 DPI). Higher resolution than this is invisible on screen and just makes files larger.
  - **300 DPI** — professional print (business cards, brochures, posters, packaging).
- **Image sizing** — never scale a raster image (JPEG, PNG) up beyond its original size — it becomes blurry (pixelated). Scale down freely. Use vector (SVG) whenever possible for logos and icons.
- **Aspect ratios** — crop to the required ratio before exporting. A 16:9 image forced into a 1:1 frame will distort unless you crop or use CSS \`object-fit: cover\`.

> **Key insight:** Prepare all your assets at the largest size you'll ever need them, then scale down for smaller uses. A 300 DPI print image can always become a 72 DPI web image. A 72 DPI web image cannot become a 300 DPI print image without looking blurry.

## Phase 2 — Do (40 min)

- Find 3 product images online (any objects with a solid background)
- Remove the background from each using remove.bg
- Export each as PNG with transparent background
- Resize one image at 300 DPI for print use and 72 DPI for web use — compare the file sizes
- Place one of your cutout images on the brand identity mock from Session 08 preview (or any coloured background) — verify the transparency works

## Review

A client sends you a logo as a 200×200px JPEG and asks you to print it at A3 poster size (420×297mm at 300 DPI). What problem will you encounter, and what format should you ask for instead?
`;export{e as default};