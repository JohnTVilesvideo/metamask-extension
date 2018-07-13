const Component = require('react').Component
const h = require('react-hyperscript')
const inherits = require('util').inherits
const extend = require('xtend')
const { ObjectInspector } = require('react-inspector')

module.exports = TypedMessageRenderer

inherits(TypedMessageRenderer, Component)
function TypedMessageRenderer () {
  Component.call(this)
}

TypedMessageRenderer.prototype.render = function () {
  const props = this.props
  const { value, style } = props
  const text = renderTypedData(value)

  const defaultStyle = extend({
    width: '315px',
    maxHeight: '210px',
    resize: 'none',
    border: 'none',
    background: 'white',
    padding: '3px',
    overflow: 'scroll',
  }, style)

  return (
    h('div.font-small', {
      style: defaultStyle,
    }, text)
  )
}

function renderTypedData (values) {
  const { message } = JSON.parse(values)
  return [ message ? h(ObjectInspector, { data: message, expandLevel: 1 }) : '' ]
}
