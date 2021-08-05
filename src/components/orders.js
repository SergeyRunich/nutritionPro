import React from "react";
import "../styles/orders.css";
import { useTable, useFilters } from "react-table";
import { Button } from "antd";
import { useSelector } from "react-redux";

function Table({ columns, data }) {
  const defaultColumn = React.useMemo(
    () => ({
      //seting up default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );
  // Use the state and functions returned from useTable to build UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useFilters
    );

  // Render the UI for table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>
                <span>{column.render("Header")}</span>
                <div>{column.canFilter ? column.render("Filter") : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    />
  );
}

function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

function Orders() {
  const orders = useSelector((state) => state.orders);

  const columns = React.useMemo(
    () => [
      {
        Header: "Date",
        accessor: "Date",
      },
      {
        Header: "Name",
        accessor: "FirstName LastName",
      },
      {
        Header: "Phone",
        accessor: "Phone",
        disableFilters: true,
      },
      {
        Header: "Email",
        accessor: "Email",
      },
      {
        Header: "Start date",
        accessor: "Start date",
      },
      {
        Header: "Meals",
        accessor: "Meals",
      },
      {
        Header: "Invoice status",
        accessor: "Invoice",
        Filter: SelectColumnFilter,
        filter: "includes",
      },
      {
        Header: "Order",
        accessor: "",
        disableFilters: true,
        Cell: <Button type="primary">Open Order</Button>,
      },
    ],
    []
  );

  return (
    <div className="ordersContent">
      <Table columns={columns} data={orders} />
    </div>
  );
}

export default Orders;
