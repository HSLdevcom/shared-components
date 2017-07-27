import Text from './Text';
import { size } from '../utils';

const ListText = Text.extend`
  font-weight: 300;
  font-size: ${size(16)};
  line-height: 16;
`;


export default ListText;
