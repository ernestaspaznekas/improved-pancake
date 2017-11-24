import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './components/Table/Table'

const apiUrl = 'http://localhost:8000/beer'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: false
    }
    this.printData()
  }

  fetchData = async () => {
    let params = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: 'VerySecretToken'
        }
    }
    return fetch(apiUrl, params)
  }


  printData = async () => {
    try {
      const data = await this.fetchData()
      const json = await data
      
      json.text().then((text) => {
        this.setState({data: JSON.parse(text).items})
      })
    } catch(e) {
      console.error("Problem", e)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Challenge</h1>
        </header>
        <Table data={this.state.data}/>
      </div>
    );
  }
}

export default App;
