# Todo List Application <br>

[![codecov](https://codecov.io/gh/john-data-chen/to-do-list-app/graph/badge.svg?token=2QA3D3NBHD)](https://codecov.io/gh/john-data-chen/to-do-list-app)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=john-data-chen_to-do-list-app&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=john-data-chen_to-do-list-app)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![CI workflow](https://github.com/john-data-chen/to-do-list-app/actions/workflows/ci.yml/badge.svg)

A React-based template demonstrating modern frontend architecture and engineering best practices, designed for beginner developers.

[Live Demo](https://john-data-chen.github.io/to-do-list-app/)

![Screenshots of drag and drip](/src/assets/drag%20demo.gif)

## 🌟 Key Features

- ⭐️ **Intuitive interaction**: drag & drop and animations
- ♿ **Accessibility**: Screen reader support and keyboard navigation
- 🌍 **Localization**: Full support for English and German
- 📱 **Responsive Design**: Consistent experience across devices

## Minor Features

- 🌓 Dark/Light Theme
- 💾 Persistent data via local storage

**Key Accomplishments**:

- **Test Coverage in Codecov**: 85%+
- **Reliability Rating in SonarQube**: A
- **Cross-browser Testing**: for both desktop and mobile devices.
- **CI/CD automation**: in GitHub actions.

## 🛠️ Technical Stack

[![React Dependencies](https://img.shields.io/librariesio/release/npm/react)](https://libraries.io/npm/react)

- **Requirements**: [Node.JS](https://nodejs.org/en/download/) v22.13.0 or higher
- **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Redux Toolkit](https://redux-toolkit.js.org/)
- **Build**: [Vite](https://vitejs.dev/), [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Commitizen](https://commitizen.github.io/cz-cli/), [Lint Staged](https://github.com/okonet/lint-staged), [husky](https://github.com/typicode/husky)
- **Styling**: [Styled-components](https://styled-components.com/)
- **Localization**: [i18next](https://www.i18next.com/), [react-i18next](https://react.i18next.com/)
- **Testing**: [Jest](https://jestjs.io/), [Playwright](https://playwright.dev/)
- **Drag and Drop**: [@hello-pangea/dnd](https://github.com/hello-pangea/dnd)
- **Deployment**: [GitHub Pages](https://github.com/tschaub/gh-pages)
- **CI/CD**: [GitHub Actions](https://github.com/features/actions), [Codecov](https://codecov.io/), [SonarQube](https://sonarcloud.io/)

## 🚀 Getting Started

- Press **Use this template** to create a new repository.
- Modify `package.json`: modify the `homepage` fields such as `https://[your-github-username].github.io/[repository-name]/`.
- Modify `vite.config.ts`: modify the `base` field to match the `homepage` field, such as `/[repository-name]/`.
- Modify `App.test.ts`: modify testing url such as `http://localhost:5173/[repository-name]/`

### NPM commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run unit and integration tests by Jest
npm run test

# Run E2E tests by Playwright
npx playwright test

# Deploy to GitHub Pages
npm run deploy
```

## 🔜 Roadmap

This template is feature-complete but limited by GitHub Pages architecture. Future updates will be added into the another project **Next Board** such as

- [ ] Use Next.js to be a full stack project
- [ ] Use Shadcn UI to fitting WAI-ARIA and more browsers
- [ ] Login to manage users, projects and tasks in security

## 📖 Detailed Technical Documentation

### 🐛 Limitations

Minor Display Issue: Language menu behaves abnormally only in Chrome Developer Tools on desktop.

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
- Optimized Builds: add Gzip compression

### Deployment Strategy

- **Automated Deployment**: GitHub Actions triggers on PR to the main branch, ensuring smooth updates.
- **Manual Emergency Deployment**: Use `npm run deploy` for urgent fixes.

### 🤝 Contribution

Contributions are welcome! If you find a bug or want to suggest a feature, feel free to open an issue or submit a pull request.

### 📃 License

This project is licensed under the [MIT License](https://opensource.org/license/mit/).
