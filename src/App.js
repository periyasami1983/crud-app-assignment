import React, { Component } from 'react';
import CarList from './components/car-list/car-list';
import AddCar from './components/add-car/add-car';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              (this.props.isLoading ? (
                <p>Loading...</p>
              ) : (
                <CarList />
                ))
            }
          />
          <Route path="/add-car/:id?" component={AddCar} />
        </Switch>
      </div>


    );
  }
}

export default App;

