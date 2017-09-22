import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components/primitives';
import { Animated } from 'react-primitives';
import { darken } from 'polished';

import Icons from '../Icons';
import LangButton from './LangButton';
import Div from '../Div';
import { P } from '../Typography';
import { size } from '../utils';

const LanguageButton = LangButton.extend`
  width: ${size(52)};
  justify-content: space-between;
  flex-direction: row;
`;

const StyledP = P.extend`
  color: ${props => props.theme.colors.background.hslWhite}
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


class LangSelectSmall extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, anim: new Animated.Value(0) };
    this.toggleLangSelect = this.toggleLangSelect.bind(this);
  }

  toggleLangSelect() {
    if (!this.state.open) {
      this.setState({ open: true }, () => {
        Animated.timing(this.state.anim, { toValue: 50, duration: 150 }).start();
      });
    } else {
      Animated.timing(this.state.anim, { toValue: 0, duration: 150 }).start(() => {
        this.setState({ open: false });
      });
    }
  }

  render() {
    return (
      <StyledDiv>
        <LanguageButton
          onPress={this.toggleLangSelect}
          onClick={this.toggleLangSelect} /* remove */
        >
          <StyledP>
            { this.props.languages.find(lang => lang.id === this.props.selectedLanguage).name }
          </StyledP>
          <Icons.ArrowDown
            height="0.75rem"
            width="0.75rem"
            fill={this.props.theme.colors.background.hslWhite}
          />
        </LanguageButton>
        <Animated.View
          style={{ maxHeight: this.state.anim }}
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
                    onPress={() => {
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
        </Animated.View>
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
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      background: PropTypes.shape({
        hslWhite: PropTypes.string
      })
    })
  })
};
export default withTheme(LangSelectSmall);
