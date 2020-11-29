import styled from "styled-components"
import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  ThemeValue
} from "styled-system"
import { Theme } from "../theme"
import React from "react"

export type BoxProps = React.AllHTMLAttributes<any> &
  SpaceProps<Theme> &
  ColorProps<Theme> &
  BorderProps<Theme, ThemeValue<"borders", Theme>> & // TODO: Add this for all border props
  ShadowProps<Theme> &
  LayoutProps<Theme> &
  PositionProps<Theme> &
  FlexboxProps<Theme> &
  GridProps<Theme>

/**
 * Generic container with responsive props to control whitespace, layout, positioning and colors.
 */
export const Box = styled.div<BoxProps>(
  {
    margin: 0,
    boxSizing: "border-box",
    minWidth: 0
  },
  compose(space, color, border, shadow, layout, position, flexbox, grid)
)

export default Box
