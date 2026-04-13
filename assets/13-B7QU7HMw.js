var e=`---
title: "Keyframes + Graph Editor + Timeline"
duration: 100
level: 5
levelLabel: "LVL 5"
levelColor: "#a78bfa"
videos:
  - id: "geE8Sy97CQE"
    title: "Beginners Guide to Animation in Blender 4 — Grant Abbitt"
quiz:
  type: quick-check
  passMark: 60
  questions:
    - type: multiple-choice
      question: "What does pressing I in Blender's viewport do?"
      options: ["Opens the Import menu", "Inserts a keyframe for selected properties on the current frame", "Enters isolation view", "Opens the image editor"]
      answer: 1
      explanation: "I (Insert Keyframe) opens the Insert Keyframe menu. You can keyframe Location, Rotation, Scale, or combinations. The inserted keyframe records the current value of that property at the current frame number."
    - type: multiple-choice
      question: "What are F-Curves in the Graph Editor?"
      options: ["The path a camera follows during animation", "Bezier curves that represent how an animated value changes over time — their shape determines the speed and easing of the animation", "Filter curves for rendering", "The camera's field of view curves"]
      answer: 1
      explanation: "F-Curves (Function Curves) plot a property's value on the Y axis against frame number on the X axis. A flat curve = no change. A steep curve = fast change. Bezier handles on each keyframe control the easing — whether the animation accelerates smoothly or snaps."
    - type: fill-blank
      question: "The interpolation mode that makes an object start fast and slow down gradually to a stop is called ___"
      answer: "Ease Out"
      explanation: "Ease Out means fast at the start, gradually decelerating to a stop. Ease In is the opposite — slow start, accelerates. Ease In/Out (the default Bezier) has both: slow start, fast middle, slow end. These match how real objects physically accelerate and decelerate."
---

## Phase 1 — Learn (45 min)

**Why this matters:** A static model tells you what something looks like. Animation tells you how it moves, and movement communicates personality. A ball that drops with linear movement feels robotic. The same ball with ease-in, squash on impact, and ease-out bounce feels alive. This session introduces the foundational tools — keyframes, the Timeline, and the Graph Editor — that all Blender animation is built on.

- **Keyframes** — a record of a property's value at a specific frame. Blender interpolates between keyframes automatically. The minimum animation is two keyframes: one at the start, one at the end.
  - Press I to open the Insert Keyframe menu. Choose what to keyframe (Location, Rotation, Scale, etc.)
  - Keyframed properties appear yellow in the Properties panel. Changed but not keyframed properties appear orange.
  - Delete a keyframe: hover over the property, press Alt+I.
- **Timeline** — the horizontal panel at the bottom of the default layout. Shows current frame (playhead), frame range (Start/End), and playback controls. Drag the playhead to scrub the animation. Space to play/pause. Shift+Left/Right Arrow to jump to first/last frame.
- **Auto-Keying** — the red circle icon in the Timeline header. When enabled, Blender automatically creates keyframes whenever you move/rotate/scale an object on a frame that doesn't have one. Useful for rough blocking but turn it off for precise animation.
- **Graph Editor** — the F-Curve editor. Open with Shift+F6 or change an editor panel type. Each animated property has an F-Curve showing its value over time. The shape of the curve determines easing.
  - Flat segment = no change (object is still)
  - Steep slope = fast change (object is moving quickly)
  - Bezier handles at each keyframe control easing (how the curve enters and exits the keyframe)
- **Interpolation types** — right-click a keyframe in the Graph Editor or press T:
  - *Constant* — jumps instantly (like a light switching on)
  - *Linear* — changes at uniform speed (robotic, mechanical)
  - *Bezier* — smooth ease in/out (default, most natural)
- **Squash and Stretch** — the first principle of animation. A bouncing ball squashes (flattens slightly) on impact and stretches (elongates) as it moves through the air. Use Scale keyframes + Graph Editor easing to achieve this.

> **Key insight:** Learn to read the Graph Editor like a language. A curve that rises steeply then flattens = object accelerated then stopped. A smooth S-curve between two keyframes = natural ease in/out. Fixing animation problems usually means fixing curves, not adding more keyframes.

## Phase 2 — Do (45 min)

Animate a ball bouncing three times with squash and stretch:
1. Add a UV Sphere (the ball), position it at Y=0, Z=2
2. Frame 1: I → LocRotScale keyframe at height 2
3. Frame 12: move ball to Z=0.1 (just above ground), Scale Z to 0.7 / Scale X to 1.3 (squash) → I → LocRotScale
4. Frame 20: move ball to Z=1.5 (partial bounce) → I → LocRotScale  
5. Frame 28: repeat squash at ground (lower height this time) → I → LocRotScale
6. Frame 36: move to Z=0.8 → I → LocRotScale
7. Frame 40: squash at ground (very low bounce) → I → LocRotScale
8. Frame 48: move to Z=0.2 → I → LocRotScale (ball nearly settles)
9. Open Graph Editor — select the Z Location curve. Adjust Bezier handles to make the upward segments curve (ease out) and downward segments steep (gravity acceleration)
10. Play back. Does the ball feel physical?

## Review

What is the difference between changing the Interpolation type of a keyframe in the Graph Editor vs just moving the keyframe? Why does the Graph Editor give you more control over timing than just moving keyframes in the Timeline?
`;export{e as default};