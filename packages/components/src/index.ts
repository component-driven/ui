import * as CSS from "csstype"
import { Theme } from "./theme"
import {
  AllSystemCSSProperties,
  ResponsiveStyleValue,
  StandardCSSProperties,
  SystemStyleObject
} from "@styled-system/css"

export { default as Box } from "./primitives/Box"
export { default as Button } from "./primitives/Button"
export { default as Checkbox } from "./primitives/Checkbox"
export { default as Flex } from "./primitives/Flex"
export { default as Grid } from "./primitives/Grid"
export { default as Heading } from "./primitives/Heading"
export { default as HiddenFromReaders } from "./primitives/HiddenFromReaders"
export { default as Input } from "./primitives/Input"
export { default as Img } from "./primitives/Img"
export { default as Stack } from "./primitives/Stack"
export { default as Text, textStyles } from "./primitives/Text"
export { default as VisuallyHidden } from "./primitives/HiddenVisually"
export * from "./primitives/Page"
export { default as InteractiveComponentStates } from "./interactiveComponentStates"

export { default as theme } from "./theme"

export type SystemCSSObject<T> = T & {
  [K in CSS.Pseudos]?: T
}

export type CssProperties = {
  [K in keyof StandardCSSProperties]: StandardCSSProperties[K]
}

export type SystemCssProperties<T = Theme> = {
  [K in keyof AllSystemCSSProperties]:
    | ResponsiveStyleValue<AllSystemCSSProperties[K]>
    | ((theme: T) => ResponsiveStyleValue<AllSystemCSSProperties[K]>)
    | SystemStyleObject
}
