import React from 'react'
import Face from '../components/face'

/**
 * Description: Helper function to check if we receive invalid
 * children component
 * @param {React.ReactElement<any>} children
 * @returns {string}
 */
export default function getErrorInvalidChild (children: React.ReactElement<any>) {
  let hasError = null

  if (!children) {
    return `Error: You need to pass the <Face /> component inside of <Cube /> component.`
  }

  React.Children.forEach(children, (child) => {
    if (child.type !== Face) {
      hasError = `Error: You need to pass the <Face /> component.`
    }
  })
  
  return hasError
}