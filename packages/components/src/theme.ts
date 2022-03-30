// @ts-ignore
import { Theme as SSTheme } from "styled-system"
import { modularScale } from "polished"

const scale = (value: number) => modularScale(value, "1rem", "majorThird")

export const fonts = {
  body: `"Work Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`,
  heading: `"Work Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`,
  monospace: `MonoLisa, Monaco, "DejaVu Sans Mono", "Lucida Console", monospace`
}

export const fontSizes = {
  xxl: scale(4),
  xl: scale(3),
  l: scale(1),
  m: scale(0),
  s: scale(-0.5),
  xs: scale(-0.75)
}

export const fontWeights = {
  light: 200,
  normal: 400,
  bold: 600
}

export const lineHeights = {
  body: 1.5,
  heading: 1.25,
  pre: 1.3
}

const palette = {
  blue: [
    "rgb(238, 247, 255)",
    "rgb(211, 225, 240)",
    "rgb(187, 207, 226)",
    "rgb(145, 167, 196)",
    "rgb(107, 127, 168)",
    "rgb(74, 91, 136)",
    "rgb(49, 60, 108)",
    "rgb(27, 37, 79)"
  ]
}

export const colors = {
  none: "transparent",
  background: "#ecf7ff",
  text: "#313C6C",
  primary: "#1BBBFE",
  secondary: palette.blue[5],
  tertiary: palette.blue[3],
  accent: "#e64958",
  muted: palette.blue[2]
}

export const invertedColors = {
  none: "transparent",
  inherit: "inherit",
  background: "#313C6C",
  text: "#ecf7ff",
  primary: "#ecf7ff",
  secondary: palette.blue[3],
  tertiary: palette.blue[4],
  accent: "#e64958",
  muted: palette.blue[5]
}

export const space = [
  "0", // 0px
  "0.125rem", // 2px
  "0.25rem", // 4px
  "0.5rem", // 8px
  "1rem", // 16px
  "2rem", // 32px
  "4rem", // 64px
  "8rem", // 128px
  "16rem" // 256px
]

export const radii = {
  none: 0,
  small: 3,
  medium: 5,
  round: 99999
}

export const borders = {
  none: "none",
  thin: "1px solid",
  medium: "2px solid",
  thick: "3px solid"
}

/**
 * Our own more strict theme type
 */
export interface Theme extends SSTheme {
  borders: typeof borders
  colors: typeof colors // & ObjectOrArray<CSS.ColorProperty> // TODO: How to type palettes with `red.0` syntax?
  fonts: typeof fonts
  fontWeights: typeof fontWeights
  fontSizes: typeof fontSizes
  lineHeights: typeof lineHeights
  radii: typeof radii
  space: typeof space
}

const theme: Theme = {
  borders,
  colors,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  radii,
  space
}

export const invertedTheme: Theme = { ...theme, colors: invertedColors }

export default theme
