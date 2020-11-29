### Empty input

```jsx
<InteractiveComponentStates
  states={{
    default: "",
    focused: ".focus-visible",
    disabled: true,
    readOnly: true
  }}
>
  {({ state }) => <Input placeholder={`Input in ${state} state`} />}
</InteractiveComponentStates>
```

### Input with a value

```jsx
<InteractiveComponentStates
  states={{
    default: "",
    focused: ".focus-visible",
    disabled: true,
    readOnly: true
  }}
>
  {({ state }) => <Input defaultValue={`Value in ${state} state`} />}
</InteractiveComponentStates>
```
