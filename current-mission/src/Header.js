import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 20%;
  font-size: 3rem;
`

function Header() {
  return (
    <StyledHeader>
      My Widget Editor
    </StyledHeader>
  )
}

export default Header;
