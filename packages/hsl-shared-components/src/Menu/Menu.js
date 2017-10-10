import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components/primitives';

import LangSelect, { LangSelectSmall } from '../LangSelect';
import Icons from '../Icons';
import View from '../View';

import { size, Responsive } from '../utils';

export const Width = {
  xlarge: size(280),
  medium: size(160),
  small: size(100)
};


const Top = View.extend`
  flex-direction: row;
  justify-content: flex-end;
  border-color: ${props => props.theme.colors.primary.hslBlueDark};
  border-bottom-width: 1px;
  padding-vertical: ${size(20)};
  width: 100%;
`;

const Bottom = View.extend`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  align-items: stretch;
  height: ${size(72)};
  margin-top: ${size(8)};
`;

const BottomSmall = styled(({ children, ...rest }) => (
  <Bottom {...rest}>
    {React.Children.map(children, child => React.cloneElement(child, { small: true }))}
  </Bottom>
))`
  height: ${size(60)};
  margin-top: 0;
`;

BottomSmall.propTypes = {
  children: PropTypes.node
};

const ContainerBase = styled(({ width, ...rest }) => (
  <View {...rest} />
))`
  background: ${props => props.theme.colors.primary.hslBlue};
  width: ${props => Width[props.width]};
`;

const Container = props => (
  <Responsive
    small={<ContainerBase width="small" {...props} />}
    medium={<ContainerBase width="medium" {...props} />}
    xlarge={<ContainerBase width="xlarge" {...props} />}
  />
);

const LSS = LangSelectSmall.extend`
  margin-left: ${size(24)};
`;

const LS = LangSelect.extend`
  margin-left: ${size(32)};
`;

const ResponsiveLangSelect = ({ languages, selectedLanguage, changeLanguage }) => {
  const props = { languages, selectedLanguage, changeLanguage };
  return (<Responsive
    small={<LSS {...props} />}
    large={<LS {...props} />}
  />);
};

ResponsiveLangSelect.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired
  })),
  changeLanguage: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};

const Menu = ({
  languages,
  changeLanguage,
  selectedLanguage,
  children,
  theme,
  ...rest
}) => (
  <Container {...rest}>
    <Top>
      <Icons.Search height={size(24)} width={size(24)} fill={theme.colors.primary.hslWhite} />
      <ResponsiveLangSelect
        languages={languages}
        selectedLanguage={selectedLanguage}
        changeLanguage={changeLanguage}
      />
    </Top>
    <Responsive
      small={<BottomSmall>{children}</BottomSmall>}
      xlarge={<Bottom>{children}</Bottom>}
    />
  </Container>
);

Menu.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    name: PropTypes.string.isRequired
  })),
  changeLanguage: PropTypes.func.isRequired,
  selectedLanguage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  children: PropTypes.node,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      primary: PropTypes.shape({
        hslWhite: PropTypes.string
      })
    })
  })
};

export default withTheme(styled(Menu)``);
