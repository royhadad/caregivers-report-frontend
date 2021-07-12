import { CircularProgressbar as ReactCircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components/macro";

const CircularProgressbar = styled(ReactCircularProgressbar)`
    width: 100%;
    height: 100%;
    vertical-align: middle;

    .CircularProgressbar-path {
        stroke: hsla(217, 91%, 60%, 1);
        transition: stroke-dashoffset 0.5s ease 0s;
    }

    .CircularProgressbar-trail {
        stroke: hsla(215, 28%, 17%, 1);
    }
`;

export default CircularProgressbar;
