import React, { PureComponent } from 'react'

import './Carbon.module.scss'

class Carbon extends PureComponent {
  componentDidMount () {
    const script = document.createElement('script')
    script.setAttribute('async', '')
    script.src = '//cdn.carbonads.com/carbon.js?serve=CKYIE27M&placement=kyusufcom'
    script.id = '_carbonads_js'
    this.ad.appendChild(script)
  }

  render () {
    return (
      <div ref={ad => { this.ad = ad }} />
    )
  }
}

export default Carbon
