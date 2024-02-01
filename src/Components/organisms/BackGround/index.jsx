import BackGround from "../../../img/background.jpg"
import styled from "styled-components";

const BackGroundImg = styled.div`
    background-image: url(${BackGround});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
`;

export default BackGroundImg;

