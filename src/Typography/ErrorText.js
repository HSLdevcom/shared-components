import Text from './Text';

const ErrorText = Text.extend`
  font-weight: 300;
  font-size: 16px;
  line-height: 1;
  text-align: left;
  color: #dc0451;
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
      font-size: 14px;
      line-height: 1.14;
    `
  )}
`;

export default ErrorText;
