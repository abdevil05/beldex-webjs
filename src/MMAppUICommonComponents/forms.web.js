'use strict'

const View = require('../Views/View.web')

function New_fieldTitle_labelLayer (labelText, context) {
  const layer = document.createElement('span')
  layer.innerHTML = labelText
  layer.classList.add('field_title')
  layer.classList.add('field-title-label')
  //
  return layer
}
exports.New_fieldTitle_labelLayer = New_fieldTitle_labelLayer

function New_fieldTitle_rightSide_accessoryLayer (labelText, context) {
  const layer = document.createElement('span')
  layer.className = 'field_title'
  layer.innerHTML = 'optional'
  layer.style.webkitUserSelect = 'none'
  layer.style.MozUserSelect = 'none'
  layer.style.msUserSelect = 'none'
  layer.style.userSelect = 'none'
  layer.style.display = 'block' // own line
  layer.style.margin = '15px 0 8px 8px'
  layer.style.textAlign = 'left'
  //
  if (context.isMobile === true) {
    layer.style.fontFamily = 'Native-Regular, input, menlo, monospace'
    layer.style.fontSize = '11px'
    layer.style.fontWeight = 'lighter'
  } else {
    layer.style.fontFamily = 'Native-Light, input, menlo, monospace'
    layer.style.webkitFontSmoothing = 'subpixel-antialiased' // for chrome browser
    layer.style.fontSize = '10px'
    layer.style.letterSpacing = '0.5px'
    if (typeof process !== 'undefined' && process.platform === 'linux') {
      layer.style.fontWeight = '700' // surprisingly does not render well w/o this… not linux thing but font size thing. would be nice to know which font it uses and toggle accordingly. platform is best guess for now
    } else {
      layer.style.fontWeight = '300'
    }
  }
  layer.style.float = 'right'
  layer.style.color = '#6B696B'
  layer.style.fontSize = '11px'
  layer.style.letterSpacing = '0'
  layer.style.marginRight = '10px'
  return layer
}
exports.New_fieldTitle_rightSide_accessoryLayer = New_fieldTitle_rightSide_accessoryLayer

function ScrollCurrentFormElementIntoView () { // not a factory but a convenience function for call, e.g.. on window resize
  const activeElement = document.activeElement
  if (activeElement) {
    const tagName = activeElement.tagName
    if (tagName === 'INPUT' || tagName === 'TEXTAREA') {
      const scrollToView_fn = activeElement.Component_ScrollIntoViewInFormContainerParent
      // does it conform to informal 'protocol'?
      // doing it this way instead of just calling _shared_scrollElementIntoView…
      // so that elements can declare if they want to conform
      if (scrollToView_fn && typeof scrollToView_fn === 'function') {
        scrollToView_fn.apply(activeElement)
      }
    }
  }
}
exports.ScrollCurrentFormElementIntoView = ScrollCurrentFormElementIntoView

let LocalVendor_ScrollPositionEndFixed_Animate = null
function _shared_scrollConformingElementIntoView (inputLayer) {
  LocalVendor_ScrollPositionEndFixed_Animate = require('velocity-animate')
  const selector = '.ClassNameForScrollingAncestorOfScrollToAbleElement'
  const scrollingAncestor = inputLayer.closest(selector)
  if (!scrollingAncestor || typeof scrollingAncestor === 'undefined') {
    console.warn('⚠️  Asked to _shared_scrollConformingElementIntoView but no scrollingAncestor found')
    return
  }

  LocalVendor_ScrollPositionEndFixed_Animate(inputLayer, 'stop')
  LocalVendor_ScrollPositionEndFixed_Animate(scrollingAncestor, 'stop')
  const navBarHeight = 44 // janky/fragile
  const topMargin = 20 // to clear the form title labels - would be nice to source these from shared constants/metrics
  LocalVendor_ScrollPositionEndFixed_Animate(
    inputLayer,
    'scroll',
    {
      container: scrollingAncestor,
      duration: 500,
      offset: -1 * (topMargin + navBarHeight)
    }
  )
}
exports._shared_scrollConformingElementIntoView = _shared_scrollConformingElementIntoView

