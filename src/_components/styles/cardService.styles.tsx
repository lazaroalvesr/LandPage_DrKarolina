'use client'
import styled from "styled-components"

export const DivItem = styled.div`
   width: 378px;
   display: flex;
   gap: 20px;
   height: 300px;
   align-items: center;
   flex-direction: column;
   @media (min-width: 320px) and (max-width: 480px) {
    height: 310px;
    padding: 50px 10px;
}`

export const DivIcon = styled.img`
    width: 52px;
    height: 52px;
`

export const DivItemTitle = styled.h5`
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-align: center;
`

export const DivAboutItem = styled.p`
    font-size: 16px;
    color: white;
    text-align: center;
    font-weight: 300;
`

export const LinkDiv = styled.div`
display: flex;
gap: 8px;
`

export const LinkText = styled.span`
    color: #DDCDB0;
    font-size: 16px;
    font-weight: 400;
`

export const IconArrow = styled.img`
    width: 24px;
    height: 24px;
`