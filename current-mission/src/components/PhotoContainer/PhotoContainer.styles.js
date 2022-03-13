import styled from "styled-components";

const StyledPhotoContainer = styled.div`
  flex: 0.5 0 0px;
  background-color: rgb(247, 248, 250);
  margin-right: 10px;

  button {
    margin: 0px;
    height: 500px;
    border: none;
    background: none;
    font: inherit;
    display: block;
    position: relative;
    width: 100%;
    transition: opacity 0.1s ease 0s;
    border-radius: 4px;
  }

  span {
    display: block;
    margin-top: 10px;
  }
`

export {StyledPhotoContainer};
