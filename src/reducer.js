//THE DATA LAYER

export const initialState = {
   user: null,
   playlists: [],
   playing: false,
   item: null,
   // 🚨 !!!!!REMOVE AFTER FINISH DEVELOPING!!!! 🚨
   // token: 'BQC6aNDMwW87N9og7rV6uWnTlKoYTkyEm63GCvcj_Z6F-4744t8cHkjI3BV6bkgZ4CdffREykEx27CyH--vZ4no4U6JfNkOKrUaxv7VBqvrvSONAM5GSEyRMiZqMG1ODUMSbwQw5T2JBaEwZgST3W1V9dNmv6_9a'
}

// listens to actions
const reducer = (state, action) => {
   console.log(action);
   
   // Actions have a TYPE and [PAYLOAD]

   switch (action.type) {
      case 'SET_USER':
         return {
            ...state, // keep whatever is in the current state
            user: action.user // update the user state
         };
      case 'SET_TOKEN':
         return {
            ...state,
            token: action.token
         };
      case 'SET_PLAYLISTS':
         return {
            ...state,
            playlists: action.playlists
         };
      case 'SET_DISCOVER_WEEKLY':
         return {
            ...state,
            discover_weekly: action.discover_weekly
         };
      default: 
         return state
   }
}

export default reducer;