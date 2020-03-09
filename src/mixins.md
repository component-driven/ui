### `focusRing`

Creates consistent `:focus` styles for any element.

> Note: Please `import "focus-visible";` once in your application.

```javascript
import 'focus-visible' // :focus-visible polyfill
import styled from 'styled-components'
import { focusRing } from './'

const Button = styled('button')`
  padding: 10px;
  border: 2px solid blue;
  border-radius: 4px;
  ${focusRing('orange')}
`

;<Button type={'submit'}>Button</Button>
```

### `focusBoxShadow`

Can be used separately to add consistent styles to other elements

```javascript
import styled from 'styled-components'
import { focusBoxShadow } from './'

const Example = styled('div')`
  padding: 10px;
  ${focusBoxShadow('blue', true)}
`

;<Example>Box with box-shadow "focus" effect</Example>
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
