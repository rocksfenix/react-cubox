import React from 'react'
import Side from '../components/side'

// Helper function to check if we receive invalid
// children component
export default function getErrorInvalidChild (children) {
  let hasError = null

  if (!children) {
    return `Error: You need to pass the <Side /> component inside of <Cube /> component.`
  }

  React.Children.forEach(children, (child) => {
    if (child.type !== Side) {
      hasError = `Error: You need to pass the <Side /> component.`
    }
  })
  
  return hasError
}