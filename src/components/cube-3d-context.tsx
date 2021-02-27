import React, { useState, useEffect, useRef } from 'react'
import {
  requestAnimationFrame,
  cancelAnimationFrame
} from 'request-animation-frame-polyfill'
import { Provider } from '../context'
import getActiveSide from '../utils/get-active-side'
import useDisableScroll from '../hooks/use-disable-scroll'

import { Cube3DProps } from '../types/interfaces'

interface Props extends Cube3DProps {
  children: React.PropsWithChildren<any>
}

const Cube3DContext: React.FC<Props> = (props) => {
  const [rotateX, setRotateX] = useState(props.rotateX)
  const [rotateY, setRotateY] = useState(props.rotateY)
  const [activeFace, setactiveFace] = useState(0)
  const [blockScroll, allowScroll] = useDisableScroll()
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

  function touchstart (event: any) {
    if (!event?.target) return
    if (event.target.getAttribute('reactcube3dface')) {
      // Disable scroll, only if touches the
      // cube for avoid move and scroll on the page
      blockScroll()
      down = true
      mouseX = event.touches[0].pageX / touchSensivity
      mouseY = event.touches[0].pageY / touchSensivity
      lastX = mouseX
      lastY = mouseY
    }
  }

  function touchmove (event: TouchEvent) {
    event.preventDefault()

    if (event.touches.length === 1) {
      mouseX = event.touches[0].pageX / touchSensivity
      mouseY = event.touches[0].pageY / touchSensivity
    }
  }

  function touchend () {
    down = false
    allowScroll()
  }

  function calculeMovement () {

    distanceX = (mouseX - lastX)
    distanceY = (mouseY - lastY)

    lastX = mouseX
    lastY = mouseY

    if(down) {
      torqueX = torqueX * sensivityFade + (distanceX * speed - torqueX) * sensivity
      torqueY = torqueY * sensivityFade + (distanceY * speed - torqueY) * sensivity
    }

    // Aceleration movement based on the torque
    if(Math.abs(torqueX) > 1.0 || Math.abs(torqueY) > 1.0) {
      if(!down) {
        torqueX *= sensivityFade
        torqueY *= sensivityFade
      }

      positionY -= torqueY

      if(positionY > 360) {
        positionY -= 360
      } else if(positionY < 0) {
        positionY += 360
      }

      // Calcule direction of the control 
      if(positionY > 90 && positionY < 270) {
        positionX -= torqueX

        // Check the orientation
        if(!upsideDown) {
          upsideDown = true
        }

      } else {
        positionX += torqueX

        // Check the orientation
        if(upsideDown) {
          upsideDown = false
        }
      }

      if(positionX > 360) {
        positionX -= 360
      } else if (positionX < 0) {
        positionX += 360
      }

      const activeSide = getActiveSide({
        positionY,
        positionX,
        upsideDown
      })

      setactiveFace(activeSide)
    }

    if(positionY !== previousPositionY || positionX !== previousPositionX) {
      previousPositionY = positionY
      previousPositionX = positionX

      // TODO: emit props.onMove() here!
      setRotateY(positionX)
      setRotateX(positionY)
    }
    requestRef.current = requestAnimationFrame(calculeMovement)
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
    document.addEventListener('touchstart', touchstart)
    document.addEventListener('touchmove', touchmove)
    document.addEventListener('touchend', touchend)

    return () => {
      document.removeEventListener('mousedown', mousedown)
      document.removeEventListener('mouseup', mouseup)
      document.removeEventListener('mousemove', mousemove)
      document.removeEventListener('touchstart', touchstart)
      document.removeEventListener('touchmove', touchmove)
      document.removeEventListener('touchend', touchend)
    }
  }, [])

  const state = {
    size,
    rotateX,
    rotateY,
    activeFace,
    halfSize,
    texture: props.texture,
    bgColor: props.bgColor,
    material: props.material,
    opacity: props.opacity,
    behavior: props.behavior,
    activeOpacity: props.activeOpacity,
    inactiveOpacity: props.inactiveOpacity,
    opacityTransitionTime: props.opacityTransitionTime,
    showFaceNumber: props.showFaceNumber
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
