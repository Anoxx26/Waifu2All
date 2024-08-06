import styled from 'styled-components';
import HedaerNavButton from './header-nav-button';

const StyledHeader = styled.header`
    height: 60px;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-top: 0px;
    border: None; 
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    background-color: #2A2A30;
    min-width: 200px
`;

const StyledNav = styled.nav`
    height: 100%;
    width: 100%
`;

export default function Header(){
    
    return (
        <StyledHeader>
            <StyledNav>
                <HedaerNavButton/>
            </StyledNav>
        </StyledHeader>
    )
}