import React from "react";

import { dataGrid, gridContainer } from "./Datagrid.css";

const Datagrid = ({ gridData }) => {
  const renderGridHeaders = () => {
    return (
      <tr>
        <th style={{ width: "10%" }}>Country Code</th>
        <th style={{ width: "10%" }}>VAT Number</th>
        <th style={{ width: "13%" }}>Request Date</th>
        <th style={{ width: "10%" }}>Valid?</th>
        <th style={{ width: "22%" }}>Name</th>
        <th style={{ width: "35%" }}>Address</th>
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
