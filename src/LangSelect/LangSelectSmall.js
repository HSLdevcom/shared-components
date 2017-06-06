import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ArrowDown } from '../Icons';
import LangButton from './LangButton';

const Div = styled.div`
  ${LangButton} {
    display: block;
  }
  padding: 0;
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  ${props => (props.theme.primaryText && `color: ${props.theme.primaryText};`)}
  .selected-language {
    svg {
      margin-left: 0.25rem;
    }
  }
`;

const SelectWrapper = styled.div`
  ${props => (props.theme.background && `background: ${props.theme.background};`)}
  position: absolute;
  border-radius: 3px;
  ${props => (props.theme.menuBorder && `border: 1px solid ${props.theme.menuBorder};`)}
  ${LangButton} {
    &:hover {

    }
  }
`;

const LangSelectSmall = ({
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
     open && <SelectWrapper className="select-wrapper">
       {
        languages.filter(lang => lang.id !== selectedLanguage).map(lang =>
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
     </SelectWrapper>
    }
  </Div>
);


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
  fill: PropTypes.string.isRequired,
  open: PropTypes.bool,
  className: PropTypes.string
};
export default styled(LangSelectSmall)``;
