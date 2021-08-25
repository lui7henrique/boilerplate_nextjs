import styled from "styled-components"

export const Hero = styled.section`
  height: calc(100vh - 5rem);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.9)),
    url(img/rocket.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;

  section {
    width: 1180px;
    margin: 0 auto;
    padding: 0 1rem;

    > span {
      display: flex;
      gap: 0.5rem;
      color: var(--primary);
      align-items: center;

      img {
        animation: hand_animation 2.5s infinite;

        @keyframes hand_animation {
          0% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            transform: rotate(0deg);
          }

          10% {
            -webkit-transform: rotate(14deg);
            -moz-transform: rotate(14deg);
            transform: rotate(14deg);
          }

          20% {
            -webkit-transform: rotate(-8deg);
            -moz-transform: rotate(-8deg);
            transform: rotate(-8deg);
          }

          30% {
            -webkit-transform: rotate(14deg);
            -moz-transform: rotate(14deg);
            transform: rotate(14deg);
          }

          40% {
            -webkit-transform: rotate(-4deg);
            -moz-transform: rotate(-4deg);
            transform: rotate(-4deg);
          }

          50% {
            -webkit-transform: rotate(10deg);
            -moz-transform: rotate(10deg);
            transform: rotate(10deg);
          }

          60% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            transform: rotate(0deg);
          }

          100% {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            transform: rotate(0deg);
          }
        }
      }
    }

    h1 {
      font-size: 4.5rem;
      line-height: 4.5rem;
      font-weight: 700;
    }

    p {
      font-size: 1.2rem;
      filter: brightness(0.6);
      line-height: 2.25rem;

      span {
        font-weight: bold;
        color: var(--primary);
      }
    }
    button {
      margin-top: 1rem;
    }
  }
`
