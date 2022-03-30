```tsx
<Box p={3} m={2} width={1 / 4} bg="primary">
  Box content
</Box>
```

### Custom styles with `css` prop

Note that `css` prop isn't theme-aware. If you want to use design tokens from the theme here, you need to use the `useTheme` hook.

```tsx
import { useTheme } from "styled-components"
const theme = useTheme()

;<Box
  css={{
    backgroundColor: theme.colors.primary
  }}
>
  <Box
    as="a"
    href="#"
    css={{
      color: "white",
      ":hover": {
        backgroundColor: "white",
        color: "primary"
      }
    }}
  >
    Nav item
  </Box>
</Box>
```
