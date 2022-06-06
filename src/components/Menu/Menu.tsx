import React from "react";
import "./Menu.scss";
import { ReactComponent as VideoFormIcon } from "../../assets/svg/videoForm.svg";
import { ReactComponent as LibraryIcon } from "../../assets/svg/library.svg";
import IconButton from "./IconButton/IconButton";
import { appRoutes } from "../../routes";
import { Link, matchRoutes, useLocation } from "react-router-dom";
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
  const location = useLocation();
  const isEditVideoRoute = Boolean(
    matchRoutes([{ path: appRoutes.video }], location)
  );
  const MenuItems = () => {
    const menuItems: MenuItem[] = [
      {
        icon: VideoFormIcon,
        to: [appRoutes.newVideo, appRoutes.video],
      },
      {
        icon: LibraryIcon,
        to: appRoutes.home,
      },
    ];
    return isLoggedIn ? (
      <>
        {menuItems.map(({ icon, to, onClick }: MenuItem, idx) => {
          const checkRoutes = (routes: any) =>
            Boolean(
              routes.filter((route: any) =>
                Boolean(matchRoutes([{ path: route }], location))
              ).length > 0
            );
          const pathnameCondition =
            typeof to === "string" ? location.pathname === to : checkRoutes(to);
          const MenuIcon = () => (
            <IconButton
              onClick={onClick}
              icon={icon}
              active={pathnameCondition || isEditVideoRoute}
            />
          );
          return to && !pathnameCondition ? (
            <Link
              key={to[0]}
              to={to[0]}
              className={classNames("menu-btn", pathnameCondition && "active")}
            >
              <MenuIcon />
            </Link>
          ) : (
            <div
              key={"menu-item-" + idx}
              className={classNames("menu-btn", pathnameCondition && "active")}
            >
              <MenuIcon />
            </div>
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
