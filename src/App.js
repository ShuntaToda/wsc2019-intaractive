import { useEffect, useState } from "react";
import { elementClass } from "./classes/elementClass";
import { Element } from "./components/Element";
import { RelationLine } from "./components/RelationLine";
import "./App.css"

function App() {
  const startElements = [new elementClass(200, 200)]
  const [elements, setElements] = useState(startElements)
  useEffect(() => console.log(elements), [elements])
  return (
    <div className="App position-relative">
      {elements.map(element => <Element key={element.id} element={element} setElements={setElements} elements={elements} />)}
      {elements.map(element => {
        return element.relations.map(childId => <RelationLine key={childId} element={element} childId={childId} elements={elements} />)
      })}
    </div>
  );
}

export default App;
