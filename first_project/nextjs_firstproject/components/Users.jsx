import React from 'react'

function Users({ users }) {
  return (
    <div>
    {
      users.map((user) => (
        <li>
          <div>
            <h5>{user.id} {user.first_name} {user.last_name}</h5>
            <p>{user.email}</p>
          </div>
          <img src={user.avatar} />
        </li>
      ))
    }
  </div>
  )
}

export default Users