# 📊 Dashboard Module Guide

## 🎯 Objective
Create a command center for the user’s soft-skills progress.

## ✅ What to Build
- **User Greeting:** A personalized welcome section.
- **Progress Widgets:** Current learning streak, last practiced skill, and upcoming goal cards.
- **Activity Summary:** A "Liquid Glass" card showing recent practice sessions.
- **Search:** A fast Search bar to filter through their saved stories.

## 🎨 Liquid Glass Specs
- Every widget or card: `glass-panel shadow-2xl`.
- Progress bars: `bg-white/10 rounded-full h-2 overflow-hidden` with a `bg-blue-500/80` fill.
- Grid: Use `columns-1 md:columns-2 lg:columns-3` for responsive widget flow.

## 🚫 What to Avoid
- **DO NOT** import from `StoryBuilder` or `PracticePage`. You are only showing the *summary* here.
- **DO NOT** modify the `Navbar` to add new links.
- **DO NOT** create a sidebar—the app uses a top Navbar.

## 🛠️ Tech Guardrails
- Export the final component as `default export`.
- Components such as `ProgressWidget.jsx` or `ActivityCard.jsx` must stay inside this folder.
