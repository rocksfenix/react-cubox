import React from 'react'
import { getCubeStyles, getSideStyles } from '../utils/get-styles-helpers'

type event = {
  side: number
}

interface SideProps {
  index: number
  onClick: (event: event) => void
  size: number
  rotateX: number
  rotateY: number
}

export const Side: React.FC<SideProps> = (props) => {
  function handleClick () {
    if (props.onClick) {
      props.onClick({ side: props.index, ...props })
    }
  }

  // The children will be maped to add user-select none and
  const globalChildren = React.Children.map(props.children, (child: any) => {
    
    return React.cloneElement(child, {
      ...child.props,
      style: {
        ...child.props.style,
        pointerEvents: 'none'
      }
    })
  })

  const cubeStyles = getCubeStyles({
    size: props.size,
    rotateX: props.rotateX,
    rotateY: props.rotateY,
  })

  const sideStyles = getSideStyles(props.size, props.index)

  const labelStyles = {
    fontSize: 50,
    color: 'white'
  }

  return (
    <div
      style={cubeStyles}
      {...props}
      onClick={handleClick}
    >
      <div style={sideStyles}>
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

export default Side
