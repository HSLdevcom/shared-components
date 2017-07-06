import Text from './Text';

const PNative = Text.extend`
  font-weight: 300;
  font-size: 14px;
  line-height: 18;
`;

const P = PNative.extend`
  font-size: 16px;
  line-height: 20;
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
      font-size: 14px;
      line-height: 18;
    `
  )}
`;

export default P;

export { PNative };
