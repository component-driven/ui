Checkbox can be in two states.

### Unchecked

```tsx
<Checkbox onChange={() => {}} />
```

### Checked

```tsx
<Checkbox checked onChange={() => {}} />
```

### Disabled

```tsx
<Checkbox disabled onChange={() => {}} />
<Checkbox disabled checked onChange={() => {}} />
```

### Controlling Checkbox

Checkbox is a controlled component so you have to manage the state yourself

```tsx
const [checked, setChecked] = React.useState(false)
;<Checkbox
  checked={checked}
  onChange={(event) => {
    setChecked(event.target.checked)
  }}
/>
```

Checkbox also works with `Label`. You can either wrap `Checkbox` in `label`:

```tsx
const [checked, setChecked] = React.useState(false)
;<label>
  <Checkbox
    checked={checked}
    onChange={(event) => {
      setChecked(event.target.checked)
    }}
  />
  Click me to toggle
</label>
```

or assigning both `htmlFor` and `id` attributes.

```tsx
const [checked, setChecked] = React.useState(false)
;<>
  <Checkbox
    checked={checked}
    onChange={(event) => {
      setChecked(event.target.checked)
    }}
    id="my-checkbox"
  />
  <label htmlFor="my-checkbox" onClick={(e) => e.stopPropagation()}>
    Click me to toggle
  </label>
</>
```
