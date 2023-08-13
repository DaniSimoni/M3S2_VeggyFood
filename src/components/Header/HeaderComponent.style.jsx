import styled from 'styled-components'

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 32vh;
`

export const LogoImg = styled.img`
    width: 65vw;
	position: absolute;
	left: -260px;
	top: -360px;
`

export const IconHeader = styled.img`
    width: 2vw;
    height: auto;
    margin-bottom: -.6vh;
    margin-left: .5vw;
`

export const NavBarHeader = styled.div`
    display: flex;
    width: 50vw;
    height: auto;
    margin-left: 50vw;
    justify-content: space-around;
`

export const ButtonHeader = styled.button`
    max-width: content;
    border: transparent;
    background-color: transparent;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    
`

export const SectionButtonHeader = styled.section`
    display: flex;
    width: 45vw;
    margin-top: 5vh;
    justify-content: space-between;


`

export const IconCarrinho = styled.button`
    background-color: transparent;
    border: transparent;
    width: 5vw;
    height: 5vw;
    svg{
        font-size: 2rem;
        color: green;
    }
    cursor: pointer;
`