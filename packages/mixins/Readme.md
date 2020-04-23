### `focusRing`

Creates consistent `:focus` styles for any element.

> Note: Please `import "focus-visible";` once in your application.

```javascript
import 'focus-visible' // :focus-visible polyfill
import styled, { ThemeProvider } from 'styled-components'
import WithSelector from '@component-driven/with-selector'
import { focusRing } from './'

const Button = styled('button')`
  padding: 10px;
  border: 2px solid blue;
  border-radius: 4px;
  :hover {
    background: red;
  }
  ${focusRing('primary')}
`

;<ThemeProvider
  theme={{
    colors: {
      primary: '#fc0'
    }
  }}
>
  <Button>Button</Button>{' '}
  <WithSelector selector=":hover">
    <Button>Focused</Button>
  </WithSelector>
  <WithSelector selector=".focus-visible">
    <Button>Focused</Button>
  </WithSelector>
</ThemeProvider>
```

### `focusBoxShadow`

Can be used separately to add consistent styles to other elements

```javascript
import styled, { ThemeProvider } from 'styled-components'
import { focusBoxShadow } from './'

const theme = {
  colors: {
    token: '#fc0'
  }
}

const Example = styled('div')`
  padding: 10px;
  border: 1px solid;
  border-color: ${props => props.theme.colors.token};
  ${focusBoxShadow('token')}
`

;<ThemeProvider theme={theme}>
  <Example>Box with box-shadow "focus" effect</Example>
</ThemeProvider>
```

### `disabled`

Creates consistent `:disabled` styles for any element.

```javascript
import styled from 'styled-components'
import { disabled } from './'

const Select = styled('select')`
  ${disabled()}
`

;<Select disabled>
  <option>Select...</option>
</Select>
```
