import React from "react";
import styled from "styled-components/macro";

interface Props {}

const StyledNone = styled.span`
    color: #9CA3AF;
    font-style: italic;
`;

const None = (props: Props) => {
    return <StyledNone>None</StyledNone>;
};

export default None;
