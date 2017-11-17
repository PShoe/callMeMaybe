import React from 'react'
import _  from 'underscore'
import Aus from './Aus'
import Usa from './Usa'
import './City.css'


export default class World extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      stories: [],
      quote: '',
      author: ''
    }
  }

  componentDidMount() {

    const quoteURL = "https://talaikis.com/api/quotes/random/"
    fetch(quoteURL)
      .then(res => res.json())
      .then(res => {
        const quote = res['quote']
        const author = res['author']
        this.setState({
          quote: quote,
          author: author
        })
      })

    const nytTopStories = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=93b9276df11d46f5a5ceee40b41ac7fb"
    fetch(nytTopStories)
      .then(res => res.json())
      .then(res => {
        const stories = res['results'].slice(0,10)
        this.setState({
          stories: stories
        })
      })
  }


  render() {
    let { quote, author, stories } = this.state

    return(
      <div className="world">
        <div className="quote">
        <h1>Everything inbetween</h1>
          <p>{ quote }</p>
          <p>{ author }</p>
        </div>
        <ul>
          { stories.map(function(story, index) {
            let subsection = story.subsection
            let title = story.title
            return <li key={index}>{ subsection } : { title } </li>
          })}
        </ul>


      </div>
    )
  }







}
