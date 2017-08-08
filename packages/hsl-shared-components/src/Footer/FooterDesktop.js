import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { lighten } from 'polished';

import View from '../View';
import Button, { RoundButton } from '../Button';
import Text, { ListText, H3 } from '../Typography';
import { size } from '../utils';

const HorizontalView = View.extend`
  flex-direction: row;
  justify-content: space-between;
`;

const FlexWrapper = View.extend`
  flex: ${props => props.flex};
  align-items: stretch;
`;


const Account = View.extend`
  padding-left: ${size(150)};
  flex-direction: row;
  align-items: stretch;
  justify-content: start;
`;

const AccountBtnTitle = View.extend`
  align-items: flex-start;
`;

const StyledButton = Button.extend`
  margin-top: ${size(21)};
  width: 50%;
`;

const Benefits = View.extend`
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${size(6)};
  margin-left: ${size(76)};
`;

const SocialMedia = View.extend`
  align-items: flex-start;
  flex: 1;
  padding-horizontal: ${size(14)};
  border-style: solid;
  border-color: ${props => lighten(0.15, props.theme.default)};
  border-left-width: 1px;
`;

const Info = View.extend`
  flex-direction: row;
  padding-top: ${size(20)};
  padding-bottom: ${size(64)}
  margin-top: ${size(26)};
  border-style: solid;
  border-color: ${props => lighten(0.15, props.theme.default)};
  border-top-width: 2px;
`;

const InfoLinks = HorizontalView.extend`
  justify-content: space-between;
  padding-horizontal: ${size(150)};
`;

const CopyrightText = Text.extend`
  color: ${props => props.theme.primary};
  flex: 1;
  text-align: center;
`;

const Footer = styled(({ account, socialMedia, info, ...rest }) => (
  <View {...rest}>
    <HorizontalView>
      { account &&
        <FlexWrapper flex="2">
          <Account>
            <AccountBtnTitle>
              <H3>{account.title}</H3>
              <StyledButton
                primary
                small
                onPress={account.button.onPress}
              >
                {account.button.text}
              </StyledButton>
            </AccountBtnTitle>
            <Benefits>
              { account.benefits.map(txt => (<ListText key={txt}>{txt}</ListText>))}
            </Benefits>
          </Account>
        </FlexWrapper>
      }
      { socialMedia &&
        <SocialMedia>
          <H3>{socialMedia.title}</H3>
          <HorizontalView>
            { socialMedia.icons.map(SM => (
              <RoundButton
                key={SM.key}
                onPress={SM.onPress}
                onLongPress={SM.onLongPress}
                small
              >
                {React.cloneElement(SM.icon)}
              </RoundButton>)
              )
            }
          </HorizontalView>
        </SocialMedia>
      }
    </HorizontalView>
    <Info>
      <FlexWrapper flex="2">
        <InfoLinks>
          { info.links }
        </InfoLinks>
      </FlexWrapper>
      <CopyrightText>{info.copyright}</CopyrightText>
    </Info>
  </View>
))`
  width: 100%;
  align-items: stretch;
  border-style: solid;
  border-top-width: 4px;
  border-color: ${props => props.theme.primary};
  padding-top: ${size(36)};
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

