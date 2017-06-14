import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MenuItem from './MenuItem';
import { addClass } from '../utils';
import LangSelect, { LangSelectSmall } from '../LangSelect';
import { Search, TravelCard, SignIn } from '../Icons';
import { MenuSeparator } from '../Separator/Separator';
import Span from '../Span';
import Div from '../Div';
import { Flex } from '../Wrapper';

const StyledDiv = Div.extend`
  .lang-select {
    .small {
      display: none;
    }
  }
  align-self: flex-end;
  svg {
    fill: currentColor;
  }
  .bottom {
    &.small {
      display: none;
    }
    height: 4rem;
    align-items: stretch;
    .child svg {
      height: 2rem;
    }
  }

  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
  .child:not(:last-child) {
    margin-right: 2rem;
  }
  ${props => (
    props.theme.Media &&
    props.theme.Media.large`
      svg {
        height: 1.75rem;
      }
      .child:not(:last-child) {
        margin-right: 0rem;
      }
      .bottom {
        &.large {
          display: none;
        }
        &.small {
          display: flex;
        }
        justify-content: flex-end;
      }
    `
  )}
  ${props => (
    props.theme.Media &&
    props.theme.Media.medium`
      .top, .bottom {
        justify-content: space-between;
      }
      .child:not(:last-child) {
        margin-right: 1rem;
      }
      .lang-select {
        width: auto;
        .large {
          display: none;
        }
        .small {
          display: block;
        }
      }
    `
  )}
`;

const Menu = ({
  languages,
  changeLanguage,
  selectedLanguage,
  className,
  children
}) => (
  <StyledDiv className={className}>
    <Flex className="top">
      <Search height="2rem" width="2rem" />
      <Span className="lang-select">
        <LangSelect
          className="large"
          languages={languages}
          selectedLanguage={selectedLanguage}
          changeLanguage={changeLanguage}
        />
        <LangSelectSmall
          className="small"
          languages={languages}
          selectedLanguage={selectedLanguage}
          changeLanguage={changeLanguage}
        />
      </Span>
    </Flex>
    <MenuSeparator />
    <Flex className="bottom large">
      { addClass(children, 'child') }
    </Flex>
    <Flex className="bottom small">
      {React.Children.map(children, child => (
        React.cloneElement(
          child,
          {
            className: cx(child.props.className, 'child'),
            small: true,
            textPosition: 'Right'
          })
        ))}
    </Flex>
  </StyledDiv>
);

const defaultChildren = [
  <MenuItem
    link={<Link to="/test" />}
    icon={<TravelCard height="3.5rem" />}
    text="Matkakortti"
    textPosition="Right"
    key="travelcard"
    active
  />,
  <MenuItem
    link={<Link to="/test" />}
    icon={<SignIn height="3.5rem" />}
    text="Kirjaudu"
    textPosition="Right"
    key="signin"
  />
];


Menu.defaultProps = {
  children: defaultChildren
};


Menu.propTypes = {
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

export default styled(Menu)``;
