import React from "react";
import "./Menu.scss";
import { ReactComponent as VideoFormIcon } from "../../assets/svg/videoForm.svg";
import { ReactComponent as LibraryIcon } from "../../assets/svg/library.svg";
import IconButton from "./IconButton/IconButton";
import { appRoutes } from "../../routes";
import { Link } from "react-router-dom";
import { useSelector } from "../../app/hooks";
type Props = {};

interface MenuItem {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  onClick?: () => void;
  to?: string;
}

const Menu = (props: Props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const MenuItems = () => {
    const menuItems: MenuItem[] = [
      {
        icon: VideoFormIcon,
        to: appRoutes.createVideo,
      },
      {
        icon: LibraryIcon,
        // to: appRoutes.home,
      },
    ];
    return isLoggedIn ? (
      <>
        {menuItems.map(({ icon, to, onClick }: MenuItem) =>
          to ? (
            <Link to={to} className="menu-btn">
              <IconButton onClick={onClick} icon={icon} />
            </Link>
          ) : (
            <a className="menu-btn">
              <IconButton onClick={onClick} icon={icon} />
            </a>
          )
        )}
      </>
    ) : null;
  };

  return (
    <div className="menu">
      <MenuItems />
    </div>
  );
};

export default Menu;
