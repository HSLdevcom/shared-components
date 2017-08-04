import React from 'react';

import styled from 'styled-components/primitives';
import { lighten } from 'polished';
import { withTheme } from 'styled-components';

import View from '../View';
import Button from '../Button';
import Text, { H2, ListText } from '../Typography';
import Icons from '../Icons';
import { size } from '../utils';

const SocialMedia = Button.extend`
  height: ${size(80)};
  width: ${size(80)};
  border-color: ${props => props.theme.primary};
`;

const Facebook = withTheme(({ theme }) => (
  <Icons.Facebook height={size(36)} width={size(18)} fill={theme.primary} />
));

const Twitter = withTheme(({ theme }) => (
  <Icons.Twitter height={size(27)} width={size(36)} fill={theme.primary} />
));

const Instagram = withTheme(({ theme }) => (
  <Icons.Instagram height={size(30)} width={size(30)} fill={theme.primary} />
));


const StyledButton = Button.extend`
  margin-top: ${size(50)};
  width: 50%;
`;

const Containers = styled(({ border, ...rest }) => (
  <View {...rest} />
))`
  padding-vertical: ${size(50)};
  border-style: solid;
  border-color: ${props => lighten(0.15, props.theme.default)};
  border-top-width: ${props => (props.border ? '2px' : '0px')};
`;

const HorizontalView = View.extend`
  margin-top: ${size(50)};
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

const FlexStart = View.extend`
  margin-top: ${size(40)};
  align-items: flex-start;
`;

const StyledListText = ListText.extend`

`;

const Footer = styled(({ ...rest }) => (
  <View {...rest}>
    <Containers>
      <H2>Ota HSL -tunnus käyttöön</H2>
      <FlexStart>
        <StyledListText size={2}>Lataa matkakorttia verkossa</StyledListText>
        <StyledListText size={2}>Hyödynnä asiakasetuja</StyledListText>
        <StyledListText size={2}>Tallenna suosikki linjat, reitit ja paikat</StyledListText>
        <StyledListText size={2}>Ota kaupunkipyörät käyttöön</StyledListText>
      </FlexStart>
      <StyledButton primary large>Luo tunnus</StyledButton>
    </Containers>
    <Containers border>
      <H2>Tykkää, seuraa ja keskustele</H2>
      <HorizontalView>
        <SocialMedia rounded><Facebook /></SocialMedia>
        <SocialMedia rounded><Twitter /></SocialMedia>
        <SocialMedia rounded><Instagram /></SocialMedia>
      </HorizontalView>
    </Containers>
    <Containers border>
      <Text>Yhteystiedot</Text>
      <Text>Tietosuojalauseke</Text>
      <Text>Rekisteriseloste</Text>
      <Text>Tietoa sivustosta</Text>
      <Text>© Copyright HSL</Text>
    </Containers>
  </View>
))`
  width: 100%;
  align-items: stretch;
  border-style: solid;
  border-top-width: 4px;
  border-color: ${props => props.theme.primary};
`;

export default Footer;

