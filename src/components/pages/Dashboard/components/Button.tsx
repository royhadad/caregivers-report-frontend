import styled from "styled-components/macro";

const Button = styled.button`
    color: #fff;
    cursor: pointer;
    display: flex;
    gap: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;
    background-color: #374151;
    padding: 12px 24px;
    font-family: inherit;
    font-weight: 600;
    font-size: 16px;
    transition: all 150ms ease;

    &:hover {
        background-color: #4b5563;
    }
`;

export default Button;