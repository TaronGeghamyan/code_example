# Attention. This code is not a complete project. This is part of a real project. From which everything that could be a commercial secret was severely removed!

## Table of Contents
#### 1. [Getting Started](#getting-started)
#### 2. [Running the app](#running-the-app)
#### 3. [Filesystem rules](#filesystem-rules)

## Getting Started


```bash
  npm i
```

## Running the app

Your app should be ready to boot:

```bash
  npm start
```

This will start the application in local environment: `localhost:8009`

## Main branch update

After each successful DEV9 regression, we need to add new commits to `main` branch and rebase `dev` branch after it. This is the instruction:

1. Create a new PR from `dev` to `main`;
2. IMPORTANT: Merge PR using `Rebase` option, not `Squash and merge`;
3. Pull `dev` and `main` locally with `git pull --rebase`;
4. Rebase dev from `main`: `git rebase main`;
5. Push changes: `git push --force-with-lease`;
6. If you have any active branch, rebase it from dev: `git rebase dev`.

## Style Guide

### Responsive layout guidelines

1. We have the following configuration:

```
  xs: 0,
  sm: 36rem,
  md: 36rem,
  lg: 62rem,
  xl: 75rem,
  xxl: 87.5rem,
```

Media-queries (src/styles/breakpoints.scss)
```
  $small: 36rem;
  $medium: 36rem;
  $large: 62rem;
  $x-large: 75rem;
  $x-x-large: 87.5rem;
```

**Please never modify these breakpoints!**

2. Please follow mobile-first approach while developing: define default styles for mobile layout, than override id with `min-width: $breakpoint`.

**Avoid using `max-width` if possible.**

3. Please use Bootstrap/CSS Grid for **page** layout. In case of components layout; try to stick to Flexboxes only if possible.

4. We are using the following breakpoints for responsiveness:

| Device | min-width | max-width | Breakpoint (>=) | Bootstrap (>=)  |
| ------ | --------- | --------- | ---------- | --------- |
| Mobile | --- | 767 | --- | --- |
| Tablet | 768 | 1199 | $medium | md |
| Desktop | 1200 | --- | $x-large | xl |

5. If you see that some designs are not consistent (e.g. violating Bootstrap rules), please don't hesitate to clarify the issue with the design team first.

## Filesystem Rules

1. Component filenames - UpperCamelCase.tsx
2. Component folder names - UpperCamelCase
3. Component style filenames - UpperCamelCase.scss
4. Component test filenames - UpperCamelCase.test.tsx
5. Common styles filenames - kebab-case.scss
6. Common ts files - kebab-case.ts
7. Common ts test files - kebab-case.test.ts
8. Common test files folder name - `__tests__`
