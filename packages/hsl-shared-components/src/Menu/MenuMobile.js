import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import A from '../Anchor';
import MenuItem from './MenuItem';
import LangSelect, { LangButton } from '../LangSelect';
import Icons from '../Icons';
import { MenuSeparator } from './Separator';
import { Flex } from '../Wrapper';
import Div from '../Div';

const Separator = MenuSeparator.extend`
  height: 2px;
  margin: 0;
`;

const StyledDiv = Div.extend`
  background: ${props => props.theme.colors.primary.hslBlue};
  color: ${props => props.theme.colors.primary.hslWhite};
  svg {
    fill: currentColor;
  }
  ${LangSelect} {
    ${LangButton} {
      width: 2rem;
      height: 1.5rem;
    }
  }
  .children {
    font-size: 1.25rem;
    padding: 2rem 0;
    .child {
      width: 50%;
      justify-content: center;
      &:not(:last-child) {
        border-right: 2px solid ${props => props.theme.colors.primary.hslBlueDark};
      }
    }
  }
`;
const StyledFlex = Flex.extend`
  padding: 1rem 0;
`;

const MenuMobile = ({
  languages,
  changeLanguage,
  selectedLanguage,
  className,
  children,
  items
}) => (
  <StyledDiv className={className}>
    <Separator />
    <StyledFlex>
      <LangSelect
        languages={languages}
        selectedLanguage={selectedLanguage}
        changeLanguage={changeLanguage}
      />
      <Icons.Search style={{ height: '1.5rem' }} />
    </StyledFlex>
    <Separator />
    { items }
    <Flex className="children">
      {React.Children.map(children, child => (
        React.cloneElement(
          child,
          {
            className: cx(child.props.className, 'child'),
            small: false,
            textPosition: 'Bottom',
            active: false
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


MenuMobile.defaultProps = {
  children: defaultChildren
};


MenuMobile.propTypes = {
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
  items: PropTypes.node
};

export default styled(MenuMobile)``;
