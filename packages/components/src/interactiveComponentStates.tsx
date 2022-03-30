import React, { ReactElement } from "react"
// @ts-ignore
import WithSelector from "@component-driven/with-selector"
import { Grid } from "./"

type StateProps = {
  state: string
}

type Props = {
  children: (arg0: StateProps) => ReactElement
  states?: {
    [key: string]: string | boolean
  }
}

const defaultStates = {
  default: "",
  hovered: ":hover",
  focused: ".focus-visible",
  disabled: true
}

function InteractiveComponentStates({ children, states = defaultStates }: Props) {
  const entries = Object.entries(states)
  return (
    <Grid gridGap={4} columns={entries.length}>
      {entries.map(([key, value]) =>
        typeof value === "boolean" ? (
          React.cloneElement(children({ state: key }), {
            key,
            [key]: value
          })
        ) : (
          <WithSelector selector={value} key={key}>
            {children({ state: key })}
          </WithSelector>
        )
      )}
    </Grid>
  )
}

export default InteractiveComponentStates
