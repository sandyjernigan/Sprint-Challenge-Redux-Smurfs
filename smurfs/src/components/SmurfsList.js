import React from 'react';
import { connect } from 'react-redux'
// Components
import Smurf from './Smurf';

function SmurfsList(props) {
  const { smurfs, fetchingSmurfs, error } = props

  return (
    <div className="smurfs">
      {error && <p className="error">{error}</p>}

      <h2>Smurfs List</h2>
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
	}
}

export default connect(mapStateToProps)(SmurfsList)

	