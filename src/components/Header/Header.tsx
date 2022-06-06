import React from "react";
import "./Header.scss";
import classNames from "classnames";
import Button from "../Button/Button";
import { ReactComponent as Expand } from "../../assets/svg/expand.svg";

type HeaderProps = {
  title: string;
  modal?: boolean;
  divider?: boolean;
  actions?: any[];
  titleAction?: () => void;
};

const Header = ({
  title,
  divider = true,
  modal = false,
  actions,
  titleAction,
}: HeaderProps) => {
  const areThereActions = actions && actions.length > 0;
  return (
    <div
      className={classNames("app-header", divider && "app-header-with-divider")}
    >
      <div className={classNames("title-wrapper", modal && "modal-open")}>
        <h2>{title}</h2>
        {titleAction && (
          <div onClick={titleAction} className="expand">
            <Expand />
          </div>
        )}
      </div>
      <div className="actions-wrapper">
        {areThereActions &&
          actions.map(({ title, ...restProps }, idx) => {
            return (
              <Button key={title + idx} {...restProps}>
                {title}
              </Button>
            );
          })}
      </div>
    </div>
  );
};

export default Header;
