import styled from 'styled-components';


const List = styled.ul`
  list-style: none;
  columns: 2;
  li::before {
    padding-right: 1.25rem;
    content: "○";
    color: ${props => props.theme.listItemMarker};
  }
`;

export default List;
