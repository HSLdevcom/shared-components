import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ArrowDown } from '../Icons';
import LangButton from './LangButton';
import Div from '../Div/Div';

const StyledDiv = Div.extend`
  ${LangButton} {
    display: block;
    width: 2.75rem;
  }
  padding: 0;
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
  .selected-language {
    svg {
      margin-left: 0.25rem;
      fill: currentColor;
    }
  }
`;

const SelectWrapper = Div.extend`
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  position: absolute;
  border-radius: 3px;
  ${props => (props.theme.menuBorder && `border: 1px solid ${props.theme.menuBorder};`)}
  ${LangButton} {
    &:hover {

    }
  }
`;


class LangSelectSmall extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggleLangSelect = this.toggleLangSelect.bind(this);
  }

  toggleLangSelect() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <StyledDiv className={this.props.className}>
        <LangButton
          className="selected-language"
          onClick={this.toggleLangSelect}
        >
          { this.props.languages.find(lang => lang.id === this.props.selectedLanguage).name }
          <ArrowDown height="0.75rem" width="0.75rem" />
        </LangButton>
        {
         this.state.open && <SelectWrapper className="select-wrapper">
           {
            this.props.languages.filter(lang => lang.id !== this.props.selectedLanguage).map(lang =>
              (
                <LangButton
                  key={lang.id}
                  onClick={() => {
                    this.props.changeLanguage(lang.id);
                    this.toggleLangSelect();
                  }}
                >
                  {lang.name}
                </LangButton>
              )
            )
          }
         </SelectWrapper>
        }
      </StyledDiv>);
  }
}


LangSelectSmall.defaultProps = {
  languages: [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }],
};

LangSelectSmall.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  changeLanguage: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  className: PropTypes.string
};
export default styled(LangSelectSmall)``;
