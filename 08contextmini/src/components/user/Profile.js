import React, {useContext} from 'react'
import UserContext from '../../context/UserContext'
function Profile() {
    const {user} = useContext(UserContext)
    if(!user) return <h2>User Not logged in.</h2>
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">username: {user.username}</p>
</div>
  )
}

export default Profile