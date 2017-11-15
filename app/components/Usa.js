import React from 'react'
import moment from 'moment'
import tz from 'moment-timezone'
import _ from 'underscore'


export default class City extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      USNews: [],
      USweather: [],
      USweather_temp: []
    }
  }

  componentDidMount() {
    const USNews = "https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=42ad938126bc45518d45c5f17896c78c&language=en"
    fetch(USNews)
      .then(res => res.json())
      .then(res => {
        this.setState({
          USNews: res.articles
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

  render() {
    const { USNews, USweather, USweather_temp } = this.state
    const toCelcius = function(num){
      return (num - 32) * (5/9)
    }

    let timeHere = moment()
    let timeThere = moment.tz(timeHere, 'America/New_York').format('MMMM Do YYYY, h:mm a')
    timeHere = moment().format('MMMM Do YYYY, h:mm a')

    console.log(this.state)

    return(
      <div>
        <h1>Philadelphia</h1>
        <h3>{ timeThere }</h3>
        <p>{ USweather_temp.temp } °F</p>
        <p>{ toCelcius(USweather_temp.temp) } °C</p>
        <ul>
          { USNews.map(function(item,index){
            return<li key={index}>{item.title}</li>
          }) }
        </ul>
      </div>
    )
  }
}
