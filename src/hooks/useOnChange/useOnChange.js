import { useState } from 'react'

export const useOnChange = ()=>{
    const [input, setInput] = useState({})
    const onChange = (evt)=>{
        const {target}= evt
        return setInput({
            ...input,
            [target.name] : target.value
        })
    }

    return [onChange]
}