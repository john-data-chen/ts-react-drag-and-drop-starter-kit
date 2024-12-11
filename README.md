# React + TypeScript + Vite: Todo list

## How to use

- you can see [demo](https://john-data-chen.github.io/to-do-list-app/) here

## The project is based on

- Node JS: v22.12.0
- React: 18.3.1
- Vite: 6.0.3

## NPM commands

- npm install: to install all packages
- npm run dev: start the project in developing
- npm run deploy: start deploy to GitHib Pages

## ChangeLog

- Init commit
- Add gh-pages to deploy to GitHub Pages
- Add Date Picker in Add task
- Add Drag and Drop in todo list
- Fix the warning and error of Received "true" for non-boolean attribute active in console / a known issue of styled-components
- Save todo list into local Storage
- Add multi-language support: English and Deutsch
- Add Browser language detection: auto switch to Deutsch when new user's browser is Deutsch first
- Add Dark Theme
- Add Redux and Toolkit to manage state of tasks
- Add edit button to edit task title in task card
- Add gzip compression to reduce deploy files size (Github pages only support gzip)
- Fix the issue of incorrect logic of Edit button, which makes Edit form auto close when pressing any area on the form
- Add edit function of Due date
- Adjust UI of edit task from and Refactor CSS of Date Picker
- Add animations of interactions
- Add RWD layout for small screen
- Adjust RWD to fix UI issues such as long text, small screen, animation...etc
- Add more RWD layout for different screen sizes

## More in developing

- Add Accessibility such as ARIA tags or keyboard support
- Add test cases
- Add CI / CD
- Add more details into README or use Storybook to demonstrate
- Add Pomodoro

## Known issues or limits

- Touch screens can't support **hover** animations
- Languages menu displays incorrect position only in browser developer tool, using the Chrome of the Android device to check is correct
