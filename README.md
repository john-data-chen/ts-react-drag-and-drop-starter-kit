# Todo List Application [![codecov](https://codecov.io/gh/john-data-chen/to-do-list-app/graph/badge.svg?token=2QA3D3NBHD)](https://codecov.io/gh/john-data-chen/to-do-list-app)

A modern Todo List project built with React, TypeScript, and Vite, featuring comprehensive testing and accessibility support.

[Demo](your-demo-link)

![Screenshots of drag and drip](/src/assets/drag%20demo.gif)

## 🔄 Changelog

### Version 1.0.0

- ✨ Drag & Drop functionality
- 🌍 Multi-language support (English/German)
- 🌓 Dark/Light Theme
- 📱 Responsive Design (400px, 768px, 1200px+)
- 💾 Local Storage persistence
- ⌨️ Keyboard and Screen Reader support
- ✏️ Task Editing Capabilities

## 🛠️ Technical Stack

- Node.js: v22.12.0
- React: v18.3.1
- Vite: v6.0.3
- TypeScript: v5.6.2
- Jest (unit testing)
- GitHub Actions (CI/CD)

### Technical Decisions

#### Build Tool: Vite

- Faster development server startup through native ES modules
- Efficient Hot Module Replacement (HMR)
- Optimized production builds with built-in Rollup configuration
- Better TypeScript integration compared to Create React App

#### TypeScript

- Enhanced code maintainability and readability
- Early error detection during development
- Better IDE support and autocompletion
- Improved team collaboration through type definitions

#### Redux Toolkit

- Simplified state management with less boilerplate
- Built-in immutability support
- Integrated TypeScript support
- Efficient dev tools for debugging

#### Jest for Testing

- Comprehensive testing framework with good TypeScript support
- Snapshot testing capabilities
- Large community and extensive documentation
- Integration with GitHub Actions CI/CD

## 🔜 Upcoming Features

- [ ] CI: auto lint and format code
- [ ] Test: Integration tests for Redux
- [ ] Test: E2E tests for critical user flows
- [ ] Test: Snapshot tests for UI components
- [ ] Security: add Security Strategy

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Deploy to GitHub Pages
npm run deploy
```

## 🐛 Known Issues or Limitations

- Touch Screen Hover Limitation: Touch screens don't support hover animations
- Language Menu Rendering Issue: Language menu displays position incorrectly only in Chrome Developer Tool of PC or Laptop (it works fine on Phone)

Chrome Developer Tool of PC / Laptop <br>
![Screenshot of language menu on PC / laptop](/src/assets/language%20menu%20on%20PC.png)

it works fine on Phone <br>
![Screenshot of language menu on Phones](/src/assets/language%20menu%20on%20phone.png)

## 📋 Technical Documentation

### 📊 Code Quality & Testing

- Unit Testing with Jest
- Codecov integration for coverage reports: [![codecov](https://codecov.io/gh/john-data-chen/to-do-list-app/graph/badge.svg?token=2QA3D3NBHD)](https://codecov.io/gh/john-data-chen/to-do-list-app)
- Continuous Integration via GitHub Actions

### 📱 Responsive Design

Optimized for multiple screen sizes:

- Mobile: 400px
- Tablet: 768px
- Desktop: 1200px
- Large Desktop: >1200px

### Project Structure

```
src/
├── __tests__/
├── assets/
├── component/
├── constants/
├── hooks/
├── i18n/
├── redux/
├── theme/
└── types/
```

### State Management

- Redux Toolkit for global state management
- Custom middleware for LocalStorage integration
- Typed action creators for task management

### Performance Optimizations

- Gzip compression
- Refactor and Code splitting
- Memoization for complex calculations

### Accessibility Features

- ARIA labels for Screen reader support
- Keyboard navigation
- Sufficient color contrasts

### Testing Strategy

- Unit tests for components, coverage is over 80%, target is 100%.
- Add more such as Integration and E2E tests

### CI Strategy in Github Action

it is triggered when

- push to dev and main branches
- PR to main branch

### Deployment Strategy

- CD in Github Action is triggered when PR to main branch
- NPM deploy command to deploy manually in the emergency

### Security Strategy

- CSRF protection
- XSS prevention
- Input data validation
