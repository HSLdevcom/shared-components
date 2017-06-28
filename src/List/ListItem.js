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
    padding: 0;
    margin: 0;
    font-size: 100%;
  `)}
`;

export default ListItem;
