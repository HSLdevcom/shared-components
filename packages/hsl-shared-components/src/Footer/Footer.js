import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import View from '../View';
import { Mobile, Desktop } from '../utils';

import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

const StyledDesktop = Desktop.extend`
  width: 100%;
`;

const Footer = styled(({ account, socialMedia, info, ...rest }) => (
  <View {...rest}>
    <Mobile>
      <FooterMobile
        account={account}
        socialMedia={socialMedia}
        info={info}
      />
    </Mobile>
    <StyledDesktop>
      <FooterDesktop
        account={account}
        socialMedia={socialMedia}
        info={info}
      />
    </StyledDesktop>
  </View>
))`
  width: 100%;
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

