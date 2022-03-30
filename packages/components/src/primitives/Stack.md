### Vertical

```tsx
<Stack gap={4}>
  <Box p={3} bg="primary" width={"100%"}>
    Item 1
  </Box>
  <Box p={3} bg="primary" width={"50%"}>
    Item 2
  </Box>
  <Box p={3} bg="primary" width={"25%"}>
    Item 3
  </Box>
</Stack>
```

### Horizontal

```tsx
<Stack gap={4} direction="horizontal">
  <Box p={3} bg="primary">
    Item 1
  </Box>
  <Box p={3} bg="primary">
    Item 2
  </Box>
  <Box p={3} bg="primary">
    Item 3
  </Box>
</Stack>
```

Stack respects flex props (but overrides margins) set on children elements:

```tsx
<Stack gap={2} direction="horizontal">
  <Box p={3} bg="muted">
    Item without margins
  </Box>
  <Box p={3} bg="primary" flexGrow={1}>
    Item with flexGrow
  </Box>
  <Box p={3} bg="muted">
    Item without margins
  </Box>
</Stack>
```

### Responsive

```tsx
<Stack
  as="nav"
  gap={[4, 3, 2]}
  direction={["vertical", "horizontal"]}
  wrap={[true, false, true]}
  p={4}
  border="thin"
  borderColor="muted"
  overflow="hidden"
>
  <Button>Drink coffee</Button>
  <Button>Buy pizza</Button>
  <Button>Großes Frühstück essen</Button>
  <Button>Code</Button>
  <Button>Drink coffee</Button>
  <Button>Buy pizza</Button>
  <Button>Großes Frühstück essen</Button>
  <Button>Code</Button>
  <Button>Drink coffee</Button>
  <Button>Buy pizza</Button>
  <Button>Großes Frühstück essen</Button>
  <Button>Code</Button>
</Stack>
```

### Nested Stack

```tsx
import { Heading, Stack, Text } from "../"
;<Stack gap={4} p={4} border="thin" borderColor="muted">
  <Heading>Please fill the form</Heading>
  <Stack
    direction={["vertical", "horizontal"]}
    gap={3}
    pt={4}
    borderTop="thin"
    borderColor="muted"
  >
    <Input name="item1" placeholder="Item 1" flexGrow={1} />
    <Input name="item1" placeholder="Item 2" flexGrow={1} />
    <Button>Submit</Button>
  </Stack>
  <Stack
    gap={2}
    direction={["vertical", "horizontal"]}
    alignItems="baseline"
  >
    <Text variant="primary">
      By submitting this form you're accepting our terms.
    </Text>
    <Text variant="tertiary">The text must be on the baseline.</Text>
  </Stack>
</Stack>
```
