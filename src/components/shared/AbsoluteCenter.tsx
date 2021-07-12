import styled from "styled-components/macro";
import Center from "./Center";

const AbsoluteCenter = styled(Center)`
    flex-direction: column;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export default AbsoluteCenter;