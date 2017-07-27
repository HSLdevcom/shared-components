import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({
  configPath: 'storybook_web',
  storyKindRegex: /^Container$/
});
