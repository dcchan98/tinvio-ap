
const INITIAL_STATE = {
  fetchedUsers: [],
  currentUser:null,
  currentPosts:[]
}

const userReducer = (state= INITIAL_STATE,action)=>{
  switch (action.type){
    case 'FETCH_USERS':
      return {
        ...state,
        fetchedUsers:action.payload
      }
      case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser:action.payload
        }
        case 'SET_CURRENT_POSTS':
          return {
            ...state,
            currentPosts:action.payload
          }
    default:
      return state;
  }
}

export default userReducer;