import React from 'react'

type Children = (React.ReactChild | React.ReactFragment | React.ReactPortal)

/**
 * Helper function to repeat / clone the React elements
 * to fill a specific length.
 * a         =>   a a a a a a
 * a b       =>   a b a b a b
 * a b c     =>   a b c a b c
 * a b c d   =>   a b c d a b
 * @param {Children} React children
 * @param {number=6} length
 * @param {any} size=100
 * @returns {any}
 */
export default function getClonedToFill (children: Children, length: number = 6, size = 100) {
  let items: Children[] = React.Children.toArray(children)
  let i = 0
  let output = []

  let delta = 0

  while (i < length) {
    i++
    const currentItem: any = items[delta]

    output.push(
      React.cloneElement(currentItem, {
        ...currentItem.props,
        key: `rr3d-${i}`,
        index: i,
        size
      })
    )

    if (delta < items.length - 1) {
      delta++
    } else {
      delta = 0
    }
  }
  return output
}
