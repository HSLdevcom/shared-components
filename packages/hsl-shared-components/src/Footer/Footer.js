import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/primitives';

import View from '../View';
import { Mobile, Desktop } from '../utils';

import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

const Footer = styled(({ account, socialMedia, info, frontpage, ...rest }) => (
  <View {...rest}>
    <Mobile>
      <FooterMobile
        account={account}
        socialMedia={socialMedia}
        info={info}
        frontpage={frontpage}
      />
    </Mobile>
    <Desktop>
      <FooterDesktop
        account={account}
        socialMedia={socialMedia}
        info={info}
        frontpage={frontpage}
      />
    </Desktop>
  </View>
))`
  align-self: stretch;
  align-items: stretch;
`;

Footer.propTypes = {
  fontpage: PropTypes.bool,
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

