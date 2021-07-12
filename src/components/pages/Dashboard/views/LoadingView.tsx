import React from "react";
import styled from "styled-components/macro";
import spin from "../../../../animations/spin";
import AbsoluteCenter from "../../../shared/AbsoluteCenter";
import CircularProgressbar from "../components/CircularProgressbar";

interface Props {}

const LoadingCircularProgressbar = styled(CircularProgressbar)`
    height: 58%;
    width: 58%;
    animation: ${spin} 1s linear infinite;
`;

const StyledLoadingView = styled(AbsoluteCenter)`
    box-sizing: border-box;
`;

const LoadingView = (props: Props) => {
    return (
        <StyledLoadingView>
            <LoadingCircularProgressbar strokeWidth={1} value={300} maxValue={1000} />
        </StyledLoadingView>
    );
};

export default LoadingView;
