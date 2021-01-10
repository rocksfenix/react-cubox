import React from 'react'
// Helpers to get inline styles

// Styles for the main viewport container
export const getViewportStyles = (size: number, other: ({} | null)): React.CSSProperties => ({
  background: '#000',
  marginTop: '20%',
  perspective: '800px',
  perspectiveOrigin: `50% ${size - size/6}px`,
  transform: 'scale(0.8, 0.8)',
  ...other,
})

interface CubeStyles {
  size: number,
  rotateX: number,
  rotateY: number
}

// Styles for the cube container
export const getCubeStyles = (cubeData: CubeStyles): React.CSSProperties => ({
  position: 'relative',
  margin: '0 auto',
  transformStyle: 'preserve-3d',
  willChange: 'transform',
  height: `${cubeData.size}px`,
  width: `${cubeData.size}px`,
  transform: `rotateX(${cubeData.rotateX}deg) rotateY(${cubeData.rotateY}deg)`
})

// Styles for sides
export const getSideStyles = (size: number, index: number): React.CSSProperties => ({
  overflow: 'hidden',
  position: 'absolute',
  opacity: 0.8,
  background: 'radial-gradient(blue, rgb(0, 0, 0))',
  // touchCallout: 'none',
  userSelect: 'none',
  height: size,
  width: size,
  willChange: 'opacity',
  transition: 'opacity 500ms ease',
  transform: getTransformBySide(index, size / 2)
})

function getTransformBySide (index: number, half: number): string {
  switch (index) {
    case 1: return `rotateX(90deg) translateZ(${half}px)`
    case 2: return `translateZ(${half}px)`
    case 3: return `rotateY(90deg) translateZ(${half}px)`
    case 4: return `rotateY(180deg) translateZ(${half}px)`
    case 5: return `rotateY(-90deg) translateZ(${half}px)`
    case 6: return `rotateX(-90deg) rotate(180deg) translateZ(${half}px)`
    default: return ''
  }
}

