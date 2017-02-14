import React, { PropTypes } from 'react';
import styled from 'styled-components';
import NavItem from './NavItem/NavItem';


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
      open: false,
    };
  }

  handleToggle() {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    const { onItemClick, items } = this.props;
    return (
      <div>

        <div>
          <StyledList>
            {items.map(item =>
              (
                <li key={item.name}>
                  <NavItem name={item.name} onClick={onItemClick} />
                </li>
              )
            )
            }
          </StyledList>
        </div>
      </div>
    );
  }
}
MainMenu.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MainMenu;
