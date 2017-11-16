import React from 'react'
import moment from 'moment'
import tz from 'moment-timezone'
import _ from 'underscore'
var path = require('path');
var google = require('google')

export default class GoogleSearch extends React.Component {

  constructor(props) {
    super(props)

    google.timeSpan = 'w'
    google.resultsPerPage = 25
    var nextCounter = 0
    google('melbourne headlines', function (err, res){
      console.log(res.links)
    })

    this.state = {
      results: res.links
    }
  }
    render() {
      const { results } = this.state
      console.log(this.state)
      return <div>
      </div>
    }

  }
