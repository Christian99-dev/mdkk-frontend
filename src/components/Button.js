import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"

const Button = ({
  to,
  theme = "light",
  text = "button",
  onClick = () => {
    alert("no action")
  },
}) => {
  return (
    <ButtonStyle
      smooth={true}
      duration={400}
      to={to}
      className={theme}
      onClick={onClick}
      href="#"
    >
      {text}
    </ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled(Link)`
  cursor: pointer;
  font-size: var(--fs-3);
  font-weight: 500;
  background-color: transparent;
  padding: var(--space-sm) var(--space-md);
  border: 4px solid black;
  text-decoration: none;
  color: black;

  &.dark {
    background-color: black;
    color: white;
  }

  &:hover {
    background-color: black;
    color: white;
    border-color: white;
    &.dark {
      background-color: transparent;
      color: black;
    }
  }
`
