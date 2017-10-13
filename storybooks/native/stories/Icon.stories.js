import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, color, number } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { Icons, ResponsiveProvider, Theme } from 'hsl-shared-components';

import CenterView from './CenterView';

const defaultFillGrey = Theme.colors.primary.hslGrey;
const defaultFillBlue = Theme.colors.primary.hslBlue;
const defaultFillWhite = Theme.colors.primary.hslWhite;
const defaultFillGreen = Theme.colors.secondary.hslGreen;
const defaultFillGreyDark = Theme.colors.primary.hslGreyDark;

const defaultSize = 100;
const defaultSizeOptions = {
  range: true,
  min: 50,
  max: 150,
  step: 10,
};
storiesOf('Icons', module)
  .addDecorator(withKnobs)
  .addDecorator(getStory => (
    <ThemeProvider theme={Theme}>
      <ResponsiveProvider>
        <CenterView>{getStory()}</CenterView>
      </ResponsiveProvider>
    </ThemeProvider>))

  .add('AddCard', () => {
    const fill = {
      inner: color('FillInner', defaultFillGrey),
      outer: color('FillOuter', defaultFillBlue)
    };
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.AddCard fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Alert', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Alert height={`${height}`} width={`${height}`} />);
  })
  .add('ArrowDown', () => {
    const fill = color('Fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.ArrowDown fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('ArrowLeft', () => {
    const fill = color('Fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.ArrowLeft fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('ArrowRight', () => {
    const fill = color('Fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.ArrowRight fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Bike', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Bike fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('BikeCircle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.BikeCircle height={`${height}`} width={`${height}`} />);
  })
  .add('BikeRectangle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.BikeRectangle height={`${height}`} width={`${height}`} />);
  })
  .add('Bus', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Bus fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('BusCircle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.BusCircle height={`${height}`} width={`${height}`} />);
  })
  .add('BusRectangle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.BusRectangle height={`${height}`} width={`${height}`} />);
  })
  .add('Briefcase', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Briefcase fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Calendar', () => {
    const fill = {
      inner: color('FillInner', defaultFillWhite),
      outer: color('FillOuter', defaultFillGreyDark)
    };
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Calendar fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('CardOrder', () => {
    const fill = {
      inner: color('FillInner', defaultFillGrey),
      outer: color('FillOuter', defaultFillBlue)
    };
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.CardOrder fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('CardWithCheckmark', () => {
    const fill = {
      inner: color('FillInner', defaultFillGrey),
      outer: color('FillOuter', defaultFillGreen)
    };
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.CardWithCheckmark fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Chat', () => {
    const fill = color('Fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Chat fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Checkmark', () => {
    const fill = color('Fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Checkmark fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('CircleCheckmark', () => {
    const fill = {
      inner: color('FillInner', '#fff'),
      outer: color('FillOuter', defaultFillGreen)
    };
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.CircleCheckmark fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Cog', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Cog fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Cross', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Cross fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('CustomerService', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.CustomerService fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Edit', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Edit fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Envelope', () => {
    const fill = color('Fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Envelope fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Facebook', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Facebook fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Ferry', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Ferry fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('FerryCircle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.FerryCircle height={`${height}`} width={`${height}`} />);
  })
  .add('FerryRectangle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.FerryRectangle height={`${height}`} width={`${height}`} />);
  })
  .add('Fines', () => {
    const fill = {
      inner: color('FillInner', defaultFillWhite),
      outer: color('FillOuter', defaultFillGreyDark)
    };
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Fines fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('HSLLogo', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.HSLLogo fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('HSLLogoNoText', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.HSLLogoNoText fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Info', () => {
    const fill = color('Fill', defaultFillBlue);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Info fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Instagram', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Instagram fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('JourneyPlanner', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.JourneyPlanner fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Latest', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Latest fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Linkedin', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Linkedin fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('LostProperty', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.LostProperty fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Menu', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Menu fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('MobileTicket', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.MobileTicket fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('More', () => {
    const fill = color('fill', defaultFillGreyDark);
    const defaultValue = 50;
    const height = number('Height', defaultValue, defaultSizeOptions);
    return (<Icons.More fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('PhoneWithLogo', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.PhoneWithLogo fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('PositionAlert', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.PositionAlert height={`${height}`} width={`${height}`} />);
  })
  .add('Rail', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Rail fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('RailCircle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.RailCircle height={`${height}`} width={`${height}`} />);
  })
  .add('RailRectangle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.RailRectangle height={`${height}`} width={`${height}`} />);
  })
  .add('Search', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Search fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('SignIn', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.SignIn fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Star', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Star fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Subway', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Subway fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('SubwayCircle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.SubwayCircle height={`${height}`} width={`${height}`} />);
  })
  .add('SubwayRectangle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.SubwayRectangle height={`${height}`} width={`${height}`} />);
  })
  .add('Tickets', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Tickets fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('TicketsDay', () => {
    const fill = {
      inner: color('FillInner', defaultFillWhite),
      outer: color('FillOuter', defaultFillGreyDark)
    };
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.TicketsDay fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Tram', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Tram fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('TramCircle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.TramCircle height={`${height}`} width={`${height}`} />);
  })
  .add('TramRectangle', () => {
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.TramRectangle height={`${height}`} width={`${height}`} />);
  })
  .add('TravelCard', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.TravelCard fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Twitter', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Twitter fill={fill} height={`${height}`} width={`${height}`} />);
  })
  .add('Youtube', () => {
    const fill = color('fill', defaultFillGreyDark);
    const height = number('Height', defaultSize, defaultSizeOptions);
    return (<Icons.Youtube fill={fill} height={`${height}`} width={`${height}`} />);
  });
