import React from "react"
import { StandardLonghandProperties } from "csstype"
import styled from "styled-components"
import {
  color,
  ColorProps,
  compose,
  ResponsiveValue,
  space,
  SpaceProps,
  TypographyProps,
  variant
} from "styled-system"
import { Theme } from "../theme"
import css from "@styled-system/css"
import { SystemCSSObject } from "../index"

type HeadingStyle = TypographyProps<Theme> & ColorProps<Theme> & StandardLonghandProperties

export const headingStyles: Record<"xl" | "l" | "m" | "s", SystemCSSObject<HeadingStyle>> = {
  xl: {
    fontSize: "xxl",
    fontWeight: "bold"
  },
  l: {
    fontSize: "l",
    fontWeight: "bold"
  },
  m: {
    fontSize: "m",
    fontWeight: "bold"
  },
  s: {
    fontSize: "xs",
    fontWeight: "normal",
    color: "muted",
    textTransform: "uppercase"
  }
}

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  SpaceProps<Theme> &
  ColorProps<Theme> & {
    size?: ResponsiveValue<keyof typeof headingStyles>
  }

/**
 * A text heading.
 */
const Heading = styled.h1<HeadingProps>(
  css({
    m: 0,
    lineHeight: "heading",
    fontFamily: "heading",
    color: "text",
    ...headingStyles.xl
  }),
  compose(
    space,
    color,
    variant({
      prop: "size",
      variants: headingStyles
    })
  )
)

export default Heading
