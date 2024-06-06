import React, { useEffect, useRef, useState } from 'react'
import { elementClass } from '../classes/elementClass'
import { RelationLine } from './RelationLine'

export const Element = ({ element, setElements, elements }) => {
  const elementRef = useRef(null)
  const [idDragging, setIsDoragging] = useState(false)
  const [position, setPosition] = useState({ x: element.startX, y: element.startY })

  const style = {
    width: "100px",
    height: "100px",
    top: `${position.y}px`,
    left: `${position.x}px`,
  }
  const numberStyle = {
    width: "50px",
    height: "50px",
  }
  useEffect(() => {
    setElements((prevElements) => {
      element.setElement(elementRef.current)
      return [...prevElements]
    })
  }, [])

  const createElement = (x, y) => {
    const newElement = new elementClass(x, y)
    element.setRelation(newElement)
    setElements(prevElements => [...prevElements, newElement])
  }
  const clickElement1 = () => {
    createElement(element.rect.left, element.rect.top - 200)
  }
  const clickElement2 = () => {
    createElement(element.rect.left + 200, element.rect.top)
  }
  const clickElement3 = () => {
    createElement(element.rect.left, element.rect.top + 200)
  }
  const clickElement4 = () => {
    createElement(element.rect.left - 200, element.rect.top)
  }
  const drag = (e) => {
    setElements(prevElements => {
      const index = prevElements.findIndex(el => el.id === element.id)
      prevElements[index].setElement(elementRef.current)
      return [...prevElements]
    })
    setPosition({ x: e.clientX, y: e.clientY })
  }
  const dragEnd = (e) => {
    console.log("end");
    setIsDoragging(false)
    setPosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    if (element.element === undefined) return
    const checkElements = element.element.querySelectorAll("div > .addElBtn")
    checkElements.forEach(el => {
      el.addEventListener("drag", drag)
      el.addEventListener("dragend", dragEnd)
    });

    return () => {
      checkElements.forEach(el => {
        el.removeEventListener("drag", drag)
        el.removeEventListener("dragend", dragEnd)
      });
    }
  }, [elements])

  const deleteElement = () => {
    setElements(prevElements => {
      const newElements = prevElements.filter(prevElement => prevElement.id !== element.id)
      newElements.forEach(prevElement => {
        const newRelations = prevElement.relations.filter(relation => relation !== element.id)
        prevElement.setRelations(newRelations)
      })
      return [...newElements]
    })
  }
  return (
    <div ref={elementRef} className='element bg-light rounded-circle border border-3 position-absolute p-5' style={style}>
      <div className='overflow-hidden position-absolute' style={{ inset: 0, rotate: "45deg" }}>
        <div className='position-absolute border-end border-3' style={{ width: "50%", height: "100%", top: 0, left: 0, zIndex: -1 }}></div>
        <div className='position-absolute border-top border-3' style={{ width: "100%", height: "50%", top: "50%", left: 0, zIndex: -1 }}></div>
        <div onClick={clickElement1} className='addElBtn position-absolute d-flex justify-content-center align-items-center' style={{ ...numberStyle, top: 0, left: 0 }}><span style={{ rotate: "-45deg", pointerEvents: "none" }}>1</span></div>
        <div onClick={clickElement2} className='addElBtn position-absolute d-flex justify-content-center align-items-center' style={{ ...numberStyle, top: 0, left: "50%" }}><span style={{ rotate: "-45deg", pointerEvents: "none" }}>2</span></div>
        <div onClick={clickElement3} className='addElBtn position-absolute d-flex justify-content-center align-items-center' style={{ ...numberStyle, top: "50%", left: "50%" }}><span style={{ rotate: "-45deg", pointerEvents: "none" }}>3</span></div>
        <div onClick={clickElement4} className='addElBtn position-absolute d-flex justify-content-center align-items-center' style={{ ...numberStyle, top: "50%", left: 0 }}><span style={{ rotate: "-45deg", pointerEvents: "none" }}>4</span></div>
      </div>
      <div className='btn btn-sm btn-danger' onClick={deleteElement} style={{ position: "absolute", top: "-10px", left: "-20px" }}>delete</div>
    </div>
  )
}
