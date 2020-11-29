import React from "react"

/**
 * Render element that’s "hidden" for screen readers
 */
const HiddenFromReaders: React.FC<{}> = (props) => {
  return <span aria-hidden="true" {...props} />
}

/** @component */
export default HiddenFromReaders
