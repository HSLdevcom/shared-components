import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LangButton = styled.button`
  background: rgba(0,0,0, 0.15);
`;

export default function LangSelect(props) {
  return (
    <div>
      {
        props.languages.map(lang =>
          (
            <LangButton onClick={props.onClick(lang)}>
              {lang.displayName}
            </LangButton>
          )
        )
      }
    </div>

  );
}

// TODO: proper object shape validation

LangSelect.propTypes = {
  languages: PropTypes.arrayof(PropTypes.object).isRequired,
  onClick: PropTypes.func.isRequired
};
