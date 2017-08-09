import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { lighten } from 'polished';

import View from '../View';
import Button, { RoundButton } from '../Button';
import Text, { ListText, H3 } from '../Typography';
import { size, WindowSize } from '../utils';

const LEFT_PADDING = 150;

const HorizontalView = View.extend`
  flex-direction: row;
  justify-content: flex-start;
`;

const FlexWrapper = styled(({ flex, ...rest }) => (
  <View {...rest} />
))`
  flex: ${props => props.flex};
  align-items: stretch;
`;

const AccountSMWrapper = WindowSize(styled(({ width, ...rest }) => (
  <HorizontalView {...rest} />
))`
  ${props => (props.theme.sizes.large >= props.width) && `
    flex-direction: column;
    align-items: stretch;
  `};
`);

const AccountFlexWrapper = WindowSize(styled(({ width, flex, ...rest }) => (
  <FlexWrapper flex={flex} {...rest} />
))`
  ${props => (props.theme.sizes.large >= props.width) && `
    flex: 1;
    flex-basis: 0%;
  `};
`);

const Account = View.extend`
  padding-left: ${size(LEFT_PADDING)};
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
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
  margin-horizontal: auto;
`;

const SocialMedia = WindowSize(styled(({ width, ...rest }) => (
  <View {...rest} />
))`
  align-items: center;
  padding-left: ${size(20)};
  border-style: solid;
  border-color: ${props => lighten(0.15, props.theme.default)};
  border-top-width: 2px;
  ${props => (props.width > props.theme.sizes.large) && `
    align-items: flex-start;
    border-left-width: 1px;
    border-top-width: 0px;
  `};
`);

const StyledRoundButton = RoundButton.extend`
  margin-horizontal: ${size(10)};
  margin-bottom: ${size(20)};
  margin-top: ${size(15)};
`;

const Info = View.extend`
  flex-direction: row;
  padding-top: ${size(20)};
  padding-bottom: ${size(64)}
  margin-top: ${size(35)};
  border-style: solid;
  border-color: ${props => lighten(0.15, props.theme.default)};
  border-top-width: 2px;
`;

const InfoLinks = HorizontalView.extend`
  justify-content: space-between;
  padding-right: ${size(200)};
  flex-wrap: wrap;
`;

const CopyrightText = Text.extend`
  padding-left: ${size(LEFT_PADDING)};
  color: ${props => props.theme.primary};
`;

const Footer = styled(({ account, socialMedia, info, ...rest }) => (
  <View {...rest}>
    <AccountSMWrapper>
      { account &&
        <AccountFlexWrapper flex="2">
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
        </AccountFlexWrapper>
      }
      { socialMedia &&
        <AccountFlexWrapper flex="1">
          <SocialMedia>
            <H3>{socialMedia.title}</H3>
            <HorizontalView>
              { socialMedia.icons.map(SM => (
                <StyledRoundButton
                  key={SM.key}
                  onPress={SM.onPress}
                  onLongPress={SM.onLongPress}
                  small
                >
                  {React.cloneElement(SM.icon)}
                </StyledRoundButton>)
                )
              }
            </HorizontalView>
          </SocialMedia>
        </AccountFlexWrapper>
      }
    </AccountSMWrapper>
    <Info>
      <FlexWrapper flex="1">
        <CopyrightText>{info.copyright}</CopyrightText>
      </FlexWrapper>
      <FlexWrapper flex="2">
        <InfoLinks>
          { info.links }
        </InfoLinks>
      </FlexWrapper>
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

