import React from 'react'
import moment from 'moment'
import tz from 'moment-timezone'
import _ from 'underscore'


export default class City extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      AUNews: [],
      AUweather: [],
      AUweather_temp: []
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
          AUNews: res.articles
        })
      })
    }

  render() {
    const { AUweather, AUweather_temp, AUNews } = this.state
    const toCelcius = function(num){
      return (num - 32) * (5/9)
    }

    let timeHere = moment().format('MMMM Do YYYY, h:mm a')

    console.log(this.state)

    return(
      <div>
        <h1>Melbourne</h1>
        <h3>{ timeHere }</h3>
        <p>{ AUweather_temp.temp } °F</p>
        <p>{ toCelcius(AUweather_temp.temp)} °C</p>
        <ul>
          { AUNews.map(function(item,index){
            return<li key={index}>{item.title}</li>
          }) }
        </ul>
      </div>
    )
  }
}
