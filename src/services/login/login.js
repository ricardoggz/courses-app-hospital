import axios from "axios"

export const login= async(data)=>{
    let resp;
    try {
        const response = await axios.post(`http://localhost:3030/api/auth/login-user`, data)
        resp = response
    } catch (error) {
        throw new Error(error)
    }
    return resp
}