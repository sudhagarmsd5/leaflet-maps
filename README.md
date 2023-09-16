# Angular

- Angular Docs - <https://angular.io>

- Angular Material Docs - <https://material.angular.io>

- Tailwind CSS - <https://tailwindcss.com>

## Basic Packages

```bash
ng add @angular/material

ng add @angular/pwa

yarn add tailwindcss postcss autoprefixer

yarn add leaflet

yarn add -D @types/leaflet

yarn add @asymmetrik/ngx-leaflet

yarn add leaflet-draw

yarn add @asymmetrik/ngx-leaflet-draw

yarn add -D @types/leaflet-draw

yarn add leaflet-routing-machine

yarn add lrm-graphhopper

yarn add -D @types/leaflet-routing-machine

yarn add leaflet.icon.glyph


```

## @angular/material Installation

- Choose a prebuilt theme name, or "custom" for a custom theme: Select Custom

- Set up global Angular Material typography styles?: Yes

- Set up browser animations for Angular Material?: Yes

## Tailwind CSS Installation

- <https://tailwindcss.com/docs/guides/angular>

## CLI Commands

### npm

```bash
1) Install dependencies - npm install
2) Install package - npm install [package]
3) Install dev package - npm install --save-dev [package]
4) Uninstall package - npm uninstall [package]
5) Uninstall dev package - npm uninstall --save-dev [package]
6) Update - npm update
7) Update Package - npm update [package]
8)Global install package - npm install --global [package]
9)Global uninstall package - npm uninstall --global [package]

npm init
npm run
npm test
npm login (and logout)
npm link
npm publish
npm cache clean
```

### yarn

```bash
1) Install dependencies - yarn
2) Install package - yarn add [package]
3) Install dev package - yarn add --dev [package]
4) Uninstall package - yarn remove [package]
5) Uninstall dev package - yarn remove [package]
6) Update - yarn upgrade
7) Update Package - yarn upgrade [package]
8)Global install package - yarn upgrade [package]
9)Global uninstall package - yarn global remove [package]

yarn init
yarn run
yarn test
yarn login (and logout)
yarn link
yarn publish
yarn cache clean
```

## Package.json

- dev_dependencies are modules which are only required during development,

- while dependencies are modules which are also required at runtime.

## Resource links

1. Leaflet

- <https://leafletjs.com/>

  2.Leflet in Angular

- <https://medium.com/runic-software/the-simple-guide-to-angular-leaflet-maps-41de83db45f1>

## Note

1.Leaflet

```scss
@import "leaflet/dist/leaflet.css";
```

- import this stylesheet in styles.scss file

```ts
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
imports: [LeafletModule];
```

- import this in your components module

```scss
@import "leaflet-draw/dist/leaflet.draw.css";
```

2.leaflet-draw

- import this stylesheet in styles.scss file

```ts
import { LeafletDrawModule } from "@asymmetrik/ngx-leaflet-draw";
imports: [LeafletDrawModule];
```

- import this in your components module

  3.leaflet routing

```scss
@import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
@import "leaflet-control-geocoder/dist/Control.Geocoder.css";
```

- import this stylesheet in styles.scss file

- use the lrm-graphhopper-1.2.0.js file in the shared folder
  and create a types folder in the src/types create a new file lrm-graphhopper.d.ts
  and in the tsconfig.json add these below lines of code.

```json
 "typeRoots": [
      "./src/types",
      "./node_modules/@types"
    ]
```
