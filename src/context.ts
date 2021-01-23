import React from 'react'

export interface CubeContext {
  size: number
  rotateX: number
  rotateY: number
  currentSide: number
}

const context = React.createContext<CubeContext>({
  size: 200,
  rotateX: 0,
  rotateY: 0,
  currentSide: 0
})

context.displayName = 'ReactCube3D'

export const { Provider, Consumer } = context

export default context