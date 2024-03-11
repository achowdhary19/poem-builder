import React, { useState } from "react";
import { MouseEvent } from "react";
import { Fragment } from "react";

//{items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["New York", "San Francisco", "Tokyo", "poop"];
  //let selectedIndex = 0;
  //   items = [];
  const message = items.length === 0 ? <p>No item found</p> : null;

  //hook, indicating to react that this component may have data or state that may change over time
  const [selectedIndex, setSelectedIndex] = useState(-1); //use state returns an array and we break it up into ...

  //event handler
  //const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>heading</h1>

      {items.length === 0 ? <p>No item found</p> : null}

      {/* if the ocndition is true, the result of the expression will be the p element if the condition is false, the entire expression will be false */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active "
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
