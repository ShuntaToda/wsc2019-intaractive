import React, { useEffect, useRef } from 'react'

export const Element = ({ element, setElements }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    element.setElement(elementRef.current)
    console.log(element)
  }, [])
  return (
    <div ref={elementRef} className='rounded-circle border border-3 position-absolute p-5' style={{ width: "100px", height: "100px" }}>

    </div>
  )
}
