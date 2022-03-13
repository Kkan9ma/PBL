import styled from "styled-components";

const StyledPhotoInfoContainer = styled.div`
  flex: 0.5 0 0px;
  min-width: 400px;
  label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    width: 300px;
    line-height: 26px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  input {
    flex: 0 0 250px;
    width: 80%;
    height: 30px;
    font-size:15px;
    resize: none;
    border:1px solid #bbbbbb;
    border-radius:5px;
  }

  textarea {
    width: 400px;
    height: 300px;
    font-size: 15px;
    resize: none;
    border: 1px solid #bbbbbb;
    borderRadius: 5px;
  }
`

export {StyledPhotoInfoContainer};
