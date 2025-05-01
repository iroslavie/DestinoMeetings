import React from "react";
import PropTypes from "prop-types";
import { values } from "lodash";

const GroupeList = ({
  items,
  valueProperty = "_id",
  contentProperty = "name",
  onItemSelect,
  selectedItem,
}) => {
  const itemsArray = Array.isArray(items) ? items : Object.values(items);
  return (
    <ul className="list-group">
      {itemsArray.map((item) => (
        <li
          key={item[valueProperty]}
          className={
            "list-group-item" + (item === selectedItem ? " active" : "")
          }
          onClick={() => onItemSelect(item)}
        >
          {item[contentProperty]}
        </li>
      ))}
    </ul>
  );
};

GroupeList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  valueProperty: PropTypes.string,
  contentProperty: PropTypes.string,
  onItemSelect: PropTypes.func,
  selectedItem: PropTypes.object,
};

export default GroupeList;
