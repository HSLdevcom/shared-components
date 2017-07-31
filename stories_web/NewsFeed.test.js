import initStoryshots from '@storybook/addon-storyshots';

// eslint-disable-next-line no-undef
jest.mock('../src/Touchable/Touchable');

initStoryshots({
  configPath: 'storybook_web',
  storyKindRegex: /^NewsFeed$/
});
