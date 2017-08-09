import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, color } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { Icons } from 'hsl-shared-components';

import Theme from './../themes/themes.hsl';
import CenterView from './CenterView';

storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <CenterView>{getStory()}</CenterView>
    </ThemeProvider>))
  .add('AddCard', () => {
    const fill = {
      inner: color('FillInner', '#888'),
      outer: color('FillOuter', '#007ac9')
    };
    return (<Icons.AddCard fill={fill} height="200" width="200" />);
  }, { displayName: 'AddCard' })

  .add('Alert', () => {
    const fill = color('Fill', '#007ac9');
    return (<Icons.Alert fill={fill} height="200" width="200" />);
  }, { displayName: 'Alert' })

  .add('ArrowDown', () => {
    const fill = color('Fill', '#007ac9');
    return (<Icons.ArrowDown fill={fill} height="200" width="200" />);
  }, { displayName: 'ArrowDown' })

  .add('ArrowLeft', () => {
    const fill = color('Fill', '#007ac9');
    return (<Icons.ArrowLeft fill={fill} height="200" width="200" />);
  }, { displayName: 'ArrowLeft' })

  .add('CardOrder', () => {
    const fill = {
      inner: color('FillInner', '#888'),
      outer: color('FillOuter', '#007ac9')
    };
    return (<Icons.CardOrder fill={fill} height="200" width="200" />);
  }, { displayName: 'CardOrder' })

  .add('CardWithCheckmark', () => {
    const fill = {
      inner: color('FillInner', '#888'),
      outer: color('FillOuter', '#64BE14')
    };
    return (<Icons.CardWithCheckmark fill={fill} height="200" width="200" />);
  }, { displayName: 'CardWithCheckmark' })

  .add('Checkmark', () => {
    const fill = {
      inner: color('FillInner', '#fff'),
      outer: color('FillOuter', '#00c920')
    };
    return (<Icons.Checkmark fill={fill} height="200" width="200" />);
  }, { displayName: 'Checkmark' })

  .add('Cog', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Cog fill={fill} height="200" width="200" />);
  }, { displayName: 'Cog' })

  .add('Cross', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Cross fill={fill} height="200" width="200" />);
  }, { displayName: 'Cross' })

  .add('Edit', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Edit fill={fill} height="200" width="200" />);
  }, { displayName: 'Edit' })

  .add('Logo', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Logo fill={fill} height="200" width="200" />);
  }, { displayName: 'Logo' })

  .add('HSLLogo', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.HSLLogo fill={fill} height="200" width="200" />);
  }, { displayName: 'HSLLogo' })

  .add('Info', () => {
    const fill = color('Fill', '#007ac9');
    return (<Icons.Info fill={fill} height="200" width="200" />);
  }, { displayName: 'Info' })

  .add('JourneyPlanner', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.JourneyPlanner fill={fill} height="200" width="200" />);
  }, { displayName: 'JourneyPlanner' })
  .add('Latest', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Latest fill={fill} height="200" width="200" />);
  }, { displayName: 'Latest' })
  .add('More', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.More fill={fill} height="200" width="200" />);
  }, { displayName: 'More' })

  .add('Menu', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Menu fill={fill} height="200" width="200" />);
  }, { displayName: 'Menu' })

  .add('Search', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Search fill={fill} height="200" width="200" />);
  }, { displayName: 'Search' })
  .add('SignIn', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.SignIn fill={fill} height="200" width="200" />);
  }, { displayName: 'SignIn' })
  .add('Tickets', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Tickets fill={fill} height="200" width="200" />);
  }, { displayName: 'Tickets' })
  .add('TravelCard', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.TravelCard fill={fill} height="200" width="200" />);
  }, { displayName: 'TravelCard' })
  .add('Youtube', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Youtube fill={fill} height="200" width="200" />);
  }, { displayName: 'Youtube' })
  .add('Twitter', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Twitter fill={fill} height="200" width="200" />);
  }, { displayName: 'Twitter' })
  .add('Facebook', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Facebook fill={fill} height="200" width="200" />);
  }, { displayName: 'Facebook' })
  .add('Instagram', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Instagram fill={fill} height="200" width="200" />);
  }, { displayName: 'Instagram' })
  .add('Linkedin', () => {
    const fill = color('fill', '#d1d1d1');
    return (<Icons.Linkedin fill={fill} height="200" width="200" />);
  }, { displayName: 'Linkedin' });
