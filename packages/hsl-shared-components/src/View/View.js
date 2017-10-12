import styled from 'styled-components/primitives';

export function getViewDefaultStyles() {
  return `
    align-items: center;
    justify-content: center;
  `;
}

const View = styled.View`
  ${getViewDefaultStyles()}
`;

export default View;
