import { useState, useEffect } from 'react'
import { Report } from '@/data/@types/Report'
import { ApiService } from '@/data/services/ApiService'

export function useReport() {
    const [reportList, setReportList] = useState<Report[]>([])

    useEffect( () => {
        ApiService.get('/adoptions').then((response) => {
            setReportList(response.data)
        })
    }, [])
    return {
        reportList
    }

}