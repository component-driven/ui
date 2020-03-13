Allows previewing a wrapped component in a specific pseudo-state like hover, focused, active.

Please note, that it required the pseudo-styles to be present on your component. Doesn't work with default HTML elements without pseudo-styles overrides.

```jsx harmony
import styled from 'styled-components'

const Button = styled('button')`
  padding: 10px;
  margin-right: 5px;
  border: 2px solid blue;
  border-radius: 4px;
  background: #efefef;

  &:hover {
    background: #ccc;
    border-color: red;
  }

  &:focus {
    outline: none;
    border-color: orange;
  }

  &:active {
    border-color: #333;
    background: #888;
    color: #fff;
  }

  &.class-name {
    background: green;
  }
`

;<>
  <Button>normal</Button>
  <WithSelector selector=":hover">
    <Button>hover</Button>
  </WithSelector>
  <WithSelector selector=":focus">
    <Button>focus</Button>
  </WithSelector>
  <WithSelector selector=":active">
    <Button>active</Button>
  </WithSelector>
  <WithSelector selector=".class-name">
    <Button>class-name</Button>
  </WithSelector>
</>
```
