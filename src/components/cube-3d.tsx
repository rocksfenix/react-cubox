import React from 'react'
import ErrorMessage from './error-message'
import { Consumer } from '../context'
// Utilities
import getErrorInvalidChild from '../utils/get-error-invalid-child'
import getClonedToFill from '../utils/get-cloned-to-fill'
import { getCubeStyles } from '../utils/get-styles-helpers'
import { Viewport } from '../components/viewport'
import { Cube3DProps } from '../types/interfaces'
import Cube3DContext from './cube-3d-context'

export const Cube3D: React.FC<Cube3DProps> = (props) => {
  
  // First we check if children elements / components are invalid.
  const errorMessage = getErrorInvalidChild(props.children)

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />
  }

  let children = props.children

  // If the side is less than 6 then we clone the
  // elements to fill 6 positions on the sides of the cube. 
  if (React.Children.count(props.children) < 6) {
    children = getClonedToFill(props.children, 6, props.size)
  }

  return (
    <Cube3DContext {...props}>
      <Viewport {...props}>
        <Consumer>
          {(ctx) => (
            <div style={getCubeStyles(ctx)}>
              {children}
            </div>
          )}
        </Consumer>
      </Viewport>
    </Cube3DContext>
  )
}

Cube3D.defaultProps =  {
  size: 350,
  rotateX: 0,
  rotateY: 0,
  sensivity: 0.1,
  sensivityFade: 0.87,
  touchSensivity: 2,
  speed: 0.8,
  bgColor: 'gold',

  // The material are (solid | gradient)
  material: 'gradient',

  opacity: 0.8
}
