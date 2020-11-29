Using Grid we can create any CSS grid layout:

```tsx
<Grid gridTemplateColumns="1fr 1fr 1fr">
  <Box p={3} bg="primary">
    Column 1
  </Box>
  <Box p={3} bg="primary">
    Column 2
  </Box>
  <Box p={3} bg="primary">
    Column 3
  </Box>
</Grid>
```

or more complex one:

```tsx
<Grid
  gridTemplateColumns="auto 1fr auto"
  gridColumnGap={2}
  gridRowGap={1}
>
  <Flex p={3} bg="primary" gridRow="span 2" alignItems="center">
    Text
  </Flex>
  <Box p={3} bg="primary">
    First Name
  </Box>
  <Box p={3} bg="primary" gridColumn={2} gridRow={2}>
    Last Name
  </Box>
  <Flex p={3} bg="primary" gridRow="span 2" alignItems="flex-end">
    Column 3
  </Flex>
</Grid>
```

### Additional props

Set `columns` and `rows` prop to create a layout with the amount of columns that take all the space:

```tsx
<Grid columns={3} gridGap={4}>
  <Box p={3} bg="primary">
    Column 1
  </Box>
  <Box p={3} bg="primary">
    Column 2
  </Box>
  <Box p={3} bg="primary">
    Column 3
  </Box>
  <Box p={3} bg="accent">
    Column 1
  </Box>
  <Box p={3} bg="accent">
    Column 2
  </Box>
  <Box p={3} bg="accent" gridColumn="1">
    Column 3
  </Box>
</Grid>
```

Set `minColumnWidth` prop to create a variable columns and rows layout based on child minimum width:

```tsx
<Grid gridGap={2} minColumnWidth={400}>
  <Box p={3} bg="primary">
    Item 1
  </Box>
  <Box p={3} bg="primary">
    Item 2
  </Box>
  <Box p={3} bg="primary">
    Item 3
  </Box>
  <Box p={3} bg="primary">
    Item 4
  </Box>
</Grid>
```
