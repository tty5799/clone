import React from 'react';
import styled from "styled-components";

const CashCode = () => {
    return (
        <StyledBox>
            <div className="codeBox">
                <div className="inviteCode">
                    내 추천코드
                </div>
                <div className="code">
                    KRAGUC8
                </div>
                <div className="codeCopy">
                    코드 복사하기
                </div>
            </div>
            <div className="imgBox">
                <img src="/img-addfriend-illust.png"/>
            </div>

        </StyledBox>
    );
};


const StyledBox = styled.div`
  background-color: #281103;
  margin-top: 20px;
  margin-left: 25px;
  width: 310px;
  height: 50px;
  border-radius: 10px;
  
  .codeBox{
    height: 50px;
    width: 310px;
    display: flex;  
    justify-content: center;
    align-items: center;
  }
  
  .inviteCode{
    font-size: 14px;
    margin-right: 10px;
  }
  
  .code{
    margin-top: -3px;
    margin-right: 20px;
    font-size: 23px;
  }
  
  .codeCopy{
    font-weight: bold;
    color: #F9E44D;
    text-decoration: underline;
    cursor: pointer;
  }
  
  .imgBox{
    margin-top: 20px;
  }
`

export default CashCode;