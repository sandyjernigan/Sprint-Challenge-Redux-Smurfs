import React, { Component } from 'react';
import { connect } from 'react-redux'
// Actions
import { addSmurf } from '../actions'


class AddSmurf extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
      error: null
    };
  }

  // handle change on input fields
  handleChange = (e) => {
    e.preventDefault()
    this.setState({ [e.target.name]: e.target.value })
  }

  addSmurf = e => {
    e.preventDefault()
    const { name, age, height } = this.state
    const payload = { name, age, height }

    // create a smurf 
    this.props.addSmurf(payload)
    this.props.history.push("/smurfs")
  }

  render() {
    return (
      <div className="smurfForm">
          <h2>New Smurf</h2>
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		error: state.error,
	}
}

export default connect(	mapStateToProps, {addSmurf})(AddSmurf)
