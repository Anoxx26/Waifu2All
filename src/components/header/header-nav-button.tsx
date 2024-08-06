
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const StyledButton = styled.button<{ height?: string; width?: string }>`
    background-color: transparent;
    min-width: 100px;
    color: #fff;
    border: None;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 18px;
    text-align: center;

    height: ${({ height }) => height || 'auto'};
    width: ${({ width }) => width || 'auto'};

    &:hover {
        background-color: rgba(255, 255, 255, 0.1); 
        color: #fff;
    }
`;

interface HeaderNavButtonProps {
    text: string;
    link?: string;
    height?: string;
    width?: string;
}

const HedaerNavButton: React.FC<HeaderNavButtonProps> = ({ text, link, height, width}) => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (link){
            navigate(link);
        }
    }
    return (
        <StyledButton onClick={handleButtonClick} height={height} width={width}>{text}</StyledButton>
    );
}

export default HedaerNavButton;
