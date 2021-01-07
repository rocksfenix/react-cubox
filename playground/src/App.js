import React from 'react'
import { Cube3D, Side } from 'test-npm-package'

const App = () => {
  return (
    <div>
      <h1>Rocks</h1>
      <Cube3D>
        <Side />
      </Cube3D>
    </div>
  )
}

export default App
