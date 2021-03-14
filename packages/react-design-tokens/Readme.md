# react-design-tokens

[![Build Status](https://travis-ci.org/component-driven/react-design-tokens.svg)](https://travis-ci.org/component-driven/react-design-tokens) [![npm](https://img.shields.io/npm/v/@component-driven/react-design-tokens.svg)](https://www.npmjs.com/package/@component-driven/react-design-tokens)

React components to document design tokens in a styleguide.

## Examples

### [Component-driven Design Systems Workshop](https://github.com/component-driven/component-driven-development) Design System

```jsx harmony
import { Grid } from 'theme-ui'
import theme from './src/examples/cdds'
import { Colors, Spacing, Typography } from './src'

;<Grid gap={5}>
  <Colors theme={theme} />
  <Spacing theme={theme} />
  <Typography theme={theme} />
</Grid>
```

### GitHub Primer Design System

```jsx harmony
import { Grid } from 'theme-ui'
import theme from './src/examples/primer'
import { Colors, Spacing, Typography } from './src'

;<Grid gap={5}>
  <Colors theme={theme} />
  <Spacing theme={theme} />
  <Typography theme={theme} />
</Grid>
```
