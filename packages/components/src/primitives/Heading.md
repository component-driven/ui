```tsx
<Heading as="h1">Heading rendered as H1</Heading>
```

### Available variants

```tsx noeditor
import {
  Typography,
  Swatch,
  Swatches,
  SwatchToken
} from "@component-driven/react-design-tokens"
import theme from "../theme"
import { headingStyles } from "../primitives/Heading"
;<Stack gap={3}>
  <Swatches theme={theme} items={headingStyles}>
    {(token) => (
      <Heading key={token} size={token}>
        Heading of size {token}
      </Heading>
    )}
  </Swatches>
</Stack>
```
