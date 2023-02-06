import React from 'react'

function User(props) {
  const name = "sashank"
  return (
    <div>
      <button onClick={props.alert(name)}>Change Color!</button>
     </div>
  )
}

export default User
