import React from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Profiles from "./Profiles/Profiles";
import "./profilePage.scss";
function ProfilePage(props) {
  return (
    <div className="outerProfilePageConatiner">
      <div>
        <ProfileHeader />
      </div>
      <div className="profiles">
        <div className="profileContainers">
          <Profiles />
          <Profiles />
          <Profiles />
          <Profiles />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