function New_fieldValue_textInputLayer (context, params) {
  const layer = document.createElement('input')
  layer.className = 'field_value'
  layer.type = params.customInputType || 'text'
  layer.style.display = 'block' // own line
  const existingValue = params.existingValue
  if (typeof existingValue !== 'undefined' && existingValue !== null) {
    layer.value = existingValue
  }
  const placeholderText = params.placeholderText
  if (typeof placeholderText !== 'undefined' && placeholderText !== null) {
    layer.placeholder = placeholderText
  }

  layer.Component_default_h = function () { return 29 } // H for height
  layer.style.height = layer.Component_default_h() + 'px'

  if (typeof params.target_width !== 'undefined') {
    const width = params.target_width - 2 * 1 - 2 * 7
    layer.style.width = width + 'px'
  } else {
    layer.style.width = 'calc(100% - 2px - 14px)'
  }
  layer.style.borderRadius = '4px'
  layer.style.border = '1px solid rgba(0,0,0,0)' // transparent border to preserve layout while showing validation clr border
  layer.style.textAlign = 'left'
  layer.style.fontSize = '13px'
  layer.style.fontWeight = '200'
  layer.style.padding = '0 7px'
  layer.style.fontFamily = 'Native-Light, input, menlo, monospace'
  layer.style.outline = 'none' // no focus ring
  // editable:true
  if (context.isMobile !== true) {
    layer.style.boxShadow = '0 0.5px 0 0 rgba(56,54,56,0.50), inset 0 0.5px 0 0 #161416'
  } else { // avoiding shadow
    layer.style.boxShadow = 'inset 0 0.5px 0 0 #161416'
  }
  layer.style.color = '#dfdedf'
  layer.style.backgroundColor = '#1d1b1d'
  layer.disabled = false
  layer.Component_ScrollIntoViewInFormContainerParent = function () { // this could also be called on window resize
    const this_layer = this
    _shared_scrollConformingElementIntoView(this_layer)
  }
  if (context.isMobile === true) {
    layer.addEventListener('focus', function () {
      layer.Component_ScrollIntoViewInFormContainerParent()
    })
  }
  return layer
}
exports.New_fieldValue_textInputLayer = New_fieldValue_textInputLayer
//
function New_fieldValue_textAreaView (params, context) {
  const view = new View({ tag: 'textarea' }, context)
  const layer = view.layer
  layer.className = 'field_value'
  layer.style.display = 'block' // own line
  const existingValue = params.existingValue
  if (typeof existingValue !== 'undefined' && existingValue !== null) {
    layer.value = existingValue
  }
  const name = params.name
  if (typeof name !== 'undefined' && name !== null) {
    layer.classList.add(name)
  }
  const placeholderText = params.placeholderText
  if (typeof placeholderText !== 'undefined' && placeholderText !== null) {
    layer.placeholder = placeholderText
  }
  layer.style.padding = '9px 8px'
  layer.style.height = '45px'
  layer.style.width = 'calc(100% - 16px)' // no border so no -2*brdr_w
  layer.style.borderRadius = '3px'
  layer.style.border = 'none'
  layer.style.textAlign = 'left'
  layer.style.fontSize = '13px'
  layer.style.fontWeight = '100'
  layer.style.lineHeight = '15px'
  layer.style.resize = 'none' // not user-resizable
  layer.style.outline = 'none' // no focus ring
  layer.style.fontFamily = 'Native-Light, input, menlo, monospace'
  layer.style.wordBreak = 'break-word'
  //
  view.SetEnabled = function (isEnabled) {
    if (isEnabled) {
      if (context.isMobile !== true) {
        layer.style.boxShadow = '0 0.5px 0 0 rgba(56,54,56,0.50), inset 0 0.5px 0 0 #161416'
      } else { // avoiding shadow
        layer.style.boxShadow = 'inset 0 0.5px 0 0 #161416'
      }
      //
      layer.style.color = '#dfdedf'
      layer.style.backgroundColor = '#1d1b1d'
      layer.disabled = undefined
    } else {
      layer.style.boxShadow = 'none'
      //
      layer.style.color = '#dfdedf'
      layer.style.backgroundColor = '#1d1b1d'
      layer.disabled = true
    }
    view.isEnabled = isEnabled // this going to cause a retain cycle ?
  }
  view.SetEnabled(true) // to get initial styling, any state, et al.
  //
  // putting this on layer instead of view for now to conform to informal 'protocol' of ScrollCurrentFormElementIntoView
  layer.Component_ScrollIntoViewInFormContainerParent = function () {
    const this_layer = this
    _shared_scrollConformingElementIntoView(this_layer)
  }
  if (context.isMobile === true) {
    layer.addEventListener('focus', function () {
      // TODO: retain cycle?
      layer.Component_ScrollIntoViewInFormContainerParent()
    }
    )
  }
  //
  return view
}
exports.New_fieldValue_textAreaView = New_fieldValue_textAreaView
