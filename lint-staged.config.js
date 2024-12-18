export default {
  '**/*.{ts,tsx}': (stagedFiles) => [
    `npm run lint -- --fix`,
    `prettier --write ${stagedFiles.join(' ')}`
  ]
}
