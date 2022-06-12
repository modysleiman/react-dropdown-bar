import React, { useState } from "react";
import DropDownItem from "./DropDownItem";

function DropDownItemsContainer(props) {
  return (
    <div className="items-container">
      {props.listItems.map((item, index) => (
        <DropDownItem
          index={index}
          value={item}
          selectedIndex={props.selectedIndex}
          setSelectedIndex={props.setSelectedIndex}
          showItems={props.showItems}
          setShowItems={props.setShowItems}
          handleItemClick={props.handleItemClick}
          multiSelect={props.multiSelect}
        />
      ))}
    </div>
  );
}

export default DropDownItemsContainer;
