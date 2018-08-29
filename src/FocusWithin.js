/* eslint-env node, browser */

import React from 'react'
import PropTypes from 'prop-types'

const noOutlineStyles = {
  outline: 'none'
}

class FocusWithin extends React.Component {
  state = {
    focused: false
  }

  lastBlurEvent = null

  ref = React.createRef()

  componentDidMount() {
    /**
     * In order for document.body to receive focus events
     * it needs to be focusable. Adding `tabindex="-1"` makes it focusable
     * but prevents it from receiving the focus on user interaction.
     */
    if (document != null) {
      document.querySelector('body').setAttribute('tabindex', '-1')
    }
  }

  /**
   * Calls `focus` method on the container node
   *
   * @public
   * @method focus
   * */
  focus() {
    const node = this.ref.current
    if (node != null && typeof node.focus === 'function') {
      node.focus()
    }
  }

  /**
   * Event handler that fires if the FocusEvent bubbled up to the document.
   *
   * @private
   * @method _onFocusIn
   *
   * We check if 3 conditions are met:
   * 1. Current state is focused
   * 2. Blur occured inside the container
   * 3. Focus occured outside of the container
   *
   * In this case we fire `onBlur` callback.
   */
  _onFocusIn = () => {
    if (
      this.lastBlurEvent &&
      this.isInsideNode(this.ref.current, this.lastBlurEvent.target) &&
      !this.isInsideNode(this.ref.current, document.activeElement)
    ) {
      this.setState(
        {
          focused: false
        },
        () => {
          document.removeEventListener('focusin', this._onFocusIn)
          this.props.onBlur(this.lastBlurEvent)
        }
      )
    }
  }

  /**
   * @private
   * @method onFocus
   */
  onFocus = evt => {
    const { onFocus } = this.props
    const { focused } = this.state

    /**
     * If it's not focused yet we'll set the state to `focused: true`
     */
    if (!focused) {
      this.setState(
        {
          focused: true
        },
        () => {
          /**
           * Attach a native event listener to the document. We have to use `focusin` since
           * native `focus` event doesn't bubble. See
           * https://developer.mozilla.org/en-US/docs/Web/Events/focusin and
           * https://developer.mozilla.org/en-US/docs/Web/Events/focus
           */
          document.addEventListener('focusin', this._onFocusIn)
          onFocus(evt)
        }
      )
    }
  }

  /**
   * @private
   * @method onBlur
   */
  onBlur = evt => {
    evt.persist() // Persist the original event since it will be fired later
    this.lastBlurEvent = evt
  }

  /**
   * Checks if the parentNode contains the node
   *
   * @private
   * @method isInsideNode
   * @param parentNode
   * @param node
   * @returns {boolean}
   */
  isInsideNode = (parentNode, node) => {
    if (process.env.NODE_ENV === 'development') {
      if (parentNode == null || Object(parentNode).nodeType !== 1) {
        throw new Error(
          'A ref to a valid DOM Node must be supplied to' +
            ' FocusWithin.\n' +
            ' You have probably provided a ref to a React Element.\n See https://reactjs.org/docs/react-api.html#refs'
        )
      }
    }
    return parentNode.contains(node)
  }

  render() {
    const { children } = this.props
    const { focused } = this.state

    const events = {
      onFocus: this.onFocus,
      onBlur: this.onBlur
    }

    if (typeof children === 'function') {
      return React.cloneElement(
        children({
          focused,
          getRef: this.ref
        }),
        events
      )
    }

    return (
      <div ref={this.ref} style={noOutlineStyles} {...events}>
        {children}
      </div>
    )
  }
}

FocusWithin.propTypes = {
  /**
   * Function has the following signature:
   * `({ focused: Boolean, getRef: Function }) => React.Element`
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
}

FocusWithin.defaultProps = {
  onBlur: () => {},
  onFocus: () => {}
}

export default FocusWithin
