# 📝 Register Module Guide

## 🎯 Objective
Create a smooth, welcoming onboarding experience for new users.

## ✅ What to Build
- **Registration Form:** Full Name, Email, Password, and "Confirm Password" fields.
- **Validation:** Strengths-based password indicator (e.g., weak, medium, strong).
- **Match Check:** Ensure "Password" and "Confirm Password" match before allowing submission.
- **Terms UX:** A custom styled checkbox for terms & conditions that fits the glass theme.

## 🎨 Liquid Glass Specs
- Form container: `glass-panel`.
- Button: `btn-glass`.
- Inputs: `bg-white/5 border-white/10 rounded-xl focus:bg-white/10 transition-all`.

## 🚫 What to Avoid
- **DO NOT** attempt to automatically "log in" the user in this module—just handle account creation.
- **DO NOT** import from `LoginModule`.
- **DO NOT** modify any file in `src/layout/`.

## 🛠️ Tech Guardrails
- Export the final component as `default export`.
- Use `useState` for local form data—no global stores.
