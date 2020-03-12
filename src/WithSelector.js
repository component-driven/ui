import { cloneElement, useEffect, useRef, useState } from 'react'

const useAddSelector = (ref, selector) => {
  const [modifiedClassName, setModifiedClassName] = useState('')
  useEffect(() => {
    const className = ref.current.classList[1]
    const fullSelector = `${className && `.${className}`}${selector}`
    const classNameWithSelector = fullSelector
      .replace(':', '-')
      .replace('.focus-visible', '-focus-visible')
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
        ss.insertRule(newRule, ss.cssRules.length)
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
