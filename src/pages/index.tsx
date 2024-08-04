import type { NextPage } from 'next'
import Title from '../ui/components/Title/Title'
import PetList from '../ui/components/List/PetList'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {
    const {
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
    } = useIndex()

    return(
        <div>
            <Title 
            title="The Title" 
            subtitle={
                <span>
                    With a small monthly donation, you <br/>
                    may <strong>adopt an animal virtually</strong>
                </span>
            }/>
            <PetList
                pets={ petListUse }
                onSelect={ (pet) => setSelectedPet(pet) }
            />

            <Dialog 
            open={ selectedPet !== null } 
            fullWidth
            PaperProps={ { sx: { p: 5 } } }
            onClose={ () => setSelectedPet(null) }
            >
                <Grid container spacing={ 2 }>
                    <Grid item xs={ 12 }>
                        <TextField
                            label={ 'E-mail' }
                            type={ 'email' }
                            fullWidth
                            value={ email }
                            onChange={ (e) => setEmail(e.target.value) }
                        />
                    </Grid>
                    <Grid item xs={ 12 }>
                        <TextField
                            label={ 'Amount per month:' } 
                            type={ 'number' }
                            fullWidth
                            value={ value }
                            onChange={ (e) => setValue(e.target.value) }
                        />
                    </Grid>
                </Grid>
                <DialogActions sx={ { mt: 5 } }>
                    <Button 
                        color={ 'secondary' }
                        onClick={ () => setSelectedPet(null) }
                    >
                        Cancel
                    </Button>
                    <Button 
                        variant={ 'contained' }
                        onClick={ () => toAdopt() }
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
            <Snackbar 
                open={ message.length > 0 }
                message={ message }
                autoHideDuration={ 2500 }
                onClose={ () => setMessage('') }
            />
        </div>
    )
}

export default Home

