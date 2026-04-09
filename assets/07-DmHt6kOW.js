var e=`---
title: "UV Unwrapping"
duration: 100
level: 3
levelLabel: "LVL 3"
levelColor: "#fbbf24"
videos:
  - id: "scPM_Ox0GqQ"
    title: "Blender UV Unwrapping — Blender Guru"
  - id: "XeBUfMKKZRo"
    title: "Blender UV Unwrapping for Beginners — CG Cookie"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What is the purpose of marking a seam in Blender?"
      options: ["It marks edges to be deleted", "It tells Blender where to 'cut' the mesh open when unwrapping the UV map", "It adds extra geometry", "It controls which faces receive a material"]
      answer: 1
      explanation: "Seams are like cutting lines on a cardboard box — they tell Blender where to cut the 3D mesh so it can be unfolded flat into a 2D UV map. Place seams on edges that are naturally hidden or where cuts won't distort the surface."
    - type: multiple-choice
      question: "What does a Checker Texture help you detect on a UV map?"
      options: ["Whether the mesh has correct normals", "Whether UV islands are stretched or compressed", "Whether the texture file is missing", "Whether the seams are placed correctly"]
      answer: 1
      explanation: "Applying a Checker Texture to a mesh shows you immediately if the UV map has stretching — squares that should be uniform will appear distorted or elongated where the UV is stretched."
    - type: fill-blank
      question: "The keyboard shortcut to unwrap a mesh in UV Edit Mode is ___"
      answer: "U"
      explanation: "In Edit Mode, select the faces you want to unwrap (A to select all), then press U to open the Unwrap menu. Choose 'Unwrap' for smart automatic unwrapping based on your seams."
---

## Phase 1 — Learn (45 min)

**Why this matters:** UV maps are the bridge between a 3D mesh and a 2D texture image. Without a UV map, Blender has no way to know which pixel of an image texture belongs to which polygon on the mesh. Get UV unwrapping wrong and your textures stretch, tile incorrectly, or appear in the wrong place entirely. This session comes before shaders because materials are pointless until you know how to control where they land.

- **UV map** — a flat 2D representation of a 3D mesh's surface. Every vertex on your mesh has a corresponding position (U and V coordinates) on a 0–1 grid. Image textures are mapped to this grid.
- **Seams** — edges you designate as "cut lines" so the mesh can unfold flat without distortion. Select an edge, right-click → Mark Seam (or Ctrl+E → Mark Seam). Think of it like cutting a cardboard box: one continuous cut lets it fold out flat.
- **Seam placement strategy** — place seams where they will be hidden in the final model (under objects, in naturally occluded areas), or along natural silhouettes. The goal is to minimise visible seams while maximising UV space efficiency.
- **UV Editor** — split the window (or switch a panel) to the UV Editor. After selecting all faces in Edit Mode (A) and pressing U → Unwrap, the UV map appears here as "islands" — disconnected flat pieces.
- **Checking for stretching** — in the Material Preview viewport (Z), add a Checker Texture to the material (or use the UV Grid texture from Blender's image options). If the checker squares look distorted, the UV is stretched. Reposition seams and re-unwrap.
- **Pack Islands** — after unwrapping, select all UV islands (A in UV Editor), then U → Pack Islands. This rearranges all islands to use the UV space as efficiently as possible. Useful before exporting for texture baking.
- **UV Scale** — some islands need more texture resolution than others (faces that are large on screen or important for detail). In the UV Editor, scale an island up to give it more of the texture budget.

> **Key insight:** There is no "correct" seam placement — only better and worse. Better seams are in hidden areas and cause less stretching. The way to learn is to unwrap, check the checker texture, move seams, and re-unwrap until the squares look uniform.

## Phase 2 — Do (45 min)

Unwrap the wooden crate from Session 05:
1. Open the crate model, enter Edit Mode, select all (A)
2. Mark seams on all 12 outer edges of the box (the edges where faces meet at 90°) — this "unfolds" the box like a cardboard net
3. U → Unwrap
4. Switch to UV Editor — you should see 6 flat squares (one per face)
5. Apply a Checker Texture: in the Shader Editor, add an Image Texture node → open or create a new image → set it to the UV Grid preset → connect to Base Color
6. In the 3D viewport (Material Preview), check all faces for stretching — squares should be uniform
7. In the UV Editor, select all islands (A) → U → Pack Islands to tighten the layout
8. Scale the top face island slightly larger to give it more texture resolution (it's the most visible face)

## Review

What happens to a texture if you don't create a UV map and just apply an image texture? Why does seam placement affect texture quality, not just where cuts appear on the model?
`;export{e as default};