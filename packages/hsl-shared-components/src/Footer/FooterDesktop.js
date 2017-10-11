import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-brimitives';

import View from '../View';
import Button, { RoundButton } from '../Button';
import Text, { ListText, H3 } from '../Typography';
import { size, WindowSize } from '../utils';

const LEFT_PADDING = 150;

const HorizontalView = View.extend`
  flex-direction: row;
  justify-content: flex-start;
`;

const Title = H3.extend`
  margin-bottom: ${size(24)};
`;
const Links = HorizontalView.extend`
  padding-horizontal: ${size(LEFT_PADDING)};
  padding-vertical: ${size(30)};
  flex-wrap: wrap;
`;

const LinkWrapper = styled(({ last, ...rest }) => (
  <View {...rest} />
))`
  width: ${size(200)};
  overflow: hidden;
  align-items: flex-start;
  ${props => !props.last && `margin-right: ${size(32)};`}
  margin-vertical: ${size(16)};
`;

const AccountSMWrapper = WindowSize(styled(({ width, ...rest }) => (
  <HorizontalView {...rest} />
))`
  align-items: stretch;
  padding-vertical: ${size(45)};
  ${props => !props.frontpage && `
    border-style: solid;
    border-color: ${props.theme.colors.primary.hslGreyLight};
    border-top-width: 2px;

  `}
  ${props => (props.theme.sizes.large >= props.width) && `
    flex-direction: column;
  `};
`);

const Account = WindowSize(styled(({ width, ...rest }) => (
  <View {...rest} />
))`
  flex: 2;
  padding-left: ${size(LEFT_PADDING)};
  padding-bottom: ${size(45)};
  flex-direction: row;
  align-items: stretch;
  justify-content: flex-start;
  ${props => (props.theme.sizes.large >= props.width) && `
    flex: 1;
    flex-basis: 0%;
  `};
`);

const AccountBtnTitle = View.extend`
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledButton = Button.extend`
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
  padding-top: ${size(45)};
  padding-left: ${size(20)};
  border-style: solid;
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  border-top-width: 2px;
  ${props => (props.width > props.theme.sizes.large) && `
    padding-top: 0;
    align-items: flex-start;
    align-self: flex-start;
    border-left-width: 1px;
    border-top-width: 0px;
  `};
`);

const StyledRoundButton = styled(({ frontpage, ...rest }) => (
  <RoundButton {...rest} />
))`
  margin-horizontal: ${size(10)};
`;

const Info = View.extend`
  flex-direction: row;
  padding-top: ${size(25)};
  padding-bottom: ${size(64)}
  border-style: solid;
  border-color: ${props => props.theme.colors.primary.hslGreyLight};
  border-top-width: 2px;
  align-items: flex-start;
`;

const InfoLinks = HorizontalView.extend`
  justify-content: space-between
  align-items: flex-start;
  padding-right: ${size(200)};
  flex: 2;
  flex-wrap: wrap;
`;

const CopyrightText = Text.extend`
  padding-left: ${size(LEFT_PADDING)};
  color: ${props => props.theme.font.colors.highlight};
  flex: 1;
`;
const InfoLinkWrapper = View.extend`
  padding-horizontal: ${size(15)};
  margin-bottom: ${size(15)};
`;

const Footer = styled(({ account, socialMedia, info, frontpage, links, ...rest }) => (
  <View {...rest}>
    { !frontpage && links &&
      <Links>
        {/* eslint-disable react/no-array-index-key */}
        {
          links.map((link, index, arr) => (
            <LinkWrapper key={index} last={(arr.length - 1) === index}>
              {link}
            </LinkWrapper>
          ))
        }
      </Links>
    }
    <AccountSMWrapper>
      { account &&
        <Account>
          <AccountBtnTitle>
            <Title>{account.title}</Title>
            <StyledButton
              primary
              small
              onPress={account.button.onPress}
            >
              {account.button.text}
            </StyledButton>
          </AccountBtnTitle>
          <Benefits>
            { account.benefits.map((txt) => {
              const type = frontpage ? 'disc' : 'circle';
              return (
                <ListText key={txt} type={type}>{txt}</ListText>
              );
            })}
          </Benefits>
        </Account>
      }
      { socialMedia &&
        <SocialMedia>
          <Title>{socialMedia.title}</Title>
          <HorizontalView>
            { socialMedia.icons.map((SM, index) => (
              <StyledRoundButton
                key={index}
                onPress={SM.onPress}
                onLongPress={SM.onLongPress}
                small
                transparent
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
      <CopyrightText>{info.copyright}</CopyrightText>
      <InfoLinks>
        {
          info.links.map((link, index) => (
            <InfoLinkWrapper key={index}>
              { React.cloneElement(link) }
            </InfoLinkWrapper>
          ))
        }
      </InfoLinks>
    </Info>
  </View>
))`
  width: 100%;
  align-items: stretch;
  ${props => props.frontpage && `
    border-style: solid;
    border-top-width: 4px;
    border-color: ${props.theme.colors.primary.hslBlue};
  `}
  ${props => !props.frontpage && `
    background-color: ${props.theme.colors.background.hslGreyLight}
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
  }),
  links: PropTypes.arrayOf(PropTypes.node)
};

Footer.displayName = 'Footer';

export default Footer;
