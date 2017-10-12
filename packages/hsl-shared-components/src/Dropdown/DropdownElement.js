import styled from 'styled-components';
import DropdownElementBase from './DropdownElementBase';

const DropdownElement = styled(DropdownElementBase)`
  &:hover {
    border-color: ${props => props.theme.colors.primary.hslBlue};
  }
`;

export default DropdownElement;
