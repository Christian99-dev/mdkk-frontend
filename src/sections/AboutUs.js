import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import { Fade } from "react-awesome-reveal"

const AboutUs = () => {
  return (
    <AboutUsStyle id="aboutus">
      <img
        alt="me"
        src="https://images.pexels.com/photos/3913982/pexels-photo-3913982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      ></img>
      <div className="text-box">
        <Fade direction="right" duration={500} triggerOnce={true}>
          <h2>Sebastian Müller</h2>
        </Fade>
        <Fade direction="left" duration={600} triggerOnce={true}>
          <ul>
            <li>
              <span>•</span>Lebenslaufpunkt
            </li>
            <li>
              <span>•</span>Lebenslaufpunkt
            </li>
            <li>
              <span>•</span>Lebenslaufpunkt
            </li>
          </ul>
        </Fade>
        <Fade direction="right" duration={800} triggerOnce={true}>
          <p>
            Die Abwassertechnik spielt eine entscheidende Rolle für die
            Nachhaltigkeit, indem sie Abwässer effektiv reinigt und so die
            Umwelt vor Verschmutzung schützt. Durch diese Maßnahmen wird die
            Gesundheit von Ökosystemen erhalten und die Verfügbarkeit sauberer
            Wasserressourcen für Mensch und Natur langfristig gesichert.
          </p>
        </Fade>
      </div>
    </AboutUsStyle>
  )
}

export default AboutUs

const AboutUsStyle = styled.section`
  height: 100vh;
  display: flex;
  padding: var(--space-xxl) var(--space-xxxl);

  img {
    width: 50%;
    object-fit: cover;
  }

  .text-box {
    padding-top: var(--space-xxxl);
    padding-left: var(--space-xxxl);
    width: 50%;
    h2 {
      font-size: var(--fs-1);
      font-weight: 600;
      padding-bottom: var(--space-lg);
    }
    ul {
      padding-bottom: var(--space-lg);
      li {
        font-size: var(--fs-3);
        list-style: none;
        span {
          font-size: var(--fs-3);
          margin: var(--space-sm);
        }
      }

      :not(:last-child) {
        padding-bottom: var(--space-sm);
      }
    }
    p {
      color: rgba(0, 0, 0, 0.7);
      font-style: italic;
      font-weight: 300;
      font-size: var(--fs-4);
      line-height: 1.3;
    }
  }

  @media ${device.laptop} {
    flex-direction: column;
    height: min-content;
    img {
      width: 100%;
      height: 70vw;
    }

    .text-box {
      padding-left: unset;
      text-align: center;
      width: 100%;
      height: min-content;

      ul {
        li {
          display: flex;
          flex-direction: column;
          span {
            display: none;
          }
        }
      }
    }
  }
`
