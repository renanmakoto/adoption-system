import { useState, useEffect } from 'react'
import { Pet } from '../../@types/Pet'
import { ApiService } from '@/data/services/ApiService'
import { AxiosError } from 'axios'

interface ErrorResponse {
    message: string;
}

export function useIndex() {
    const [petListUse, setPetList] = useState<Pet[]>([]),
        [selectedPet, setSelectedPet] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [value, setValue] = useState(''),
        [message, setMessage] = useState('')

    useEffect(() => {
        ApiService.get('/pets')
            .then((res) => {
                setPetList(res.data)
            })
            .catch((error: AxiosError) => {
                console.error('Error fetching pets:', error)
                setMessage('Error fetching pets')
            })
    }, [])

    useEffect(() => {
        if (selectedPet === null) {
            clearForm()
        }
    }, [selectedPet])

    function toAdopt() {
        if (selectedPet !== null) {
            if (adoptionDataValidation()) {
                ApiService.post('/adoption', {
                    pet_id: selectedPet.id,
                    email,
                    value
                })
                    .then(() => {
                        setSelectedPet(null)
                        setMessage('Pet virtually adopted successfully!')
                        clearForm()
                    })
                    .catch((error: AxiosError) => {
                        const response = error.response?.data as ErrorResponse;
                        setMessage(response?.message || 'Adoption failed')
                    })
            } else {
                setMessage('Fill in the blank spaces correctly.')
            }
        }
    }

    function adoptionDataValidation() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const isEmailValid = emailRegex.test(email)
        const isValueValid = !isNaN(Number(value)) && Number(value) > 0
        return isEmailValid && isValueValid
    }

    function clearForm() {
        setEmail('')
        setValue('')
    }

    return {
        petListUse,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        value,
        setValue,
        message,
        setMessage,
        toAdopt
    }
}
