import React from "react"
import styled, { CSSObject } from "styled-components"
import css from "@styled-system/css"
import {
  color,
  ColorProps,
  compose,
  display,
  DisplayProps,
  ResponsiveValue,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  variant
} from "styled-system"
import { Theme } from "../theme"
import { Box, SystemCSSObject } from "../"

type TextStyle = ColorProps<Theme> &
  TypographyProps<Theme> &
  Omit<CSSObject, keyof ColorProps & keyof TypographyProps>

export const textStyles: Record<
  "body" | "secondary" | "tertiary" | "link",
  SystemCSSObject<TextStyle>
> = {
  body: {
    color: "text",
    fontFamily: "body",
    fontSize: "m"
  },
  secondary: {
    color: "secondary"
  },
  tertiary: {
    color: "tertiary",
    fontSize: "xs"
  },
  link: {
    // @ts-ignore Add Globals to the allowed values but only on props not in the theme
    color: "inherit",
    textDecoration: "underline",
    ":hover": {
      color: "accent"
    }
  }
}

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> &
  DisplayProps<Theme> &
  SpaceProps<Theme> &
  TypographyProps<Theme> &
  ColorProps<Theme> & {
    variant?: ResponsiveValue<keyof typeof textStyles>
  }

/**
 * Text component. It should be used to render any text across UI.
 */
export const Text = styled(Box)<TextProps>(
  // Default styles. We can't set `defaultProps.variant`
  // since it will over rule other props so we need to spread here.
  css(textStyles.body),
  compose(
    color,
    display,
    space,
    typography,
    variant({
      prop: "variant",
      variants: textStyles
    })
  )
)

Text.defaultProps = {
  as: "p"
}

/** @component */
export default Text
