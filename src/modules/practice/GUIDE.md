# 🎙️ Practice Module Guide

## 🎯 Objective
Create an immersive, distraction-free environment for users to record and practice their soft-skills stories.

## ✅ What to Build
- **Active Record UI:** A large, centered "Pulse" indicator using `animate-pulse`.
- **Audio Visualizer:** A simplified "waveform" effect using CSS animations or SVGs.
- **Timer:** A clean `00:00` display using `font-mono`.
- **Status Badges:** "Ready", "Recording...", "Processing AI..." (placeholders).
- **Playback Controls:** Simple icons (Play, Pause, Reset) inside small glass circles.

## 🎨 Liquid Glass Specs
- Recording pulse: `bg-blue-500/20 blur-xl absolute inset-0 rounded-full`.
- Main panel: `glass-panel max-w-xl mx-auto shadow-[0_0_100px_rgba(30,144,255,0.2)]`.
- Control buttons: `btn-glass rounded-full p-4 flex items-center justify-center`.

## 🚫 What to Avoid
- **DO NOT** attempt to "Analyze Audio" yet; just handle the *simulation* and state of recording.
- **DO NOT** import from `FeedbackModule`.
- **DO NOT** modify any file in `src/layout/`.

## 🛠️ Tech Guardrails
- Export the final component as `default export`.
- Components such as `Recorder.jsx` or `Waves.jsx` must stay inside this folder.
