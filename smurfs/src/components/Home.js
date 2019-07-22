import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// Components

class Home extends Component {
  render() {
    return (
      <div className="home">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <a href="./smurfs">
            <img 
              src="http://smurfcellanalogy.weebly.com/uploads/2/4/3/9/24394108/861326_orig.jpg" 
              alt="Smurf's Village" />
          </a>
          <br /> <br />
          <Link to="/smurfs">Off to the Smurf's Village</Link>
      </div>
    );
  }
}

export default Home;
