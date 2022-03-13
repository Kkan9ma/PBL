import styled from "styled-components";

const StyledWidget = styled.div`
  position: absolute;
  width: 40px; 
  height: 40px;
  left: 10px;
  bottom: 10px;
  z-index: 999; 
  border-radius: 50%;
  background-color: #1fb141;
  opacity: 0.7;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }
`;

export {StyledWidget}
