import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Got from './components/Got';
import WebNav from './components/WebNav';

class App extends Component {

  state = {
    term: '',
    imgs: [],
    page: ''
  }

  scoll = () => {
    const elem = document.querySelector(".subcontainer");
    elem.scrollIntoView('auto', 'start');
  }

  backPage = () => {
    let page = this.state.page;
    if (page === 1) return null;
    page--
    this.setState({
      page
    }, () => {
      this.fetcApi();
      this.scoll();
    });
  }

  nextPage = () => {
    let page = this.state.page;
    page++
    this.setState({
      page
    }, () => {
      this.fetcApi();
      this.scoll();
    });
  }

  fetcApi = () => {
    const term = this.state.term;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=${yourKey}q=${term}&per_page=25&page=${page}`
    // console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(g => this.setState({
        imgs: g.hits
      }))
  }

  dSearch = term => {
    this.setState({
      term: term,
      page: 1
    }, () => {
      this.fetcApi();
    });
  }

  render() {
    return (
      <div className="app">
        <div className="subcontainer">
          <WebNav
            dSearch={this.dSearch}
          />
        </div>
        <Container className="row justify-content-center">
          <Got
            imag={this.state.imgs}
            backPage={this.backPage}
            nextPage={this.nextPage}
          />
        </Container>
      </div>
    );
  }
}

export default App;
