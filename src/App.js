import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addGuest, deleteGuest, getLuke } from './ducks/partyList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    }, () => console.log(this.state.text))
  }

  handleClick() {
    this.props.addGuest(this.state.text);
    this.setState({
      text: ''
    })
  }

  render() {
    const partyList = this.props.partyList.map( (person, index) => {
      return <p onClick={() => this.props.deleteGuest(index)} key={index}>{person}</p>
    })
    return (
      <div className="App">
        <h1>Party List</h1>
        <input value={this.state.text} onChange={ this.handleChange } />
        <button onClick={ this.handleClick } >Add Guest</button>
        { partyList }
        <br/>
        <button onClick={() => this.props.getLuke()} className=''>Get Luke</button>
        <br/>
        {JSON.stringify(this.props.luke, null, 2)}
      </div>
    );
  }
}


function mapStateToProps(state) {
  // state parameter is the redux store state.
  // Example:
  //  return {
  //    list: state.partyList,
  //    lukeData: state.luke
  //  }
  return state;
}

 export default connect(mapStateToProps, {addGuest, deleteGuest, getLuke})(App)
