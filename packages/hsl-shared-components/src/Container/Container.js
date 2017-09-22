import Div from '../Div';

const Container = Div.extend`
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.primary.hslGreyLight};
  background-color: ${props => props.theme.colors.background.hslWhite};
  width: 100%;
  padding: 20px;
  h1 {
    font-size: 22px;
    letter-spacing: -0.8px;
    color: ${props => props.theme.font.colors.default};
    text-align: center;
    margin: 0 auto 20px auto;
    font-weight: 500;
  }
`;

export default Container;
