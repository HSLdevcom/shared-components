import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import A from '../Anchor';
import MenuItem from './MenuItem';
import { addClass } from '../utils';
import LangSelect, { LangSelectSmall } from '../LangSelect';
import Icons from '../Icons';
import { MenuSeparator } from '../Separator/Separator';
import Span from '../Span';
import Div from '../Div';
import { Flex } from '../Wrapper';

export const Width = {
  large: '18rem',
  medium: '10rem',
  small: '6rem'
};

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
  .top {
    justify-content: flex-end;
    svg {
      margin-right: 1.5rem;
    }
  }
  .bottom {
    &.small {
      display: none;
    }
    height: calc(4rem + 1px);
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
  width: ${Width.large};
  ${props => (
    props.theme.Media &&
    props.theme.Media.large`
      width: ${Width.medium};
      .child:not(:last-child) {
        margin-right: 1.5rem;
      }
      ${MenuSeparator} {
        margin: 0.75rem 0;
      }
      .top svg {
        height: 1.5rem;
        margin-right: 1rem;
      }
      .bottom {
        &.large {
          display: none;
        }
        &.small {
          display: flex;
          height: 3rem;
          .child svg {
            height: 1.75rem;
          }
        }
        justify-content: flex-end;
      }
    `
  )}
  ${props => (
    props.theme.Media &&
    props.theme.Media.medium`
      width: ${Width.small};
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
          .select-wrapper {
            margin-top: 1rem;
          }
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
      <Icons.Search height="1.5rem" width="1.5rem" />
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
            textPosition: 'Bottom'
          })
        ))}
    </Flex>
  </StyledDiv>
);

const defaultChildren = [
  <MenuItem
    link={<A href="/test" />}
    icon={<Icons.TravelCard height="3.5rem" />}
    text="Matkakortti"
    textPosition="Right"
    key="travelcard"
    active
  />,
  <MenuItem
    link={<A href="/test" />}
    icon={<Icons.SignIn height="3.5rem" />}
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
