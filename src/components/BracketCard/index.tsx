import React from "react";
import "./BracketCard.scss";
import { Edit3 as EditIcon, Trash2 as DeleteIcon } from "react-feather";

type BracketCardProps = {
  children: string;
  backgroundImage?: string;
};

const BracketCard = ({ children, backgroundImage }: BracketCardProps) => {
  return (
    <div className="bracketCardContainer">
      <div className="bracketCardButtonsRow">
        <div className="bracketCardEditButton">
          <EditIcon color="#212121" />
        </div>
        <div className="bracketCardDeleteButton">
          <DeleteIcon color="#212121" />
        </div>
      </div>
      <div className="bracketCardTextContainer">
        <h4>{children}</h4>
      </div>
    </div>
  );
};

export default BracketCard;
