import { transparentize } from '@theme-ui/color'

/**
 * Mixin to generate consistent box-shadow rule for focus rings and selections
 */
export const focusBoxShadow = color => (t = {}) => {
  // Check if it's a props object or the theme
  // theme-ui provides theme as an argument where styled-system uses props.theme
  let theme = t.theme || t
  return {
    boxShadow: `0 0 0 0.2em ${transparentize(color, 0.75)(theme)}`
  }
}

/**
 * Mixin to add an alternative focus ring to interactive elements.
 * It removes the default focus outline.
 *
 * @example
 * styled.div`
 *   &:focus {
 *     ${focusRingStyles('red')}
 *   }
 * `
 */
export const focusRingStyles = (color, disabled = false) => (theme = {}) => {
  if (disabled) {
    return {
      outline: 'none'
    }
  }
  return {
    outline: 'none',
    borderColor: transparentize(color, 0)(theme), // This serves as a getter from theme
    transition: 'box-shadow .25s',
    ...focusBoxShadow(color)(theme)
  }
}

/**
 * Mixin to add an alternative focus styles.
 * In addition to focusRingStyles mixin and adjust styles to use with focus-visible polyfill
 *
 * @example
 * styled.div`
 *   ${focusRing('red')}
 * `
 */
export const focusRing = (color, disabled = false, hover = false) => (theme = {}) => {
  const baseStyles = {
    '.js-focus-visible &:focus:not(.focus-visible)': {
      outline: 0
    },
    '&.focus-visible': focusRingStyles(color, disabled)(theme)
  }
  if (hover) {
    return {
      ...baseStyles,
      '&:hover:not(:disabled)': focusRingStyles(color, disabled)(theme)
    }
  }
  return baseStyles
}

export const disabledStyles = {
  opacity: '0.6',
  filter: 'saturate(60%)',
  cursor: 'not-allowed'
}

export function disabled() {
  return {
    '&:disabled': disabledStyles
  }
}
