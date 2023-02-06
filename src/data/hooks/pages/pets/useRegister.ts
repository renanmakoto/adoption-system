import { useState } from 'react'
import { ApiService } from '@/data/services/ApiService'
import { AxiosError } from 'axios'

export function useRegister() {
    const [name, setName] = useState(''),
        [history, setHistory] = useState(''),
        [photo, setPhoto] = useState(''),
        [message, setMessage] = useState('')

    function register() {
        if (validateForm()) {
            ApiService.post('/pets', {
                name,
                history,
                photo
            })
            .then(() => {
                clear()
                setMessage('Pet registered succesfully!')
            })
            .catch((error: AxiosError) => {
                setMessage(error.response?.data.message)
            })
        } else {
            setMessage('Fill in all the fields!')
        }
    }

    function validateForm() {
        return name.length > 2 && history.length > 20 && photo.length > 5
    }

    function clear() {
        setName('')
        setHistory('')
        setPhoto('')
    }

    return {
        name, 
        history, 
        photo, 
        setName, 
        setHistory, 
        setPhoto, 
        register, 
        message, 
        setMessage
    }
}