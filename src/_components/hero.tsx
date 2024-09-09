import { Button, ButtonContact, ContainerHero, DivButton, DivSpanText, DivText, DivTextAbout, DivTitle, ImageAdvogadaHero } from "./styles/hero.styles"

export const HeroPage = () => {
    return (
        <ContainerHero>
            <DivText>
                <DivTitle>Defendendo seus direitos com <DivSpanText>excelência.</DivSpanText></DivTitle>
                <DivTextAbout>Bem-vindo ao nosso escritório de advocacia. Aqui, defendemos seus direitos
                    com excelência e dedicação. Nossa equipe está comprometida em oferecer soluções jurídicas
                    eficazes e personalizadas. Conte conosco para proteger seus interesses com profissionalismo
                    e cuidado.</DivTextAbout>
                <DivButton>
                    <Button>Saiba Mais</Button>
                    <ButtonContact>Entrar em contato</ButtonContact>
                </DivButton>
            </DivText>
            <ImageAdvogadaHero src="/img/advogada.png" alt="Foto de uma advogada sorrindo" />
        </ContainerHero>
    )
}