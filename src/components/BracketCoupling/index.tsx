import React, { useState } from "react";
import "./BracketCoupling.scss";

type BracketCouplingProps = {
  topTeamNum?: number;
  bottomTeamNum?: number;
  teams: string[];
  setTeams: React.Dispatch<React.SetStateAction<string[]>>;
  style?: React.CSSProperties;
};

const BracketCoupling = ({
  topTeamNum,
  bottomTeamNum,
  teams,
  setTeams,
  style,
}: BracketCouplingProps) => {
  let blank = "both";
  if (topTeamNum && bottomTeamNum) {
    blank = "none";
  } else if (topTeamNum) {
    blank = "bottom";
  } else if (bottomTeamNum) {
    blank = "top";
  }

  return (
    <div className="bracketCouplingContainer" style={style}>
      <input
        disabled={blank === "top" || blank === "both"}
        maxLength={22}
        className="bracketInput"
        type="text"
        placeholder={
          blank === "top" || blank === "both" ? "" : `Team #${topTeamNum}`
        }
        value={topTeamNum ? teams[topTeamNum - 1] : ""}
        onChange={(e) => {
          if (topTeamNum) {
            let teamsCopy = [...teams];
            teamsCopy[topTeamNum - 1] = e.target.value;
            setTeams(teamsCopy);
          }
        }}
      />

      <input
        disabled={blank === "bottom" || blank === "both"}
        maxLength={22}
        className="bracketInput"
        type="text"
        placeholder={
          blank === "bottom" || blank === "both" ? "" : `Team #${bottomTeamNum}`
        }
        value={bottomTeamNum ? teams[bottomTeamNum - 1] : ""}
        onChange={(e) => {
          if (bottomTeamNum) {
            let teamsCopy = [...teams];
            teamsCopy[bottomTeamNum - 1] = e.target.value;
            setTeams(teamsCopy);
          }
        }}
      />
    </div>
  );
};

export default BracketCoupling;
