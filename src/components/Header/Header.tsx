import React from "react";
import "./Header.scss";
import classNames from "classnames";
type HeaderProps = {
  title: string;
  divider?: boolean;
  actions?: any[];
  titleAction?: any;
};

const Header = ({
  title,
  divider = true,
  actions,
  titleAction,
}: HeaderProps) => {
  const areThereActions = actions && actions.length > 0;
  return (
    <div
      className={classNames("app-header", divider && "app-header-with-divider")}
    >
      <div className="title-wrapper">
        <h2>{title}</h2>
        {titleAction && <>Expand</>}
      </div>
      <div className="actions-wrapper">
        {areThereActions &&
          actions.map((action) => {
            return <button key={action.title}>{action.title}</button>;
          })}
      </div>
    </div>
  );
};

export default Header;
