import React from 'react'
import Context from './cube-3d-context'
import { getViewportStyles } from '../utils/get-styles-helpers'
import { Cube3DProps } from '../types/interfaces'

export const Viewport: React.FC<Cube3DProps> = (props) => {
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
  size: 300,
  rotateX: 0,
  rotateY: 0,
  sensivity: 0.1,
  sensivityFade: 0.87,
  touchSensivity: 2,
  speed: 0.8,
}
