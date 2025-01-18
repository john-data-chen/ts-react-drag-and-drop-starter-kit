# Production-Ready React TypeScript Todo Template | Drag & Drop + i18n <br>

[![codecov](https://codecov.io/gh/john-data-chen/ts-react-drag-and-drop-starter-kit/graph/badge.svg?token=2QA3D3NBHD)](https://codecov.io/gh/john-data-chen/ts-react-drag-and-drop-starter-kit)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=john-data-chen_to-do-list-app&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=john-data-chen_to-do-list-app)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![CI workflow](https://github.com/john-data-chen/ts-react-drag-and-drop-starter-kit/actions/workflows/ci.yml/badge.svg)

## ✨ Why Choose This Template:

The **Enterprise-grade React TypeScript template** with 85%+ test coverage, featuring drag & drop functionality, WAI-ARIA accessibility, and i18n support. It is designed for saving time while adhering to best practices and including:

- 🚀 Production-Ready: Enterprise-level architecture with full TypeScript support
- 💪 Professional Setup: CI/CD, Testing, and Code Quality tools pre-configured
- 🎯 Developer-Friendly: Clear documentation and best practices built-in
- 🌍 Localization: i18n ready with English and German support
- 🎨 Modern UX: Drag-and-drop, animations, and dark mode included
- 💾 Persistent data: via local storage

---

⭐ **Love this template?**
If you like it, don't forget to [give it a star](https://github.com/john-data-chen/ts-react-drag-and-drop-starter-kit) today!
Every star motivates me to deliver more high-quality templates. 🚀

---

[Try the Live Demo](https://john-data-chen.github.io/ts-react-drag-and-drop-starter-kit/)

![Screenshots of drag and drip](/src/assets/drag%20demo.gif)

**Key Accomplishments**:

- **Test Coverage in Codecov**: 85%+
- **Reliability Rating in SonarQube**: A
- **Cross-browser Testing**: for both desktop and mobile devices.
- **CI/CD automation**: in GitHub actions.

## 🛠️ Technical Stack

- **Requirements**: [Node.JS](https://nodejs.org/en/download/) v22.13.0 or higher
- **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Redux Toolkit](https://redux-toolkit.js.org/)
- **Build**: [PNPM](https://pnpm.io/), [Vite](https://vitejs.dev/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Commitizen](https://commitizen.github.io/cz-cli/), [Lint Staged](https://github.com/okonet/lint-staged), [husky](https://github.com/typicode/husky)
- **Styling**: [Styled-components](https://styled-components.com/)
- **Localization**: [i18next](https://www.i18next.com/), [react-i18next](https://react.i18next.com/)
- **Testing**: [Jest](https://jestjs.io/), [Playwright](https://playwright.dev/)
- **Drag and Drop**: [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)
- **Deployment**: [GitHub Pages](https://github.com/tschaub/gh-pages)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions), [Codecov](https://codecov.io/), [SonarQube](https://sonarcloud.io/)

## 🚀 Getting Started

- Press **Use this template** to create a new repository.
- I use PNPM@10.0.0 to increase CI/CD installation performance, you can use NPM.
- Modify `package.json`: modify the `homepage` fields such as `https://[your-github-username].github.io/[repository-name]/`.
- Modify `vite.config.ts`: modify the `base` field to match the `homepage` field, such as `/[repository-name]/`.
- Modify `App.test.ts` in `__tests__`: modify testing url such as `http://localhost:5173/[repository-name]/`

### NPM commands

Change npm to pnpm if you use pnpm.

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run unit and integration tests by Jest
npm run test

# Run E2E tests by Playwright
npm run playwright

# Deploy to GitHub Pages
npm run deploy
```

## 🔜 Roadmap

This template is feature-complete but limited by GitHub Pages architecture. Future updates will be added into the another template **Next Board** such as

- [ ] Full-stack support using Next.js
- [ ] Enhanced accessibility with Shadcn UI
- [ ] User authentication for secure project/task management

## 📖 Detailed Technical Documentation

### 🐛 Limitations

Language menu displays abnormally in Chrome DevTools on desktop but works perfectly in real-world scenarios.

🖥️ Chrome Developer Tool of PC / Laptop <br>
![Screenshot of language menu on PC / laptop](/src/assets/language%20menu%20on%20PC.png)

📲 Language menu displays normal on Phone <br>
![Screenshot of language menu on Phones](/src/assets/language%20menu%20on%20phone.png)

### 📊 Testing Strategy

- Achieved 85%+ test coverage with unit, integration, and E2E tests.
- Cross-browser testing ensures functionality across desktop and mobile.

### 📱 Responsive Design

Optimized for multiple screen sizes:

- Mobile: 400px
- Tablet: 768px
- Desktop: 1200px
- Large Desktop: >1200px

### Project Structure

```
__tests__/ # Test cases
src/
├── assets/ # Static files such as images
├── component/ # Reusable React components
├── constants/ # Application-wide constants
├── hooks/ # Custom React hooks
├── i18n/ # Localization files for multi-language support
├── redux/ # State management logic using Redux Toolkit
├── theme/ # Light and dark theme configurations
└── type/ # TypeScript type definitions
```

### Performance Optimization

- Faster Testing: Playwright parallel execution enhances testing speed.
- Optimized Builds: add PNPM and Gzip compression

### Deployment Strategy

- **Automated Deployment**: GitHub Actions triggers on PR to the main branch, ensuring smooth updates.
- **Manual Emergency Deployment**: Use `npm run deploy` for urgent fixes.

### 📃 License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
