import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components/primitives';

import A from '../Anchor';
import IconWithText, { IconWrapper } from '../IconWithText/IconWithText';
import { LangSelectSmall } from '../LangSelect';
import Icons from '../Icons';
import { Flex } from '../Wrapper';
import MenuItem from './MenuItem';

const SearchIcon = Flex.extend`
  align-items: center;
`;

const StyledFlex = Flex.extend`
  align-self: stretch;
  ${IconWrapper} {
    line-height: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }

  align-items: stretch;

  > * {
    border-left: 1px solid ${props => props.theme.colors.primary.hslBlueDark};
    display: flex;

    width: ${props => props.theme.scrollNavHeight || '3.75rem'};
    justify-content: center;
  }
  background: ${props => props.theme.colors.primary.hslBlue};
  color: ${props => props.theme.colors.primary.hslWhite};

  ${MenuItem} {
    align-items: stretch;
    ${IconWithText} {
      flex: 1;
      margin-top: ${props => props.theme.activatablePointerHeight || '0.6rem'};
      justify-content: center;
    }
  }

  ${props => (
    props.theme.Media &&
    props.theme.Media.medium`
      ${SearchIcon}, ${LangSelectSmall} {
        display: none;
      }
    `
  )}

`;


const MenuSmall = ({
  languages,
  changeLanguage,
  selectedLanguage,
  className,
  children,
  theme
}) => (
  <StyledFlex className={className}>
    {children}
    <SearchIcon>
      <Icons.Search
        height="1.5rem"
        width="1.5rem"
        fill={theme.colors.background.hslWhite}
      />
    </SearchIcon>
    <LangSelectSmall
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={changeLanguage}
    />
  </StyledFlex>
);

const defaultChildren = [
  <MenuItem
    link={<A href="/test" />}
    icon={<Icons.TravelCard height="1.5rem" width="1.5rem" />}
    text="Matkakortti"
    textPosition="Right"
    key="travelcard"
    active
    small
  />,
  <MenuItem
    link={<A href="/test" />}
    icon={<Icons.SignIn height="1.5rem" width="1.5rem" />}
    text="Kirjaudu"
    textPosition="Right"
    key="signin"
    small
  />
];


MenuSmall.defaultProps = {
  children: defaultChildren
};


MenuSmall.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired
  })),
  changeLanguage: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      background: PropTypes.shape({
        hslWhite: PropTypes.string
      })
    })
  })
};

export default withTheme(MenuSmall);
