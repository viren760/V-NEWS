import React, { Component } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Marque from './Marque';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }

  }
  componentDidMount() {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3faa7c919ccd4e8e9bad4aa36604e87e')

      .then((response) => {
        return response.json();
      })
      .then((myjson) => {
        this.setState({
          articles: myjson.articles
        });
      })
  }
  render() {
    console.log(this.state);
    return (

      <div className='header'>
        <Header />

        <Marque />

        {this.state.articles.map((item, index) => {
          return (
            <div>
              <div>
                <h2>
                  {item.title}
                </h2>
              </div>
              <div>
                <b>{item.author}</b>
              </div>
              <div>
                <img src={item.urlToImage} style={{ width: "50vh" }} />
              </div>
              <div>
                <a href={item.url}>Read More...</a>
              </div>
              <hr/>
            </div>
           
          )
        })}
         <Footer/>
      </div>
    )
  }
}

export default App;
