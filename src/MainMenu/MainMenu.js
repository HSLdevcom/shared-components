import React from 'react';
import NavItem from '../NavItem/NavItem';
import styled, { keyframes } from 'styled-components';

const moveX = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`

const Drawer = styled.div`
position: absolute;
height: 100%;
width: 10em;
transition: ${moveX} 0.3s ease-in-ease-out 0;
`

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  @media(max-width: ${props => props.theme.md}) {
    flex-direction:column;
  }
`;

class MainMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open
    });
  }
  render() {
    const {onItemClick, items} = this.props;
    return (
      <div>
        <div onClick={this.handleToggle}>

        </div>
        <div>
          <StyledList>
            {items.map(item => {
              return (
                <li key={item.name}>
                  <NavItem name={item.name} onClick={onItemClick} />
                </li>
              )
            })}
          </StyledList>
        </div>
      </div>
    );
  }
}
export default MainMenu;
