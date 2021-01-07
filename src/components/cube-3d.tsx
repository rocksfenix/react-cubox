import React from 'react'
import ErrorMessage from './error-message'
import { Provider } from '../context'

// Utilities
import getErrorInvalidChild from '../utils/get-error-invalid-child'
import getClonedToFill from '../utils/get-cloned-to-fill'

interface Props {
  children: React.PropsWithChildren<any>
}

export const Cube3D: React.FC<Props> = (props) => {
  const [count, setCount] = React.useState(0)

  // First we check if children elements / components are invalid.
  const errorMessage = getErrorInvalidChild(props.children)

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />
  }

  let children = props.children

  // If the side is less than 6 then we clone the
  // elements to fill 6 positions on the sides of the cube. 
  if (React.Children.count(count) < 6) {
    children = getClonedToFill(props.children)
  }

  return (
    <Provider value={{ count, increment: () => setCount(count + 1) }}>
      {children}
    </Provider>
  )
}