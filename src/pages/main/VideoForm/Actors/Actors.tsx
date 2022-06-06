import classNames from "classnames";
import React from "react";
import { Actor } from "../../../../app/features/library/preset-slice";
import "./Actors.scss";
type Props = {
  actors: Actor[];
  onSelect: (id: string) => void;
  selected: string;
};

const Actors = ({ actors, onSelect, selected }: Props) => {
  return (
    <div className="actors">
      {actors.map((actor: Actor) => {
        return (
          <div
            key={actor.id}
            onClick={() => onSelect(actor.id)}
            className={classNames(
              "actor-wrapper",
              selected === actor.id && "selected"
            )}
          >
            <img src={actor.image} alt="" className="actor-image" />
            <p className="actor-name">{actor.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Actors;
