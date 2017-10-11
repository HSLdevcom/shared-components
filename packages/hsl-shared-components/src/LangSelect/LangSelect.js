import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-brimitives';

import View from '../View';
import LangButton from './LangButton';
import Text from '../Typography';
import { size } from '../utils';

const LangText = Text.extend`
  color: ${props => props.theme.colors.primary.hslWhite};
`;

const StyledView = View.extend`
  background: ${props => props.theme.colors.primary.hslBlue};
  justify-content: space-between;
  flex-direction: row;
  width: ${size(112)}
`;

const LangSelect = ({
  languages,
  changeLanguage,
  selectedLanguage,
  ...rest
}) => (
  <StyledView {...rest}>
    {
      languages.map(lang =>
        (
          <LangButton
            key={lang.id}
            active={selectedLanguage === lang.id}
            onPress={() => { changeLanguage(lang.id); }}
          >
            <LangText>{lang.name}</LangText>
          </LangButton>
        )
      )
    }
  </StyledView>
);


LangSelect.defaultProps = {
  languages: [{ id: 'fi', name: 'FI' }, { id: 'sv', name: 'SV' }, { id: 'en', name: 'EN' }]
};


LangSelect.propTypes = {
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

export default styled(LangSelect)``;
