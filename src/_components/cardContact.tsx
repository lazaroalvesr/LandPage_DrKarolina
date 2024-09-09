import { CardProps } from '@/lib/interface'
import { CardContact, ContactLink, ContactText, ContactTitle, IconContact } from './styles/cardContact.styles'

export const CardContactPage = ({ link, src, text, title }: CardProps) => {
    return (
        <CardContact>
            <IconContact src={src} alt='Icone do contato' />
            <ContactTitle>{title}</ContactTitle>
            <ContactText>{text}</ContactText>
            <ContactLink>{link}</ContactLink>
        </CardContact>
    )
}