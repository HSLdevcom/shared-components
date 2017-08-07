import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import View from '../View';
import Button, { RoundButton } from '../Button';
import Text, { ListText } from '../Typography';
import { size } from '../utils';
import FooterContainer from './FooterContainer';

const StyledButton = Button.extend`
  margin-top: ${size(50)};
  width: 50%;
`;

const HorizontalView = View.extend`
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;

const FlexStart = View.extend`
  align-items: flex-start;
`;

const CopyrightText = Text.extend`
  color: ${props => props.theme.primary};
  margin-top: ${size(50)};
`;


const Footer = styled(({ account, socialMedia, info, ...rest }) => (
  <View {...rest}>
    { account &&
      <FooterContainer title={account.title}>
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
      </FooterContainer>
    }
    { socialMedia &&
      <FooterContainer border={!!account} title={socialMedia.title}>
        <HorizontalView>
          { socialMedia.icons.map(SM => (
            <RoundButton
              onPress={SM.onPress}
              onLongPress={SM.onLongPress}
            >
              {React.cloneElement(SM.icon)}
            </RoundButton>)
            )
          }
        </HorizontalView>
      </FooterContainer>
    }
    <FooterContainer border={!!account || !!socialMedia}>
      <View>
        { info.links }
      </View>
      <CopyrightText size={2}>{info.copyright}</CopyrightText>
    </FooterContainer>
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
  socialMedia: PropTypes.shape({
    title: PropTypes.string,
    icons: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.node,
      onPress: PropTypes.func,
      onLongPress: PropTypes.func
    }))
  })
};

Footer.displayName = 'Footer';

export default Footer;

