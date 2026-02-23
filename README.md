# STARtTalking - Liquid Glass UI

## 🏗️ Project Architecture (Architect Phase)

This is a premium React application built with a **Liquid Glass UI** aesthetic (Flagship iPhone-style). The architecture enforces a strict separation of concerns to support a multi-member development team.

### 📁 Core Structure
- `src/modules/`: **TEAM DOMAIN.** Every teammate builds exclusively within their assigned folder.
- `src/layout/`: **ARCHITECT DOMAIN.** Contains the global UI frame and navigation.
- `src/routes/`: **ARCHITECT DOMAIN.** Central point for routing logic.

### 🛡️ Development Guardrails
1. **Vertical Isolation:** A module (e.g., `practice`) MUST NOT import from or modify another module (e.g., `login`).
2. **Layout Locking:** Team members are forbidden from editing files in `src/layout/` or `src/routes/`.
3. **Exports:** Every module page MUST be a `default export`.
4. **Design:** Use the "Glass-Panel" Tailwind classes defined in `index.css` to maintain the premium visual style.

## 🚀 Getting Started
```bash
npm install
npm run dev
```
Navigate to `http://localhost:5173` to see the live system skeleton.

---
**Lead Architect:** GitHub Copilot
