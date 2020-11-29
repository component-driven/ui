By default, `Text` renders a paragraph HTML element and uses `body` style:

```tsx
<Text>The quick brown fox jumps over the lazy dog</Text>
```

You can choose one of the pre-defined text styles using `variant` prop:

```tsx
<Text textStyle="tertiary">
  The quick brown fox jumps over the lazy dog
</Text>
```

or create a custom text style using system props:

```tsx
<Text color="primary">
  The quick brown fox jumps over the lazy dog
</Text>
```

### Available text styles

You should stick to `variant` if possible since it ensures consistent typographic styles across the whole project. Here is the list of available text styles:

```tsx noeditor
import { Typography } from "@component-driven/react-design-tokens"
import theme from "../theme"
import { textStyles } from "../primitives/Text"
;<Typography theme={{ ...theme, textStyles }} />
```
