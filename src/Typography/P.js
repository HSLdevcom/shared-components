import Text from './Text';

const P = Text.extend`
  text-align: left;
  font-weight: 300;
  font-size: 16px;
  line-height: 1.25;
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
      font-size: 14px;
      line-height: 1.29;
    `
  )}
`;

export default P;
