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
// users gives back user state
// dispatch(update context) is a Action                        
// userStateReducer is a funtion
// initialUserState in a Initial Value

// State -> Reducer -> Context Api 

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
