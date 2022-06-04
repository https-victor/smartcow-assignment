import React from "react";
import "./Menu.scss";
import { ReactComponent as VideoFormIcon } from "../../assets/svg/videoForm.svg";
import { ReactComponent as LibraryIcon } from "../../assets/svg/library.svg";
import IconButton from "./IconButton/IconButton";
import { appRoutes } from "../../routes";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../app/hooks";
import classNames from "classnames";
type Props = {};

interface MenuItem {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  onClick?: () => void;
  to?: string | string[];
}

const Menu = (props: Props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { pathname } = useLocation();
  const MenuItems = () => {
    const menuItems: MenuItem[] = [
      {
        icon: VideoFormIcon,
        to: [appRoutes.createVideo, appRoutes.editVideo],
      },
      {
        icon: LibraryIcon,
        to: appRoutes.home,
      },
    ];
    return isLoggedIn ? (
      <>
        {menuItems.map(({ icon, to, onClick }: MenuItem, idx) => {
          const pathnameCondition =
            typeof to === "string" ? pathname === to : to?.includes(pathname);
          const MenuIcon = () => (
            <IconButton
              onClick={onClick}
              icon={icon}
              active={pathnameCondition}
            />
          );
          return to ? (
            <Link
              key={to[0]}
              to={to[0]}
              className={classNames("menu-btn", pathnameCondition && "active")}
            >
              <MenuIcon />
            </Link>
          ) : (
            <a
              key={"menu-item-" + idx}
              className={classNames("menu-btn", pathnameCondition && "active")}
            >
              <MenuIcon />
            </a>
          );
        })}
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
