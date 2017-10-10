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
import { AView } from '../Animated';

const LanguageButton = LangButton.extend`
  width: ${size(52)};
  justify-content: space-around;
  flex-direction: row;
`;

const StyledP = P.extend`
  color: ${props => props.theme.colors.background.hslWhite}
`;

const StyledView = View.extend`
  padding: 0;
  align-items: center;
  background: ${props => props.theme.colors.primary.hslBlue};
`;

const SelectWrapper = View.extend`
  background-color: ${props => props.theme.colors.primary.hslBlueDark};
  border-radius: 3px;
  border-color: ${props => props.theme.colors.primary.hslBlueDark};
  border-width: 1px;
  z-index: ${props => props.theme.layers.menu + 1}
`;

const ScrollWrap = styled(({ x, y, height, width, ...rest }) => (
  <AView {...rest} />
))`
  position: absolute;
  width: ${props => props.width}px;
  top: ${props => props.y + props.height}px;
  left: ${props => props.x}px;
  overflow: hidden;
`;


class LangSelectSmall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anim: new Animated.Value(0),
      langBtn: { x: 0, y: 0, height: 0, width: 0 }
    };
    this.toggleLangSelect = this.toggleLangSelect.bind(this);
    this.onLayout = this.onLayout.bind(this);
    this.langBtnOnLayout = this.langBtnOnLayout.bind(this);
    this.langSelectHeight = 0;
  }

  onLayout(e) {
    this.langSelectHeight = e.nativeEvent.layout.height;
  }

  langBtnOnLayout(e) {
    const { height, width, x, y } = e.nativeEvent.layout;
    this.setState({
      langBtn: { height, width, x, y }
    });
  }

  toggleLangSelect() {
    if (!this.open) {
      Animated.timing(
        this.state.anim,
        { toValue: this.langSelectHeight, duration: 150 }
      ).start(() => {
        this.open = true;
      });
    } else {
      Animated.timing(
        this.state.anim,
        { toValue: 0, duration: 250 }
      ).start(() => {
        this.open = false;
      });
    }
  }

  render() {
    return (
      <StyledView {...omit(this.props, ['languages', 'selectedLanguage', 'changeLanguage'])} onClick={this.toggleLangSelect}>
        <LanguageButton
          onPress={this.toggleLangSelect}
          onLayout={this.langBtnOnLayout}
        >
          <StyledP>
            { this.props.languages.find(lang => lang.id === this.props.selectedLanguage).name }
          </StyledP>
          <Icons.ArrowDown
            height={size(12)}
            width={size(12)}
            fill={this.props.theme.colors.background.hslWhite}
          />
        </LanguageButton>
        <ScrollWrap
          style={{ maxHeight: this.state.anim }}
          x={this.state.langBtn.x}
          y={this.state.langBtn.y}
          height={this.state.langBtn.height}
          width={this.state.langBtn.width}
        >
          <SelectWrapper onLayout={this.onLayout}>
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
        </ScrollWrap>
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
