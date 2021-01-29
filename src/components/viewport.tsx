import React from 'react'
import Context from './cube-3d-context'
import { getViewportStyles } from '../utils/get-styles-helpers'

type event = {
  side: number
}

interface viewportProps {
  style: any
  children: React.PropsWithChildren<any>
  size: number
  speed: number
  height: number
  rotateX: number
  rotateY: number
  sensivity: number
  sensivityFade: number
  touchSensivity: number
  onClick?: (event: event) => void
}

export const Viewport: React.FC<viewportProps> = (props) => {
  const { size } = props

  return (
    <Context
      size={size}
      rotateX={props.rotateX}
      rotateY={props.rotateY}
      speed={props.speed}
      sensivity={props.sensivity}
      sensivityFade={props.sensivityFade}
      touchSensivity={props.touchSensivity}
    >
      <div style={getViewportStyles(size, props.style)}>
        {props.children}
      </div>
    </Context>
  )
}

Viewport.defaultProps = {
  size: 200
}
