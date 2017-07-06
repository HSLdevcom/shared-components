import PropTypes from 'prop-types';
import Text from './Text';

const InfoTextNative = Text.extend`
  font-weight: 300;
  font-size: 14px;
  line-height: calc(1.14 * 14px);
  color: #8c4799;
  ${props => props.large && `
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    color: #ff5200;
  `}
`;

const InfoText = InfoTextNative.extend`
  font-size: 16px;
  line-height: 16px;
  ${props => props.large && `
    font-size: 18px;
    line-height: calc(0.89 * 18px);
  `}
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
      font-size: 14px;
      line-height: calc(1.14 * 14px);
      ${props.large && `
        font-size: 16px;
        line-height: 16px;
      `}
    `
  )}
`;

InfoText.propTypes = {
  className: PropTypes.string,
  large: PropTypes.bool
};

export default InfoText;

export { InfoTextNative };
