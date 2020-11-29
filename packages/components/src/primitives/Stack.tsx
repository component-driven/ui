import React from "react"
import styled from "styled-components"
import { ResponsiveValue, system } from "styled-system"
import { Flex } from "../"
import { BoxProps } from "./Box"
import theme, { Theme } from "../theme"

type SpaceValue = keyof typeof theme.space
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
      // And here instead of the value for the property we return an object
      // @ts-ignore solves the undefined is not assignable to string[]
      transform: (value: SpaceValue, scale: Theme["space"]) => {
        const gap = scale ? scale[value] : 0
        return {
          position: "relative",
          width: `calc(100% + ${gap})`,
          marginTop: `calc(-1 * ${gap})`,
          marginLeft: `calc(-1 * ${gap})`,
          "> *": {
            marginTop: gap,
            marginLeft: gap
          }
        }
      }
    },
    direction: {
      property: "flexDirection",
      transform: (value: DirectionValue) => (value === "vertical" ? "column" : "row")
    },
    wrap: {
      property: "flexWrap",
      transform: (value: boolean) => (value ? "wrap" : "nowrap")
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
