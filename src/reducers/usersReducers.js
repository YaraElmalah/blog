export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_USER': 
        return [...state, action.payload]; //we are collecting the users to our state.
        default: 
        return state;
    }
}