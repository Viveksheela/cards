import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Location Name</th>
          <th>Pincode</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.pincode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
