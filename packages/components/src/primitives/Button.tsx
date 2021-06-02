import React from "react"
import styled from "styled-components"
import css from "@styled-system/css"
import { BorderColorProps, ColorProps, ResponsiveValue, variant } from "styled-system"
// @ts-ignore
import { disabled, focusRing } from "@component-driven/mixins"
import { Theme } from "../theme"
import { SystemCSSObject } from "../index"

type ButtonStyle = ColorProps<Theme> & BorderColorProps<Theme>

export const buttonStyles: Record<"primary" | "secondary", SystemCSSObject<ButtonStyle>> = {
  primary: {
    color: "background",
    bg: "primary",
    borderColor: "primary",
    ":hover": {
      bg: "background",
      color: "primary"
    }
  },
  secondary: {
    color: "primary",
    bg: "none",
    borderColor: "primary"
  }
}

export type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled"> & {
  /**
   * Whether button should be disabled or not
   */
  disabled?: boolean
  /**
   * Button variant
   */
  variant?: ResponsiveValue<keyof typeof buttonStyles, Theme>
}

const Button = styled.button<ButtonProps>(
  css({
    appearance: "none",
    display: "inline-block",
    py: 3,
    px: 4,
    background: "none",
    border: "thin",
    borderColor: "primary",
    color: "primary",
    cursor: "pointer",
    fontSize: "s"
  }),
  variant({
    prop: "variant",
    variants: buttonStyles
  }),
  focusRing("primary"),
  disabled()
)

Button.defaultProps = {
  variant: "secondary"
}

export default Button
