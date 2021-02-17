type event = {
  side: number
}

export interface Cube3DProps {
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
  onClick?: (event: event) => void
  children?: React.PropsWithChildren<any>
}