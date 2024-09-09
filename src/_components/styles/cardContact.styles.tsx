'use client'
import styled from "styled-components"

export const CardContact = styled.div`
   border: 1px solid #DDCDB0;
   border-radius: 10px;
   display: flex;
   align-items: center;
   text-align: center;
   width: 350px;
   height: 247px;
   flex-direction: column;
   padding: 30px;
   gap: 16px;
   background-color: #F9F5EE;
   color: black;
   @media (min-width: 768px) and (max-width: 1024px) {
     width: 255px;
     margin-bottom: 40px;
     height: 257px;
    }
`

export const IconContact = styled.img`
  width: 44px;
  height: 44px;
`

export const ContactTitle = styled.h4`
  font-size: 32px;
  font-weight: 700;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 24px;
    }
`

export const ContactText = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 14px;
    }
`

export const ContactLink = styled.span`
  text-decoration: underline;
  font-size: 14px;
  cursor: pointer;
`