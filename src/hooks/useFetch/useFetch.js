import { useState, useEffect } from 'react'

export const useFetch = ({url})=>{
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState(null)
    const getData = async()=>{
        try {
            const response = await fetch(url)
            const json = await response.json()
            setLoading(false)
            setData(json)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getData()
    },[])

    return [loading, data]
}