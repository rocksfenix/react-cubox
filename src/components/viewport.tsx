import React from 'react'
import { getViewportStyles } from '../utils/get-styles-helpers'

interface ViewportProps {
  size: number
  style?: {}
  children: any
}

export const Viewport: React.FC<ViewportProps> = (props) => {
  const { size, style, children } = props

  return (
    <div style={getViewportStyles({
      size,
      otherStyles: style
    })}>
      {children}
    </div>
  )
}

Viewport.defaultProps = {
  size: 300,
  style: {},
  children: null
}
