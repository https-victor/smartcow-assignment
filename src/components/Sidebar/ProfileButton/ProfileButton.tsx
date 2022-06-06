import React from "react";
import { useSelector } from "../../../app/hooks";
import "./ProfileButton.scss";
import { ReactComponent as ProfilePicture } from "../../../assets/svg/profilePicture.svg";
import { Link } from "react-router-dom";
import { appRoutes } from "../../../routes";
import IconButton from "../../Menu/IconButton/IconButton";
type Props = {};

const ProfileButton = (props: Props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return isLoggedIn ? (
    <Link to={appRoutes.profile} className="profile-btn">
      <IconButton className="profile-picture" icon={ProfilePicture} />
    </Link>
  ) : null;
};

export default ProfileButton;
