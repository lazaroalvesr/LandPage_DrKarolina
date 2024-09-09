import { ContianerInfosMain, DivInfosMain, InfosButton, InfosTextAbout, InfosTitle, MainBg, MainContainter, MainImg } from "./styles/main.styles"

export const MainPage = () => {
    return (
        <MainBg id="sobre">
            <MainContainter>
                <ContianerInfosMain>
                    <MainImg src="/img/advogada_seria.png" alt="Uma advogada mexendo no sue relógio e olhando de lado para câmera." />
                    <DivInfosMain>
                        <InfosTitle>Sobre</InfosTitle>
                        <InfosTextAbout>A Dr. Karolina é uma advogada dedicada,
                            especializada em Direito Civil, Penal e Trabalhista.
                            Com uma abordagem personalizada e eficiente, oferece
                            soluções jurídicas de alta qualidade para proteger seus
                            direitos e interesses.</InfosTextAbout>
                        <InfosButton>Entre em contato</InfosButton>
                    </DivInfosMain>
                </ContianerInfosMain>
            </MainContainter>
        </MainBg>
    )
}