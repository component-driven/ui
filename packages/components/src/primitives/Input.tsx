import React from "react"
import { useTheme } from "styled-components"
// @ts-ignore
import { disabled, focusRing } from "@component-driven/mixins"
import { Box } from "../"
import { BoxProps } from "./Box"

const Input: React.FC<
  BoxProps & {
    as?: React.ElementType
  }
> = React.forwardRef((props, ref) => {
  const theme = useTheme()
  return (
    <Box
      as="input"
      ref={ref}
      m={0}
      p={3}
      fontSize="s"
      bg="background"
      borderRadius="none"
      border="thin"
      borderColor="tertiary"
      {...props}
      css={[
        {
          "::placeholder": {
            color: theme.colors.tertiary
          }
        },
        focusRing("primary"),
        disabled
      ]}
    />
  )
})

Input.defaultProps = {
  type: "text"
}

export default Input
