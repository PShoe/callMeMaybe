import React from 'react'
import moment from 'moment'
import tz from 'moment-timezone'
import _ from 'underscore'
import './City.css'
import './normalize.css'


export default class Usa extends React.Component {

  constructor(props) {
    super(props)
    this.clockUpdate = this.clockUpdate.bind(this)
    this.calculateTimeAvailable = this.calculateTimeAvailable.bind(this)
    this.handleAwake = this.handleAwake.bind(this)

    this.state = {
      USNews: [],
      USweather: [],
      USweather_temp: [],
      current_time: '',
      awake: false
    }
  }

  componentDidMount() {
    const USNews = "https://api.nytimes.com/svc/topstories/v2/national.json?api-key=93b9276df11d46f5a5ceee40b41ac7fb"
    fetch(USNews)
      .then(res => res.json())
      .then(res => {
        this.setState({
          USNews: res.results.slice(0,10)
        })
      })

    const USweatherURL = "http://api.openweathermap.org/data/2.5/weather?id=4560349&APPID=d10ed7fa849100a3d43e443f9ba5b599&units=imperial"
    fetch(USweatherURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          USweather: res,
          USweather_temp: res['main']
        })
      })
    }

  clockUpdate() {
    this.setState({
      current_time: moment().tz('America/New_York').format('MMMM Do YYYY, h:mm:ss a')
    })
  }

  calculateTimeAvailable(){
    let format = 'hh:mm:ss',
    now = moment().tz('America/New_York').format(),
    time = moment(now,format)
    let sleep = moment('23:00:00').tz('America/New_York')
    sleep = (sleep, format)
    let wakeup = moment('09:00:00').tz('America/New_York')
    wakeup = (wakeup, format)

    if (time.isBetween(wakeup, sleep)) {
      var awake = true
    } else {
      var awake = false
    }
    this.setState({
      awake: awake
    })
  }

  handleAwake() {
    if(this.state.awake) {
      var className = 'awake'
    } else {
      var className = 'sleep'
    }
    return className
  }

  render() {
    const { USNews, USweather, USweather_temp, current_time, awake } = this.state

    const toCelcius = function(num){
      var temp = ((num - 32) * (5/9))
      return Math.round(temp)
    }
    setTimeout(this.clockUpdate, 1000)
    setTimeout(this.calculateTimeAvailable, 1000)

    return(
      <div className={ this.handleAwake() }>
        <h1>Philadelphia</h1>
        <span>{ current_time }</span>
        <p>{ Math.round(USweather_temp.temp) } °F / { toCelcius(USweather_temp.temp) } °C</p>
        <ul>
          { USNews.map(function(item,index){
            return<li key={index}>{item.title}</li>
          })}
        </ul>
      </div>
    )
  }
}
