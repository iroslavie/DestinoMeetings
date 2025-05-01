import React from "react";
import PropTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };

  return (
    <thead style={{ borderBottom: "2px solid black" }}>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => {
                    handleSort(columns[column].path);
                  }
                : undefined
            }
            scope="col"
          >
            {columns[column].name}
            {selectedSort.path === columns[column].path && (
              <i
                className={
                  "bi " +
                  (selectedSort.order === "asc"
                    ? "bi-caret-up-fill"
                    : "bi-caret-down-fill")
                }
              ></i>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  columns: PropTypes.object.isRequired,
};

export default TableHeader;
