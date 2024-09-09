'use client'

import styled from "styled-components"

export const MainBg = styled.main`
    background-color: #1E2E45;
    width: 100%;
`

export const MainContainter = styled.section`
   max-width: 1178px;
   margin: auto;
   padding-top: 130px;
   @media (min-width: 320px) and (max-width: 480px) {
  padding-top: 60px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0 30px;
   }
`

export const ContianerInfosMain = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 42px;
    @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    gap:33px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      padding-top: 80px;
   }
`

export const MainImg = styled.img`
    width: 512px;
    height: 368px;
    @media (min-width: 320px) and (max-width: 480px) {
   width: 370px;
   height: 263px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 370px;
        height: 263px;
   }
`

export const DivInfosMain = styled.div`
    width: 549px;
    height: 315px;
    display: flex;
    gap: 32px;
    height: 270px;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 480px) {
 padding: 0 20px 0 20px;
 width: 372px;
 height: 254px;
    gap: 26px;
    }
`

export const InfosTitle = styled.h3`
    font-size: 40px;
    color: white;
    font-weight: bold;
    @media (min-width: 320px) and (max-width: 480px) {
font-size: 32px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 32px;
    }
`

export const InfosTextAbout = styled.p`
    font-size: 20px;
    color: white;
    font-weight: 300;
    @media (min-width: 320px) and (max-width: 480px) {
font-size: 15px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 15px; 
        width: 400px;
           }
`

export const InfosButton = styled.button`
    border: none;
    font-size: 20px;
    color: #1E2E45;
    background-color: #DDCDB0;
    border-radius: 10px;
    cursor: pointer;
    width: 295px;
    height: 60px;
    @media (min-width: 320px) and (max-width: 480px) {
width: 195px;
height: 54px;
font-size: 16px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        width: 195px;
height: 54px;
font-size: 16px;
    }
`