import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Div from '../Div';

const StyledDiv = Div.extend`
  position: relative;
  background-color: #fff;
  width: 100vw;
  left: calc(-50vw + 50%);
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1100px;
  margin: auto;
  h1 {
    font-size: 1.2em;
    letter-spacing: -0.8px;
    color: ${props => props.theme.primary};
    text-align: center;
    margin: 1em auto;
    font-weight: normal;
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.2em;
  width: 3em;
  height: 100%;
  text-align: center;
  border-width: 0;
  border: none;
  background-color: #fff;
  border-right: 1px solid #ddd;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
  img {
    height: 1em;
    margin: auto;
  }
  svg {
    margin: auto;
  }
`;

const PageTitleBar = ({ children, backButton, onBackClick, className }) =>
  <StyledDiv className={className}>
    <ContentContainer>
      {backButton &&
        <BackButton onClick={onBackClick}>
          {backButton}
        </BackButton>
      }
      {children}
    </ContentContainer>
  </StyledDiv>;

PageTitleBar.propTypes = {
  children: PropTypes.node.isRequired,
  backButton: PropTypes.node,
  onBackClick: PropTypes.func,
  className: PropTypes.string
};

export default PageTitleBar;
