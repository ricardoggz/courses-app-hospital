import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = ({url, config})=>{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const getData = async()=>{
        try {
            const response = await axios.get(url, config)
            if(response.data){
                setLoading(false)
            }
            return setData(response)
        } catch (error) {
            throw new Error(error)
        }
    }
    useEffect(()=>{
        getData()
    },[url])

    return [loading, data]
}