import styled from "styled-components/macro";

interface Props {
    direction?: "row" | "column";
    gap?: number;
}

const Center = styled.div<Props>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => props.direction};
    gap: ${(props) => (props.gap !== undefined ? `${props.gap}px` : undefined)};
    width: 100%;
    height: 100%;
`;

export default Center;
