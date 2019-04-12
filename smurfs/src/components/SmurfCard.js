import React from 'react';

const SmurfCard = props => {
  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <p>age: {props.smurf.age}</p>
      <p>height: {props.smurf.height}</p>
    </div>
  );
};

export default SmurfCard;
