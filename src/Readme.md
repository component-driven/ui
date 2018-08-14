FocusWithin is a component that allows detecting if one of its children has focus. It's using the CSS `:focus-within` selector under the hood to detect the focus and should be considered as a missing JS API for `focus-within`.

FocusWithin will fire `onFocus` once one of its children will receive focus. Similarly `onBlur` is going to be fired once focus is left all its children.

## Simple example

Open developer console to see log messages.

```jsx harmony
<FocusWithin
  onFocus={() => {
    console.log("Received focus");
  }}
  onBlur={() => {
    console.log("Lost focus");
  }}
>
  <input type="text" placeholder="Click to activate first input" />
  <input type="text" placeholder="Use Tab to activate next input" />
  <button>A button to try focus</button>
</FocusWithin>
```

## Reacting to the focus change

If you want to react to the focus change, use function as a children pattern. When function is used as children, you _must_ provide the `ref` prop.

```jsx harmony
<FocusWithin
  onFocus={() => {
    console.log("Received focus");
  }}
  onBlur={() => {
    console.log("Lost focus");
  }}
>
  {({ focused, getRef }) => (
    <form>
      <fieldset ref={getRef} style={{ borderColor: focused ? "blue" : "#999" }}>
        <label htmlFor="input1">First input</label>
        <input
          id="input1"
          type="text"
          placeholder="Click to activate first input"
        />
        <label htmlFor="input2">First input</label>
        <input
          id="input2"
          type="text"
          placeholder="Use Tab to activate next input"
        />
        <button type="submit">Submit</button>
        <p style={{ color: focused ? "danger" : "text" }}>
          {focused ? "Focus is inside" : "No focus here"}
        </p>
      </fieldset>
    </form>
  )}
</FocusWithin>
```

## Using with CSS-in-JS libs

If you're using a CSS-in-JS library like [styled-components](https://www.styled-components.com) you need to pass a ref using `innerRef` prop. You can use `getRef` function from the parameters.

```js static
({ focused: Boolean, getRef: Function }) => React.Element;
```

```jsx harmony
const styled = require("styled-components").default;
const StyledBox = styled("div")`
  padding: 20px;
  border: 1px solid;
  border-color: ${props => (props.focused ? "palevioletred" : "#999")};

  & > * + * {
    margin-left: 20px;
  }
`;
<FocusWithin
  onFocus={() => {
    console.log("Received focus");
  }}
  onBlur={() => {
    console.log("Lost focus");
  }}
>
  {({ focused, getRef }) => (
    <StyledBox innerRef={getRef} focused={focused}>
      <input type="text" placeholder="Click to activate first input" />
      <input type="text" placeholder="Use Tab to activate next input" />
      <button>A button to try focus</button>
    </StyledBox>
  )}
</FocusWithin>;
```

_Note:_ It's recommended to use `:focus-within` selector instead of interpoaltions whenever possible.

## Focus method

Sometimes it's needed to focus the container node programmatically. You can use the public method
`focus`. Note that `tabIndex={-1}` needs to be set on non-interactive elements to make them
receive focus.

```jsx harmony
const ref = React.createRef();
<div>
  <FocusWithin ref={ref}>
    {({ focused, getRef }) => (
      <span tabIndex={-1} ref={getRef}>
        {focused ? "Focused" : "Not focused"}
      </span>
    )}
  </FocusWithin>
  <button
    onClick={() => {
      ref.current.focus();
    }}
  >
    Focus the span
  </button>
</div>;
```

## Naïve focus trap implementation

```jsx harmony
const firstInput = React.createRef();
initialState = {
  enabled: false
};
<FocusWithin
  onBlur={() => {
    state.enabled && firstInput.current.focus();
  }}
>
  <fieldset>
    <input
      type="text"
      placeholder="Click to activate first input"
      ref={firstInput}
    />
    <input type="text" placeholder="Use Tab to activate next input" />
    <button
      type="submit"
      onClick={() => {
        setState({
          enabled: !state.enabled
        });
        if (!state.enabled) {
          firstInput.current.focus();
        }
      }}
    >
      {state.enabled ? "Disable" : "Enable"} focus trap
    </button>
  </fieldset>
</FocusWithin>;
```
