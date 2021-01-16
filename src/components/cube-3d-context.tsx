import React, { useState } from 'react'
import { Provider } from '../context'

type event = {
  side: number
}

interface Props {
  children: React.PropsWithChildren<any>
  onClick?: (event: event) => void
  size: number
  rotateX: number
  rotateY: number
}

const Cube3DContext: React.FC<Props> = (props) => {
  const [rotateX, setRotateX] = useState(props.rotateX)
  const [rotateY, setRotateY] = useState(props.rotateY)
  const { size } = props

  const state = {
    rotateX,
    rotateY,
    setRotateY,
    setRotateX,
    size
  }

  return (
    <Provider value={state}>
      {props.children}
    </Provider>
  )
}

Cube3DContext.defaultProps = {
  rotateX: 0,
  rotateY: 0,
}

export default Cube3DContext
