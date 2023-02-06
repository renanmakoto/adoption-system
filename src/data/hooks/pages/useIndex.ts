import { useState, useEffect } from 'react'
import { Pet } from '../../@types/Pet'
import { ApiService } from '@/data/services/ApiService'
import { AxiosError } from 'axios'

export function useIndex() {
    const [petListUse, setPetList] = useState<Pet[]>([]),
        [selectedPet, setSelectedPet] = useState < Pet | null > (null),
        [email, setEmail] = useState(''),
        [value, setValue] = useState(''),
        [message, setMessage] = useState('')

        useEffect(() => {
            ApiService.get('/pets')
            .then((res) => {
                setPetList(res.data)
            })
        }, [])

        useEffect(() => {
            if (selectedPet === null) {
                clearForm()
            }
        })

        function toAdopt() {
            if (selectedPet !== null) {
                if (adoptionDataValidation()) {
                    ApiService.post('/adoption', {
                        pet_id: selectedPet.id,
                        email,
                        value
                    }).then(() => {
                        setSelectedPet(null)
                        setMessage('Pet virtually adopted succesfully!')
                        clearForm()
                    }).catch((error: AxiosError) => {
                        setMessage(error.response?.data.message)
                    })
                } else {
                    setMessage('Fill in the blank spaces correctly.')
                }
            }
        }

        function adoptionDataValidation() {
            return email.length > 0 && value.length > 0
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

/*
        [
            {
                id: 1,
                name: "Caramelo",
                history: "dsfddjfsdfsd",
                photo: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/387B/production/_126795441_gettyimages-979935038-170667a.jpg'
            },
            {
                id: 2,
                name: "Sausage",
                history: "dsfddjfsdfsd",
                photo: 'https://daily.jstor.org/wp-content/uploads/2022/06/how_street_dogs_spend_their_days_1050x700.jpg'
            }
        ]*/