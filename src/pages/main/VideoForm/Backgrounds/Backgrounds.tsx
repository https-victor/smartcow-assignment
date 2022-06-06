import classNames from "classnames";
import React from "react";
import { Background } from "../../../../app/features/library/preset-slice";
import "./Backgrounds.scss";
type Props = {
  backgrounds: Background[];
  selected: string;
  onSelect: (id: string) => void;
};

const Backgrounds = ({ backgrounds, onSelect, selected }: Props) => {
  return (
    <div className="backgrounds">
      {backgrounds.map((background) => {
        return (
          <div
            key={background.id}
            onClick={() => onSelect(background.id)}
            className={classNames(
              "background-wrapper",
              selected === background.id && "selected"
            )}
          >
            <img src={background.image} alt="" className="background-image" />
            <p className="background-name">{background.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Backgrounds;
