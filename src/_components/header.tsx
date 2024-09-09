"use client"

import { useState } from "react"
import { Header, LogoImg, LogotipoContainer, TitleLogo, ContainerHeader, NavHeader, UlHeader, LiHeader, ButtonMobile, IconeMenuHeader } from "./styles/header.styles"
import Link from "next/link"

export const HeaderPage = () => {
    const [ativo, setAtivo] = useState(false)

    function toggle() {
        setAtivo(!ativo)
    }

    return (
        <Header>
            <ContainerHeader>
                <LogotipoContainer>
                    <LogoImg src="/icons/Logo.svg" alt="Icone" />
                    <TitleLogo>Dr.Karolina</TitleLogo>
                </LogotipoContainer>
                <ButtonMobile onClick={toggle} aria-label="Menu Mobile">
                    {ativo ? <IconeMenuHeader src="/icons/x.svg" /> : <IconeMenuHeader src="/icons/menu-hamburguer.svg" />}
                </ButtonMobile>
                <NavHeader>
                    <UlHeader ativo={ativo} className="animeLeftMobile">
                        <LiHeader>Início</LiHeader>
                        <Link href="#servicos">
                            <LiHeader>Serviços</LiHeader>
                        </Link>
                        <Link href="#sobre">
                            <LiHeader>Sobre</LiHeader>
                        </Link>
                        <Link href="#contact">
                            <LiHeader>Contato</LiHeader>
                        </Link>
                    </UlHeader>
                </NavHeader>
            </ContainerHeader>
        </Header>
    )
}