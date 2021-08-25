import styled from "styled-components"

export const Button = styled.button`
  background-color: var(--primary);
  color: var(--white);

  cursor: pointer;

  padding: 1rem;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`
