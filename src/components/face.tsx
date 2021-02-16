import React, { useContext } from 'react'
import { getCubeImageStyles, getFaceStyles } from '../utils/get-styles-helpers'
import context from '../context'

type event = {
  face: number
}

interface FaceProps {
  index: number
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
  const faceStyles = getFaceStyles({
    size: ctx.size,
    bgColor: ctx.bgColor,
    index: props.index
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
