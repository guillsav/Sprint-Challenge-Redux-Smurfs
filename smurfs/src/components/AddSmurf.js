import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';

class AddSmurf extends Component {
  state = {
    newSmurf: {
      name: '',
      age: '',
      height: ''
    }
  };
  onChange = e => {
    e.persist();
    this.setState(prevState => ({
      newSmurf: {
        ...prevState.newSmurf,
        [e.target.name]: e.target.value
      }
    }));
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: '',
        age: '',
        height: ''
      }
    });

    this.props.history.push('/smurfs');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-items">
            <div className="form-item">
              <label htmlFor="name">Name</label>
              <input
                onChange={this.onChange}
                type="text"
                name="name"
                value={this.state.newSmurf.name}
                placeholder="Add name..."
              />
            </div>
            <div className="form-item">
              <label htmlFor="age">Age</label>
              <input
                onChange={this.onChange}
                type="text"
                name="age"
                value={this.state.newSmurf.age}
                placeholder="Add age..."
              />
            </div>
            <div className="form-item">
              <label htmlFor="height">Height</label>
              <input
                onChange={this.onChange}
                type="text"
                name="height"
                value={this.state.newSmurf.height}
                placeholder="Add height..."
              />
            </div>
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {addSmurf}
)(AddSmurf);
