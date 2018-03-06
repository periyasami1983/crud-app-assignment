import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as productAction from './../../actionCreators/cars-list';
import { push } from 'react-router-redux';
import { store } from '../../index';
import './car-list.css';

class CarList extends Component {
  componentWillMount() {
    this.props.actions.getCarList();
  }

  deleteRecord = (car) => {
    this.props.actions.deleteCar(car.id);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            <h1>Product List</h1>
            <Link to="/add-car" className="btn btn-primary add-car-btn">Add Car</Link>
            <br /> <br />
            <table className="table">
              <tr>
                <th>ID</th>
                <th>Car Name</th>
                <th>Car Model</th>
                <th>Car Model Year</th>
                <th>Actions</th>
              </tr>
              <tbody>
                {
                  this.props.cars.map(car => (
                    <tr key={car.id}>
                      <td>{car.id}</td>
                      <td>{car.name}</td>
                      <td>{car.model}</td>
                      <td>{car.year}</td>
                      <td>
                        <Link to={`/add-car/${car.id}`} className="btn btn-info btn-size">Edit</Link> &nbsp; &nbsp;
                        <button onClick={() => this.deleteRecord(car)} className="btn btn-danger btn-size" >Delete</button>
                      </td>
                    </tr>
                  ))

                }
              </tbody>
            </table>
            <br />
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    cars: state.carsListState.carsList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productAction, dispatch),
  };
}

export default (connect(mapStateToProps, mapDispatchToProps)(CarList));
