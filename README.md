# README #

Shared components to be used in HSL projects. React and styled components.

### Summary of set up ###

All the needed setup is command `yarn install` in project root and in `testServer`-directory

### Running server ###

Running the test server to see components with command `yarn start`
This command runs both babel and server with watch so that all updates happen live while developing.

### Usage in application ###

Add this repository as a dependency to your project in package.json and give it a name like 'sharedcomponents'.

In the desired react class use named imports to get the components needed:
`import {Button} from 'sharedcomponents';`

### Writing components ###

Make a folderstructure like src/ComponentX/ComponentX.js. (if it needs many files make the ComponentX.js the main one)

These files are watched by babel in command `yarn run build:babel` which is included in `yarn start`. Babel will build the files into lib/ComponentX/ComponentX.js for ES5 which is then used in the receiving application.

When finishing the component add it as an import and a named export to the src/index.js file.

For testing the component inside this repository import the new component with its name in testServer/src/ComponentList.js to see it visually inside the testServer (defaults to localhost:3000).

### Deployment instructions ###

When pushing to the repository make sure to include the lib/**/*.js files so that the compiled ES5 versions of the components are always up to date on the repo.
