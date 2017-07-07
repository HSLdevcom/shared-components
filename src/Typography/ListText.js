import Text from './Text';

const ListText = Text.extend`
  font-weight: 300;
  font-size: 16px;
  line-height: 1;
  text-align: left;
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
      font-size: 14px;
      line-height: 1.14;
    `
  )}
`;

export default ListText;
