import React from "react";

import { dataGrid, gridContainer } from "./Datagrid.css";

const Datagrid = ({ gridData }) => {
  const renderGridHeaders = () => {
    return (
      <tr>
        <th>Country Code</th>
        <th>VAT Number</th>
        <th>Request Date</th>
        <th>Valid</th>
        <th>Name</th>
        <th>Address</th>
      </tr>
    );
  };

  const renderGridData = (gridData) => {
    return gridData
      .slice(0)
      .reverse()
      .map((row, index) => {
        const {
          CountryCode,
          VATNumber,
          Valid,
          Name,
          RequestDate,
          Address,
        } = row;
        if (index === 0) {
          return (
            <tr key={index + 1}>
              <td>{CountryCode}</td>
              <td>{VATNumber}</td>
              <td>{RequestDate}</td>
              <td>{Valid ? "Valid" : "Not valid"}</td>
              <td>{Name}</td>
              <td>{Address}</td>
            </tr>
          );
        }
      });
  };

  return (
    <div className={gridContainer}>
      <table className={dataGrid}>
        <thead>{renderGridHeaders()}</thead>
        <tbody>{renderGridData(gridData)}</tbody>
      </table>
    </div>
  );
};

export default Datagrid;
