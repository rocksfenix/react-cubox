import React from 'react'
import Face from '../components/face'

// Helper function to check if we receive invalid
// children component
export default function getErrorInvalidChild (children: React.ReactElement<any>) {
  let hasError = null

  if (!children) {
    return `Error: You need to pass the <Face /> component inFace of <Cube /> component.`
  }

  React.Children.forEach(children, (child) => {
    if (child.type !== Face) {
      hasError = `Error: You need to pass the <Face /> component.`
    }
  })
  
  return hasError
}