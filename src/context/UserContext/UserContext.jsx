import { createContext } from "react"
import PropTypes from 'prop-types'

export const UserContext = createContext(null)
export const UserProvider = ({children})=> {
    return (
        <UserContext.Provider>
            { children }
        </UserContext.Provider>
    )
}
UserProvider.propTypes ={
    children: PropTypes.node
}