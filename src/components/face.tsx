import React, { useContext } from 'react'
import { getCubeImageStyles, getFaceStyles } from '../utils/get-styles-helpers'
import context from '../context'

type event = {
  face: number
}

interface FaceProps {
  index: number
  material?: string
  texture: string | null
  bgColor?: string
  opacity: number
  behavior: string
  activeOpacity: number
  inactiveOpacity: number
  opacityTransitionTime: number
  onClick: (event: event) => void
}

export const Face: React.FC<FaceProps> = (props) => {
  const ctx = useContext(context)

  function handleClick () {
    if (props.onClick) {
      props.onClick({ face: props.index, ...props })
    }
  }

  // The children will be maped to add user-select none and
  const globalChildren = React.Children.map(props.children, (child: any) => {
    
    return React.cloneElement(child, {
      ...child.props,
      style: {
        ...child.props.style,
        pointerEvents: 'none'
      },
      reactcube3dface: `${props.index}`
    })
  })

  const imageStyles = getCubeImageStyles(ctx.size)

  // The side prop has priority
  const material = props.material || ctx.material
  const texture = props.texture || ctx.texture
  const bgColor = props.bgColor || ctx.bgColor
  const opacity = props.opacity || ctx.opacity
  const behavior = props.behavior || ctx.behavior
  const activeOpacity = props.activeOpacity || ctx.activeOpacity
  const inactiveOpacity = props.inactiveOpacity || ctx.inactiveOpacity
  const opacityTransitionTime = props.opacityTransitionTime || ctx.opacityTransitionTime

  const active = props.index === ctx.activeFace


  const faceStyles = getFaceStyles({
    index: props.index,
    size: ctx.size,
    bgColor,
    material,
    opacity,
    active,
    behavior,
    activeOpacity,
    inactiveOpacity,
    texture,
    opacityTransitionTime
  })

  const labelStyles = {
    fontSize: 50,
    color: 'white'
  }

  return (
    <div
      style={faceStyles}
      {...props}
      onClick={handleClick}
    >
      <div style={imageStyles}>
        {!props.children && (
          // Will be removed
          <span style={labelStyles}>
            {props.index}
          </span>
        )}
        {props.children && globalChildren}
      </div>
    </div>
  )
}

export default Face
