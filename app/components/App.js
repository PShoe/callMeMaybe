import React from 'react'
import Usa from './Usa'
import Aus from './Aus'



class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div class="container">
      <Aus class="city"/>
      <Usa class="city"/>
    </div>
  }

}

module.exports = App
