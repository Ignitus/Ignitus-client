import React from 'react';

const Dropdown = () => (
  <React.Fragment>
    <label htmlFor="cars">Choose a car:</label>
    <select id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
  </React.Fragment>
);

export default Dropdown;
