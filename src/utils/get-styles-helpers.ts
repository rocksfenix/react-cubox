import React from 'react'
// Helpers to get inline styles

interface ViewportStyles {
  size: number
  otherStyles?: {}
}

// Styles for the main viewport container
export const getViewportStyles = (props: ViewportStyles): React.CSSProperties => ({
  background: '#000',
  marginTop: '20%',
  perspective: '800px',
  perspectiveOrigin: `50% ${props.size - props.size/6}px`,
  transform: 'scale(0.8, 0.8)',
  ...props.otherStyles,
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

interface FaceProps {
  size: number
  index: number
  bgColor: string
  material: string
  opacity: number
  behavior: string
  active: boolean
  activeOpacity: number
  inactiveOpacity: number
  opacityTransitionTime: number
}

// Styles for sides

// calcule opacity in bese of behaviur
// behavior
function calculeOpacity (props: FaceProps) {
  let opacity = props.opacity
  if (props.behavior === 'opaque') {
    opacity = props.opacity
  }
  if (props.behavior === 'active') {
    opacity = props.active ? props.activeOpacity : props.inactiveOpacity
  }
  if (props.behavior === 'translucid') {
    opacity = props.active ? props.inactiveOpacity : props.activeOpacity
  }
  return opacity
}

export const getFaceStyles = (props: FaceProps): React.CSSProperties => ({
  overflow: 'hidden',
  position: 'absolute',
  opacity: calculeOpacity(props),
  background: props.material === 'gradient'
    ? `radial-gradient(${props.bgColor}, rgb(0, 0, 0))`
    : props.bgColor,
  // touchCallout: 'none',
  userSelect: 'none',
  height: props.size,
  width: props.size,
  willChange: 'opacity',
  transition: `opacity ${props.opacityTransitionTime}ms ease`,
  transform: getTransformBySide(props.index, props.size / 2)
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

export const getCubeImageStyles = (size: number) => ({
  height: size,
  width: size,
  // Solo para centrar texto
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ///
  transform: 'rotate(180deg)',
  fontSize: '80px',
  color: '#FFF',
  transition: 'color 600ms',
})
