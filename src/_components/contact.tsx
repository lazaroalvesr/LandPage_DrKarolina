import { CardContactPage } from "./cardContact"
import { ContactContainer, ContactDivTitle, ContactDownTitle, ContactSubTitle, ContactTitle, DivCardsContact } from "./styles/contact.styles"

export const ContactPage = () => {
    return (
        <ContactContainer id="contact">
            <ContactDivTitle>
                <ContactSubTitle>Soluções Jurídicas</ContactSubTitle>
                <ContactTitle>Entre em Contato</ContactTitle>
                <ContactDownTitle>Estamos aqui para ajudar com suas necessidades jurídicas.</ContactDownTitle>
                <DivCardsContact>
                    <CardContactPage 
                    src="/icons/email.svg"
                    title="Email"
                    text="Entre em contato conosco para qualquer dúvida ou consulta."
                    link="hello@relume.io"
                    />
                      <CardContactPage 
                    src="/icons/phone.svg"
                    title="Telefone"
                    text="Ligue para nós para obter assistência imediata."
                    link="+1 (555) 000-0000"
                    />
                      <CardContactPage 
                    src="/icons/map.svg"
                    title="Escritório"
                    text="Visite nosso escritório para uma consulta pessoal."
                    link="123 Rua Exemplo, São Paulo SP 00000 BR"
                    />

                </DivCardsContact>
            </ContactDivTitle>
        </ContactContainer>
    )
}