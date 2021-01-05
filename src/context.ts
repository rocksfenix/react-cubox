import React from 'react'

const context = React.createContext({})

context.displayName = 'ReactCube3D'

export const { Provider, Consumer } = context

export default context