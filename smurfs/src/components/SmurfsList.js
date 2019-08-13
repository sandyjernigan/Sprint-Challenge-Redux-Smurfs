import React from 'react';
import { connect } from 'react-redux'
// Components
import Smurf from './Smurf';

function SmurfsList(props) {
  const { smurfs, fetchingSmurfs, error, addError } = props
  
	if (fetchingSmurfs) {
		return <p>Fetching the Smurfs...</p>
  }

  if (addError) {
    console.log(addError)
    return <p className="error">{addError.Error}</p>
  }

  return (
    <div className="smurfs">
      {error && <p className="error">{error}</p>}

      <h1>Welcome to Smurf Village</h1>
      <ul>
        {smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
            />
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
	return {
    smurfs: state.smurfs,
		fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
    addError: state.addError, 
	}
}

export default connect(mapStateToProps)(SmurfsList)

	