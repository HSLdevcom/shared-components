import Text from './Text';

const ListText = Text.extend`
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  text-align: left;
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
      font-size: 14px;
      line-height: calc(1.14 * 14px);
    `
  )}
`;

export default ListText;
