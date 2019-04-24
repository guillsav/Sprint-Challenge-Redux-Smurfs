import React, {Component} from 'react';
import SmurfCard from './SmurfCard';

class SmurfsList extends Component {
  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => (
          <SmurfCard key={smurf.name} smurf={smurf} />
        ))}
      </div>
    );
  }
}

export default SmurfsList;
