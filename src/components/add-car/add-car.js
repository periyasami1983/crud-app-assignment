import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as carAction from './../../actionCreators/add-car';

import './add-car.css';

class AddCar extends Component {
  state = {
    carName: '',
    carModel: '',
    carModelYear: '',
  }

  componentWillMount() {
    const { match: { params: { id } } } = this.props;
    if (id) {
      this.props.actions.getCar(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.editedCar.id !== nextProps.editedCar.id) {
      this.setState({
        carName: nextProps.editedCar.name,
        carModel: nextProps.editedCar.model,
        carModelYear: nextProps.editedCar.year,
      });
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { match: { params: { id } } } = this.props;
    if (id === '') {
      this.props.actions.addCar(this.state);
    } else {
      this.props.actions.addCar(this.state, id);
    }
  }

  render() {
    return (
      <div>
        <h3 className="add-form-title">Add Form</h3>
        <hr />
        <form>
          <lable>Car Name</lable>
          <input
            name="carName"
            placeholder="Car Name"
            value={this.state.carName}
            onChange={e => this.onChange(e)}
          />
          <br />
          <lable>Car Model</lable>
          <input
            name="carModel"
            placeholder="Car Model"
            value={this.state.carModel}
            onChange={e => this.onChange(e)}
          />
          <br />
          <lable>Car Model Year</lable>
          <input
            name="carModelYear"
            placeholder="Car Model Year"
            value={this.state.carModelYear}
            onChange={e => this.onChange(e)}
          />
          <br />
          <button type="submit" onClick={e => this.onSubmit(e)} className="btn btn-primary btn-danger submit-btn">Submit</button>
        </form>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    editedCar: state.addCar.editedCar,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(carAction, dispatch),
  };
}

export default (connect(mapStateToProps, mapDispatchToProps)(AddCar));
