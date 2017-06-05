import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ArrowDown } from '../Icons';

const LangButton = styled.button`
  border-radius: 3px;
  border: 0;
  outline: 0;
  background: 0;
  padding: 0 0.5rem;
  color: inherit;
  font: inherit;
  &:hover {
    cursor: pointer;
  }
  ${props => (props.active && props.theme.radioBtnActive && `background-color: ${props.theme.radioBtnActive};`)}
`;

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

const Div = styled.div`
  ${LangButton} {
    display: block;
  }
`;

const LangSelectSmallUnstyled = ({
  languages,
  changeLanguage,
  selectedLanguage,
  fill,
  open,
  className
}) => (
  <Div className={className}>
    <LangButton className="selected-language">
      { languages.find(lang => lang.id === selectedLanguage).name }
      <ArrowDown height="0.75rem" width="0.75rem" fill={fill} />
    </LangButton>
    {
      open && languages.filter(lang => lang.id !== selectedLanguage).map(lang =>
        (
          <LangButton
            key={lang.id}
            onClick={() => { changeLanguage(lang.id); }}
          >
            {lang.name}
          </LangButton>
        )
      )
    }
  </Div>
);


LangSelectSmallUnstyled.propTypes = {
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
  fill: PropTypes.string.isRequired,
  open: PropTypes.bool,
  className: PropTypes.string
};
const LangSelectSmall = styled(LangSelectSmallUnstyled)`
  padding: 0;
  ${props => (props.theme.background && `background-color: ${props.theme.background};`)}
  .selected-language {
    display: table-cell;
    vertical-align: middle;
    svg {
      margin-left: 0.25rem;
    }
  }
`;

export { LangSelectSmall };
