import styled from "styled-components"

/**
 * A page container to create a sticky footer.
 * @component
 */
export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

/**
 * A page content component.
 * @component
 */
export const PageContent = styled.main({ flexGrow: 1 })

/**
 * A sticky footer component.
 * @component
 */
export const PageFooter = styled.footer.attrs({
  role: "contentinfo"
})`
  margin-top: auto;
`

// export default Page
