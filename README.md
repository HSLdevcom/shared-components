# README #

Shared components to be used in HSL projects. React and styled components.

### Summary of set up ###

All the needed setup is command `yarn install` in project root

### Installing git hooks ###

`hooks/init-hooks`

### Running the storybook ###

`yarn storybook`

### Usage in application ###

Add this repository as a dependency to your project in package.json and give it a name like 'sharedcomponents'.

In the desired react class use named imports to get the components needed:
`import {Button} from 'sharedcomponents';`

### Writing components ###

Make a folderstructure like src/ComponentX/ComponentX.js. (if it needs many files make the ComponentX.js the main one)

These files are watched by babel in command `yarn run build:babel` which is included in `yarn start`. Babel will build the files into lib/ComponentX/ComponentX.js for ES5 which is then used in the receiving application.

When finishing the component add it as an import and a named export to the src/index.js file.

### Deployment instructions ###

When pushing to the repository make sure to include the lib/**/*.js files so that the compiled ES5 versions of the components are always up to date on the repo.
