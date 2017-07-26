# README #

Shared components to be used in HSL projects. React and styled components.

### Summary of set up ###

All the needed setup is command `yarn install` in project root

### Installing git hooks ###

`hooks/init-hooks`

### Running the web storybook ###

`yarn storybook:web`

### Running the native storybook ###

`yarn storybook`

[Running devices](https://github.com/storybooks/storybook/blob/master/app/react-native/docs/using-devices.md)

#### TL;DR ####

IOS
- ?

Android
- launch emulator/device
- `yarn storybook`
- ```
  adb reverse tcp:8081 tcp:8081
  adb reverse tcp:9001 tcp:9001
  adb reverse tcp:7007 tcp:7007
  yarn run android
  ```

### Usage in application ###

`yarn add hsl-shared-components`

or

`npm i --save hsl-shared-components`

In the desired react class use named imports to get the components needed:
`import {Button} from 'hsl-shared-components';`

### Writing components ###

Make a folderstructure like src/ComponentX/ComponentX.js. (if it needs many files make the ComponentX.js the main one)

These files are watched by babel in command `yarn run build:babel` which is included in `yarn start`. Babel will build the files into lib/ComponentX/ComponentX.js for ES5 which is then used in the receiving application.

When finishing the component add it as an import and a named export to the src/index.js file.

### Deployment instructions ###

When pushing to the repository make sure to include the lib/**/*.js files so that the compiled ES5 versions of the components are always up to date on the repo.

### Update github pages ###
`yarn deploy-storybook`

### Publish package ###
[Bump version](https://docs.npmjs.com/cli/version)

`yarn build`

`cd build && npm publish`

## Documentation
* [Z-Index Index](docs/ZIndex.md)

## Common problems ##

### AVD manager button is disabled ###
- Try running Android Studio in administrator mode
or
- Delete .idea folder
- Reopen the project
- Configure the project when studio suggests it

### Expo: something went wrong ###
- rm -rf $HOME/.expo/*
- Android Virtual Device Manager -> actions -> Wipe data
