import React from 'react';
import BannerCard from "../component/banner/BannerCard";
import Introduce from "../component/friend/Introduce";
import FriendList from "../component/friend/FriendList";
import UserInfo from "../component/user/UserInfo";

const ScreenRanking = () => {
  return (
    <div>
      <UserInfo/>
      <BannerCard/>
      <Introduce/>
      <FriendList/>
    </div>
  );
};

export default ScreenRanking;