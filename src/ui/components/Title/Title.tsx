import { TitleStyled, SubTitle } from './Title.style'

interface TitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

export default function Title({ title, subtitle = '' }: TitleProps) {
    return(
        <>
            <TitleStyled>{title}</TitleStyled>
            <SubTitle>{subtitle}</SubTitle>
        </>
    )
}

