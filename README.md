## Frontend Mentor - Project tracking intro component solution

This is a solution to the [Project tracking intro component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/project-tracking-intro-component-5d289097500fcb331a67d80e). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

<p>
  <a href="https://www.frontendmentor.io/solutions/mobile-first-pixel-perfect---html-and-css-and-js-01BVtgRs9d">
    <img
      alt="Solution post"
      src="https://img.shields.io/badge/Frontendmentor-blue?label=Solution%20on"
    /></a>
  <a href="https://haquanq-frontendmentor.github.io/project-tracking-intro-component/">
    <img
      alt="Live demo"
      src="https://img.shields.io/badge/Demo-teal?label=Live"
    /></a>
  <a href="./LICENSE"
    ><img
      allt="MIT License"
      src="https://img.shields.io/badge/MIT-blue?label=license"
  /></a>
</p>

## Table of contents

- [Project overview](#sunrise-project-overview)
- [Development workflow](#stars-development-workflow)
- [Working in this repository](#astronaut-working-in-this-repository)

## :sunrise: Project overview

### Challenge equirements

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Create the background shape using code

### Todo

Accessibility

- [x] Responsive accross different screen sizes
- [x] Interactive elements have clear focus indicator

### Preview

![](./docs/design/desktop-design.jpg)

## :stars: Development workflow

### Approach

Site built with mobile-first workflow to prioritize mobile devices, made accessible using [ARIA Authoring Practices Guide (APG)](https://www.w3.org/WAI/ARIA/apg/).

### Tools

- **PostCSS:** use SASS-like features in vanilla CSS, interpolation and minification..
- **JavaScript**: add interactivity for components, handle application logic.
- **Vite**: fast development server, production build and easy configuration.
- **Prettier**: code formatter to maintain consistent coding style.
- **Stylelint**: lint for CSS coding convention mistakes.
- **Husky & lint-staged:** manage git hooks (primary used for pre-commit hook: linting, formatting).

### Deployment

- Deployed on github page using Github Actions (manually triggered).

## :astronaut: Working in this repository

### Presequisites

Having these tools installed:

- Git (prefer lastest LTS version)
- NodeJS (prefer latest LTS version)

### Clone this project to your machine

Open new terminal, run the following command:

```
git clone https://github.com/haquanq-frontendmentor/project-tracking-intro-component.git
```

Then, run `npm install` to install all dependencies.

```
npm install
```

### Start development server

In terminal, run `npm run dev` to start development server:

```
npm run dev
```
