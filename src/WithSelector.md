```jsx harmony
import styled from 'styled-components'

const Button = styled('button')`
  padding: 10px;
  margin-right: 5px;
  border: 2px solid blue;
  border-radius: 4px;
  :hover {
    background: red;
  }
  :focus {
    background: orange;
  }
`

;<>
  <Button>test</Button>
  <WithSelector selector=":hover">
    <Button>test</Button>
  </WithSelector>
  <WithSelector selector=":focus">
    <Button>test</Button>
  </WithSelector>
</>
```
