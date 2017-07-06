import Text from './Text';

const ListTextNative = Text.extend`
  font-weight: 300;
  font-size: 14px;
  line-height: 16;
`;

const ListText = ListTextNative.extend`
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

export default ListText;

export { ListTextNative };
