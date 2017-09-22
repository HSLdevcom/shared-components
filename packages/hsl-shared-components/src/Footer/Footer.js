import React from 'react';
import PropTypes from 'prop-types';

import { Responsive } from '../utils';

import FooterMobile from './FooterMobile';
import FooterDesktop from './FooterDesktop';

const Footer = ({ account, socialMedia, info, frontpage, links }) => {
  const props = { account, socialMedia, info, frontpage, links };
  return (<Responsive
    medium={<FooterMobile {...props} />}
    large={<FooterDesktop {...props} />}
  />);
};

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
