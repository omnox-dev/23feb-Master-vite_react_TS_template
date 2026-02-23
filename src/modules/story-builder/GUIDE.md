# 🧶 Story Builder Module Guide (The STAR Method Engine)

## 🎯 Objective
Create a structured visual tool for users to construct soft-skills stories using the **STAR Method** (Situation, Task, Action, Result).

## ✅ What to Build
- **STAR Editor:** Four distinct input areas for Situation, Task, Action, and Result.
- **Story Repository:** A grid of cards showing saved stories with their "STAR" summary.
- **Interactive Story flow:** A way to "Preview" how the story sounds before going to the Practice module.
- **Guided Prompts:** Text hints (e.g., "What was the specific challenge?" for Situation).

## 🎨 Liquid Glass Specs
- STAR Input Cards: `glass-panel p-6 border-l-4 border-blue-500/50`.
- Action Icons: Use Lucide icons (`Edit3`, `Save`, `Plus`).
- Progress Tracker: A visual bar showing how much of the "STAR" is completed.

## 🚫 What to Avoid
- **DO NOT** use a standard wall-of-text textarea; force the STAR structure.
- **DO NOT** attempt to record audio here (Hand off to Practice Module).
- **DO NOT** modify the global `Navbar`.

## 🛠️ Tech Guardrails
- Component must export as `default export`.
- Use a `story` object state: `{ title, s, t, a, r, timestamp }`.

