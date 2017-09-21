# README #

Shared components to be used in HSL projects. React and styled components.

### Summary of set up ###
- Install Lerna
```
npm install --global lerna

lerna bootstrap
```

### Installing git hooks ###

`hooks/init-hooks`

### Before running storybook ###
Launch watcher
`cd packages/hsl-shared-components && yarn build:watch`

### Running the web storybook ###
`cd storybooks/web && yarn storybook
or
`yarn storybook:web`
latter doesn't display debug information

### Running the native storybook ###
`cd storybooks/native && yarn storybook`
or
`yarn storybook:native`
latter doesn't display debug information

[Running devices](https://github.com/storybooks/storybook/blob/master/app/react-native/docs/using-devices.md)

#### TL;DR ####

IOS
- ?

Android
- launch emulator/device
- `yarn storybook`
- `yarn android-ports` – on first launch or when you need to redo port forwarding
- `yarn android` – launch without port forwarding

### Usage in application ###

`yarn add hsl-shared-components`

or

`npm i --save hsl-shared-components`

In the desired react class use named imports to get the components needed:
`import {Button} from 'hsl-shared-components';`
#### Native ####
- Install react-native-svg peer dependency
```
  react-native link react-native-svg
```
Add ResponsiveProvider to project root
```
import { ResponsiveProvider } from 'hsl-shared-components';

...

<ResponsiveProvider>
  <App ... />
</ResponsiveProvider>

```

### Writing components ###

Make a folderstructure like src/ComponentX/ComponentX.js. (if it needs many files make the ComponentX.js the main one)

When finishing the component add it as an import and a named export to the src/index.js file.

Native components to src/native/index.js

### Update github pages ###
`yarn deploy-storybook`

### Publish package ###

`lerna publish`

## Documentation
* [Z-Index Index](docs/ZIndex.md)

## Common problems ##

### AVD manager button is disabled ###
- Try running Android Studio in administrator mode
or
- Delete .idea folder
- Reopen the project
- Configure the project when studio suggests it

### Mocking a dependency in tests ###
- Example of mocking Touchable in a test
```
  jest.mock('hsl-shared-components/lib/Touchable/Touchable', () => {
    const View = require.requireActual('hsl-shared-components/lib/View/View');
    return View;
  });
```

### SurfaceView should have explicit width and height set ###
- In native svg width and height are floats, so either of these
  - `<Icon.someIcon width="123" height="123" fill="#123456" />`
  - `<Icon.someIcon width={number1} height={number2} fill="#123456" />`
