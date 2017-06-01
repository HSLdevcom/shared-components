import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LangButton = styled.button`
  border-radius: 3px;
  border: 0;
  outline: 0;
  background: 0;
  padding: 0.25rem 0.5rem;
  color: inherit;
  font: inherit;
  &:hover {
    cursor: pointer;
  }
  ${props => (props.active && props.theme.radioBtnActive && `background-color: ${props.theme.radioBtnActive};`)}
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const LangSelect = ({
  languages,
  changeLanguage,
  selectedLanguage
}) => (
  <Div>
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
  </Div>
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
  ])
};

export default LangSelect;
