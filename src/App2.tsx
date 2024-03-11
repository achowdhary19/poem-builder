import React, { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "poop"];
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const onClick = () => {
    console.log("click");
  };
  return (
    <div className="body">
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hellow <span>Po </span> span world{" "}
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>My button</Button>
    </div>
  );
}
export default App;
