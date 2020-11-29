import styled from "styled-components"
import { Box } from "../"
import { BoxProps } from "./Box"
import { ResponsiveValue, system, TLengthStyledSystem } from "styled-system"

type StackProps = BoxProps & {
  /** Number of columns, will create a responsive CSS Grid layout like
   * `grid-template-columns: repeat($numColumns$, 1fr))`.
   * (You can use either this prop or `minColumnWidth` but not both.)
   */
  columns?: ResponsiveValue<number>

  /** Number of rows, will create a responsive CSS Grid layout like
   * `grid-template-rows: repeat($numColumns$, 1fr))`.
   */
  rows?: ResponsiveValue<number>

  /** Minimum width of a child. Will create responsive CSS Grid layout like
   * `grid-template-columns: repeat(auto-fit, minmax($minColumnWidth$)}, 1fr))`.
   * (You can use either this prop or `numColumns` but not both.)
   */
  minColumnWidth?: ResponsiveValue<TLengthStyledSystem>
}

const getMinMaxValue = (value: TLengthStyledSystem, scale: TLengthStyledSystem[] = []) => {
  const val = scale[value as number] || value
  return typeof val === "number" ? `${val}px` : val
}

const Grid = styled(Box)<StackProps>(
  {
    display: "grid"
  },
  system({
    columns: {
      property: "gridTemplateColumns",
      transform: (value) => (value ? `repeat(${value}, 1fr)` : null)
    },
    rows: {
      property: "gridTemplateRows",
      transform: (value) => (value ? `repeat(${value}, 1fr)` : null)
    },
    minColumnWidth: {
      property: "gridTemplateColumns",
      scale: "space",
      transform: (value, scale) =>
        value
          ? `repeat(auto-fit, minmax(${getMinMaxValue(
              value,
              scale as TLengthStyledSystem[]
            )}, 1fr))`
          : null
    }
  })
)

export default Grid
