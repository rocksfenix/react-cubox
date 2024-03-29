type event = {
  side: number
}

export interface Cube3DProps {
  texture: string | null
  style: any
  size: number
  speed: number
  height: number
  bgColor: string
  rotateX: number
  rotateY: number
  sensivity: number
  sensivityFade: number
  touchSensivity: number
  material: string
  opacity: number
  behavior: string
  activeOpacity: number
  inactiveOpacity: number
  opacityTransitionTime: number
  showFaceNumber: boolean
  onClick?: (event: event) => void
  children?: React.PropsWithChildren<any>
}