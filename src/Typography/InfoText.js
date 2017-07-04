import PropTypes from 'prop-types';
import Text from './Text';

const InfoText = Text.extend`
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  color: #8c4799;
  ${props => props.large && `
    font-weight: 500;
    font-size: 18px;
    line-height: calc(0.89 * 18px);
    color: #ff5200;
  `}
  text-align: left;
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
