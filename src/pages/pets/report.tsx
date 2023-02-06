import { NextPage } from 'next'
import Title from '../../ui/components/Title/Title'
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { useReport } from '@/data/hooks/pages/pets/useReport'

const Report: NextPage = () => {
    const { reportList } = useReport()
    return(
        <>
            <Title
                title={ 'Adoption report' }
                subtitle={ 'See the list of adopted pets' }
            />
            <TableContainer 
                component={ Paper }
                sx={ { maxWidth: 830, mx: 'auto', p: { xs: 3, md: 5 } } }
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align={ 'right' }>Monthly Donation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { reportList.map((report) => (
                            <TableRow key={ report.id }>
                                <TableCell>{ report.pet.name }</TableCell>
                                <TableCell>{ report.email }</TableCell>
                                <TableCell align={ 'right' }>{ report.value }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Report