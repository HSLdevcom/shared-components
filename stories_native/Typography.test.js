import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  configPath: 'storybook_native',
  framework: 'react-native',
  storyKindRegex: /^Typography$/
});
