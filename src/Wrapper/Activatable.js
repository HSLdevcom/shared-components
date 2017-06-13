import Div from '../Div';

const Activatable = Div.extend`
  align-items: flex-start;
  display: flex;
  align-self: stretch;
  ${props => (props.active && 'border-bottom: 4px solid ;')}
`;

export default Activatable;
