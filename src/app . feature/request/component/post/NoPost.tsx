import React from "react";
import styled from "styled-components";

const NoPost = () => {
  return (
    <StyledListBox>
      <div className="faceImg">
        <img src="/images/ic-kakao.png" />
      </div>
      <div className="notFind">친구요청이 없어요.</div>
      <div className="notFind">추천된 친구목록에서 친구신청을 해보세요.</div>
    </StyledListBox>
  );
};

const StyledListBox = styled.div`
  display: flex;
  flex-direction: column;

  .faceImg {
    display: flex;
    margin: 40px auto 20px auto;
  }

  .notFind {
    display: flex;
    margin: 0 auto 5px auto;
    color: #9a9a9a;
  }
`;

export default NoPost;
