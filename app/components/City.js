import React from 'react'
import moment from 'moment'
import _ from 'underscore'


export default class City extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      USNews: [],
      AUNews: [],
      AUweather: [],
      AUweather_temp: [],
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
    const AUweatherURL = "http://api.openweathermap.org/data/2.5/weather?id=7839805&APPID=d10ed7fa849100a3d43e443f9ba5b599"
    fetch(AUweatherURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          AUweather: res,
          AUweather_temp: res['main']
        })
      })
    const USweatherURL = "http://api.openweathermap.org/data/2.5/weather?id=4560349&APPID=d10ed7fa849100a3d43e443f9ba5b599"
    fetch(USweatherURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          USweather: res,
          USweather_temp: res['main']
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
    const { USNews, AUweather, AUweather_temp, AUNews, USweather, USweather_temp } = this.state



    const timeNow = moment().format('MMMM Do YYYY, h:mm a');
    // const timeThere = moment().tz('America/Philadelphia')




    console.log(this.state)
    return(
      <div>
        <h1>{ timeNow }</h1>
        <h3>{ USweather_temp.temp }</h3>
        <ul>
          { USNews.map(function(item,index){
            return<li key={index}>{item.title}</li>
          }) }
        </ul>
        <h3>{ AUweather_temp.temp }</h3>
        <ul>
          { AUNews.map(function(item,index){
            return<li key={index}>{item.title}</li>
          }) }
        </ul>
      </div>
    )
  }
}
