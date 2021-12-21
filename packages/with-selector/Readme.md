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

## Support for nested selectors

```jsx
import styled from 'styled-components'

const InputWrapper = styled('div')({
  padding: 4,
  border: '1px solid #ccc',
  borderRadius: 3,
  background: '#efefef',
  '& > input': {
    border: '1px solid green'
  },
  '> button': {
    position: 'relative',
    appearance: 'none',
    '::after': {
      position: 'absolute',
      right: 0,
      top: 0,
      background: 'pink',
      content: "''"
    }
  },
  ':focus-within': {
    background: '#ccc',
    input: {
      outline: 'none',
      borderColor: 'red'
    },
    button: {
      marginLeft: 10,
      borderColor: 'yellow',
      '::after': {
        content: "'focus'"
      }
    }
  }
})

const Input = React.forwardRef((props, ref) => (
  <InputWrapper {...props} ref={ref}>
    <input type="text" />
    <button>this is a nested button</button>
  </InputWrapper>
))

;<>
  <Input placeholder="Normal input" />
  <WithSelector selector=":focus-within">
    <Input placeholder="Normal input" />
  </WithSelector>
</>
```
