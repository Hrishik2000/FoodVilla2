
// importing create context function from react
import { createContext } from "react";

// context is just a global variable & it is improvement over propes drilling
// creating user context 
const user = createContext(
    // DEFAULT Context data 
    // This will be showed if context value not updated by real data using (<userContext.Provider> </userContext.Provider>)
    {
    user: {
        name: "Default Name",
        email: "default@gmail.com"
    }
})

// helpfull when there are 10-20 concepts in same project
user.displayName = "userContext"
// react dev tools now show this context as userContext (custom name) in Whole dom tree 
//defaukt name is context.Provider & new name is userContext.Provier (check devtools to review it)

export default user;

