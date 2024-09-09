import Link from "next/link"
import { DivIconsSocialMedia, DivInfosFooter, Footer, FooterContainer, FooterNav, FooterUl, IconSocialMedia, InfoOwner, InfosFooterLeft, InfoSpanUnerline, LiFooter, LogoImgFooter, LogotipoContainerFooter, TitleLogoFooter } from "./styles/footer.styles"

export const FooterPage = () => {
    return (
        <Footer>
            <FooterContainer>
                <LogotipoContainerFooter>
                    <LogoImgFooter src="/icons/Logo.svg" alt="Icone" />
                    <TitleLogoFooter>Dr.Karolina</TitleLogoFooter>
                </LogotipoContainerFooter>
                <FooterNav>
                    <FooterUl>
                        <LiFooter>Home</LiFooter>
                        <Link href="#servicos">
                            <LiFooter>Serviços</LiFooter>
                        </Link>
                        <Link href="#sobre">
                            <LiFooter>Sobre</LiFooter>
                        </Link>
                        <Link href="#contact">
                            <LiFooter>Contato</LiFooter>
                        </Link>
                    </FooterUl>
                </FooterNav>
                <DivIconsSocialMedia>
                    <IconSocialMedia src="/icons/facebook.svg" alt="Icone Facebook" />
                    <IconSocialMedia src="/icons/instagram.svg" alt="Icone Instagram" />
                    <IconSocialMedia src="/icons/linkedin.svg" alt="Icone Lindkedin" />
                    <IconSocialMedia src="/icons/youtube.svg" alt="Icone youtube" />
                </DivIconsSocialMedia>
            </FooterContainer>
            <DivInfosFooter>
                <InfosFooterLeft>
                    <InfoOwner>© 2024 Dr.Karolina. Todos os direitos reservados.</InfoOwner>
                    <InfoSpanUnerline>Politica de Privacidade</InfoSpanUnerline>
                    <InfoSpanUnerline>Termos de serviços</InfoSpanUnerline>
                </InfosFooterLeft>
                <InfoSpanUnerline>Criado por Lázaro Alves R</InfoSpanUnerline>
            </DivInfosFooter>
        </Footer>
    )
}