import React from "react"
import styled from "styled-components"
import Button from "../components/Button"
import { device } from "../theme/breakpoints"
import Parallax from "../components/Parallax"
import { Link } from "react-scroll"
import { Fade } from "react-awesome-reveal"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Hero = () => {
  const {
    strapiWillkommen: { buttonLinks, buttonRechts, nummer, text, titel },
    strapiGlobal: { logo },
  } = useStaticQuery(graphql`
    query MyQuery {
      strapiWillkommen {
        buttonLinks: ButtonLinks
        buttonRechts: ButtonRechts
        nummer: Nummer
        text: Text
        titel: Titel
      }
      strapiGlobal {
        id
        logo: Logo {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
  `)
  return (
    <HeroStyle>
      <div className="filter" />
      <Parallax className="parallax" strength={1000}>
        <img className="background-img" src="/mock/pipe.jpg" alt="pipe" />
      </Parallax>

      <div className="flex-container">
        <div className="wrapper">
          <div className="text-box">
            <div>
              <Fade direction="left" triggerOnce={true}>
                <h1>{titel}</h1>
              </Fade>
              <Fade delay={100} triggerOnce={true}>
                <p>{text}</p>
              </Fade>

              <Fade delay={150} triggerOnce={true}>
                <div className="whatsapp">
                  <img
                    className="icon"
                    src="/icons/whatsapp.svg"
                    alt="whatsapp"
                  ></img>
                  <a href="tel:1234/2345">{nummer}</a>
                </div>
                <div className="buttons">
                  <Button to="work" text={buttonLinks} onClick={() => {}} />
                  <Button
                    to="aboutus"
                    text={buttonRechts}
                    onClick={() => {}}
                    theme="dark"
                  />
                </div>
              </Fade>
            </div>
            <Fade triggerOnce={true}>
              <GatsbyImage
                image={getImage(logo.localFile)}
                alt={logo.alternativeText}
                className="logo"
              />
            </Fade>
          </div>
        </div>
      </div>

      <Link
        className="downbutton"
        to="work"
        href="#"
        smooth={true}
        duration={400}
      >
        <Fade direction="down">
          <img src="/icons/arrow.svg" alt="icon" />
        </Fade>
      </Link>
    </HeroStyle>
  )
}

export default Hero

const HeroStyle = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;

  .filter {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -9;
    background-color: rgba(255, 255, 255, 0.8);
  }

  .parallax {
    z-index: -10;
    .background-img {
      object-fit: cover;
      z-index: -10;
    }
  }

  .downbutton {
    width: 100%;
    bottom: 0;
    z-index: 10;
    position: absolute;
    margin-bottom: var(--space-lg);
    text-align: center;
    cursor: pointer;
    transition: bottom 0.2s ease-out;

    img {
      transform: rotate(90deg);
      height: var(--space-xxl);
    }

    &:hover {
      bottom: var(--space-sm);
      transition: bottom 0.2s ease-in;
    }
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
          width: max-content;
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

  @media ${device.mobile} {
    .buttons {
      flex-direction: column;
    }
  }
`
