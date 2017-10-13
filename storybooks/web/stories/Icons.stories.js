import React from 'react';
import { setAddon, storiesOf } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs, color, number } from '@storybook/addon-knobs';

import { Icons, Theme } from 'hsl-shared-components';

setAddon(JSXAddon);

const defaultFill = Theme.colors.primary.hslBlue;
const defaultFillWhite = Theme.colors.primary.hslWhite;
const defaultFillGreen = Theme.colors.primary.hslGreen;
const defaultFillGrey = Theme.colors.primary.hslGrey;
const defaultFillGreyDark = Theme.colors.primary.hslGreyDark;

const stories = storiesOf('Icons', module);
stories.addDecorator(withKnobs);

stories.addWithJSX('AddCard', () => {
  const fill = {
    inner: color('FillInner', defaultFillGrey),
    outer: color('FillOuter', defaultFill)
  };
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.AddCard fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Alert', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Alert height={`${height}rem`} />);
});

stories.addWithJSX('ArrowDown', () => {
  const fill = color('Fill', defaultFill);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.ArrowDown fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('ArrowLeft', () => {
  const fill = color('Fill', defaultFill);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.ArrowLeft fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('ArrowRight', () => {
  const fill = color('Fill', defaultFill);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.ArrowRight fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Bike', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Bike fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('BikeCircle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.BikeCircle height={`${height}rem`} />);
});

stories.addWithJSX('BikeRectangle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.BikeRectangle height={`${height}rem`} />);
});

stories.addWithJSX('Bus', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Bus fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('BusCircle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.BusCircle height={`${height}rem`} />);
});

stories.addWithJSX('BusRectangle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.BusRectangle height={`${height}rem`} />);
});

stories.addWithJSX('Briefcase', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Briefcase fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Calendar', () => {
  const fill = {
    inner: color('FillInner', defaultFillWhite),
    outer: color('FillOuter', defaultFill)
  };
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Calendar fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Card', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Card fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('CardOrder', () => {
  const fill = {
    inner: color('FillInner', defaultFillGrey),
    outer: color('FillOuter', defaultFill)
  };
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.CardOrder fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('CardWithCheckmark', () => {
  const fill = {
    inner: color('FillInner', defaultFillGrey),
    outer: color('FillOuter', defaultFillGreen)
  };
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.CardWithCheckmark fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Chat', () => {
  const fill = color('Fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Chat fill={fill} height={`${height}em`} />);
});

stories.addWithJSX('Checkmark', () => {
  const fill = color('Fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Checkmark fill={fill} height={`${height}em`} />);
});

stories.addWithJSX('CircleCheckmark', () => {
  const fill = {
    inner: color('FillInner', '#fff'),
    outer: color('FillOuter', defaultFillGreen)
  };
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.CircleCheckmark fill={fill} height={`${height}em`} />);
});

stories.addWithJSX('Cog', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Cog fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Cross', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Cross fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('CustomerService', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.CustomerService fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Edit', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Edit fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Envelope', () => {
  const fill = color('Fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Envelope fill={fill} height={`${height}em`} />);
});

stories.addWithJSX('Facebook', () => {
  const fill = color('fill', defaultFill);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Facebook fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Ferry', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Ferry fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('FerryCircle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.FerryCircle height={`${height}rem`} />);
});

stories.addWithJSX('FerryRectangle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.FerryRectangle height={`${height}rem`} />);
});

stories.addWithJSX('Fines', () => {
  const fill = {
    inner: color('FillInner', defaultFillWhite),
    outer: color('FillOuter', defaultFill)
  };
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Fines fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('HSLLogo', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.HSLLogo fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('HSLLogoNoText', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.HSLLogoNoText fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Info', () => {
  const fill = color('Fill', defaultFill);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Info fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Instagram', () => {
  const fill = color('fill', defaultFill);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Instagram fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('JourneyPlanner', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.JourneyPlanner fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Latest', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Latest fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Linkedin', () => {
  const fill = color('fill', defaultFill);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Linkedin fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('LostProperty', () => {
  const fill = color('fill', defaultFill);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.LostProperty fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Menu', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Menu fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('MobileTicket', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.MobileTicket fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('More', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 2;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.More fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('PhoneWithLogo', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.PhoneWithLogo fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('PositionAlert', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.PositionAlert height={`${height}rem`} />);
});

stories.addWithJSX('Rail', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Rail fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('RailCircle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.RailCircle height={`${height}rem`} />);
});

stories.addWithJSX('RailRectangle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.RailRectangle height={`${height}rem`} />);
});

stories.addWithJSX('Search', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Search fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('SignIn', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.SignIn fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Star', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Star height={`${height}rem`} />);
});

stories.addWithJSX('Subway', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Subway fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('SubwayCircle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.SubwayCircle height={`${height}rem`} />);
});

stories.addWithJSX('SubwayRectangle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.SubwayRectangle height={`${height}rem`} />);
});

stories.addWithJSX('Tickets', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Tickets fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('TicketsDay', () => {
  const fill = {
    inner: color('FillInner', defaultFillWhite),
    outer: color('FillOuter', defaultFill)
  };
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.TicketsDay fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Tram', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Tram fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('TramCircle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.TramCircle height={`${height}rem`} />);
});

stories.addWithJSX('TramRectangle', () => {
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.TramRectangle height={`${height}rem`} />);
});

stories.addWithJSX('TravelCard', () => {
  const fill = color('fill', defaultFillGreyDark);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.TravelCard fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Twitter', () => {
  const fill = color('fill', defaultFill);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Twitter fill={fill} height={`${height}rem`} />);
});

stories.addWithJSX('Youtube', () => {
  const fill = color('fill', defaultFill);
  const defaultValue = 10;
  const options = {
    range: true,
    min: 0.1,
    max: 20,
    step: 0.1,
  };
  const height = number('Height', defaultValue, options);
  return (<Icons.Youtube fill={fill} height={`${height}rem`} />);
});
