import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LangSelect from '../LangSelect';
import { Search, TravelCard, SignIn } from '../Icons';
import { MenuSeparator } from '../Separator/Separator';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import IconWithText from '../IconWithText/IconWithText';
import Div from '../Div/Div';
import { addClass } from '../utils';

const Separator = MenuSeparator.extend`
  height: 2px;
  margin: 0;
`;

const StyledDiv = Div.extend`
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
  svg {
    fill: currentColor;
  }
  ${LangSelect} {
    font-size: 1.5rem;
  }
  .children {
    font-size: 1.75rem;
    padding: 3rem;
    display: flex;
    justify-content: center;
    .child {
      padding: 0 4rem;
      &:not(:last-child) {
        border-right: 2px solid ${props => props.theme.menuBorder};
      }
    }
  }
`;
const StyledFlexWrapper = FlexWrapper.extend`
  padding: 0.75rem 0;
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
    <StyledFlexWrapper>
      <LangSelect
        languages={languages}
        selectedLanguage={selectedLanguage}
        changeLanguage={changeLanguage}
      />
      <Search height="2rem" />
    </StyledFlexWrapper>
    <Separator />
    { items }
    <Div className="children">
      { addClass(children, 'child') }
    </Div>
  </StyledDiv>
);

const defaultChildren = [
  <IconWithText
    icon={<TravelCard height="3.5rem" />}
    text="Matkakortti"
    textPosition="Bottom"
    key="travelcard"
  />,
  <IconWithText
    icon={<SignIn height="3.5rem" />}
    text="Kirjaudu"
    textPosition="Bottom"
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
  className: React.PropTypes.string,
  children: PropTypes.node,
  items: PropTypes.node
};

export default styled(MenuMobile)``;
