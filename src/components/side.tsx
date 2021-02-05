import React, { useContext } from 'react'
import { getCubeImageStyles, getSideStyles } from '../utils/get-styles-helpers'
import context from '../context'

type event = {
  side: number
}

interface SideProps {
  index: number
  onClick: (event: event) => void
}

export const Side: React.FC<SideProps> = (props) => {
  const ctx = useContext(context)

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
      },
      sidereactcube3d: 'ok'
    })
  })

  const imageStyles = getCubeImageStyles(ctx.size)
  const sideStyles = getSideStyles(ctx.size, props.index)

  const labelStyles = {
    fontSize: 50,
    color: 'white'
  }

  return (
    <div
      style={sideStyles}
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

export default Side
