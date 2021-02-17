import React from 'react'
// import { Cube3DProps } from './types/interfaces'

export interface CubeContext {
  size: number
  rotateX: number
  rotateY: number
  currentSide: number
  bgColor: string
  material: string
  opacity: number
}

const context = React.createContext<CubeContext>({
  size: 200,
  rotateX: 0,
  rotateY: 0,
  currentSide: 0,
  bgColor: 'gold',
  material: 'gradient',
  opacity: 0.8
})

context.displayName = 'ReactCube3D'

export const { Provider, Consumer } = context

export default context