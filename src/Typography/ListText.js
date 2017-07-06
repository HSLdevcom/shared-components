import Text from './Text';

const ListTextNative = Text.extend`
  font-weight: 300;
  font-size: 14px;
  line-height: calc(1.14 * 14px);
`;

const ListText = ListTextNative.extend`
  font-size: 16px;
  line-height: 16px;
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
      font-size: 14px;
      line-height: calc(1.14 * 14px);
    `
  )}
`;

export default ListText;

export { ListTextNative };
