import classNames from "classnames";
import React from "react";
import { Voice } from "../../../../app/features/library/preset-slice";
import "./Voices.scss";
type Props = {
  voices: Voice[];
  selected: string;
  onSelect: (id: string) => void;
};

const Voices = ({ voices, onSelect, selected }: Props) => {
  return (
    <div className="voices">
      {voices.map((voice) => {
        return (
          <div
            key={voice.id}
            onClick={() => onSelect(voice.id)}
            className={classNames(
              "voice-wrapper",
              selected === voice.id && "selected"
            )}
          >
            <div className="play-button"></div>
            <div className="waves-wrapper">
              <p className="voice-title">{voice.title}</p>
              <div className="waves"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Voices;
