import styled from "styled-components"
import { Box } from "../"

const Img = styled(Box)({
  display: "inline-block",
  maxWidth: "100%"
})

Img.defaultProps = {
  as: "img"
}

/**
 * @component
 */
export default Img
