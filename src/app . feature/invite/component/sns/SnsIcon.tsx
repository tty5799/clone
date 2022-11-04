import React from "react";
import styled from "styled-components";
import CashCode from "../cash/CashCode";

const snsList = ["카카오톡", "밴드", "페이스북", "기타"];

const SnsIcon = () => {
  return (
    <StyledBack>
      <div className="iconBox">
        {snsList.map((item, idx) => {
          return (
            <div key={idx}>
              <StyledIcon item={item}>
                <img src="/ic-kakao.png" alt="kakaoImg" />
              </StyledIcon>
              <div className="iconName">{item}</div>
            </div>
          );
        })}
      </div>
      <CashCode />
    </StyledBack>
  );
};

const StyledBack = styled.div`
  background-color: #3a1b07;
  height: 500px;
  border-radius: 20px;

  .iconBox {
    display: flex;
    justify-content: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: yellow;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 20px 10px 5px 10px;
    cursor: pointer;
  }

  .iconName {
    display: flex;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
  }
`;

const StyledIcon = styled.div<{ item: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.item === "카카오톡"
      ? "yellow"
      : props.item === "밴드"
      ? "#5FCD4A"
      : props.item === "페이스북"
      ? "#526FB3"
      : "#E9A944"};
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 20px 10px 5px 10px;
  cursor: pointer;
`;

export default SnsIcon;
