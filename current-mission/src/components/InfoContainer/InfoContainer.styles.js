import styled from 'styled-components';

const StyledInfoContainer = styled.li`
  padding: 20px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    width: 300px;
    line-height: 26px;
    font-weight: 600;
  }
  
  input {
    // width: 1px;
    height: 30px;
    flex: 0 0 200px;
    margin-left: 10px;
  }
`;

export {StyledInfoContainer};
