import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { lighten } from 'polished';

import View from '../View';
import Button, { RoundButton } from '../Button';
import Text, { H2, ListText } from '../Typography';
import { size } from '../utils';

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

const CopyrightText = Text.extend`
  color: ${props => props.theme.primary};
  margin-top: ${size(50)};
`;


const Footer = styled(({ account, socialMedia, info, ...rest }) => (
  <View {...rest}>
    { account &&
      <Containers>
        <H2>{account.title}</H2>
        <FlexStart>
          { account.benefits.map(txt => (<ListText size={2}>{txt}</ListText>))}
        </FlexStart>
        <StyledButton
          primary
          large
          onPress={account.button.onPress}
        >
          {account.button.text}
        </StyledButton>
      </Containers>
    }
    { socialMedia &&
      <Containers border>
        <H2>Tykkää, seuraa ja keskustele</H2>
        <HorizontalView>
          { socialMedia &&
            socialMedia.map(SM => (
              <RoundButton
                onPress={SM.onPress}
                onLongPress={SM.onLongPress}
              >
                {React.cloneElement(SM.icon)}
              </RoundButton>)
            )
          }
        </HorizontalView>
      </Containers>
    }
    <Containers border>
      <View>
        { info.links }
      </View>
      <CopyrightText size={2}>{info.copyright}</CopyrightText>
    </Containers>
  </View>
))`
  width: 100%;
  align-items: stretch;
  border-style: solid;
  border-top-width: 4px;
  border-color: ${props => props.theme.primary};
`;

Footer.propTypes = {
  account: PropTypes.shape({
    title: PropTypes.string,
    button: PropTypes.shape({
      text: PropTypes.string,
      onPress: PropTypes.func
    }),
    benefits: PropTypes.arrayOf(PropTypes.string)
  }),
  info: PropTypes.shape({
    copyright: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.node)
  }),
  socialMedia: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.node,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func
  }))
};

export default Footer;

