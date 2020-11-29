import styled from "styled-components"
import { Box } from "../"
import { BoxProps } from "./Box"

const Flex = styled(Box)<BoxProps>({
  display: "flex"
})

export default Flex
