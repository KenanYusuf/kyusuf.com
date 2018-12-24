import React, { PureComponent } from 'react'

class Main extends PureComponent {
  render () {
    const { children } = this.props

    return (
      <main>
        {children}
      </main>
    )
  }
}

export default Main
