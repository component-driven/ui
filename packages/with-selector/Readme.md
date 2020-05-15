Allows previewing a wrapped component in a specific pseudo-state like hover, focused, active.

Please note, that it required the pseudo-styles to be present on your component. Doesn't work with default HTML elements without pseudo-styles overrides.

```jsx
import styled from 'styled-components'

const Button = styled('button')`
  padding: 10px;
  margin-right: 5px;
  border: 2px solid blue;
  border-radius: 4px;
  background: #efefef;

  &:hover:enabled {
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

    &:not([aria-disabled='true']) {
      background: cadetblue;
      border-color: darkblue;
      color: #f5f5f5;
    }
  }

  &.custom-class {
    background: green;
  }
`

;<>
  <Button>normal</Button>
  <WithSelector selector=":hover:enabled">
    <Button>hover</Button>
  </WithSelector>
  <WithSelector selector=":focus">
    <Button>focus</Button>
  </WithSelector>
  <WithSelector selector=":active">
    <Button>active</Button>
  </WithSelector>
  <WithSelector selector={`:active:not([aria-disabled="true"])`}>
    <Button>active:not([aria-disabled="true"])</Button>
  </WithSelector>
  <WithSelector selector=".custom-class">
    <Button>class-name</Button>
  </WithSelector>
</>
```
