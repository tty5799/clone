import styled from "styled-components";
import { BsArrowClockwise } from "react-icons/bs";
import React from 'react';

const Introduce = () => {
    return (
        <StyledBox>
            <div className="introduce">지금 친구신청이 가능한 친구를 소개합니다</div>
            <div className="refreshIcon">
                <BsArrowClockwise/>
            </div>
        </StyledBox>
    );
};


const StyledBox = styled.div`
    display: flex;
    background-color: #EAEAEA;
  
  .introduce{
    color: #909090;
    font-size: 13px;
    margin: 7px 80px 7px 20px
  }
  
  .refreshIcon{
    font-size: large;
    margin-top: 7px;
    color: #909090;
    cursor: pointer;
    
  }
`

export default Introduce;