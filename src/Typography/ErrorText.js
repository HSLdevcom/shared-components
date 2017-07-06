import Text from './Text';

const ErrorTextNative = Text.extend`
  font-weight: 300;
  font-size: 14px;
  line-height: 16;
  color: #dc0451;
`;

const ErrorText = ErrorTextNative.extend`
  font-size: 16px;
  line-height: 16;
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
      font-size: 14px;
      line-height: 16;
    `
  )}
`;

export default ErrorText;

export { ErrorTextNative };
