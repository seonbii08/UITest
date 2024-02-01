import styled from "styled-components";
import { BrowserView } from "react-device-detect";

export const test = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
`;

export const Container = styled.div`
    ${test}{
        width: 100%;
        height: 100%;
        font-size: 3rem;
    }
`;