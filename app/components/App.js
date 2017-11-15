import React from 'react'
import Nytsearch from './Nytsearch'
import City from './City'


class App extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      <City />
    </div>
  }

}

module.exports = App
