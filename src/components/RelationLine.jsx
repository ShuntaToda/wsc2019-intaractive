import React,
{ useEffect, useState } from 'react'

export const RelationLine = ({ element, childId, elements }) => {
  const [width, setWidth] = useState(0)
  const [deg, setDeg] = useState(0)

  useEffect(() => {
    const childElement = elements.find(e => e.id === childId)
    if (childElement.rect === undefined) return
    setWidth(Math.sqrt((element.rect.x - childElement.rect.x) ** 2 + (element.rect.y - childElement.rect.y) ** 2))


    const dx = element.rect.x - childElement.rect.x
    const dy = element.rect.y - childElement.rect.y

    const radians = Math.atan2(dx, dy)
    setDeg(-(radians * (180 / Math.PI) + 90))
  }, [elements])


  const lineStyle = {
    transformOrigin: "left",
    rotate: deg + "deg",
    height: "2px",
    width: width + "px",
    backgroundColor: "gray",
    zIndex: -2,
    top: element.rect.y + (element.rect.height / 2),
    left: element.rect.x + (element.rect.width / 2)
  }
  return (
    <div className='position-absolute' style={lineStyle}></div>
  )
}
