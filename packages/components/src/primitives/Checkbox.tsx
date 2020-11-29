import React from "react"

type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "checked" | "disabled" | "onChange"
> & {
  /** Whether checkbox should be disabled */
  disabled?: boolean

  /** Whether checkbox should be checked */
  checked?: boolean

  /** Callback function */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<Props> = ({ checked, ...rest }) => {
  return <input {...rest} checked={checked} type="checkbox" />
}

export default Checkbox
