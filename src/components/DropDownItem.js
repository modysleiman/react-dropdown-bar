import "./DropDown.css";
import React, { useState } from "react";

function DropDownItem(props) {
  function handleItemClick() {
    props.handleItemClick(props.index);
  }

  return (
    <div
      className={
        props.selectedIndex.has(props.index) ? "selected" : "unselected"
      }
      onClick={handleItemClick}
    >
      <div className="list-item">
        <button className={props.multiSelect ? "arrow" : "check-box-hidden"}>
          {props.selectedIndex.has(props.index)
            ? String.fromCharCode(9745)
            : String.fromCharCode(9744)}
        </button>
        <label for={props.index}>{props.value}</label>
      </div>
    </div>
  );
}

export default DropDownItem;
