import React from 'react'

const User: React.FC<{
  name: string
  class: string
}> = function (props) {
  return <div className={ props.class }>
    { props.name }
  </div>
}

export default User