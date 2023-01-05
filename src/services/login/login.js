import axios from "axios"

export const login= async(data)=>{
    try {
        const response = await axios.post(`http://localhost:3030/login-user`, data)
        console.log(response)
    } catch (error) {
        throw new Error(error)
    }
}