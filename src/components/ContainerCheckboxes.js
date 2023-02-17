import React from 'react'

function ContainerCheckboxes(props) {
  return (
    <div className="flex-container-small row wrap">
      {props.children}
    </div>

  )
}

export default ContainerCheckboxes