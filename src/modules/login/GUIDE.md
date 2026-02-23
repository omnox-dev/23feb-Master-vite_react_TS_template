# 🔐 Login Module Guide

## 🎯 Objective
Create a secure, frictionless entry point for the STARtTalking application.

## ✅ What to Build
- **Login Form:** Email and Password fields.
- **Validation:** Real-time email format check and password length validation.
- **Loading States:** A "Liquid Glass" spinner or pulse effect when submitting.
- **Error Handling:** Clear, non-intrusive toasts for incorrect credentials.

## 🎨 Liquid Glass Specs
- Form container must use `glass-panel` class.
- Submit button must use `btn-glass` class.
- Inputs should have `bg-white/5 border-white/10 rounded-xl` styling.

## 🚫 What to Avoid
- **DO NOT** import from `RegisterModule`. If you need a "Go to Register" link, use a standard `NavLink` to `/register`.
- **DO NOT** modify any file in `src/layout/`.
- **DO NOT** add global state outside of this folder.

## 🛠️ Tech Guardrails
- Export the final component as `default export`.
- Keep all local components (e.g., `LoginForm.jsx`) inside this folder.
