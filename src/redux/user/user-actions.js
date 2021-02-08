export const fetchUsers = user =>{

  return async function(dispatch){
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const resJSON = await(res.json())
    dispatch({ type: 'FETCH_USERS', payload: resJSON });
  }
}

export const setCurrentPosts = userId =>{

  return async function(dispatch){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    const resJSON = await(res.json())
    dispatch({ type: 'SET_CURRENT_POSTS', payload: resJSON });
  }
}

export const setCurrentUser = user =>{
    return { type: 'SET_CURRENT_USER', payload: user }
}

