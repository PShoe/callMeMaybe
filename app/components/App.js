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
      <Aus className="city"/>
      <World lassName="city"/>
      <Usa lassName="city"/>
    </div>
  }
}

module.exports = App
