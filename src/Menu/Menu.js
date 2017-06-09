import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { addClass } from '../utils';
import LangSelect, { LangSelectSmall } from '../LangSelect';
import { Search, TravelCard, SignIn } from '../Icons';
import { MenuSeparator } from '../Separator/Separator';
import Span from '../Span/Span';
import Div from '../Div/Div';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import IconWithText from '../IconWithText/IconWithText';

const StyledDiv = Div.extend`
  .lang-select {
    .small {
      display: none;
    }
  }
  svg {
    fill: currentColor;
  }
  .bottom svg {
    height: 2rem;
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
        justify-content: flex-end;
        ${IconWithText} {
          .text {
            display: none;
          }
        }
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
    <FlexWrapper className="top">
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
    </FlexWrapper>
    <MenuSeparator />
    <FlexWrapper className="bottom">
      { addClass(children, 'child') }
    </FlexWrapper>
  </StyledDiv>
);

const defaultChildren = [
  <IconWithText
    icon={<TravelCard height="3.5rem" />}
    text="Matkakortti"
    textPosition="Right"
    key="travelcard"
  />,
  <IconWithText
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
