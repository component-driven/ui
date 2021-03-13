import React from "react"
import styled from "styled-components"
import { ResponsiveValue, system, TLengthStyledSystem } from "styled-system"
import { Flex } from "../"
import { BoxProps } from "./Box"
import { Theme } from "../theme"

type SpaceValue = number
type DirectionValue = "vertical" | "horizontal"

type StackBaseProps = Omit<BoxProps, "wrap"> & {
  /**
   * Spacing (gap) between items.
   */
  gap?: ResponsiveValue<SpaceValue>

  /**
   * In which direction should the children be distributed
   */
  direction?: ResponsiveValue<DirectionValue>

  /**
   * Whether to wrap elements if there is no room to fit them
   */
  wrap?: ResponsiveValue<boolean>
}

type StackProps = StackBaseProps & {
  as?: React.ElementType
}

const toPx = (value: TLengthStyledSystem): string =>
  typeof value === "number" ? `${value}px` : value

const StackBase: React.FC<StackBaseProps> = styled(
  ({ gap, direction, wrap, ...props }: StackProps) => <Flex {...props} />
)<StackBaseProps>(
  {},
  system({
    gap: {
      // Using `&&` as property means we inject styles to the root element as an object
      // By using double && we increase specificity of this CSS selector
      property: "&&" as any,
      scale: "space",
      // @ts-ignore solves the undefined is not assignable to string[]
      transform: (value: SpaceValue, scale: Theme["space"]) => {
        const gapValue = toPx(scale[value])
        // And here instead of the value for the property we return an object
        return {
          "--gap": gapValue,
          position: "relative",
          width: `calc(100% + var(--gap))`,
          marginTop: `calc(-1 * var(--gap))`,
          marginLeft: `var(--root-ml)`,
          "> *": {
            marginTop: `var(--gap)`,
            marginLeft: `var(--child-ml)`
          }
        }
      }
    },
    wrap: {
      property: "flexWrap",
      transform: (value: boolean) => (value ? "wrap" : "nowrap")
    }
  }),
  // Because we are using `property: "&&" in both cases, putting them into one `system` call
  // will produce conflicts and break for the case when both `gap` and `direction` are arrays.
  system({
    direction: {
      property: "&&" as any,
      transform: (value: DirectionValue) => {
        return {
          "--root-ml": value === "vertical" ? 0 : "calc(-1 * var(--gap))",
          "--child-ml": value === "vertical" ? 0 : "var(--gap)",
          flexDirection: value === "vertical" ? "column" : "row"
        }
      }
    }
  })
)

/**
 Use Stack to distribute children evenly with a specified gap between.
 */
const Stack: React.FC<StackProps> = ({
  as,
  children,
  gap,
  direction,
  wrap,
  alignItems,
  alignContent,
  justifyItems,
  justifyContent,
  ...props
}) => (
  // We have to use forwardedAs in order for Section to accept `as` prop.
  // See https://github.com/styled-components/styled-components/issues/3268
  <Flex forwardedAs={as} {...props}>
    <StackBase
      gap={gap}
      direction={direction}
      wrap={wrap}
      alignItems={alignItems}
      alignContent={alignContent}
      justifyItems={justifyItems}
      justifyContent={justifyContent}
    >
      {children}
    </StackBase>
  </Flex>
)

Stack.defaultProps = {
  direction: "vertical",
  wrap: false
}

export default Stack
