import Text from './Text';

const P = Text.extend`
  text-align: left;
  font-weight: 300;
  font-size: 16px;
  line-height: calc(1.25 * 16px);
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
      font-size: 14px;
      line-height: calc(1.29 * 14px);
    `
  )}
`;

export default P;
