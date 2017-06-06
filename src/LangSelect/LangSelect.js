import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import LangButton from './LangButton';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const LangSelect = ({
  languages,
  changeLanguage,
  selectedLanguage,
  className
}) => (
  <FlexWrapper className={className}>
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
  </FlexWrapper>
);


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

