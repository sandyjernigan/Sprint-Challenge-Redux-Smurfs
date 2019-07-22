import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
// Components
import Home from './Home'
import SmurfsList from './SmurfsList'
import AddSmurf from './AddSmurf'
// Actions
import { getSmurfs } from '../actions'

class App extends Component {
	componentDidMount() {
		this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/smurfs">Smurfs Village</NavLink>
            <NavLink to="/add">Add a New Smurf</NavLink>
          </nav>
        </header>

				<Route exact path="/" component={Home} />
				<Route exact path="/smurfs" component={SmurfsList} />
				<Route exact path="/add" component={AddSmurf} />
      </div>
    );
  }
}

export default withRouter(
	// first param is mapStateToProps
	connect(null, { getSmurfs })(App)
)