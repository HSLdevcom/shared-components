import React from 'react';
import PropTypes from 'prop-types';
import Div from '../Div';

const StyledDiv = Div.extend`
  position: relative;
  background-color: #fff;
  width: 100vw;
  left: calc(-50vw + 50%);
  margin-bottom: 1em;
  .content-container {
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
    .back-button {
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
      img {
        height: 1em;
        margin: auto;
      }
    }
  }
`;


const PageTitleBar = ({ children, backButton, onBackClick, className }) =>
  <StyledDiv className={className}>
    <div className="content-container">
      {backButton &&
        <button className="back-button" onClick={onBackClick}>
          {backButton}
        </button>
      }
      {children}
    </div>
  </StyledDiv>;

PageTitleBar.propTypes = {
  children: PropTypes.node.isRequired,
  backButton: PropTypes.node,
  onBackClick: PropTypes.func,
  className: PropTypes.string
};

export default PageTitleBar;
