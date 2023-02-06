import { ListStyled, ListItem, PetPhoto, Info, Name, Description } from './List.style'
import { Pet } from '../../../data/@types/Pet'
import { TextService } from '@/data/services/TextService'
import '../../styles/globals.css'
import { Button } from '@mui/material'

interface ListProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void
}

export default function PetList(props: ListProps) {
    const maxLengthText = 200
    return(
        <ListStyled>
            { props.pets.map(pet => (
                <ListItem key={ pet.id } >
                    <PetPhoto src={ pet.photo } alt={ pet.name } />
                    <Info>
                        <Name>{ pet.name }</Name>
                        <Description>{ TextService.limitText(pet.history, maxLengthText) }</Description>
                        <Button
                            variant={ 'contained' }
                            fullWidth
                            onClick={ () => props.onSelect(pet) }
                        >
                            Adopt { pet.name }
                        </Button>
                    </Info>
                </ListItem>
            )) }
        </ListStyled>
    )
}