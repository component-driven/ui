import { cloneElement, useEffect, useRef, useState } from 'react'
import { customAlphabet } from 'nanoid'

function addStylesheetRule(rule) {
  const styleEl = document.createElement('style')
  document.head.appendChild(styleEl)
  const styleSheet = styleEl.sheet
  styleSheet.insertRule(rule, styleSheet.cssRules.length)
}

const generateCssClassName = customAlphabet(
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
  32
)

// Inspired by https://codesandbox.io/s/pseudo-class-sticker-sheet-jiu2x
const useAddSelector = (ref, selector) => {
  const [modifiedClassName, setModifiedClassName] = useState('')
  useEffect(() => {
    const className = ref.current.classList[ref.current.classList.length - 1]
    const fullSelector = `${className && `.${className}`}${selector}`
    // NOTE: This could be improved, because checking the provided selector starts with a '.'
    // is probably not the best way to determine the selector is a class name or not.
    const isClassNameSelector = selector.startsWith('.')
    let newRule = ''
    for (const ss of document.styleSheets) {
      for (const rule of ss.cssRules) {
        if (fullSelector === rule.selectorText) {
          const cssClassName = isClassNameSelector ? selector : `.${generateCssClassName()}`
          newRule = `${cssClassName} { ${rule.style.cssText}}`
          setModifiedClassName(cssClassName.substring(1))
          break
        }
      }
      if (newRule) {
        addStylesheetRule(newRule)
        break
      }
    }
  }, [ref, selector])
  return [modifiedClassName]
}

const WithSelector = props => {
  const ref = useRef(null)
  const [modifiedClassName] = useAddSelector(ref, props.selector)

  return cloneElement(props.children, {
    ref: ref,
    className: modifiedClassName
  })
}

export default WithSelector
