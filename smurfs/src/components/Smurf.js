import React from 'react';
import { Link } from "react-router-dom";

const Smurf = props => {
  return (
      <div className="smurf">
        
        <h3>{props.name}</h3>
        <p><strong>{props.height} tall</strong> - 
        <span> {props.age} smurf years old</span></p>
      </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;