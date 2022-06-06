import React from "react";
import { Alignment } from "../../../../app/features/library/library-slice";
import Button from "../../../../components/Button/Button";
import "./Alignments.scss";
type Props = {
  selected: string;
  onSelect: (id: string) => void;
};

const Alignments = ({ selected, onSelect }: Props) => {
  const alignments = Object.keys(Alignment) as Array<keyof typeof Alignment>;
  return (
    <div className="alignments">
      {alignments.map((alignment) => {
        const isSelected = Boolean(selected === alignment);
        return (
          <Button
            key={alignment}
            variant={isSelected ? "outlined" : "contained"}
            color={isSelected ? "primary" : "neutral"}
            onClick={() => onSelect(alignment)}
          >
            {alignment}
          </Button>
        );
      })}
    </div>
  );
};

export default Alignments;
