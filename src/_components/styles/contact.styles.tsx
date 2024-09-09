'use client'
import styled from "styled-components"

export const ContactContainer = styled.section`
   max-width: 1178px;
   display: flex;
   padding-top: 130px;
   margin: auto;
   justify-content: center;
   @media (min-width: 320px) and (max-width: 480px) {
padding-top: 60px;
    }
`

export const ContactDivTitle = styled.div`
   display: flex;
   align-items: center;
   flex-direction: column;
`

export const ContactSubTitle = styled.span`
  font-size: 16px;
  font-weight: 500;
  @media (min-width: 320px) and (max-width: 480px) {
font-size: 12px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 14px;
    }
`

export const ContactTitle = styled.h3`
    font-size: 40px;
    font-weight: bold;
    @media (min-width: 320px) and (max-width: 480px) {
font-size: 32px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 32px;
    }
`

export const ContactDownTitle = styled.p`
    font-size: 18px;
    font-weight: 300;
    text-align: center;
    @media (min-width: 320px) and (max-width: 480px) {
font-size: 12px;
width: 300px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 16px;
    }
`

export const DivCardsContact = styled.div`
    display: flex;
    margin-top: 80px;
    gap: 32px;
    flex-direction: row;
    @media (min-width: 320px) and (max-width: 480px) {
flex-direction: column;
margin-top: 60px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-top: 60px;
    }
`