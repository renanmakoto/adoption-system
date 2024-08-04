import { useState, useEffect } from 'react'
import { Report } from '@/data/@types/Report'
import { ApiService } from '@/data/services/ApiService'
import { AxiosError } from 'axios'

export function useReport() {
    const [reportList, setReportList] = useState<Report[]>([])

    useEffect(() => {
        ApiService.get('/adoptions')
        .then((response) => {
            setReportList(response.data)
        })
        .catch((error: AxiosError) => {
            console.error('Failed to fetch reports', error)
        })
    }, [])
    
    return {
        reportList
    }
}

