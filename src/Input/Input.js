import React from 'react'
import styled from 'styled-components';

const Input = styled.input `
font-size: 1.25em;
padding: 0.5em;
margin: 0.5em;
color: #222222;
background: #FFFFFF;
border: 1px solid #dbdbdb;
border-radius: 5px;
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
