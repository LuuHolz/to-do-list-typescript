import { useState, ChangeEvent } from "react";
import {Sub} from '../type'

interface FormState {
    inputValues: Sub
}

interface FormProps {
    onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
}


const Form = ({ onNewSub } : FormProps) => {
    const [inputValues, setInputValues] = useState<FormState[inputValues]>({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value
    })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder="nick" />
                <input onChange={handleChange} value={inputValues.subMonths} type="number" name='subMonths' placeholder="subMonths" />
                <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder="avatar" />
                <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder="description" />
                <button>Save new sub!</button>
            </form>
        </div>
    )
}

export default Form;