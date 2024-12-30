import styled from 'styled-components';
import Button from '../Button';
import { Link } from "react-router-dom";

const StyledHeader = styled.header`
    backdrop-filter: blur(7px);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100%;
    height: 8rem;
    padding: 2rem 0;
    border-bottom: var(--border);
    z-index: 1;
`;

const LogoContainer = styled.div`
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    padding-left: 3rem;
    img {
        width: 10rem;
    }
`;

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding-right: 3rem;
`;

const ButtonWrapper = styled.ul`
    gap: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none; 
`;

const Header = () => {
    return (
        <StyledHeader>
            <LogoContainer>
                <img src="/public/assets/imgs/alura-flix.png" alt="React Logo" />
            </LogoContainer>
            <Nav>
                <ButtonWrapper>
                    <Link to="/">
                        <Button text="Home" btntype={1} />
                    </Link>
                    <Link to="/novo">
                        <Button text="Novo vídeo" btntype={2} />
                    </Link>
                </ButtonWrapper>
            </Nav>
        </StyledHeader>
    );
};

export default Header;
