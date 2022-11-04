import styled from "styled-components";
import React from "react";

const UserInfo = () => {
  return (
    <StyledCardBox>
      <div className="rank">1</div>

      <div>
        <img src="/ic-kakao.png" />
      </div>

      <div className="infoBox">
        <div className="name">나(test004)</div>
        <div className="nickname">#Dd</div>
        <div className="graph" />
      </div>
      <div className="run">0걸음</div>
    </StyledCardBox>
  );
};

export default UserInfo;

const StyledCardBox = styled.div`
  height: 60px;
  display: flex;
  background-color: #faf9f9;
  align-items: center;

  .rank {
    color: black;
    font-size: 17px;
    margin: 0 20px 0 20px;
  }

  .run {
    margin-left: 40px;
    font-size: 13px;
    color: #808080;
  }

  .infoBox {
    margin-left: 10px;
  }

  .name {
    font-size: 15px;
    color: black;
  }

  .nickname {
    margin-bottom: 3px;
    font-size: 13px;
    color: #deddde;
  }

  .graph {
    width: 100px;
    height: 4px;
    background-color: #deddde;
    border-radius: 50px;
  }
`;
