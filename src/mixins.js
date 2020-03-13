import { transparentize } from 'polished'

/**
 * Mixin to generate consistent box-shadow rule for focus rings and selections
 */
export function focusBoxShadow(color, hasInset = false) {
  return {
    boxShadow: `
        0 0 0 0.2em ${transparentize(0.75, color)}
        ${hasInset ? `, 0 0 0 1px ${color} inset` : ''}
        `
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
export function focusRingStyles(color, disabled = false) {
  if (disabled) {
    return {
      outline: 'none'
    }
  }
  return {
    outline: 'none',
    borderColor: color,
    transition: 'box-shadow .25s',
    ...focusBoxShadow(color)
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
export function focusRing(color, disabled = false, hover = false) {
  const baseStyles = {
    '.js-focus-visible &:focus:not(.focus-visible)': {
      outline: 0
    },
    '&.focus-visible': focusRingStyles(color, disabled)
  }
  if (hover) {
    return {
      ...baseStyles,
      '&:hover:not(:disabled)': focusRingStyles(color, disabled)
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
