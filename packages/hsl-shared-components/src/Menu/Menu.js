import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import A from '../Anchor';
import MenuItem from './MenuItem';
import { addClass } from '../utils';
import LangSelect, { LangSelectSmall } from '../LangSelect';
import Icons from '../Icons';
import { MenuSeparator } from './Separator';
import Span from '../Span';
import Div from '../Div';
import { Flex } from '../Wrapper';

export const Width = {
  large: '18rem',
  medium: '10rem',
  small: '6rem'
};

const Top = Flex.extend`
  justify-content: flex-end;
  svg {
    margin-right: 1.5rem;

    ${props => (
      props.theme.Media &&
      props.theme.Media.large`
        height: 1.5rem;
        margin-right: 1rem;
      `
    )}
  }

  ${props => (
    props.theme.Media &&
    props.theme.Media.medium`
      justify-content: space-between;
    `
  )}
`;

const LangSelectWrapper = Span.extend`
  .small {
    display: none;
  }

  ${props => (
    props.theme.Media &&
    props.theme.Media.medium`
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
    `
  )}
`;

const StyledDiv = Div.extend`
  align-self: flex-end;
  svg {
    fill: currentColor;
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

  background: ${props => props.theme.colors.primary.hslBlue};
  color: ${props => props.theme.colors.primary.hslWhite};
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
      .bottom {
        justify-content: space-between;
      }
      .child:not(:last-child) {
        margin-right: 1rem;
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
    <Top>
      <Icons.Search style={{ height: '1.5rem', width: '1.5rem' }} />
      <LangSelectWrapper>
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
      </LangSelectWrapper>
    </Top>
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
    icon={<Icons.TravelCard style={{ height: '3.5rem' }} />}
    text="Matkakortti"
    textPosition="Right"
    key="travelcard"
    active
  />,
  <MenuItem
    link={<A href="/test" />}
    icon={<Icons.SignIn style={{ height: '3.5rem' }} />}
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
