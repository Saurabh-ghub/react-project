import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} =  useParams()
  return (
    <div>user</div>
  )
}

export default User