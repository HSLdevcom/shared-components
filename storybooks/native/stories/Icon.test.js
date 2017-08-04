import initStoryshots from '@storybook/addon-storyshots';

// eslint-disable-next-line no-undef
jest.mock('react-native-svg');

initStoryshots({
  framework: 'react-native',
  storyKindRegex: /^Icons$/
});
