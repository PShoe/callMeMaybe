import React from 'react'
import World from './World'
import Aus from './Aus'
import Usa from './Usa'
import AppBar from 'material-ui/AppBar';



class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return<div>
    <AppBar
title="callMeMaybe?"
iconClassNameRight="muidocs-icon-navigation-expand-more"
/>
    <div className="container">
      <Aus className="city"/>
      <World className="city"/>
      <Usa className="city"/>
    </div>
    </div>
  }
}

module.exports = App
