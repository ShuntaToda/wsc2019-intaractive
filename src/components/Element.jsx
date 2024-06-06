import React, { useEffect, useRef } from 'react'
import { elementClass } from '../classes/elementClass'
import { RelationLine } from './RelationLine'

export const Element = ({ element, setElements, elements }) => {
  const elementRef = useRef(null)

  const style = {
    width: "100px",
    height: "100px",
    top: `${element.startY}px`,
    left: `${element.startX}px`,
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

  return (
    <div ref={elementRef} className='bg-light rounded-circle border border-3 position-absolute p-5' style={style}>
      <div className='overflow-hidden position-absolute' style={{ inset: 0, rotate: "45deg" }}>
        <div className='position-absolute border-end border-3' style={{ width: "50%", height: "100%", top: 0, left: 0, zIndex: -1 }}></div>
        <div className='position-absolute border-top border-3' style={{ width: "100%", height: "50%", top: "50%", left: 0, zIndex: -1 }}></div>
        <div onClick={clickElement1} className='position-absolute d-flex justify-content-center align-items-center' style={{ ...numberStyle, top: 0, left: 0 }}><span style={{ rotate: "-45deg" }}>1</span></div>
        <div onClick={clickElement2} className='position-absolute d-flex justify-content-center align-items-center' style={{ ...numberStyle, top: 0, left: "50%" }}><span style={{ rotate: "-45deg" }}>2</span></div>
        <div onClick={clickElement3} className='position-absolute d-flex justify-content-center align-items-center' style={{ ...numberStyle, top: "50%", left: "50%" }}><span style={{ rotate: "-45deg" }}>3</span></div>
        <div onClick={clickElement4} className='position-absolute d-flex justify-content-center align-items-center' style={{ ...numberStyle, top: "50%", left: 0 }}><span style={{ rotate: "-45deg" }}>4</span></div>
      </div>
    </div>
  )
}
