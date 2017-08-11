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

const AccountSMWrapper = WindowSize(styled(({ width, ...rest }) => (
  <HorizontalView {...rest} />
))`
  align-items: stretch;
  ${props => (props.theme.sizes.large >= props.width) && `
    flex-direction: column;
  `};
`);

const Account = WindowSize(styled(({ width, ...rest }) => (
  <View {...rest} />
))`
  flex: 2;
  padding-left: ${size(LEFT_PADDING)};
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  margin-top: ${size(36)};
  ${props => (props.theme.sizes.large >= props.width) && `
    margin-top: ${size(26)};
    flex: 1;
    flex-basis: 0%;
  `};
`);

const AccountBtnTitle = View.extend`
  align-items: flex-start;
  justify-content: flex-start;
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
  flex: 1;
  flex-basis: 0%;
  align-items: center;
  padding-left: ${size(20)};
  border-style: solid;
  border-color: ${props => lighten(0.15, props.theme.default)};
  border-top-width: 2px;
  padding-top: ${size(26)};
  margin-top: ${size(40)};
  ${props => (props.width > props.theme.sizes.large) && `
    padding-top: 0;
    margin-top: ${size(36)};
    align-items: flex-start;
    border-left-width: 1px;
    border-top-width: 0px;
  `};
`);

const StyledRoundButton = styled(({ frontpage, ...rest }) => (
  <RoundButton {...rest} />
))`
  margin-horizontal: ${size(10)};
  margin-bottom: ${size(20)};
  margin-top: ${size(15)};
  ${props => !props.frontpage && `
    background-color: ${lighten(0.225, props.theme.default)}
  `}
`;

const Info = View.extend`
  flex-direction: row;
  padding-top: ${size(20)};
  padding-bottom: ${size(64)}
  margin-top: ${size(35)};
  border-style: solid;
  border-color: ${props => lighten(0.15, props.theme.default)};
  border-top-width: 2px;
  align-items: flex-start;
`;

const InfoLinks = HorizontalView.extend`
  justify-content: space-between;
  padding-right: ${size(200)};
  flex-wrap: wrap;
  flex: 2;
`;

const CopyrightText = Text.extend`
  padding-left: ${size(LEFT_PADDING)};
  color: ${props => props.theme.primary};
  flex: 1;
`;
const LinkWrapper = View.extend`
  padding-horizontal: ${size(15)};
`;

const Footer = styled(({ account, socialMedia, info, frontpage, ...rest }) => (
  <View {...rest}>
    <AccountSMWrapper>
      { account &&
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
      }
      { socialMedia &&
        <SocialMedia>
          <H3>{socialMedia.title}</H3>
          <HorizontalView>
            {/* eslint-disable react/no-array-index-key */}
            { socialMedia.icons.map((SM, index) => (
              <StyledRoundButton
                key={index}
                onPress={SM.onPress}
                onLongPress={SM.onLongPress}
                small
                frontpage={frontpage}
              >
                {React.cloneElement(SM.icon)}
              </StyledRoundButton>)
              )
            }
          </HorizontalView>
        </SocialMedia>
      }
    </AccountSMWrapper>
    <Info>
      <CopyrightText size={0.9}>{info.copyright}</CopyrightText>
      <InfoLinks>
        {
          info.links.map((link, index) => (
            <LinkWrapper key={index}>
              { React.cloneElement(link, { size: 0.9, key: index }) }
            </LinkWrapper>
          ))
        }
      </InfoLinks>
    </Info>
  </View>
))`
  width: 100%;
  align-items: stretch;
  border-style: solid;
  border-top-width: 4px;
  border-color: ${props => props.theme.primary};
  ${props => !props.frontpage && `
    background-color: ${lighten(0.225, props.theme.default)}
  `}
`;

Footer.propTypes = {
  frontpage: PropTypes.bool,
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

