import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FlexWrapper from '../FlexWrapper/FlexWrapper';
import LangButton from './LangButton';

const StyledFlexWrapper = FlexWrapper.extend`
  height: 1.75rem;
  width: 7rem;
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
`;

const LangSelect = ({
  languages,
  changeLanguage,
  selectedLanguage,
  className
}) => (
  <StyledFlexWrapper className={className}>
    {
      languages.map(lang =>
        (
          <LangButton
            key={lang.id}
            active={selectedLanguage === lang.id}
            onClick={() => { changeLanguage(lang.id); }}
          >
            {lang.name}
          </LangButton>
        )
      )
    }
  </StyledFlexWrapper>
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

