import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

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
  width: auto;
  padding-horizontal: ${utilsSize(66)};
`);


const StyledRoundButton = WindowSize(styled(({ width, ...rest }) => (
  <RoundButton {...rest} large={width >= LARGE_MOBILE} />
))`
  margin-horizontal: ${props => (props.width >= LARGE_MOBILE ? utilsSize(10) : utilsSize(3))};
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
`;

const CopyrightText = Text.extend`
  color: ${props => props.theme.primary};
  margin-top: ${utilsSize(50)};
`;


const Footer = styled(({ account, socialMedia, info, ...rest }) => (
  <View {...rest}>
    { account &&
      <MobileContainer title={account.title}>
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

