import initStoryshots from '@storybook/addon-storyshots';

// eslint-disable-next-line no-undef
jest.mock('hsl-shared-components/lib/Touchable/Touchable', () => {
  const View = require.requireActual('hsl-shared-components/lib/View/View');
  return View;
});


// eslint-disable-next-line no-undef
jest.mock('hsl-shared-components/lib/View/View', () => {
  const View = require.requireActual('./mocks/View');
  return View;
});

// eslint-disable-next-line no-undef
jest.mock('hsl-shared-components/lib/Animated/View', () => {
  const AView = require.requireActual('./mocks/AView');
  return AView;
});

// eslint-disable-next-line no-undef
jest.mock('hsl-shared-components/lib/Animated/Div', () => {
  const ADiv = require.requireActual('./mocks/ADiv');
  return ADiv;
});


initStoryshots({
  configPath: 'storybook',
  storyKindRegex: /^Menu$/
});
