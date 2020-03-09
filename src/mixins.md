### `focusRing`

Creates consistent `:focus` styles for any element.

> Note: Please `import "focus-visible";` once in your application.

```javascript
require('focus-visible') // :focus-visible polyfill
const styled = require('styled-components').default
const { focusRing } = require('./index')

const Button = styled('button')`
  padding: 10px;
  ${focusRing('red')}
`

;<Button type={'submit'}>Button</Button>
```

### `focusBoxShadow`

Can be used separately to add consistent styles to other elements

```javascript
const styled = require('styled-components').default
const { focusBoxShadow } = require('./index')

const Example = styled('div')`
  padding: 10px;
  ${focusBoxShadow('red', true)}
`

;<Example>Box with box-shadow "focus" effect</Example>
```

### `disabled`

Creates consistent `:disabled` styles for any element.

```javascript
const styled = require('styled-components').default
const { disabled } = require('./index')

const Select = styled('select')`
  ${disabled()}
`

;<Select disabled>
  <option>Select...</option>
</Select>
```
