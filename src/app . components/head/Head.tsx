import React from 'react';
import styled from "styled-components";
import {useState} from "react";
import ScreenInvite from "../../app . feature/invite/screen/ScreenInvite";
import ScreenRequest from "../../app . feature/request/screen/ScreenRequest";
import ScreenRanking from "../../app . feature/ranking/screen/ScreenRanking";


const Head = () => {
  const [tap, setTap] = useState(0)

  const tapMenu :any = {
    0 : <ScreenRanking/>,
    1 : <ScreenInvite/>,
    2 : <ScreenRequest/>,
  };

  return (
    <StyledBox>
      <div>
        <HeadBox>

          <HeadPageBox>
            <div className={`${tap === 0 ? "active" : "inactive"}`}
                 onClick={() => {
                   setTap(0)
                 }}
            >
              랭킹
            </div>
          </HeadPageBox>

          <HeadPageBox>
            <div className={`${tap === 1 ? "active" : "inactive"}`}
                 onClick={() => {
                   setTap(1)
                 }}
            >
              친구초대
            </div>
          </HeadPageBox>

          <HeadPageBox>
            <div className={`${tap === 2 ? "active" : "inactive"}`}
                 onClick={() => {
                   setTap(2)
                 }}
            >
              받은요청
            </div>
          </HeadPageBox>

        </HeadBox>

        <ScrollBlock tap={tap}/>
        <ScrollBox>
        </ScrollBox>

      </div>

        <div>
          {tapMenu[tap]}
        </div>

    </StyledBox>
  );
};

const StyledBox = styled.div`
position: relative;
`

const HeadBox = styled.div`
  display: flex;
  margin: auto;
  
  .tapPage{
    height: 50px;
    width: 120px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: 400;
  }
`

const HeadPageBox = styled.div`
  height: 50px;
  width: 120px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  font-weight: 400;


  .inactive {
    font-size: 17px;
    color: gray;
    cursor: pointer;
  }

  .active {
    font-size: 17px;
    color: black;
    cursor: pointer;
  }
`

const ScrollBox = styled.div`
  height: 1px;
  background-color: gray;
`

const ScrollBlock = styled.div<{ tap: number }>`
  height: 3px;
  width: 120px;
  background-color: #111111;
  position: absolute;
  top: 47px;
  z-index: 10;
    right: ${(props) => (props.tap === 0 ? "240px" : props.tap === 1 ? "120px" : "0px")};
  transition: right 0.2s ;
`

export default Head;