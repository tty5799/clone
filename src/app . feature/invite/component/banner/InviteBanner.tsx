import React from "react";
import styled from "styled-components";

const InviteBanner = () => {
  return (
    <StyledBox>
      <img src="/img-addfriend-text.png" alt="TextImage" />
    </StyledBox>
  );
};

const StyledBox = styled.div`
  margin-bottom: 15px;
`;

export default InviteBanner;
