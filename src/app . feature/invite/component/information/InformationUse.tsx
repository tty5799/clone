import React from 'react';
import styled from "styled-components";

const InformationUse = () => {
  return (
    <StyledBox>
      <div className="titleBox">
        <div className="title">
          이용 안내 사항
        </div>
        <div className="information">
          1. 친구에게 캐시워크 초대 링크를 공유합니다.
        </div>
        <div className="information">
          2. 공유한 링크를 통해 친구가 신규 회원가입 시, 내 추천코드를 입력합니다.
        </div>
        <div className="information">
          3. <span className="cashColor">500캐시</span>가 적립됩니다.
        </div>


        <div className="addTitle">
          추가 안내 사항
        </div>
        <div className="information">
          1. 친구가 신규가입자 일 경우에만 캐시 지급이 됩니다.
        </div>
        <div className="information">
          2. 캐시 적립은 <span className="bold">최대 20명</span>까지 가능합니다.
        </div>
        <div className="information">
          3. 20명을 초과하여 적립을 원하는 유저는 <span className="bold">내 추천코드와 친구의 추천코드를
             가입일 포함 3일 이내에 cs@cashwalk.io</span>로 남겨주시면 안내해 드리겠습니다.
        </div>
        <div className="information">
          4. 부적합한 방법으로 캐시를 적립한 회원은 캐시 적립이 취소됩니다.
        </div>
        <div className="notice">
          ※ 해당 이벤트는 사전 예고 없이 조기 종료 및 취소될 수 있습니다.
        </div>
      </div>

    </StyledBox>
  );
};

const StyledBox = styled.div`
  margin-left: 20px;

  .titleBox {
    margin-top: 15px;
  }

  .title {
    color: #111111;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .information {
    font-size: 12px;
    color: darkgray;
    word-break: keep-all;
    margin-bottom: 2px;
  }

  .cashColor {
    font-weight: bold;
    color: #B23E63;
  }

  .bold {
    font-weight: bold;
    color: gray;
  }

  .addTitle {
    color: #111111;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
    margin-top: 15px;
  }

  .notice {
    font-size: 12px;
    color: darkgray;
    word-break: keep-all;
    margin-top: 15px;
    margin-bottom: 40px;
  }

`

export default InformationUse;