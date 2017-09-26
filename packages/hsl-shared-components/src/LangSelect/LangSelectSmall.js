import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components/primitives';
import { Animated } from 'react-primitives';
import omit from 'lodash/omit';

import Icons from '../Icons';
import LangButton from './LangButton';
import View from '../View';
import { P } from '../Typography';
import { size } from '../utils';

const LanguageButton = LangButton.extend`
  width: ${size(52)};
  justify-content: space-around;
  flex-direction: row;
`;

const StyledP = P.extend`
  color: ${props => props.theme.colors.background.hslWhite}
`;

const StyledView = View.extend`
  overflow: hidden;
  padding: 0;
  align-items: center;
  background: ${props => props.theme.colors.primary.hslBlue};
`;

const SelectWrapper = View.extend`
  background: ${props => props.theme.props.theme.colors.primary.hslBlue};
  border-radius: 3px;
  border: 1px solid ${props => props.theme.colors.primary.hslBlueDark};
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
      <StyledView {...omit(this.props, ['languages', 'selectedLanguage', 'changeLanguage'])}>
        <LanguageButton
          onPress={this.toggleLangSelect}
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
                    <StyledP>{lang.name}</StyledP>
                  </LanguageButton>
                )
              )
            }
            </SelectWrapper>
          }
        </Animated.View>
      </StyledView>);
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
export default styled(withTheme(LangSelectSmall))``;
