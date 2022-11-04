import styled from "styled-components";
import React from "react";

const FriendList = () => {
  return (
    <StyledListBox>
      <div className="faceImg">
        <img src="/images/ic-kakao.png" alt="kakaoImage" />
      </div>
      <div className="notFind">추천할 친구가 없어요.</div>
      <div className="notFind">
        새로고침하여 새로운 추천 친구 목록을 불러오세요!
      </div>
      <div className="searchBtn">더 많은 친구 보러가기</div>
    </StyledListBox>
  );
};

const StyledListBox = styled.div`
  display: flex;
  flex-direction: column;

  .faceImg {
    display: flex;
    margin: 30px auto 20px auto;
  }

  .notFind {
    display: flex;
    margin: 0 auto 5px auto;
    color: #9a9a9a;
  }

  .searchBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
    width: 200px;
    height: 50px;
    border-radius: 50px;
    margin: 30px auto 0 auto;
    cursor: pointer;
  }
`;

export default FriendList;
