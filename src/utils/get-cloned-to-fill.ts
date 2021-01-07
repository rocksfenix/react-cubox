import React from 'react'

type Children = (React.ReactChild | React.ReactFragment | React.ReactPortal)

/**
 * Helper function to repeat / clone the React elements
 * to fill a specific length.
 * a         =>   a a a a a a
 * a b       =>   a b a b a b
 * a b c     =>   a b c a b c
 * a b c d   =>   a b c d a b
 * @param {Children} children
 * @param {number} length=6
 * @returns {Children[]}
 */
export default function getClonedToFill (children: Children, length: number = 6) {
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
        index: i
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
