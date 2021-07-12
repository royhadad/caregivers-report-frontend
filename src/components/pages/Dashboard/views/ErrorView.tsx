import React from "react";
import styled from "styled-components/macro";
import AbsoluteCenter from "../../../shared/AbsoluteCenter";
import { Column } from "../../../shared/Column";
import Button from "../components/Button";

interface Props {
    message: string;
    onClickRetry: () => void;
}

const ErrorText = styled.h3`
    font-size: 32px;
    text-align: center;
`;

const ErrorView = (props: Props) => {
    return (
        <div>
            <AbsoluteCenter>
                <Column alignItems="center">
                    <ErrorText>{props.message}</ErrorText>
                    <Button onClick={props.onClickRetry}>Retry</Button>
                </Column>
            </AbsoluteCenter>
        </div>
    );
};

export default ErrorView;
