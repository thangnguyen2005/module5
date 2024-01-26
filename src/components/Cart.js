import React, { Component } from 'react';

const carList = ['Car 1', 'Car 2', 'Car 3'];
const colorList = ['Red', 'Green', 'Blue'];

class CarSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCar: {
        car: carList[0],
        color: colorList[0]
      }
    };
  }

  handleCarChange = (event) => {
    this.setState((prevState) => {
      return {
        selectedCar: { ...prevState.selectedCar, car: event.target.value }
      };
    });
  };

  handleColorChange = (event) => {
    this.setState((prevState) => {
      return {
        selectedCar: { ...prevState.selectedCar, color: event.target.value }
      };
    });
  };

  render() {
    const { selectedCar } = this.state;

    return (
      <div>
        <h1>Car Selection</h1>
        <div>
          <label htmlFor="car-select">Select a car:</label>
          <select id="car-select" value={selectedCar.car} onChange={this.handleCarChange}>
            {carList.map((car, index) => (
              <option key={index} value={car}>
                {car}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="color-select">Select a color:</label>
          <select id="color-select" value={selectedCar.color} onChange={this.handleColorChange}>
            {colorList.map((color, index) => (
              <option key={index} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <div>
          <h2>Selected Car:</h2>
          <p>Car: {selectedCar.car}</p>
          <p>Color: {selectedCar.color}</p>
        </div>
      </div>
    );
  }
}

export default CarSelection;
