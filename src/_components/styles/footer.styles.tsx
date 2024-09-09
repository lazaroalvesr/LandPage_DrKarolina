'use client'
import styled from "styled-components"

export const Footer = styled.footer`
    margin-top: 130px;
    border-top: 1px solid #DDCDB0;
    @media (min-width: 320px) and (max-width: 480px) {
   margin-top: 60px;
   }
   @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 60px;
     }
`

export const FooterContainer = styled.div`
    max-width: 1178px;
    padding-top: 50px;
   margin: auto;
   justify-content: space-between;
   display: flex;
   align-items: center;
   border-bottom: 1px solid #DDCDB0;
   padding-bottom: 35px;
   @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
   }


`

export const LogotipoContainerFooter = styled.div`
    display: flex;
    gap: 17px;
    align-items:end;
    width: fit-content;
    @media (min-width: 768px) and (max-width: 1024px) {
      padding-left: 40px;
    }
`

export const TitleLogoFooter = styled.h3`
    font-size: 32px;
    font-weight: bold;
    
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 24px;
   }
   @media (min-width: 768px) and (max-width: 1024px) {
       font-size: 24px;
     }
`

export const LogoImgFooter = styled.img`
    width: 38px;
    height: 38px;
    @media (min-width: 320px) and (max-width: 480px) {
      width: 32px;
      height: 32px;
   }
   @media (min-width: 768px) and (max-width: 1024px) {
       width: 32px;
       height: 32px;
     }
`

export const FooterNav = styled.nav`
    display: flex;
`

export const FooterUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 24px;
`

export const LiFooter = styled.li`
     font-size: 20px;
     list-style: none;
     font-weight: normal;
     cursor: pointer;
     font-size: 16px;
`

export const DivIconsSocialMedia = styled.div`
    display: flex;
    gap: 12px;
    @media (min-width: 768px) and (max-width: 1024px) {
    padding-right: 40px;
     }
`

export const IconSocialMedia = styled.img`
    width: 24px;
    cursor: pointer;
    height: 24px;
`

export const DivInfosFooter = styled.div`
  display: flex;
  max-width: 1178px;
  margin: auto;
  display: flex;
  padding: 15px 0px;
  justify-content: space-between;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
    margin: 0px 20px;
   }
   @media (min-width: 768px) and (max-width: 1024px) {
    padding: 24px 40px;
     }
`

export const InfosFooterLeft = styled.div`
    display: flex;
    @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
   }

`

export const InfoOwner = styled.span`
    font-size: 12px;
`

export const InfoSpanUnerline = styled.span`
    text-decoration: underline;
    font-size: 12px;
`