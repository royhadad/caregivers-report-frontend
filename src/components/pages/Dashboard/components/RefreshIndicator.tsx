import React from "react";
import styled from "styled-components/macro";
import spin from "../../../../animations/spin";
import Center from "../../../shared/Center";
import { ReactComponent as RefreshIcon } from "../../../../assets/refresh.svg";

interface Props {
    isRefreshing: boolean;
}

const StyledRefreshIndicator = styled.div<Props>`
    position: fixed;
    margin: auto;
    width: min(82px, 7vw);
    height: min(82px, 7vw);
    color: #6b7280;
    background-color: #1f2937;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px 0 0 8px;
    transform: ${(props) => (!props.isRefreshing ? "translateX(100%)" : undefined)};
    transition: all 150ms ease;

    svg {
        animation: ${spin} 1s linear infinite;
    }
`;

const RefreshIndicator = (props: Props) => {
    return (
        <StyledRefreshIndicator isRefreshing={props.isRefreshing}>
            <Center>
                <RefreshIcon />
            </Center>
        </StyledRefreshIndicator>
    );
};

export default RefreshIndicator;
