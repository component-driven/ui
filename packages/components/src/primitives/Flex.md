Using Flex we can create a simple columns layout:

```tsx
<Flex>
  <Box flex="1 1 auto" p={3} bg="primary">
    Column 1
  </Box>
  <Box flex="1 1 auto" p={3} bg="primary">
    Column 2
  </Box>
  <Box flex="1 1 auto" p={3} bg="primary">
    Column 3
  </Box>
</Flex>
```

or rows:

```tsx
<Flex flexDirection="column">
  <Box p={3} bg="primary">
    Column 1
  </Box>
  <Box p={3} bg="primary">
    Column 2
  </Box>
  <Box p={3} bg="primary">
    Column 3
  </Box>
</Flex>
```
