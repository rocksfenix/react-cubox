import React from 'react'
import Context from './cube-3d-context'
import { getViewportStyles } from '../utils/get-styles-helpers'

interface viewportProps {
  style: any
  children: React.PropsWithChildren<any>
  size: number
  height: number
  rotateX: number
  rotateY: number
}

export const Viewport: React.FC<viewportProps> = (props) => {
  const { size } = props

  return (
    <Context
      size={size}
      rotateX={props.rotateX}
      rotateY={props.rotateY}
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
