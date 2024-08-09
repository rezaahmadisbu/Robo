import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './index.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  highlightText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === highlight.toLowerCase() ? <span key={index} style={{ backgroundColor: 'yellow' }}>{part}</span> : part
    );
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()) || 
             robot.email.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} highlightText={this.highlightText} searchfield={searchfield} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
