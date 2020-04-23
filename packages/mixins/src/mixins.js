import { transparentize } from '@theme-ui/color'

// Check if it's a props object or the theme
// theme-ui provides theme as an argument where styled-system uses props.theme
function getTheme(theme = {}) {
  return theme['theme'] || theme
}
/**
 * Mixin to generate consistent box-shadow rule for focus rings and selections
 */
export const focusBoxShadow = color => (theme = {}) => {
  return {
    boxShadow: `0 0 0 0.2em ${transparentize(color, 0.75)(getTheme(theme))}`
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
export const focusRingStyles = (color, disabled = false) => theme => {
  const themeColor = transparentize(color, 0)(getTheme(theme)) // This serves as a getter from theme
  if (disabled) {
    return {
      outline: 'none'
    }
  }
  return {
    outline: 'none',
    borderColor: themeColor,
    transition: 'box-shadow .25s',
    ...focusBoxShadow(themeColor)(theme)
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
export const focusRing = (color, disabled = false, hover = false) => theme => {
  const styles = focusRingStyles(color, disabled)(getTheme(theme))
  const baseStyles = {
    '.js-focus-visible &:focus:not(.focus-visible)': {
      outline: 0
    },
    '&.focus-visible': styles
  }
  if (hover) {
    return {
      ...baseStyles,
      '&:hover:not(:disabled)': styles
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
