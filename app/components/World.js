import React from 'react'
import _  from 'underscore'
import Aus from './Aus'
import Usa from './Usa'


export default class World extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      books: [],
      stories: []
    }
  }

  componentDidMount() {
    // const nytArticles = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=93b9276df11d46f5a5ceee40b41ac7fb&begin_date=19900111&end_date=19991231&fl=headline&fl=pub_date&page=1"
    // fetch(nytArticles)
    //   .then(res => res.json())
    //   .then(res => {
    //
    //     const articleObjs = res['response']['docs']
    //
    //     this.setState({
    //       articles: articleObjs
    //     })
    //   })
    // const nytBooks = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=93b9276df11d46f5a5ceee40b41ac7fb"
    // fetch(nytBooks)
    //   .then(res => res.json())
    //   .then(res => {
    //
    //     const books = res['results']
    //
    //     this.setState({
    //       books: books
    //     })
    //   })
    const nytTopStories = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=93b9276df11d46f5a5ceee40b41ac7fb"
    fetch(nytTopStories)
      .then(res => res.json())
      .then(res => {
        const stories = res['results']

        this.setState({
          stories: stories
        })
      })
  }


  render() {
    let { articles, books, stories } = this.state
    console.log(this.state)

    return(
      <div>
        <p></p>
        <ul>
          { articles.map(function(article, index) {
            let headline = article.headline.main
            let pubDate = article.pub_date
            return <li key={index}>{headline}, {pubDate}</li>
          }) }
        </ul>
        <ul>
        { books.map(function(book, index) {
          let title = book.title
          let author = book.author
          return <li key={index}>{title}, {author}</li>
        }) }
        </ul>
        <ul>
        { stories.map(function(story, index) {
          let subsection = story.subsection
          let section = story.section
          let title = story.title
          let url = story.url
          let abstract = story.abstract
          return <li key={index}>{section}, {subsection}, {title}, {abstract}</li>
        }) }
        </ul>
      </div>
    )
  }







}
