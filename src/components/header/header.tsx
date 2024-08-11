import styled from 'styled-components';
import HedaerNavButton from './header-nav-button';

const StyledHeader = styled.header`
    height: 7vh;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 0px;
    border: None; 
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: #2A2A30;
    min-width: 200px;


    @media (max-width: 768px) {
        height: 7vh;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 1.2rem;
    }

`;

const StyledNav = styled.nav`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

`;

const Logo = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap');

    font-weight: 600;
    font-size: 34px;
    margin: 0px;
    letter-spacing: 2px;
    color: #fff;
    font-family: 'Karla', sans-serif;
    user-select: None;

    @media (max-width: 768px) {
        font-size: 24px;
    }

`;

export default function Header(){
    
    return (
        <StyledHeader>
            <StyledNav>
                <HedaerNavButton height='70%' width='150px' text='Главная' link='/'/>
                <Logo>Waifu2All</Logo>
                <HedaerNavButton height='70%' width='150px' text='Профиль' link='signin'/>
            </StyledNav>
        </StyledHeader>
    )
}