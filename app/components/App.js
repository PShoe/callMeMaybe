import React from 'react'
import City from './City'


class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <h1>hello world</h1>
      <City />
    </div>
  }

}

module.exports = App
