import React from 'react'
// import { Cube3DProps } from './types/interfaces'

export interface CubeContext {
  size: number
  rotateX: number
  rotateY: number
  activeFace: number
  bgColor: string
  material: string
  opacity: number
  behavior: string
  activeOpacity: number
  inactiveOpacity: number
  opacityTransitionTime: number
}

const context = React.createContext<CubeContext>({
  size: 200,
  rotateX: 0,
  rotateY: 0,
  activeFace: 0,
  bgColor: 'gold',
  material: 'gradient',
  behavior: 'translucid',
  opacity: 0.8,
  activeOpacity: 0.8,
  inactiveOpacity: 0.5,
  opacityTransitionTime: 450 // ms
})

context.displayName = 'ReactCube3D'

export const { Provider, Consumer } = context

export default context