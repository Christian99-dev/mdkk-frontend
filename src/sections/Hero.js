import React from "react"
import styled from "styled-components"
import Button from "../components/Button"
import { device } from "../theme/breakpoints"

const Hero = () => {
  return (
    <HeroStyle>
      <div className="filter" />
      <img className="background-img" src="/mock/pipe.jpg" alt="pipe" />

      <div className="flex-container">
        <div className="wrapper">
          <div className="text-box">
            <div>
              <h1>
                Rohr Dicht ?<br />
                Mach dir kein Kopf!
              </h1>
              <p>
                Abwasser-Probleme? Verzweifeln Sie nicht bei Rohrverstopfungen!
                Unser zuverlässiger Rohrreinigungsdienst bietet schnelle Hilfe
                in Notfällen, um Ihre Leitungen effizient zu befreien.
              </p>
              <div className="whatsapp">
                <img
                  className="icon"
                  src="/icons/whatsapp.svg"
                  alt="whatsapp"
                ></img>
                <a href="tel:1234/2345">01514/549637</a>
              </div>
              <div className="buttons">
                <Button text="Meine arbeit" onClick={() => {}} />
                <Button text="Über mich" onClick={() => {}} theme="dark" />
              </div>
            </div>

            <img className="logo" src="/mock/logo.png" alt="logo"></img>
          </div>
        </div>
      </div>
    </HeroStyle>
  )
}

export default Hero

const HeroStyle = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .filter {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -9;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .background-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -10;
  }

  .flex-container {
    display: flex;
    height: 100%;
    align-items: center;

    .wrapper {
      align-items: center;
      justify-content: space-between;
      margin: 0 var(--space-xxxl);
      position: relative;

      .text-box {
        width: 50%;

        h1 {
          font-size: var(--fs-1);
          font-weight: 700;
          padding-bottom: var(--space-sm);
        }

        p {
          font-weight: 400;
          font-size: var(--fs-3);
          padding-bottom: var(--space-lg);
          line-height: 1.3;
        }

        .whatsapp {
          display: flex;
          cursor: pointer;
          padding-bottom: var(--space-lg);
          gap: var(--space-sm);

          .icon {
            height: var(--fs-2);
          }

          a {
            font-weight: 400;
            font-size: var(--fs-2);
            color: black;
            text-decoration: none;
          }
        }

        .logo {
          right: 0;
          top: 0;
          position: absolute;
          height: 100%;
        }
      }

      .buttons {
        display: flex;
        gap: var(--space-sm);
      }
    }
  }

  @media ${device.laptop} {
    .flex-container {
      .wrapper {
        .text-box {
          .logo {
            transform: translateY(-50%);
            top: 50%;
            height: 70%;
          }
        }
      }
    }
  }

  @media ${device.tablet} {
    .flex-container {
      .wrapper {
        .text-box {
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: var(--space-xxxl);

          .whatsapp,
          .buttons {
            justify-content: center;
          }
          .logo {
            margin: auto;
            height: 200px;
            width: min-content;
            transform: unset;
            position: relative;
          }
        }
      }
      /* flex-direction: column; */
    }
  }
`
