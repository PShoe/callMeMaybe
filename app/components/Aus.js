import React from 'react'
import moment from 'moment'
import tz from 'moment-timezone'
import _ from 'underscore'
import './City.css'
import './normalize.css'



export default class Aus extends React.Component {

  constructor(props) {
    super(props)
    this.clockUpdate = this.clockUpdate.bind(this)
    this.calculateTimeAvailable = this.calculateTimeAvailable.bind(this)
    this.handleAwake = this.handleAwake.bind(this)

    this.state = {
      AUNews: [],
      AUweather: [],
      AUweather_temp: [],
      current_time: '',
      awake: false
    }
  }

  componentDidMount() {
    const AUweatherURL = "http://api.openweathermap.org/data/2.5/weather?id=7839805&APPID=d10ed7fa849100a3d43e443f9ba5b599&units=imperial"
    fetch(AUweatherURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          AUweather: res,
          AUweather_temp: res['main']
        })
      })
    const AUNewsURL = "https://newsapi.org/v1/articles?source=the-guardian-au&sortBy=top&apiKey=42ad938126bc45518d45c5f17896c78c"
    fetch(AUNewsURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          AUNews: res.articles.slice(0,10)
        })
      })
  }

  clockUpdate() {
    this.setState({
      current_time: moment().tz('Australia/Sydney').format('MMMM Do YYYY, h:mm:ss a')
    })
  }

  calculateTimeAvailable(){
    let format = 'HH:mm:ss',
    now = moment().tz('Australia/Sydney').format(format),
    time = moment(now,format),
    sleep = moment('23:00:00', format).tz('Australia/Sydney'),
    wakeup= moment('09:00:00', format).tz('Australia/Sydney')


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
    const { AUweather, AUweather_temp, AUNews, current_time, awake } = this.state

    const toCelcius = function(num){
      var temp = ((num - 32) * (5/9))
      return Math.round(temp)
    }
    setTimeout(this.clockUpdate, 1000)
    setTimeout(this.calculateTimeAvailable, 1000)

    return(
      <div className={ this.handleAwake() }>
        <h1>Melbourne</h1>
        <p>{ current_time }</p>
        <p>{ Math.round(AUweather_temp.temp) } °F / { toCelcius(AUweather_temp.temp) } °C</p>
        <ul>
          { AUNews.map(function(item,index){
            return<li key={ index }>{ item.title }</li>
          })}
        </ul>
      </div>
    )
  }
}
