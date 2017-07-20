import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import { darken } from 'polished';

import { ArrowDown } from '../Icons';
import LangButton from './LangButton';
import Div from '../Div';
import Text from '../Typography';
import { size } from '../utils';

const Icon = styled(ArrowDown)`
  fill: currentColor;
`;

const LanguageButton = LangButton.extend`
  width: ${size(52)};
  justify-content: space-between;
  flex-direction: row;
`;

const StyledDiv = Div.extend`
  overflow: hidden;
  padding: 0;
  align-items: center;
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
  .selected-language {
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-left: 0.375rem;
      fill: currentColor;
    }
  }

  .lang-select-enter {
    overflow: hidden;
    max-height: 0rem;
  }

  .lang-select-enter.lang-select-enter-active {
    overflow: hidden;
    max-height: 4rem;
    transition: max-height .125s ease-in;
  }

  .lang-select-leave {
    overflow: hidden;
    max-height: 4rem;
  }

  .lang-select-leave.lang-select-leave-active {
    overflow: hidden;
    max-height: 0rem;
    transition: max-height .125s ease-in;
  }

  .transition-group {
    position:absolute;
    top: 3.5rem;
  }
`;

const SelectWrapper = Div.extend`
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  border-radius: 3px;
  border: 1px solid ${props => darken(0.1, props.theme.primary || '#007ac9')};
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
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll, true);
  }

  onScroll() {
    if (this.state.open) {
      this.setState({ open: false });
    }
  }

  toggleLangSelect() {
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    return (
      <StyledDiv className={this.props.className}>
        <LanguageButton
          onClick={this.toggleLangSelect}
        >
          <Text>
            { this.props.languages.find(lang => lang.id === this.props.selectedLanguage).name }
          </Text>
          <Icon height="0.75rem" width="0.75rem" />
        </LanguageButton>
        <CSSTransitionGroup
          className="transition-group"
          transitionName="lang-select"
          transitionEnterTimeout={125}
          transitionLeaveTimeout={125}
        >
          {
           this.state.open && <SelectWrapper className="select-wrapper">
             {
              this.props.languages
                .filter(lang => lang.id !== this.props.selectedLanguage)
                .map(lang =>
                (
                  <LanguageButton
                    key={lang.id}
                    onClick={() => {
                      this.props.changeLanguage(lang.id);
                      this.toggleLangSelect();
                    }}
                  >
                    {lang.name}
                  </LanguageButton>
                )
              )
            }
           </SelectWrapper>
          }
        </CSSTransitionGroup>
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
