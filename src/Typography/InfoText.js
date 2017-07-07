import PropTypes from 'prop-types';
import Text from './Text';

const InfoText = Text.extend`
  font-weight: ${props => (props.large ? '500' : '300')};
  font-size: ${props => (props.large ? '18px' : '16px')};
  line-height: ${props => (props.large ? '0.89' : '1')};
  text-align: left;
  color: ${props => (props.large ? '#ff5200' : '#8c4799')};
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
      font-size: font-size: ${props.large ? '16px' : '14px'};;
      line-height: ${props.large ? '1' : '1.14'};
    `
  )}
`;

InfoText.propTypes = {
  className: PropTypes.string,
  large: PropTypes.bool
};

export default InfoText;
