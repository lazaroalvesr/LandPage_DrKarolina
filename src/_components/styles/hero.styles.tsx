'use client'
import styled from "styled-components"

export const ContainerHero = styled.section`
   max-width: 1178px;
   padding-top: 40px;
   align-items: center;
   justify-content: space-between;
   margin: auto;
   display: flex;
   @media (min-width: 320px) and (max-width: 480px) {
    padding: 35px 0px;
}
    @media (min-width: 768px) and (max-width: 1024px) {
        padding-top: 34px;
   }
`

export const DivText = styled.div`
   width: 616px;
   height: 346px;
   gap: 30px;
   display: flex;
   flex-direction: column;
   @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: fit-content;
    padding: 0px 20px 0px;
    gap: 24px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
    width: 518px;
    margin: 0 40px 0 40px;
    gap: 24px;
    height: 270px;
   }
`

export const DivTitle = styled.h1`
    font-size: 56px;
    font-weight: bold;
    @media (min-width: 320px) and (max-width: 480px) {
   font-size: 30px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
     font-size: 40px;
    }
`

export const DivSpanText = styled.span`
    font-size: 56px;
    font-weight: bold;
    color: #DDCDB0;
    @media (min-width: 320px) and (max-width: 480px) {
   font-size: 32px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
     font-size: 40px;
    }
`

export const DivTextAbout = styled.p`
    font-size: 18px;
    font-weight: normal;
    @media (min-width: 320px) and (max-width: 480px) {
   font-size: 13px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
     font-size: 14px;
    }
`

export const DivButton = styled.div`
    display: flex;
    gap: 15px;
    @media (min-width: 320px) and (max-width: 480px) {
     gap: 18px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        gap: 18px;
    }
`
export const Button = styled.button`
    width: 170px;
    height: 48px;
    text-align: center;
    border-radius: 10px;
    background-color: #DDCDB0;
    color: #1E2E45;
    font-size: 16px;
    font-weight: normal;
    cursor: pointer;
    border: none;
    @media (min-width: 320px) and (max-width: 480px) {
     width: 145px;
     height: 44px;
     font-size: 14px;
    }
`

export const ButtonContact = styled.button`
    width: 170px;
    height: 48px;
    text-align: center;
    border-radius: 10px;
    background-color: transparent;
    color: #1E2E45;
    border: 1px solid black;
    font-size: 16px;
    font-weight: normal;
    cursor: pointer;
    @media (min-width: 320px) and (max-width: 480px) {
     width: 145px;
     height: 44px;
     font-size: 14px;
    }
`

export const ImageAdvogadaHero = styled.img`
    width: 425px;
    height: 597px;
    @media (min-width: 320px) and (max-width: 480px) {
    display: none;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      width: 307px;
      height: 430px;
    }
`