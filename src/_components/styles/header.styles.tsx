'use client'
import { HeaderUlProps } from "@/lib/interface"
import styled from "styled-components"

export const Header = styled.header`
    border-bottom: 1px solid #DDCDB0;
`
export const ContainerHeader = styled.div`
   max-width: 1178px;
   margin: auto;
   display: flex;
   position: relative;
   justify-content: space-between;
   padding-top: 15px;
   align-items: center;
   padding-bottom: 15px;
   @media (min-width: 320px) and (max-width: 480px) {
    padding: 20px 0px;
    }
`

export const LogotipoContainer = styled.div`
    display: flex;
    gap: 17px;
    align-items:end;
    width: fit-content;
    @media (min-width: 320px) and (max-width: 480px) {
     padding-left: 20px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      padding-left: 40px;
    }
`

export const TitleLogo = styled.h3`
    font-size: 32px;
    font-weight: bold;
    
    @media (min-width: 320px) and (max-width: 480px) {
      font-size: 24px;
   }
   @media (min-width: 768px) and (max-width: 1024px) {
       font-size: 24px;
     }
`

export const LogoImg = styled.img`
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

export const NavHeader = styled.nav`
    display: flex;
    @media (min-width: 768px) and (max-width: 1024px) {
      padding-right: 40px;
     }
`

export const UlHeader = styled.ul<HeaderUlProps>`
    display: flex;
     align-items: center;
     flex-direction: row;
     gap: 29px;

     @media (min-width: 320px) and (max-width: 480px) {
        position: absolute;
       display: ${({ ativo }) => ativo ? 'flex' : 'none'};
       flex-direction: column;
       top: 70px;
       padding: 80px 0px;
       background-color: white;
       left: 0px;
       width: 100%;
   }
`

export const LiHeader = styled.li`
     font-size: 20px;
     list-style: none;
     font-weight: normal;
     cursor: pointer;
     height: 23px;

     &&:hover{
       &&::after{
        content: '';
        display: block;
        width: 50%;
        height: 2px;
        background-color: #DDCDB0;
        border-radius: 10px;
       }

     }
`

export const ButtonMobile = styled.button`
    display: none;

    @media (min-width: 320px) and (max-width: 480px) {
        position: absolute;
        display: flex;
        right: 22px;
        background-color: transparent;
        border: none;
   }
`

export const IconeMenuHeader = styled.img`
    width: 40px;
    height: 40px;
`