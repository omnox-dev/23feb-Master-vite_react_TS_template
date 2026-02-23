# 🚀 STARtTalking: Teammate Development Guide

Welcome to the **STARtTalking** engineering team. You are building a flagship-grade soft-skills application using a **Liquid Glass UI** (iPhone aesthetic). 

To maintain system integrity and ensure a seamless "Glue Phase," you must follow this architectural contract.

---

## 🏛️ The Architectural Contract
This project is built on **Vertical Isolation**. 
- **The Architect owns:** `src/layout/`, `src/routes/`, `App.jsx`, and `index.css`.
- **You own:** Exactly ONE folder inside `src/modules/`.

### 🛡️ Core Rules (Non-Negotiable)
1. **Sandboxing:** Do not import *anything* from another module folder (e.g., `login` cannot import from `dashboard`).
2. **Layout Locking:** Do not modify any file outside your module folder (No `src/layout/`, `src/routes/`, or `App.jsx`).
3. **Dependency Lockdown:** DO NOT modify `package.json`. If you need a library, ask the Architect.
4. **The "Export" Rule:** Your main page (e.g., `LoginPage.jsx`) must be a `default export`.
5. **Asset Isolation:** Any images or SVGs used only in your module must be placed in `src/modules/[module]/assets/`.
6. **Code Language:** Use JavaScript (`.jsx`) only. Do not create TypeScript files.
7. **Style Consistency:** Use the provided "Liquid Glass" Tailwind classes (see below).

---

## 🛠️ Step-by-Step Execution

### 1. Setup
```bash
git clone [repository-url]
npm install
npm run dev
```
Navigate to `http://localhost:5173`. You will see the system skeleton and navigation already working.

### 2. Locate Your Mission
Go to your assigned folder: `src/modules/[your-assigned-module]/`.
Inside, you will find a **`GUIDE.md`**. This file contains:
- Your specific feature requirements.
- What UI elements to build.
- Specific "What to Avoid" instructions for your module.

### 3. Build with Liquid Glass
Your UI must match the "Flagship iPhone" aesthetic. Always use these utility classes:
- **Major Containers:** `<div className="glass-panel">`
- **Buttons:** `<button className="btn-glass">`
- **Text:** Use `text-white/90` for headings and `text-white/60` for subtext.
- **Interactions:** Use `transition-all duration-300 hover:bg-white/10`.

---

## 📥 Submission Process

When your module is "Feature Complete" and ready for the Glue Phase:

1. **Self-Audit:** 
   - Does my page export a default component?
   - Did I stay inside my folder?
   - Does it look like "Liquid Glass"?
2. **Branching:** Create a branch named `feature/[module-name]` (e.g., `feature/practice`).
3. **Push:** Submit your code for Architect review.

---

## 🧠 Note from the Glue Engineer
"I have built the skeleton to ensure your code is protected. Once you submit your module, I will invest time in 'gluing' the flows together—connecting your login logic to the dashboard and your recording state to the feedback engine. Focus on the perfection of your specific mission."

**Let's build something premium.**
premium.**
premium.**
premium.**
.**
