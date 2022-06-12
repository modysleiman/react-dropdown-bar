import React, { useEffect, useCallback, useState, useRef } from "react";
import DropDownItemsContainer from "./DropDownItemsContainer";
import "./DropDown.css";

function DropDown(props) {
  const [selectedIndex, setSelectedIndex] = useState(new Set([]));
  const [showItems, setShowItems] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        outsideClick();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [outsideClick]);

  function handleDropDownClick() {
    setShowItems(!showItems);
  }
  function outsideClick() {
    setShowItems(false);
  }
  const handleItemClick = useCallback(
    (index) => {
      if (props.multiSelect) {
        const newSelectedIndex = new Set(selectedIndex);
        console.log("index ", index);
        if (selectedIndex.has(index)) {
          console.log("deleted");
          newSelectedIndex.delete(index);
        } else {
          console.log("added");
          newSelectedIndex.add(index);
        }
        console.log("selectedIndex: ", Array.from(selectedIndex));

        setSelectedIndex(newSelectedIndex);
      } else {
        setSelectedIndex(new Set([index]));
        handleDropDownClick();
      }
    },
    [selectedIndex]
  );

  function getDropDownText() {
    if (selectedIndex.size == 0) {
      return "";
    } else {
      var text = "";
      for (var index of selectedIndex) {
        if (text.length == 0) {
          text = props.listItems[index];
        } else {
          text = text + ", " + props.listItems[index];
        }
      }
      return text;
    }
  }

  return (
    <div className="drop-down" ref={ref}>
      <p className="descriptive-text">{props.description}</p>
      <div className="drop-down-field">
        <div className="flex-item">
          <input
            type="text"
            className="drop-down-input"
            value={getDropDownText()}
            readOnly
            onClick={handleDropDownClick}
          />
        </div>
        <div className="flex-item">
          <button className="arrow">
            {showItems ? String.fromCharCode(9650) : String.fromCharCode(9660)}
          </button>
        </div>
      </div>
      <div>
        {showItems ? (
          <DropDownItemsContainer
            listItems={props.listItems}
            selectedIndex={selectedIndex}
            showItems={showItems}
            setShowItems={setShowItems}
            setSelectedIndex={setSelectedIndex}
            handleItemClick={handleItemClick}
            multiSelect={props.multiSelect}
          />
        ) : null}
      </div>
    </div>
  );
}

export default DropDown;
