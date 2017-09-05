import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';
import { lighten } from 'polished';

import View from '../View';
import Button, { RoundButton } from '../Button';
import Text, { ListText } from '../Typography';
import { size as utilsSize, WindowSize } from '../utils';
import MobileContainer from './MobileContainer';

const LARGE_MOBILE = 640;

const StyledButton = WindowSize(styled(({ width, ...rest }) => (
  <Button {...rest} large={width >= LARGE_MOBILE} />
))`
  margin-top: ${utilsSize(50)};
  padding-horizontal: ${utilsSize(66)};
`);


const StyledRoundButton = WindowSize(styled(({ width, frontpage, ...rest }) => (
  <RoundButton {...rest} large={width >= LARGE_MOBILE} />
))`
  margin-horizontal: ${props => (props.width >= LARGE_MOBILE ? utilsSize(10) : utilsSize(3))};
  ${props => !props.frontpage && `
    background-color: ${lighten(0.225, props.theme.default)}
  `}
`);

const SIZE_REDUCE_RATIO = 0.8;

const ScaleSize = WindowSize(styled(({ width, size, innerRef, children }) => {
  const scaledSize = width >= LARGE_MOBILE ? size : SIZE_REDUCE_RATIO * size;
  return React.cloneElement(children, { size: scaledSize, innerRef });
})``);

const HorizontalView = View.extend`
  flex-direction: row;
  justify-content: center;
  width: 100%;
`;

const FlexStart = View.extend`
  align-items: flex-start;
  width: 100%;
  padding-left: ${utilsSize(60)};
`;

const CopyrightText = Text.extend`
  color: ${props => props.theme.primary};
  margin-top: ${utilsSize(50)};
`;


const Footer = styled(({ account, socialMedia, info, frontpage, links, ...rest }) => (
  <View {...rest}>
    {
      !frontpage && links &&
      <MobileContainer>
        <FlexStart>
          {
            links.map(link => (
              React.cloneElement(link, { large: true })
            ))
          }
        </FlexStart>
      </MobileContainer>

    }
    { account &&
      <MobileContainer border={!frontpage && !!links} title={account.title}>
        <FlexStart>
          { account.benefits.map(txt => (
            <ScaleSize size={1.75} key={txt}>
              <ListText>{txt}</ListText>
            </ScaleSize>
          ))}
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
          <ScaleSize size={1.5} key={index}>{link}</ScaleSize>
          ))
        }
      </View>
      <ScaleSize size={1.5}>
        <CopyrightText>{info.copyright}</CopyrightText>
      </ScaleSize>
    </MobileContainer>
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
  }),
  links: PropTypes.arrayOf(PropTypes.node)
};

Footer.displayName = 'Footer';

export default Footer;

