import styled from "styled-components/macro";

interface Props {
    justifyContent?: "center" | "space-between" | "space-around" | "space-evenly" | "flext-start" | "center" | "flex-end";
    alignItems?: "flext-start" | "center" | "flex-end";
    gap?: number;
}

const Flex = styled.div<Props>`
    display: flex;
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
    gap: ${(props) => `${props.gap}px`};
`;

export default Flex;
