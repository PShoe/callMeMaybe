import React from 'react'
var _ = require('underscore');

var earlytwothousandRandNum = _.random(20000101, 20091231)
var ninetiesRandNum = _.random(19900101, 19991231)
var eightiesRandNum = _.random(19800101, 19891231)
var seventiesRandNum = _.random(19700101, 19791231)
var sixtiesRandNum = _.random(19600101, 19691231)

export default class City extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: []
    }
  }
    componentDidMount() {
      // var begin_date = ''
      // var end_date = ''

      const nytURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=93b9276df11d46f5a5ceee40b41ac7fb&begin_date=19900111&end_date=19991231&fl=headline&fl=pub_date&page=1"
      fetch(nytURL)
        .then(res => res.json())
        .then(res => {

          const articleObjs = res['response']['docs']

          this.setState({
            articles: articleObjs
          })
        })
    }

    render() {
      let { articles } = this.state
      console.log(this.state)

      return(
        <div>
          <ul>
            { articles.map(function(article, index) {
              let headline = article.headline.main
              let pubDate = article.pub_date
              return [<li key={index}>{headline}</li>,<li key={index +1}>{pubDate}</li>]
            }) }
          </ul>
        </div>
      )
    }







}
