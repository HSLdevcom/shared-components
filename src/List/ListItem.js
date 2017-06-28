import styled from 'styled-components';


const ListItem = styled.li`
  text-indent: -1.35em;
  padding: 0.75rem 0 0 1rem;
  margin: 0;
  font-size: 90%;
  ${props => (
    props.theme.Media &&
    props.theme.Media.small`
    text-indent: initial;
    margin: 0;
    font-size: 100%;
    padding: 1.5rem 0 0 1rem;
  `)}
`;

export default ListItem;
