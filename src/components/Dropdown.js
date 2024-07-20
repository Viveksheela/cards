import React from 'react';
import './Dropdown.css';

const Dropdown = ({ pincodes, onSelectPincode }) => {
  return (
    <select onChange={(e) => onSelectPincode(e.target.value)}>
      <option value="">Select a pincode</option>
      {pincodes.map((pincode, index) => (
        <option key={index} value={pincode}>
          {pincode}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
