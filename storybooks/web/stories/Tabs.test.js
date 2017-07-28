import initStoryshots from '@storybook/addon-storyshots';

jest.mock('hsl-shared-components/lib/Touchable/Touchable', () => {
  const View = require.requireActual('hsl-shared-components/lib/View/View');
  return View;
});

initStoryshots({
  configPath: 'storybook',
  storyKindRegex: /^Tabs$/
});
