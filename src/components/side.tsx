import React, { useContext } from 'react'
import context from '../context'

interface SideProps {

}

export const Side: React.FC<SideProps> = (props) => {
  const value: any = useContext(context)

  return (
    <div style={styles} {...props}>
      {props.children} <span onClick={() => value.increment()}>{value.count}</span>
    </div>
  )
}

const styles = {
  background: 'blue',
  borderRadius: '0.3em',
  padding: '1em',
  margin: '1em',
  color: '#FFF'
}

export default Side
