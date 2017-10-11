import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-brimitives';

import View from '../View';
import Button, { RoundButton } from '../Button';
import Text, { ListText } from '../Typography';
import { size as utilsSize, WindowSize } from '../utils';
import MobileContainer from './MobileContainer';

const LARGE_MOBILE = 640;

const StyledButton = WindowSize(styled(({ width, ...rest }) => (
  <Button {...rest} />
))`
  margin-top: ${utilsSize(50)};
  padding-horizontal: ${utilsSize(66)};
`);


const StyledRoundButton = WindowSize(styled(({ width, frontpage, ...rest }) => (
  <RoundButton {...rest} />
))`
  margin-horizontal: ${props => (props.width >= LARGE_MOBILE ? utilsSize(10) : utilsSize(3))};
`);


const HorizontalView = View.extend`
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const FlexStart = View.extend`
  align-items: flex-start;
  width: 100%;
  padding-left: ${utilsSize(40)};
`;

const CopyrightText = Text.extend`
  color: ${props => props.theme.font.colors.highlight};
  margin-top: ${utilsSize(50)};
`;
const InfoLinkWrapper = View.extend`
  margin-bottom: ${utilsSize(15)};
`;

const Footer = styled(({ account, socialMedia, info, frontpage, links, ...rest }) => (
  <View {...rest}>
    {
      !frontpage && links &&
      <MobileContainer>
        <FlexStart>
          {/* eslint-disable react/no-array-index-key */}
          {
            links.map((link, index) => (
              <InfoLinkWrapper key={index}>
                {React.cloneElement(link)}
              </InfoLinkWrapper>
            ))
          }
        </FlexStart>
      </MobileContainer>

    }
    { account &&
      <MobileContainer border={!frontpage && !!links} title={account.title}>
        <FlexStart>
          { account.benefits.map((txt) => {
            const type = frontpage ? 'disc' : 'circle';
            return (
              <ListText key={txt} type={type}>{txt}</ListText>
            );
          })}
        </FlexStart>
        <StyledButton
          primary
          onPress={account.button.onPress}
        >
          {account.button.text}
        </StyledButton>
      </MobileContainer>
    }
    { socialMedia &&
      <MobileContainer border={!!account} title={socialMedia.title}>
        {/* eslint-disable react/no-array-index-key */}
        <HorizontalView>
          { socialMedia.icons.map((SM, index) => (
            <StyledRoundButton
              key={index}
              onPress={SM.onPress}
              onLongPress={SM.onLongPress}
              transparent
              frontpage={frontpage}
            >
              {React.cloneElement(SM.icon)}
            </StyledRoundButton>)
            )
          }
        </HorizontalView>
      </MobileContainer>
    }
    <MobileContainer border={!!account || !!socialMedia}>
      <View>
        { info.links.map((link, index) => (
          <InfoLinkWrapper key={index}>
            {React.cloneElement(link, { size: 1.5 })}
          </InfoLinkWrapper>
          ))
        }
      </View>
      <CopyrightText>{info.copyright}</CopyrightText>
    </MobileContainer>
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
