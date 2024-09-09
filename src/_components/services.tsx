import { CardService } from "./cardService"
import { ServicesBG, ServicesContainerItens, ServicesTitle, ServicosContainer } from "./styles/services.styles"

export const ServicePaege = () => {
    return (
        <ServicesBG id="servicos">
            <ServicosContainer>
                <ServicesTitle>Serviços Jurídicos Especializados</ServicesTitle>
                <ServicesContainerItens>
                    <CardService
                        src="/icons/tribunal.svg"
                        title="Direito Civil, Penal e Trabalhista"
                        about="Oferecemos serviços jurídicos especializados em direito civil, penal e trabalhista, com foco em soluções eficazes e personalizadas para suas necessidades legais."
                        textLink="Saiba Mais"
                    />
                     <CardService
                        src="/icons/entrevista.svg"
                        title="Consultoria Jurídica Personalizada"
                        about="A Dr. Karolina oferece consultoria jurídica personalizada, com foco em atender suas necessidades legais de forma eficiente e dedicada, garantindo soluções eficazes."
                        textLink="Entrar em Contato"
                    />
                     <CardService
                        src="/icons/martelo_servico.svg"
                        title="Representação Legal de Qualidade"
                        about="Conte com a Dr. Karolina para representação legal de qualidade em direito civil, penal e trabalhista, com foco em proteger seus direitos e oferecer soluções eficazes."
                        textLink="Saiba Mais"
                    />
                </ServicesContainerItens>
            </ServicosContainer>
        </ServicesBG>
    )
}