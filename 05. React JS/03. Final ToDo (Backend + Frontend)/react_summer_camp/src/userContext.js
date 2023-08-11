import { createContext, useReducer } from "react";
import { initialUserState, userStateReducer } from "./userStateReducer";

/*
Parent Child Concept: A -> B -> C ->D agr hme to A se D mein data transfer krna to to faaltu 
mein phle B fr C fr D mein krna pdega here we come with the concept of Cotect we can directly share data 
from A to D 
Below
<UserProvider>
<App />
</UserProvider>

User data is share among the App component(index.js)
*/

// Prop drilling solution -> Context Api
const UserStateContext = createContext(null)

const UserStateReducerContext = createContext(null)

const UserProvider = ({children}) => {
    const [users, dispatch] = useReducer(userStateReducer, initialUserState);
    /*  dispatch the action       userStateReducer(state, action)         
          
    The reducer function itself accepts two parameters and returns one value. 
    The first parameter is the current state, and the second is the action. 
    The state is the data we are manipulating. The reducer function receives 
    an action, which is executed by a dispatch function:

    The action is like an instruction you pass to the reducer function. 
    Based on the specified action, the reducer function executes the necessary 
    state update. If you’ve used a state management library like Redux before, 
    then you’ve probably come across this state management pattern.
users gives back user state
dispatch(update context) is a Action                        
userStateReducer is a funtion
initialUserState in a Initial Value

State -> Reducer -> Context Api 
*/

    return (
        <UserStateContext.Provider value={users}>
            <UserStateReducerContext.Provider value={dispatch}>
                {children}
            </UserStateReducerContext.Provider>
        </UserStateContext.Provider>
    )
}

export {
    UserProvider,
    UserStateContext,
    UserStateReducerContext
}
