import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LangSelect, { LangSelectSmall } from '../LangSelect';
import { Search, TravelCard, SignIn } from '../Icons';
import { MenuSeparator } from '../Separator/Separator';
import Span from '../Span/Span';
import FlexWrapper from '../FlexWrapper/FlexWrapper';
import IconWithText from '../IconWithText/IconWithText';
import Media from '../../themes/media-templates';

const Div = styled.div`
  .lang-select {
    .small {
      display: none;
    }
  }
  .top svg {
    fill: currentColor;
  }
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
  width: 17.5em;
  ${Media.large`
    width: 10em;
    margin-left: 3em;
    .bottom {
      justify-content: flex-end;
      ${IconWithText} {
        .text {
          display: none;
        }
      }
    }
  `}

  ${Media.medium`
    width: 7em;
    margin-left: 3em;
    .top, .bottom {
      justify-content: space-between;
    }
    .bottom svg {
      height: 1.75rem;
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
  `}
`;

const Menu = ({
  languages,
  changeLanguage,
  selectedLanguage,
  langSelectOpen,
  className,
  children
}) => (
  <Div className={className}>
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
          open={langSelectOpen}
        />
      </Span>
    </FlexWrapper>
    <MenuSeparator />
    <FlexWrapper className="bottom">
      {children}
    </FlexWrapper>
  </Div>
);

const defaultChildren = [
  <IconWithText
    icon={<SignIn height="2rem" />}
    text="Matkakortti"
    textPosition="Right"
    key="signin"
  />,
  <IconWithText
    icon={<TravelCard height="2rem" />}
    text="Kirjaudu"
    textPosition="Right"
    key="travelcard"
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
  langSelectOpen: PropTypes.bool,
  className: React.PropTypes.string,
  children: PropTypes.node
};

export default styled(Menu)``;
