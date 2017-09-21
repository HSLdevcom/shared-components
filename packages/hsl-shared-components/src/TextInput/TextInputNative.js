import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { lighten } from 'polished';
import omit from 'lodash/fp/omit';
import { size } from '../utils';

const Input = styled.TextInput`
  font-size: ${size(18)};
  ${props => props.theme.fontFamily && `font-family: ${props.theme.fontFamily};`}
  color: ${props => props.theme.secondary};
  padding: ${size(14)} ${size(18)};
  border-radius: ${size(4)};
  border-style: solid;
  border-width: 1px;
  border-color: ${props => lighten(0.185, props.theme.secondary)};
  ${props => props.focus && `
    color: ${props.theme.colors.primary.hslGreyDark};
    border-color: ${props.theme.primary};
  `}
  ${props => props.error && `
    color: ${props.theme.colors.misc.error};
    border-color: ${props.theme.colors.misc.error};
    background-color: ${props.theme.colors.misc.errorBackground};
  `}
`;

Input.defaultProps = {
  underlineColorAndroid: 'transparent'
};

class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { focus: false, value: this.props.value || '' };
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onFocus() {
    this.setState({
      focus: true
    });

    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  onBlur() {
    this.setState({
      focus: false
    });

    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  onChange(value) {
    this.setState({
      value
    });

    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  render() {
    return (<Input
      {...omit(this.props, ['onChange', 'onBlur', 'onFocus'])}
      value={this.state.value}
      focus={this.state.focus}
      onBlur={this.onBlur}
      onFocus={this.onFocus}
      onChangeText={this.onChange}
    />);
  }
}

TextInput.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.bool // eslint-disable-line react/no-unused-prop-types
};

const StyledTextInput = styled(TextInput)``;

StyledTextInput.displayName = 'TextInput';

export default StyledTextInput;
