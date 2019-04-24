import React, {Component} from 'react';
import {Route, NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSmurfs, addSmurf} from '../actions';
import './App.css';
import SmurfsList from './SmurfsList';
import AddSmurf from './AddSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  addNewSmurf = smurf => {
    this.props.addSmurf(smurf);
    this.props.history.push('/smurfs');
  };
  render() {
    return (
      <div className="App">
        <header>
          <div className="logo">
            <h2>Smurfs Village</h2>
            <nav />
            <NavLink to="/smurfs">Smurfs</NavLink>
            <NavLink to="/smurfs/add">Add a smurf</NavLink>
          </div>
        </header>
        <Route
          exact
          path="/smurfs"
          render={props => <SmurfsList {...props} smurfs={this.props.smurfs} />}
        />
        <Route
          path="/smurfs/add"
          render={props => (
            <AddSmurf {...props} addNewSmurf={this.addNewSmurf} />
          )}
        />
      </div>
    );
  }
}

const mapStatToProps = ({smurfs}) => ({smurfs});

const AppWithRouter = withRouter(App);

export default connect(
  mapStatToProps,
  {getSmurfs, addSmurf}
)(AppWithRouter);
