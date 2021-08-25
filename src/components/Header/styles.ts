import styled from "styled-components"

export const HeaderContainer = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--borders);
`

export const HeaderContent = styled.div`
  max-width: 1180px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    display: flex;
    gap: 1rem;
    height: 5rem;

    nav {
      display: flex;
      gap: 1rem;
    }

    a {
      margin-top: 1.75rem;
      text-decoration: none;
      color: var(--gray);
      filter: brightness(0.5);
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(1);
        border-bottom: 3px solid var(--primary);
      }
      &.active {
        filter: brightness(1);
        border-bottom: 3px solid var(--primary);
      }
    }
  }
`

export const Title = styled.h1`
  background-image: linear-gradient(
    91.18deg,
    var(--primary) 26.63%,
    var(--primary-border) 62.22%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
  strong {
    color: var(--primary);
  }
`
