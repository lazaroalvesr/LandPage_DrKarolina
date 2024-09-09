import { CardServiceProps } from "@/lib/interface"
import { DivAboutItem, DivIcon, DivItem, DivItemTitle, IconArrow, LinkDiv, LinkText } from "./styles/cardService.styles"

export const CardService = ({ src,about, textLink, title}: CardServiceProps) => {
    return (
        <DivItem>
            <DivIcon src={src} alt="Icone"/>
            <DivItemTitle>{title}</DivItemTitle>
            <DivAboutItem>{about}</DivAboutItem>
            <LinkDiv>
                <LinkText>{textLink}</LinkText>
                <IconArrow src="/icons/arrow.svg" alt="Icone seta para a direita" />
            </LinkDiv>
        </DivItem>
    )
}