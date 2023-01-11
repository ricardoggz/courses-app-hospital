import { useState, createContext } from "react"
import PropTypes from 'prop-types'

export const UserContext = createContext(null)
export const UserProvider = ({children})=> {
    const [user, setUser] = useState(null)
    const saveUser = (user)=>{
        localStorage.setItem('user', JSON.stringify(user))
        return setUser(user)
    }
    const deleteUser = ()=>{
        localStorage.removeItem('user')
        setUser(null)
    }
    return (
        <UserContext.Provider value={{saveUser, user, deleteUser}}>
            { children }
        </UserContext.Provider>
    )
}
UserProvider.propTypes ={
    children: PropTypes.node
}