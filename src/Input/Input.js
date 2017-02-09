import styled from 'styled-components';

const Input = styled.input `
font-size: 0.75em;
font-weight: bold;
padding: 1.25em;
margin: 1.25em;
color: #737373;
background: #FFFFFF;
border: 0.15em solid #dbdbdb;
border-radius: 5px;
text-transform: uppercase;
font-family: "Gotham Rounded SSm A","Gotham Rounded SSm B", Arial, Georgia, Serif;

&::-webkit-input-placeholder {

}

&:-moz-placeholder { /* Firefox 18- */

}

&::-moz-placeholder {  /* Firefox 19+ */

}

&:-ms-input-placeholder {

}
`;

export default Input;
