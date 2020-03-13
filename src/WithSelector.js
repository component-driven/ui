import { cloneElement, useEffect, useRef, useState } from 'react'

function addStylesheetRule(rule) {
  const styleEl = document.createElement('style')
  document.head.appendChild(styleEl)
  const styleSheet = styleEl.sheet
  styleSheet.insertRule(rule, styleSheet.cssRules.length)
}

const useAddSelector = (ref, selector) => {
  const [modifiedClassName, setModifiedClassName] = useState('')
  useEffect(() => {
    const className = ref.current.classList[ref.current.classList.length - 1]
    const fullSelector = `${className && `.${className}`}${selector}`
    const classNameWithSelector = fullSelector.replace(/(.)(:|\.)/, '$1-')
    let newRule = ''
    for (const ss of document.styleSheets) {
      for (const rule of ss.cssRules) {
        if (fullSelector === rule.selectorText) {
          newRule = `${classNameWithSelector} { ${rule.style.cssText}}`
          setModifiedClassName(classNameWithSelector.substring(1))
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
