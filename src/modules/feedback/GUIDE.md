# 🗨️ Feedback Module Guide

## 🎯 Objective
Provide AI-powered (simulated) feedback and insights on the user’s performance.

## ✅ What to Build
- **Performance Report:** A detailed "Liquid Glass" scorecard.
- **Score Indicators:** Percentage-based scores for Clarity, Tone, and Empathy.
- **Top 5 Strengths:** A pill-style list of things the user did right.
- **Area for Improvement:** A "Glass Card" with actionable advice for next time.
- **Restart Button:** A simple link back to the `PracticeModule`.

## 🎨 Liquid Glass Specs
- Score cards: `bg-white/10 p-6 rounded-3xl border border-white/10 hover:bg-white/15 transition-all`.
- Progress rings: SVG strokes with `stroke-blue-500/80` and `stroke-white/5` backgrounds.
- Highlighting: Use `text-blue-400` or `text-purple-400` for key words.

## 🚫 What to Avoid
- **DO NOT** import from `PracticeModule`. You are only showing the *results* here.
- **DO NOT** modify the `Navbar`.
- **DO NOT** create a new layout file.

## 🛠️ Tech Guardrails
- Export the final component as `default export`.
- Components such as `ScoreRing.jsx` or `ImprovementList.jsx` must stay inside this folder.
