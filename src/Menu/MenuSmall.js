import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LangSelectSmall } from '../LangSelect';
import { Search, TravelCard, SignIn } from '../Icons';
import { Flex } from '../Wrapper';
import IconWithText from '../IconWithText/IconWithText';


const StyledFlex = Flex.extend`
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  .icon {
    line-height: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
  .select-wrapper {
    top: 3.5rem;
  }

  ${props => (
    props.theme.Media &&
    props.theme.Media.large`
      .icon svg, .search-icon {
        height: 1.75rem;
      }
    `
  )}

  svg {
    fill: currentColor;
  }
  > * {
    ${props => (props.theme.menuBorder && `border-left: 1px solid ${props.theme.menuBorder};`)}
    height: 100%;
    display: flex;
    padding: 0 0.75rem;
  }
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
`;

const StyledIWT = IconWithText.extend`
  .text {
    display: none;
  }
  ${props => (
    props.theme.Media &&
    props.theme.Media.medium`
      display: none;
    `
  )}
`;

const MenuSmall = ({
  languages,
  changeLanguage,
  selectedLanguage,
  className,
  children
}) => (
  <StyledFlex className={className}>
    {children}
    <Search
      className="search-icon"
      height="2rem"
      width="2rem"
    />
    <LangSelectSmall
      languages={languages}
      selectedLanguage={selectedLanguage}
      changeLanguage={changeLanguage}
    />
  </StyledFlex>
);

const defaultChildren = [
  <StyledIWT
    icon={<SignIn height="2rem" />}
    text="Matkakortti"
    textPosition="Right"
    key="signin"
  />,
  <StyledIWT
    icon={<TravelCard height="2rem" />}
    text="Kirjaudu"
    textPosition="Right"
    key="travelcard"
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
  children: PropTypes.node
};

export default styled(MenuSmall)``;
