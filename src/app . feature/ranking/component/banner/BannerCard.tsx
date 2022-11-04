import React from "react";
import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

const BannerCard = () => {
  return (
    <StyledBox>
      <div className="titleBox">
        <div className="title">지금 SNS 추가 연동하면 500캐시!</div>
        <div className="cash">500</div>
        <div className="snsBtn">
          SNS 연동하러 가기 <BiChevronRight className="rightIcon" />
        </div>
        <div className="information">
          *하나의 SNS 연동에 한하여 최초 1회만 캐시가 지급됩니다.
        </div>
      </div>
      <StyledImg>
        <img src="/images/img-addfriend-sns.png" alt="BannerImage" />
      </StyledImg>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  background-color: #9ccbff;
  display: flex;

  .titleBox {
    margin-left: 20px;
    position: relative;
  }

  .title {
    color: black;
    font-size: 15px;
    font-weight: 600;
    margin: 15px 0 5px 0;
  }

  .snsBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: 600;
    width: 150px;
    height: 25px;
    background-color: black;
    border-radius: 50px;
    cursor: pointer;
  }

  .cash {
    padding: 1px 2px 1px 2px;
    border-radius: 50px;
    background-color: red;
    font-size: 10px;
    font-weight: 400;
    position: absolute;
    z-index: 10;
    right: 75px;
    top: 32px;
  }

  .information {
    margin: 5px 0px 15px 0;
    font-size: 10px;
    color: gray;
  }

  .rightIcon {
    font-weight: bold;
    font-size: x-large;
    margin-top: -2px;
    margin-left: -5px;
  }
`;

const StyledImg = styled.div`
  margin-top: 5px;
  display: flex;
  height: 83px;
`;

export default BannerCard;
