var e=`---
title: "Lighting — 3-Point + HDRI"
duration: 100
level: 4
levelLabel: "LVL 4"
levelColor: "#f472b6"
videos:
  - id: "0rbPwn-I0oM"
    title: "Blender Beginner Tutorial — Part 8: Lighting — Blender Guru"
  - id: "6JW88Xtol7A"
    title: "Blender HDRI Lighting Tutorial — CG Cookie"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "In a 3-point lighting setup, what is the role of the fill light?"
      options: ["It is the primary light that creates the main shadow", "It is placed behind the subject to create a rim highlight", "It softens the shadows cast by the key light, reducing harsh contrast", "It illuminates the background"]
      answer: 2
      explanation: "The fill light is placed on the opposite side from the key light. It's dimmer (typically 50–70% of the key intensity) and softens the dark shadows created by the key light. Without a fill light, the shadow side of the subject goes completely black."
    - type: multiple-choice
      question: "What is an HDRI and why is it used for 3D lighting?"
      options: ["A high-resolution texture for surfaces", "A 360-degree panoramic photograph that provides realistic ambient lighting and reflections from a real environment", "A render preset for faster output", "A type of light source in Blender"]
      answer: 1
      explanation: "An HDRI (High Dynamic Range Image) is a 360° photo that captures real-world lighting — including the sun, sky, and surroundings — at high dynamic range. When used as the World background in Blender, it illuminates the scene with the light directions and colours from that real environment."
    - type: fill-blank
      question: "The light type that emits light in all directions from a single point (like a light bulb) is called a ___ light"
      answer: "Point"
      explanation: "Point lights emit light equally in all directions from a single position, like a bare light bulb. They create sharp, harsh shadows when objects are close to them and softer shadows when farther away."
---

## Phase 1 — Learn (45 min)

**Why this matters:** A perfectly modelled and textured object can look flat and unconvincing with bad lighting, or dramatic and professional with good lighting. Lighting determines mood, depth, and realism more than any other element in a 3D scene. This session covers the two fundamental lighting approaches: 3-point light rigs (precise control) and HDRI world lighting (fast, realistic, photographic results).

- **Blender light types:**
  - *Point* — emits in all directions from a point (light bulb). Creates sharp shadows at close range.
  - *Sun* — parallel rays from an infinite distance (outdoor daylight). Rotation controls direction; strength does not change with distance.
  - *Spot* — like a theatre spotlight — a cone of light with adjustable angle and blend.
  - *Area* — a rectangular or disc surface light. Produces soft, photographic shadows. Best for studio-style lighting.
- **3-Point Lighting Setup** — the standard lighting rig from photography and film:
  - *Key light* — primary light source, placed 45° above and to one side of the subject. Creates the main shadows and defines the form. Use Area light.
  - *Fill light* — placed on the opposite side, lower intensity (50–70% of key). Softens shadows so they don't go pure black.
  - *Rim/Back light* — placed behind the subject, lights the silhouette edge. Separates the subject from the background.
- **Light properties** — all controlled in Properties → Object Data (the green light bulb icon): Color, Power (watts or dimensionless), Radius (larger = softer shadows), Shadow setting.
- **HDRI lighting** — go to World Properties (globe icon) → Color → click the dot → Environment Texture → load an HDRI file. The HDRI illuminates the scene from all directions simultaneously. Download free HDRIs from polyhaven.com.
- **Combining HDRI + lights** — use an HDRI for ambient fill and background reflections, then add a few area lights to control specific highlights and shadow direction. HDRI alone often looks flat on hero objects.

> **Key insight:** Lighting is storytelling. A warm key light from below creates menace. A cold blue fill with warm key creates drama. An overhead soft area light creates product photography. You're not just "turning on lights" — you're deciding what emotion the scene communicates.

## Phase 2 — Do (45 min)

Light the textured crate from Sessions 07–08:
1. Delete the default Point light (X → Delete)
2. Set up HDRI: World Properties → Color → Environment Texture → download a studio HDRI from polyhaven.com (search "studio") → load it
3. Add a 3-point rig:
   - Shift+A → Light → Area (Key light): position at 45° above-right, Power 500W, set to warm white
   - Shift+A → Light → Area (Fill light): position at 45° above-left, Power 250W, cooler white
   - Shift+A → Light → Area (Rim light): position behind the crate, Power 400W
4. Switch to Rendered Viewport (Z → Rendered) and compare:
   - HDRI only
   - 3-point only
   - HDRI + 3-point combined
5. Pick the combination that looks most interesting and note what each light contributes

## Review

What is the difference between a Point light and a Sun light in terms of how they simulate real-world light sources? Why does increasing the Radius of an Area light create softer shadows?
`;export{e as default};