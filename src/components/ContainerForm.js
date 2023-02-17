import React from 'react'

function ContainerForm(props) {
  return (
    <form className="form">
      {props.children}
    </form>
  )
}

export default ContainerForm