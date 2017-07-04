import Text from './Text';

const ErrorText = Text.extend`
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  text-align: left;
  color: #dc0451;
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
      font-size: 14px;
      line-height: calc(1.14 * 14px);
    `
  )}
`;

export default ErrorText;
