import React, { useContext } from 'react'
import ErrorMessage from './error-message'
import context, { CubeContext } from '../context'
// Utilities
import getErrorInvalidChild from '../utils/get-error-invalid-child'
import getClonedToFill from '../utils/get-cloned-to-fill'
import { getCubeStyles } from '../utils/get-styles-helpers'

interface Props {
  children: React.PropsWithChildren<any>
  size: number
}

export const Cube3D: React.FC<Props> = (props) => {
  const ctx = useContext<CubeContext>(context)

  // First we check if children elements / components are invalid.
  const errorMessage = getErrorInvalidChild(props.children)

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />
  }

  let children = props.children

  // If the side is less than 6 then we clone the
  // elements to fill 6 positions on the sides of the cube. 
  if (React.Children.count(props.children) < 6) {
    children = getClonedToFill(props.children, 6, ctx.size)
  }

  return (
    <div style={getCubeStyles(ctx)}>
      {children}
    </div>
  )
}
