import { Link, Box } from '@mui/material'
import NextLink from 'next/link'
import { HeaderContainer, Logo, LinksContainer } from './HeaderAdmin.style'

export default function HeaderAdmin() {
    return(
        <HeaderContainer>
            <div>
                <Logo src={ '/images/logo.svg' } alt={ 'Adopt an animal' } />
                <LinksContainer>
                    <Link component={ NextLink } href={ '/pets/register' }>
                        <a>Register Pet</a>
                    </Link>
                    <Link component={ NextLink } href={ '/pets/report' }>
                        <a>
                            <Box component={ 'span' } 
                            sx={ { display: { sm: 'initial', xs: 'none' } } }
                            >Adoption</Box> 
                            Report
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </HeaderContainer>
    )
}