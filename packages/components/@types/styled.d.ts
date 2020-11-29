import { CSSProp } from "styled-components"
import { CSSObject } from "@styled-system/css"
import { SystemCssProperties } from "../"
import { Theme } from "../src/theme"

declare module "styled-components" {
  /**
   * Do not remove next line since even if the ESLint doesn't complain
   * and will automatically "fix" the code into a non-working one :shrug:
   */

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module "@styled-system/css" {
  // TODO: This removes TS errors when used directly but it still leaves the object untyped...
  export function css(input?: SystemCssProperties): CSSObject
}

declare module "react" {
  interface Attributes {
    css?: CSSProp
  }
}
