import { useEffect, useState } from "react";
import { elementClass } from "./classes/elementClass";
import { Element } from "./components/Element";

function App() {
  const startElements = [new elementClass()]
  console.log(startElements);
  const [elements, setElements] = useState(startElements)
  useEffect(() => {

  })
  return (
    <div className="App">
      {elements.map(element => <Element element={element} setElements={setElements} />)}
    </div>
  );
}

export default App;
