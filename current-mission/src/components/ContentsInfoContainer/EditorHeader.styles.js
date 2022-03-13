import styled from "styled-components"

const EditorHeader = styled.div`
  margin-bottom: 5px;
`

const StyledToolbar = styled.ul`
  display: flex;
`

const StyledButton = styled.button`
  display: inline-block;
  width: 100%; 
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  border: none;
  background-color: #eee;
  color: #999;
`

const StyledSelectedButton = styled(StyledButton)`
  background-color: #2ac1bc;
  font-weight: 600;
  color: #fff;
`

const StyledListContainer = styled.li`
  width: 50%;
  border-bottom: 1px solid #ccc;
`



const StyledDisplayNoneInput = styled.input`
  display: none;
`

const StyledSubmitButton = styled.button`
  background-color: #2480fb;
  width: 100%;
  font-weight: 600;
  color: #fff;
  padding: 10px;
  border: none;
  // color: #999;

`

export {EditorHeader, StyledToolbar, StyledButton, 
  StyledDisplayNoneInput, StyledSelectedButton, StyledListContainer,
  StyledSubmitButton
}
