import React from 'react'


export default class X extends React.Component {

  constructor(props) {
    }

  handleChange(event) {
    this.setState({ password: event.target.value })
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}
