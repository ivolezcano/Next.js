async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`)
  const data = await res.json()
  console.log(data)
  return data.data
}

async function usersPage({ params }) {

  const user = await getUser(params.id)
  

  return (
    <div>
      <h1>User details</h1>
      <div>
        <img src={user.avatar} />
        <div>
          <h3>{user.id} {user.first_name} {user.last_name}</h3>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  )
}

export default usersPage