# abilita

## Goal

Simple, impressive and clean personal / portfolio website

## Installation

- Install [nvm](https://github.com/nvm-sh/nvm)
- Setup node
```
nvm install
nvm use
```
- Install NPM packages
```
npm install
```
- Start development server
```
npm run dev
```

## Deployment

- Perform build, this will generate static HTML site using [SSG](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
```
npm run build
```
- Use nginx, apache or similar http server to setup site, here is [nginx configuration file](docs/nginx.conf)

## Enable Google Analytics

### Method 1

- Set NEXT_PUBLIC_GOOGLE_ANALYTICS_ID environment variable
```
# .env.production
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID = "G-<GA_ID>"
```

### Method 2
- Set environment variable in your Linux shell and perform build
```
export NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="G-<GA_ID>" && npm run build
```

## NPM Packages / Libraries

- [Next.js](https://nextjs.org/docs)
- [Bootstrap](https://getbootstrap.com)
- [saas](https://sass-lang.com)
- [animate.css](https://animate.style)
- [aos](https://michalsnik.github.io/aos)
- [typed.js](https://mattboldt.com/demos/typed-js)

## Google Fonts

- [Nunito](https://fonts.google.com/specimen/Nunito)
- [Roboto](https://fonts.google.com/specimen/Roboto)

Refer [assets/scss/globals.scss](assets/scss/globals.scss)

## Icons

- [Font Awesome](https://fontawesome.com/)