'use client'
import styled from "styled-components"

export const ServicesBG = styled.section`
    background-color: #1E2E45;
    margin-top: -20px;
`

export const ServicosContainer = styled.div`
   padding-top: 150px;
   display: flex;
   justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (min-width: 320px) and (max-width: 480px) {
 padding-top: 60px;
 padding-bottom: 57px;
}
`

export const ServicesTitle = styled.h3`
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    color: white;
    @media (min-width: 320px) and (max-width: 480px) {
        font-size: 32px;
}

`

export const ServicesContainerItens = styled.div`
    display: flex;
    gap: 22px;
    padding-top: 80px;
    flex-direction: row;
    @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    padding-top: 60px;
    gap: 0px;
}
@media (min-width: 768px) and (max-width: 1024px) {
        width: 800px;
        flex-wrap: wrap;
    }
`