import React from 'react'

interface ErrorMessageProps {
  message: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = (props) => {
  return (
    <div style={styles}>
      {props.message}
    </div>
  )
}

const styles: React.CSSProperties = {
  background: 'gold',
  borderRadius: '0.3em',
  padding: '1em',
  margin: '1em',
  textAlign: 'center'
}

export default ErrorMessage
