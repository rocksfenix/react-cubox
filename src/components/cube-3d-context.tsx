import React, { useState, useEffect, useRef } from 'react'
import { requestAnimationFrame, cancelAnimationFrame } from 'request-animation-frame-polyfill'
import { Provider } from '../context'

type event = {
  side: number
}

interface Props {
  children: React.PropsWithChildren<any>
  onClick?: (event: event) => void
  size: number
  speed: number
  rotateX: number
  rotateY: number
  sensivity: number
  sensivityFade: number
  touchSensivity: number
}

const Cube3DContext: React.FC<Props> = (props) => {
  const [rotateX, setRotateX] = useState(props.rotateX)
  const [rotateY, setRotateY] = useState(props.rotateY)
  const {
    size,
    sensivity,
    sensivityFade,
    touchSensivity,
    speed,
  } = props

  let lastX = 0
  let lastY = 0
  let mouseX = 0
  let mouseY = 0
  let distanceX = 0
  let distanceY = 0
  let positionX = 0
  let positionY = 0
  let torqueX = 0
  let torqueY = 0
  let down = false
  let upsideDown = false
  let previousPositionX = 0
  let previousPositionY = 0
  const halfSize = size / 2

  function mousedown () {
    down = true
  }

  function mouseup () {
    down = false
  }

  function mousemove (event: MouseEvent) {
    mouseX = event.pageX
    mouseY = event.pageY
  }

  function calculeMovement () {
    requestRef.current = requestAnimationFrame(calculeMovement)
    console.log('calculeMovement')
  }

  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef: React.MutableRefObject<any> = useRef(null)
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(calculeMovement)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', mousedown)
    document.addEventListener('mouseup', mouseup)
    document.addEventListener('mousemove', mousemove)

    return () => {
      document.removeEventListener('mousedown', mousedown)
      document.removeEventListener('mouseup', mouseup)
      document.removeEventListener('mousemove', mousemove)
    }
  }, [])

  const state = {
    rotateX,
    rotateY,
    setRotateY,
    setRotateX,
    size
  }

  return (
    <Provider value={state}>
      {props.children}
    </Provider>
  )
}

Cube3DContext.defaultProps = {
  rotateX: 0,
  rotateY: 0,
}

export default Cube3DContext
