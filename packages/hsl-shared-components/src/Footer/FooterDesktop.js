import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import View from '../View';
import Button, { RoundButton } from '../Button';
import Text, { ListText } from '../Typography';
import { size } from '../utils';
import DesktopContainer from './DesktopContainer';

const StyledButton = Button.extend`
  margin-top: ${size(21)};
  width: 50%;
`;

const HorizontalView = View.extend`
  flex-direction: row;
  justify-content: space-between;
`;

const FlexStart = View.extend`
  align-items: flex-start;
  width: 100%;
`;

const CopyrightText = Text.extend`
  color: ${props => props.theme.primary};
  margin-top: ${size(50)};
`;


const Footer = styled(({ account, socialMedia, info, ...rest }) => (
  <View {...rest}>
    <HorizontalView>
      { account &&
        <DesktopContainer title={account.title}>
          <HorizontalView>
            <StyledButton
              primary
              onPress={account.button.onPress}
            >
              {account.button.text}
            </StyledButton>
            <FlexStart>
              { account.benefits.map(txt => (<ListText key={txt}>{txt}</ListText>))}
            </FlexStart>
          </HorizontalView>
        </DesktopContainer>
      }
      { socialMedia &&
        <DesktopContainer title={socialMedia.title}>
          <HorizontalView>
            { socialMedia.icons.map(SM => (
              <RoundButton
                key={SM.key}
                onPress={SM.onPress}
                onLongPress={SM.onLongPress}
              >
                {React.cloneElement(SM.icon)}
              </RoundButton>)
              )
            }
          </HorizontalView>
        </DesktopContainer>
      }
    </HorizontalView>
    <DesktopContainer border={!!account || !!socialMedia}>
      <HorizontalView>
        { info.links }
        <CopyrightText>{info.copyright}</CopyrightText>
      </HorizontalView>
    </DesktopContainer>
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
      key: PropTypes.string,
      onPress: PropTypes.func,
      onLongPress: PropTypes.func
    }))
  })
};

Footer.displayName = 'Footer';

export default Footer;

