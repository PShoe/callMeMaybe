import React from 'react'
var _ = require('underscore');


export default class City extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      news: [],
      weather: []
    }
  }

// // apikey= 42ad938126bc45518d45c5f17896c78c
// NYT
// https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=42ad938126bc45518d45c5f17896c78c&language=en
// Gaurdian AU
// // https://newsapi.org/v1/articles?source=the-guardian-au&sortBy=top&apiKey=42ad938126bc45518d45c5f17896c78c&language=en
// OPEN WEATHER
// d10ed7fa849100a3d43e443f9ba5b599


  componentDidMount() {
    const newsUrl = "https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=42ad938126bc45518d45c5f17896c78c&language=en"
    fetch(newsUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          news: res.articles
        })
      })
    const weatherURL = "http://api.openweathermap.org/data/2.5/weather?id=7839805&APPID=d10ed7fa849100a3d43e443f9ba5b599"
    fetch(weatherURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          weather: res
        })
      })
    }

  render() {
    const { news } = this.state
    const { weather } = this.state
    console.log(this.state)
    return(
      <div>
        <ul>
          { news.map(function(item,index){
            return<li key={index}>{news[index].title}</li>
          }) }
        </ul>
        <h3>{ weather.name }</h3>
        <h3>{ weather.cod }</h3>
      </div>
    )
  }
}
