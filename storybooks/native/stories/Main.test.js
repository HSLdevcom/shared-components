import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'react-native',
  storyKindRegex: /^Main$/
});
