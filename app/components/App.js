import React from 'react'
import World from './World'
import Aus from './Aus'
import Usa from './Usa'



class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div className="container">
      <Aus />
      <World />
      <Usa />
    </div>
  }
}

module.exports = App
