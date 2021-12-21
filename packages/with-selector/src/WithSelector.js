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
  16
)

// Inspired by https://codesandbox.io/s/pseudo-class-sticker-sheet-jiu2x
const useAddSelector = (ref, selector) => {
  const [modifiedClassName, setModifiedClassName] = useState('')
  useEffect(() => {
    const className = ref.current?.classList[ref.current.classList.length - 1]
    const fullSelector = `${className && `.${className}`}${selector}`
    const newClassName = generateCssClassName()
    let newRules = []
    for (const styleSheet of document.styleSheets) {
      for (const rule of styleSheet.cssRules) {
        if (rule.selectorText?.startsWith(fullSelector)) {
          /**
           * Replace current CSS selector with the generated one so that
           * after adding the newClassName all children can be matched
           * i.e. we map:
           * .component:focus > input -> .generatedClass > input
           */
          const CSSSelector = rule.selectorText.replace(fullSelector, `.${newClassName}`)
          newRules.push(`${CSSSelector} { ${rule.style.cssText} }`)
        }
      }
      if (newRules.length > 0) {
        newRules.forEach(addStylesheetRule)
        setModifiedClassName(newClassName)
        break // Avoid triggering infinite loop since we're modifying stylesheets
      }
    }
  }, [ref, selector])
  return [modifiedClassName]
}

const WithSelector = (props) => {
  const ref = useRef(null)
  const [modifiedClassName] = useAddSelector(ref, props.selector)

  return cloneElement(props.children, {
    ref: ref,
    className: modifiedClassName
  })
}

export default WithSelector
